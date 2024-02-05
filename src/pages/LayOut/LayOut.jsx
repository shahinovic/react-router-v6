import { Outlet } from "react-router-dom";
import { Footer, MainNavbar } from "../../components";
import { Container } from "react-bootstrap";
import { createContext, useEffect, useState } from "react";

export const NavHeightContext = createContext(0);

const LayOut = () => {
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {}, [navHeight]);

  return (
    <div className="latout">
      <MainNavbar setNavHeight={setNavHeight} />

      <NavHeightContext.Provider value={navHeight}>
        <Outlet />
      </NavHeightContext.Provider>
      <Footer />
    </div>
  );
};

export default LayOut;
