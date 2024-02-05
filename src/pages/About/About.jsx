import styles from "./About.module.css";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import { Col, Container, Row } from "react-bootstrap";
const { about } = styles;

const About = () => {
  return (
    <div className={about}>
      <div className="inner">
        <SectionHeading text="ABOUT COMPONENT" />
        <Container>
          <Row>
            <Col md={6}>
              <p className="text-light fs-5 ">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </Col>
            <Col md={6}>
              <p className="text-light fs-5  ">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
