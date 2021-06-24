import { Row, Col } from "antd";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <Row className="footer-container">
        <Col xs={24} md={24} lg={6} className="footer-col">
          <Col span={20}>
            <h1>La verdad news</h1>
            <h3>
              SOMOS UN MEDIO HUMANISTA Y LIBERAL buscando esparcir la verdad sin
              fake news, sin chayote, sin supuestos "intelectuales", para que la
              sociedad avance y dejar un mejor Mexico para las futuras
              generaciones.
            </h3>
          </Col>
        </Col>
        <Col xs={24} md={24} lg={6} className="footer-col">
          <Col span={20}>
            <ul>
              <li>Explore</li>
              <li>Home</li>
              <li>About</li>
              <li>Capabilities</li>
              <li>Careers</li>
            </ul>
            <ul>
              <li>Contact us</li>
              <li>erick.erc.10@hotmail.com</li>
              <li>8172 1927 128</li>
            </ul>
          </Col>
        </Col>
        <Col xs={24} md={24} lg={12} className="footer-col">
          <Col span={20}>
            <h2>
              <b
                style={{
                  color: "white",
                  fontSize: "3em",
                  paddingRight: "0.125em",
                }}
              >
                E
              </b>
              STO ES UN TRIBUTO A TODOS LOS QUE HAN LUCHADO POR LAS LIBERTADES Y
              DERECHOS QUE NOS PERTENECEN, HACIENDO QUE NUESTRA GENERACION TENGA
              UN MEJOR{" "}
              <b style={{ fontSize: "2em" }}>
                <span style={{ color: "green" }}>ME</span>
                <span style={{ color: "white" }}>XI</span>
                <span style={{ color: "red" }}>CO</span>
              </b>
              .
            </h2>
          </Col>
        </Col>
      </Row>
      <Row className="footer-bottom">
        @2021 La verdad news. All Rights Reserved
      </Row>
    </>
  );
};

export default Footer;
