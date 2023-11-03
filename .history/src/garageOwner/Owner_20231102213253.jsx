import { Button, Col, Input, Pagination, Row, Select, Space } from 'antd';
import { DeleteOutlined, EditOutlined, EyeOutlined } from '@ant-design/icons';
import { Option } from 'antd/es/mentions';
import { useNavigate } from 'react-router';

const Owner = () => {
  const navigate = useNavigate();

  const toAddGarage = () => {
    navigate('/managementcreate');
  };
  return (
    <div
      className="profile"
      style={{
        marginTop: 30,
      }}
    >
      <div
        style={{
          marginBottom: 30,
        }}
      >
        <Row gutter={24}>
          <Col className="gutter-row" span={3}>
            <h2>All Garages</h2>
          </Col>
          <Col className="gutter-row" span={18}></Col>
          <Col className="gutter-row" span={3}>
            <Button onClick={toAddGarage}>Add Garage</Button>
          </Col>
        </Row>
      </div>
      <div
        style={{
          marginBottom: 20,
        }}
      >
        <Row gutter={24}>
          <Col className="gutter-row" span={12}>
            <Space.Compact block>
              <Select defaultValue="Name" allowClear>
                <Option value="Name">Name</Option>
                <Option value="Email">Email</Option>
              </Select>
              <Input
                style={{
                  width: '50%',
                }}
                placeholder="name"
              />
            </Space.Compact>
          </Col>
        </Row>
      </div>
      <div>
        <Row
          gutter={24}
          style={{
            height: 54,
            marginLeft: 2,
            marginRight: 2,
            backgroundColor: '#ccc',
            display: 'flex',
            alignContent: 'center',
          }}
        >
          <Col className="gutter-row" span={3}>
            <span>#</span>
          </Col>
          <Col className="gutter-row" span={3}>
            <span>Name</span>
          </Col>
          <Col className="gutter-row" span={4}>
            <span>Email</span>
          </Col>
          <Col className="gutter-row" span={4}>
            <span>Phone Number</span>
          </Col>
          <Col className="gutter-row" span={4}>
            <span>Garage Owner</span>
          </Col>
          <Col className="gutter-row" span={3}>
            <span>status</span>
          </Col>
          <Col className="gutter-row" span={3}>
            <span>actions</span>
          </Col>
        </Row>
      </div>
      <div>
        <Row
          gutter={24}
          style={{
            height: 54,
            marginLeft: 2,
            marginRight: 2,
            display: 'flex',
            alignContent: 'center',
          }}
        >
          <Col className="gutter-row" span={3}>
            <span>1</span>
          </Col>
          <Col className="gutter-row" span={3}>
            <span>Nguyen</span>
          </Col>
          <Col className="gutter-row" span={4}>
            <span>tvn@gmail.com</span>
          </Col>
          <Col className="gutter-row" span={4}>
            <span>01204021</span>
          </Col>
          <Col className="gutter-row" span={4}>
            <span>to van nguyen</span>
          </Col>
          <Col className="gutter-row" span={3}>
            <span>active</span>
          </Col>
          <Col className="gutter-row" span={3}>
            <span>
              <EyeOutlined />

              <EditOutlined
                style={{
                  paddingLeft: 8,
                  paddingRight: 8,
                }}
              />
              <DeleteOutlined />
            </span>
          </Col>
        </Row>
      </div>
      <div>
        <Row gutter={24}>
          <Col className="gutter-row" span={19}></Col>
          <Col className="gutter-row" span={5}>
            <div>
              <Pagination defaultCurrent={1} total={30} />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Owner;
