import { FaStar } from "react-icons/fa";
import styles from "./SectionHeading.module.css";

const { section_heading, h2, underline, line, p_text } = styles;

const SectionHeading = ({ isH1 = false, text, desc, color }) => {
  return (
    <div className={section_heading}>
      {isH1 ? (
        <h1 className={`${h2}`} style={{ color: color }}>
          {text}
        </h1>
      ) : (
        <h2 className={`${h2}`} style={{ color: color }}>
          {text}
        </h2>
      )}

      <div className={underline}>
        <div className={line} style={{ backgroundColor: color }}></div>
        <FaStar style={{ color: color }} />
        <div className={line} style={{ backgroundColor: color }}></div>
      </div>
      <p className={`${p_text}`} style={{ color: color }}>
        {desc}
      </p>
    </div>
  );
};

export default SectionHeading;
