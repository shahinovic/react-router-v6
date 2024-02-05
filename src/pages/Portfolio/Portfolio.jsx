import { Col, Container, Row } from "react-bootstrap";
import styles from "./Portfolio.module.css";
import { Model, PortfolioCard, SectionHeading } from "../../components";
import { useEffect, useState } from "react";
import { img_1, img_2, img_3 } from "../../assets";
const { portfolio } = styles;

const Portfolio = ({ title }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const images = [img_1, img_2, img_3, img_1, img_2, img_3];
  useEffect(() => {
    document.title = title;
  }, []);

  return (
    <div className={`${portfolio} py-5`}>
      {isModalOpen && (
        <Model setIsModalOpen={setIsModalOpen} selectedImage={selectedImage} />
      )}
      <Container>
        <SectionHeading text="PORTFOLIO COMPONENT" color="#000" />

        <Row className="g-4">
          {images.map((img, i) => (
            <Col key={i} md={4}>
              <PortfolioCard
                img={img}
                setSelectedImage={setSelectedImage}
                setIsModalOpen={setIsModalOpen}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Portfolio;
