import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

type Props = {
  children?: React.ReactNode;
};

export const MainWrapper = ({ children }: Props): React.ReactNode => {
  return (
    <div className="card">
      <Header></Header>
      {children}
      <Footer />
    </div>
  );
};

export default MainWrapper;
