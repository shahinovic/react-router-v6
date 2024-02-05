import styles from "./Model.module.css";

const { z } = styles;

const Model = ({ selectedImage, setIsModalOpen }) => {
  return (
    <div
      className={`inner position-fixed top-0 start-0 d-flex justify-content-center align-items-center align-items-center ${z}`}
      onClick={() => setIsModalOpen(false)}
    >
      <div className="img-container w-50">
        <img className="img-fluid" src={selectedImage} alt="" />
      </div>
    </div>
  );
};

export default Model;
