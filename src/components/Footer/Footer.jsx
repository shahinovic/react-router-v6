import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import styles from "./Footer.module.css";
import { FaFacebook, FaTwitter, FaLinkedinIn, FaGlobe } from "react-icons/fa";

const { footer, card, icon, icon_i, copyright_bg } = styles;

const Footer = () => {
  return (
    <div className={footer}>
      <Container className="py-5">
        <Row>
          <Col md={4}>
            <Card className={card}>
              <Card.Body className="text-center">
                <Card.Title className="text-uppercase fs-1">
                  LOCATION
                </Card.Title>
                <Card.Text>2215 John Daniel Drive</Card.Text>
                <Card.Text>Clark, MO 65243</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className={card}>
              <Card.Body className="text-center">
                <Card.Title className="text-uppercase fs-2">
                  AROUND THE WEB
                </Card.Title>
                <Card.Text className="d-flex justify-content-center">
                  <div className={icon}>
                    <FaFacebook className={icon_i} />
                  </div>
                  <div className={icon}>
                    <FaTwitter className={icon_i} />
                  </div>
                  <div className={icon}>
                    <FaLinkedinIn className={icon_i} />
                  </div>
                  <div className={icon}>
                    <FaGlobe className={icon_i} />
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className={card}>
              <Card.Body className="text-center">
                <Card.Title className="text-uppercase fs-2">
                  ABOUT FREELANCER
                </Card.Title>
                <Card.Text>
                  Freelance is a free to use, licensed Bootstrap theme created
                  by Route
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <div
        className={`text-center text-white py-4 fs-6 fw-bold ${copyright_bg}`}
      >
        Copyright © Your Website 2021
      </div>
    </div>
  );
};

export default Footer;
