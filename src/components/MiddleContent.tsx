import React from 'react';
import { Row, Col, Card } from 'antd';
import {
  FireFilled,
  RightOutlined,
  RightCircleFilled
} from '@ant-design/icons';
import '../styles/MiddleContent.css';


const MiddleContent = () => {
  const cards = [
    'https://inmobiliare.com/himalaya/wp-content/uploads/2020/05/vivienda-cdmx-valor.png',
    'https://media.tacdn.com/media/attractions-splice-spp-674x446/09/93/6a/89.jpg',
    'https://media.staticontent.com/media/pictures/592e3b4d-c987-42b1-8030-a09a21680298',
    'https://viajes.nationalgeographic.com.es/medio/2020/01/24/toronto_8bd2654e_1200x630.jpg',
    'https://viajes.nationalgeographic.com.es/medio/2021/01/12/egipto_6f0016be_1200x630.jpg'
  ]
  return (
    <Row className="middle-content-container">
      <Col span={22}>
        <Row className="offerts-text"><p>Ve las mejores ofertas</p></Row>
        <Row className="offerts-cards">
          {
            cards.map((card, index) => (
              <Card.Grid className="best-offerts-card" hoverable key={index}>
                <div className="best-offerts-card-image" style={{ backgroundImage: `url('${card}')` }}>
                </div>
                <div className="best-offerts-card-info">
                  <div className="card-info-top">
                    <div className="card-info-top-icon"><FireFilled /></div>
                    <div className="card-info-top-name"><p>Cancun, Mexico</p></div>
                  </div>
                  <div className="card-info-bottom">
                    <div className="card-info-bottom-text">
                      <p>Obtener precios</p>
                    </div>
                    <div className="card-info-bottom-icon">
                      <RightOutlined />
                    </div>
                  </div>
                </div>
              </Card.Grid>
            ))
          }
          <Card.Grid className="view-more-card" hoverable>
            <div className="card-img"></div>
            <div className="card-info">
              <p>Conoce mas</p>
              <RightCircleFilled />
            </div>
          </Card.Grid>
        </Row>
      </Col>
    </Row>
  );
}

export default MiddleContent;
