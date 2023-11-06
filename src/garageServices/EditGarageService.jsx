import { Breadcrumb, Button, Col, Row } from 'antd';
import { Controller, useForm } from 'react-hook-form';
import '../assets/styles/editservice.css';

const EditGarageService = () => {
  const {
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      editName: '',
      editMin: '',
      editMax: '',
      editText: '',
    },
  });
  return (
    <div className="garage-service">
      <Breadcrumb
        style={{
          fontSize: 22,
        }}
        separator=">"
        items={[
          {
            title: 'All garages',
          },
          {
            title: 'Service 1',
          },
        ]}
      />
      <div className="service-edit">
        <form>
          <Row className="row-editservice">
            <Col span={8}>
              <div className="edit-service-input">
                <span className="edit-service-span">Name</span>
                <Controller
                  name="editName"
                  control={control}
                  render={({ field }) => {
                    return (
                      <div>
                        <input {...field} type="text" placeholder="enter service name" />
                        {errors['editName'] && <p>({errors.editName.message})</p>}
                      </div>
                    );
                  }}
                />
              </div>
            </Col>
            <Col span={8}>
              <div className="edit-service-input">
                <span className="edit-service-span">Min price</span>
                <Controller
                  name="editMin"
                  control={control}
                  render={({ field }) => {
                    return (
                      <div>
                        <input {...field} type="text" placeholder="enter min price" />
                        {errors['editMin'] && <p>({errors.editMin.message})</p>}
                      </div>
                    );
                  }}
                />
              </div>
            </Col>
            <Col span={8}>
              <div className="edit-service-input">
                <span className="edit-service-span">Max price</span>
                <Controller
                  name="editMax"
                  control={control}
                  render={({ field }) => {
                    return (
                      <div>
                        <input {...field} type="text" placeholder="enter max price" />
                        {errors['editMax'] && <p>({errors.editMax.message})</p>}
                      </div>
                    );
                  }}
                />
              </div>
            </Col>
          </Row>
          <Row className="row-editservice">
            <Col span={24}>
              <div className="edit-service-textarea">
                <span className="edit-service-span">Description</span>
                <Controller
                  name="editText"
                  control={control}
                  render={({ field }) => {
                    return (
                      <div>
                        <textarea {...field} type="text" placeholder="description" />
                      </div>
                    );
                  }}
                />
              </div>
            </Col>
          </Row>
          <Row className="row-editservice">
            <Col>
              <Button
                style={{
                  marginRight: 20,
                }}
              >
                Save
              </Button>
            </Col>
            <Col>
              <Button>Cancel</Button>
            </Col>
          </Row>
        </form>
      </div>
    </div>
  );
};

export default EditGarageService;
