import React from "react";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Outlet } from "react-router-dom";

const MainWrapper = (): React.ReactNode => {
  return (
    <div className="card">
      <Header></Header>
      <div>
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainWrapper;
