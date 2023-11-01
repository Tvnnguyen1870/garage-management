import { Col, Input, Pagination, Row, Select, Space } from 'antd';
import { Option } from 'antd/es/mentions';

const GarageAll = () => {
  return (
    <div
      className="profile"
      style={{
        marginTop: 20,
      }}
    >
      <div>
        <Row gutter={24}>
          <Col className="gutter-row" span={3}>
            <h2>All Garages</h2>
          </Col>
          <Col className="gutter-row" span={18}></Col>
          <Col className="gutter-row" span={3}>
            <div>
              <button>Add Garage</button>
            </div>
          </Col>
        </Row>
      </div>
      <div>
        <Row gutter={24}>
          <Col className="gutter-row" span={12}>
            <div>
              <Space.Compact block>
                <Select defaultValue="Zhejiang" allowClear>
                  <Option value="Zhejiang">Zhejiang</Option>
                  <Option value="Jiangsu">Jiangsu</Option>
                </Select>
                <Input
                  style={{
                    width: '50%',
                  }}
                  defaultValue="Xihu District, Hangzhou"
                />
              </Space.Compact>
            </div>
          </Col>
        </Row>
      </div>
      <div>
        <Row gutter={24}>
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
        <Row gutter={24}>
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
            <span></span>
          </Col>
        </Row>
      </div>
      <div>
        <Row gutter={24}>
          <Col className="gutter-row" span={18}></Col>
          <Col className="gutter-row" span={6}>
            <div>
              <Pagination defaultCurrent={1} total={30} />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default GarageAll;
