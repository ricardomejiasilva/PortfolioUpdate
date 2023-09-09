import React, { useEffect } from "react";
import Nav from "../Components/Nav/Nav";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Components/Footer/Footer";

const Main = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      {pathname === "/project" && <Nav />}
      <Outlet />
      <Footer />
    </>
  );
};

export default Main;
