import { ReactNode } from "react";

interface HeaderProps {
  children: ReactNode;
}

const Header = ({ children }: HeaderProps) => {
  return <div>{children}</div>;
};

export default Header;
