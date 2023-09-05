import React, { useEffect } from "react";
import Header from "../Components/Header/Header";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Components/Footer/Footer";

const Main = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      {pathname === "/project" && <Header />}
      <Outlet />
      <Footer />
    </>
  );
};

export default Main;
