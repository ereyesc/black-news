import { Row, Col, Button, Input } from "antd";
import "./RightPanel.css";

const RightPanel = () => {
  const imgStyle = {
    backgroundImage: `url("https://i0.wp.com/blog.realinstitutoelcano.org/wp-content/uploads/2017/10/China-6123-DennisJarvis.jpg?fit=600%2C400&ssl=1")`,
    backgroundPosition: "center center no-repeat",
    backgroundSize: "cover",
    height: '100px',
    width: '100px',
    margin: '0 auto',
    top: '-50px',
    borderRadius: '100%'
  };
  return (
    <Col xs={0} md={8} lg={8} className="right-panel">
      <Col className="panel-info">
        <Col style={imgStyle}></Col>
        <Col>
          <h3>Jaspreet Bhamrai</h3>
          <p>Wheret this is birthday and you need queue her this is
                  birthday and you need queue her asqp this has algo que table
            guild has more then this is birthday and you need queue here.</p>
          <h4>Follow me</h4>
        </Col>
        <Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
        </Col>
      </Col>
      <Col className="panel-info">
      <Col>
          <h3>Newsletter</h3>
          <p>Subscribe to our newsletter and get all the latest news</p>
          <Input placeholder="Email" />
          <Button type="primary">Subscribe</Button>
        </Col>
      </Col>
    </Col>
  );
};

export default RightPanel;