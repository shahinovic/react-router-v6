import { useEffect, useRef, useState } from "react";
import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { NavLink } from "react-router-dom";
import styles from "./MainNavbar.module.css";

const { toggle } = styles;

const MainNavbar = ({ setNavHeight }) => {
  const [scrolling, setScrolling] = useState(false);
  const navRef = useRef(null);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolling(true);
      setNavHeight(72);
    } else {
      setScrolling(false);
      setNavHeight(136);
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navPadding = scrolling ? "py-3" : "py-5";

  const LinkClass = ({ isActive }) =>
    isActive
      ? `${styles.nav_link_active} nav-link   ${styles.link}`
      : `nav-link ${styles.link}`;

  return (
    <Navbar
      ref={navRef}
      expand="lg"
      className={`fixed-top ${styles.nav_custom} ${navPadding} ${
        scrolling ? styles.scroll_bg : ""
      }`}
      // style={{ transition: "all 0.5s ease" }}
    >
      <Container>
        <NavLink className="navbar-brand  fs-2 fw-bold text-light" to="">
          START FRAMEWORK
        </NavLink>
        <Navbar.Toggle className={`${toggle}`} aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavLink className={LinkClass} to="about">
              About
            </NavLink>
            <NavLink className={LinkClass} to="portfolio">
              Portfolio
            </NavLink>

            <NavLink className={LinkClass} to="contact">
              Contact
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavbar;
