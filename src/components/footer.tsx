import { ReactNode } from "react";

interface FooterProps {
  children: ReactNode;
}

const Footer = ({ children }: FooterProps) => {
  return <div>{children}</div>;
};

export default Footer;
