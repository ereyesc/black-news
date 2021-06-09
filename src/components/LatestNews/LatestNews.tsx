import { Row, Col } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import "./LatestNews.css";

const LatestNews = () => {
  const smallImg = {
    backgroundImage: `url("https://miro.medium.com/fit/c/752/564/1*UEsBhSnu3Cgg0otw1s_XYQ.png")`, 
    backgroundPosition: 'center center no-repeat',
    backgroundSize: 'cover',    
    };
  return (
    <Row className="latest-news-container">
      <Col lg={8} md={12} xs={24}>
        <Row className="latest-news-container__top">
          <Col>
            <img src="https://miro.medium.com/fit/c/752/564/1*UEsBhSnu3Cgg0otw1s_XYQ.png" />
          </Col>
          <Col className="latest-news-container__top__span">
            <span>The educative team in Javascript in Plain English</span>
          </Col>
          <Col>
            <h2>Top 10 mistakes to avoid when using React</h2>
          </Col>
          <Col>
            <p>
              React has quickly become the most popular front-end framework in
              the tech world, used by big tech companies such as Facebook,
              Netflix, Airbnb, and many more.
            </p>
          </Col>
          <Col className="latest-news-container__top__bottom">
            <span>Read More · 6 min read</span> <ArrowRightOutlined />
          </Col>
        </Row>
      </Col>
      <Col lg={8} md={12} xs={24}>
        <Row className="latest-news-container__middle">
          <Col className="latest-news-container__middle__details" span={18}>
            <Col className="latest-news-container__middle__details__title">
              <img src="https://miro.medium.com/max/2400/1*J0YGJHLg6YFvpe5q8Z_8jw.jpeg" />
              <span>Rushank Shah</span>
            </Col>
            <h3>How to add a Custom Cursor in NextJS Application?</h3>
            <Col className="latest-news-container__middle__details__bottom">
              <span>Read More · 6 min read</span> <ArrowRightOutlined />
            </Col>
          </Col>
          <Col span={6} style={smallImg}>
          </Col>
        </Row>
        <Row className="latest-news-container__middle">
          <Col className="latest-news-container__middle__details" span={18}>
            <Col className="latest-news-container__middle__details__title">
              <img src="https://miro.medium.com/max/2400/1*J0YGJHLg6YFvpe5q8Z_8jw.jpeg" />
              <span>Rushank Shah</span>
            </Col>
            <h3>How to add a Custom Cursor in NextJS Application?</h3>
            <Col className="latest-news-container__middle__details__bottom">
              <span>Read More · 6 min read</span> <ArrowRightOutlined />
            </Col>
          </Col>
          <Col span={6} style={smallImg}>
          </Col>
        </Row>
        <Row className="latest-news-container__middle">
          <Col className="latest-news-container__middle__details" span={18}>
            <Col className="latest-news-container__middle__details__title">
              <img src="https://miro.medium.com/max/2400/1*J0YGJHLg6YFvpe5q8Z_8jw.jpeg" />
              <span>Rushank Shah</span>
            </Col>
            <h3>How to add a Custom Cursor in NextJS Application?</h3>
            <Col className="latest-news-container__middle__details__bottom">
              <span>Read More · 6 min read</span> <ArrowRightOutlined />
            </Col>
          </Col>
          <Col span={6} style={smallImg}>
          </Col>
        </Row>
        <Row className="latest-news-container__middle">
          <Col className="latest-news-container__middle__details" span={18}>
            <Col className="latest-news-container__middle__details__title">
              <img src="https://miro.medium.com/max/2400/1*J0YGJHLg6YFvpe5q8Z_8jw.jpeg" />
              <span>Rushank Shah</span>
            </Col>
            <h3>How to add a Custom Cursor in NextJS Application?</h3>
            <Col className="latest-news-container__middle__details__bottom">
              <span>Read More · 6 min read</span> <ArrowRightOutlined />
            </Col>
          </Col>
          <Col span={6} style={smallImg}>
          </Col>
        </Row>
      </Col>
      <Col lg={8} md={24} xs={24}></Col>
    </Row>
  );
};

export default LatestNews;
