import { Alert, Button, Form, Input, Row, Space, notification } from 'antd';
import { Col } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { createNewService } from '../../src/store/reducers/service';
import { useNavigate } from 'react-router-dom';

const CreateService = () => {
  const [formData, setFormData] = useState({
    name: 'string',
    description: 'string',
    minPrice: 0,
    maxPrice: 0,
  });
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [isFormValid, setIsFormValid] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [isSubmited, setIsSubmited] = useState(false);

  useEffect(() => {
    form
      .validateFields()
      .then(() => {
        setIsFormValid(true);
        setShowAlert(false);
      })
      .catch(() => {
        setIsFormValid(false);
        setShowAlert(true);
      });
  }, [form]);
  // const navigate = useNavigate();
  const handleSubmit = () => {
    setIsSubmited(true);
    form
      .validateFields()
      .then((values) => {
        const formattedValues = {
          ...values,
          minPrice: parseInt(values.minPrice, 10),
          maxPrice: parseInt(values.maxPrice, 10),
        };

        dispatch(createNewService(formattedValues))
          .unwrap()
          .then((result) => {
            setShowAlert(false);
            setIsSubmited(false);

            setTimeout(() => {
              notification.success({
                message: 'Successfull',
                description: 'The service has been created successfully !',
                placement: 'topLeft',
              });
            }, 500);
          })
          .catch((error) => {
            console.error('Lỗi khi tạo dịch vụ', error);
            setShowAlert(true);
          });
      })
      .catch((error) => {
        setShowAlert(true);
        console.error('Lỗi khi xác thực biểu mẫu', error);
      });

    // navigate('/service');
  };

  const navigate = useNavigate();

  const clickCancel = () => {
    navigate('/service');
  };

  // const handleFormReset = () => {
  //   form.resetFields();
  //   setIsSubmited(false);
  //   setShowAlert(false);
  // };

  const validateNumber = async (rule, value) => {
    if (value === '') {
      return;
    } else if (isNaN(value)) {
      throw new Error('JUST ENTER NUMBER');
    }
  };

  return (
    <div
      className="profile"
      style={{
        marginTop: 32,
      }}
    >
      {showAlert && isSubmited && (
        <Alert message="Error" description="" type="error" showIcon closable onClose={() => setShowAlert(false)} />
      )}
      <div>
        <div>
          <Form form={form} name="validateOnly" layout="vertical" autoComplete="off">
            <Row gutter={16}>
              <Col className="gutter-row" span={6}>
                <Form.Item name="name" label="Name" rules={[{ required: true }]}>
                  <Input placeholder="Enter your name here" />
                </Form.Item>
              </Col>
              <Col className="gutter-row" span={6}>
                <Form.Item
                  name="minPrice"
                  label="Min price"
                  rules={[{ required: true, message: 'ENTER MIN PRICE SERVICE' }, { validator: validateNumber }]}
                >
                  <Input placeholder="Enter min price service" />
                </Form.Item>
              </Col>
              <Col className="gutter-row" span={6}>
                <Form.Item
                  name="maxPrice"
                  label="Max price"
                  rules={[{ required: true, message: 'ENTER MAX PRICE SERVICE' }, { validator: validateNumber }]}
                >
                  <Input placeholder="Enter max price" />
                </Form.Item>
              </Col>
            </Row>
            <div>
              <Form.Item name="description" label="Description">
                <Input.TextArea placeholder="Description SERVICE" />
              </Form.Item>
            </div>
          </Form>

          <Space>
            <Button type="primary" htmlType="button" onClick={handleSubmit}>
              Create
            </Button>
            <Button onClick={clickCancel}>Cancel</Button>
          </Space>
        </div>
      </div>
    </div>
  );
};
export default CreateService;
