import { Container } from "react-bootstrap";
import { SectionHeading } from "../../components";
import styles from "./Contact.module.css";
import { useState } from "react";
const { contact, group, active, button } = styles;

const Contact = () => {
  const [formData, setFormData] = useState({
    username: "",
    userAge: "",
    userEmail: "",
    userPassword: "",
  });
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className={`${contact} py-5`}>
      <Container>
        <SectionHeading text="CONTACT COMPONENT" color="#000" />
        <form onSubmit={(e) => e.preventDefault()}>
          <div className={group}>
            <label
              htmlFor="username"
              className={formData.username ? active : ""}
            >
              userName :
            </label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="userName"
              onChange={handleInputChange}
              value={formData.username}
            />
          </div>
          <div className={group}>
            <label htmlFor="userAge" className={formData.userAge ? active : ""}>
              userAge :
            </label>
            <input
              type="text"
              name="userAge"
              id="userAge"
              placeholder="userAge"
              onChange={handleInputChange}
              value={formData.userAge}
            />
          </div>
          <div className={group}>
            <label
              htmlFor="userEmail"
              className={formData.userEmail ? active : ""}
            >
              userEmail :
            </label>
            <input
              type="email"
              name="userEmail"
              id="userEmail"
              placeholder="userEmail"
              onChange={handleInputChange}
              value={formData.userEmail}
            />
          </div>
          <div className={group}>
            <label
              htmlFor="userPassword"
              className={formData.userPassword ? active : ""}
            >
              userPassword :
            </label>
            <input
              type="password"
              name="userPassword"
              id="userPassword"
              placeholder="userPassword"
              onChange={handleInputChange}
              value={formData.userPassword}
            />
          </div>
          <button className={`btn ${button}`} type="submit">
            send Message
          </button>
        </form>
      </Container>
    </div>
  );
};

export default Contact;
