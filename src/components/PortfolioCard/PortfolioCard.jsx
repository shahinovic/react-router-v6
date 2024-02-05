import styles from "./PortfolioCard.module.css";
import { FaPlus } from "react-icons/fa";
const { portfolio_card, card_hover } = styles;

const PortfolioCard = ({ img, setSelectedImage, setIsModalOpen }) => {
  return (
    <div
      className={portfolio_card}
      onClick={() => {
        setSelectedImage(img);
        setIsModalOpen(true);
      }}
    >
      <img src={img} alt="" />
      <div className={card_hover}>
        <FaPlus />
      </div>
    </div>
  );
};

export default PortfolioCard;
