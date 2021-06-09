import { Row, Col } from "antd";
import Header from "../Header";
import "./Cover.css";

const Cover = () => {
  const imageStyle = {
    backgroundImage: `url("https://i.pinimg.com/originals/97/12/e6/9712e6b0241caf346d64b372edbc9a2e.jpg")`, 
    backgroundPosition: 'center center no-repeat',
    backgroundSize: 'cover',
    width: '100%',
    height: 'auto'
    };
  return (
    <Row className="cover">
      <Col xs={24} md={12} lg={12} className="left">
        <Header />
        <Row className="details">
          <Col className="title">White Tiger</Col>
          <Col className="subtitle">Wild Show</Col>
          <Col className="category">Adventure in the forest</Col>
          <Col className="description">
            <Col span={6} className="first"><span>Wildlife Safari</span></Col>
            <Col span={16} className="second">
              We invest in the bold people with transformative ideas that help
              millions understand, value, and protect life on our planet,
              creating and empowering.
            </Col>
          </Col>
        </Row>
      </Col>
      <Col xs={24} md={12} lg={12} style={imageStyle}></Col>
    </Row>
  );
};

export default Cover;
