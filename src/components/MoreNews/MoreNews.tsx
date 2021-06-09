import { Row, Col, Button } from "antd";
import RightPanel from './RightPanel';
import "./MoreNews.css";

const MoreNews = () => {
  const imgStyle = {
    backgroundImage: `url("https://i0.wp.com/blog.realinstitutoelcano.org/wp-content/uploads/2017/10/China-6123-DennisJarvis.jpg?fit=600%2C400&ssl=1")`,
    backgroundPosition: "center center no-repeat",
    backgroundSize: "cover",
  };
  return (
    <Row className="more-news">
      <Col xs={24} md={16} lg={16}>
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <Col className="news-item">
            <Col style={imgStyle} span={10}></Col>
            <Col span={14} className="item-details">
              <Col className="item-header">
                <h5>#Guides</h5>
                <span>6 minutes reading</span>
              </Col>
              <Col>
                <h1>Coventry City Guide Including Coventry Hotels</h1>
              </Col>
              <Col span={22}>
                <p>
                  Wheret this is birthday and you need queue her this is
                  birthday and you need queue her asqp this has algo que table
                  guild has more then this is birthday and you need queue here.
                </p>
              </Col>
              <Col className="item-button">
                <Button type="primary">Read more</Button>
              </Col>
            </Col>
          </Col>
        ))}
      </Col>
      <RightPanel />
    </Row>
  );
};

export default MoreNews;
