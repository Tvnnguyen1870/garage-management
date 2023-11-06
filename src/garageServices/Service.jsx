import { Button, Col, Input, Pagination, Row, Select, Space } from 'antd';
import { Option } from 'antd/es/mentions';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { getService } from '../store/reducers/garageservice';

const Service = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getService());
  }, []);

  const { service } = useSelector((state) => state.service);
  console.log(service);

  if (!service) return;

  console.log(service.items);
  const toAddGarage = () => {
    navigate('/managementcreate');
  };
  return (
    <div
      className="service"
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
            <h2>All Service</h2>
          </Col>
          <Col className="gutter-row" span={18}></Col>
          <Col className="gutter-row" span={3}>
            <Button onClick={toAddGarage}>Add service</Button>
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
                <Option value="Description">Description</Option>
              </Select>
              <Input
                style={{
                  width: '50%',
                }}
                defaultValue="name"
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
            <span>Description</span>
          </Col>
          <Col className="gutter-row" span={4}>
            <span>Min Price</span>
          </Col>
          <Col className="gutter-row" span={4}>
            <span>Max Price</span>
          </Col>
          {/* <Col className="gutter-row" span={3}>
            <span>actions</span>
          </Col> */}
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
            <p>{service.items[1].index}</p>
          </Col>
          <Col className="gutter-row" span={3}>
            <p>{service.items[1].name}</p>
          </Col>
          <Col className="gutter-row" span={4}>
            <p>{service.items[1].description}</p>
          </Col>
          <Col className="gutter-row" span={4}>
            <p>{service.items[1].minPrice}</p>
          </Col>
          <Col className="gutter-row" span={4}>
            <p>{service.items[1].maxPrice}</p>
          </Col>
          {/* <Col className="gutter-row" span={3}>
            <span>active</span>
          </Col> */}
          {/* <Col className="gutter-row" span={3}>
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
          </Col> */}
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

export default Service;
