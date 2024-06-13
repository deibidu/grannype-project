import React from 'react';
import { Header } from '../components/header';
import { Footer } from '../components/footer';

interface MainWrapperProps {
  children: React.ReactNode;
}

const MainWrapper: React.FC<MainWrapperProps> = ({ children }) => {
  return (
    <div className="card">
      <Header></Header>
      <div className={'main'}>{children}</div>
      <Footer></Footer>
    </div>
  );
};

export default MainWrapper;
