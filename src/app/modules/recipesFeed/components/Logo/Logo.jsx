import { Image, Row, Col } from "react-bootstrap";
import logo from "/logo.png";
import hello from "/hello.png";

import "./logo.scss";

const Logo = () => {
  return (
    <>
      <div className="bg-primary rounded-3 logoRow">
        <Row>
          <span className="text-secondary d-flex justify-content-end pe-2">Bienvenue sur</span>
        </Row>
        <Row>
          <Col xs={8} className="d-flex align-items-center">
            <Image className="sizeLogo mx-2" src={logo} alt="Bocafina logo" />
          </Col>
          <Col xs={4} className="d-flex align-items-center">
            <Image className="sizeHelloCat" src={hello} alt="Simon's cat dit bonjour" />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Logo;
