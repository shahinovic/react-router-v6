// import { useContext } from "react";
// import { NavHeightContext } from "../LayOut/LayOut";
import { Container } from "react-bootstrap";
import styles from "./Home.module.css";
import { svg_1 } from "../../assets";
import { SectionHeading } from "../../components";

const Home = () => {
  const { home, home_bg, section_height, img_container } = styles;

  return (
    <div className={`${home}  ${home_bg}`}>
      <Container
        className={`${section_height} d-flex justify-content-center align-items-center`}
      >
        <div className="box w-50 mx-auto text-center">
          <div className={img_container}>
            <img src={svg_1} className="img-fluid" alt="" />
          </div>
          <SectionHeading
            isH1={true}
            text="START FRAMEWORK"
            desc="Graphic Artist - Web Designer - Illustrator"
          />
        </div>
      </Container>
    </div>
  );
};

export default Home;
