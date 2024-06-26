import { ReactNode } from 'react';

interface PatternsProps {
  children: ReactNode;
}

import MainWrapper from './wrapper/main-wrapper';

export const Patterns = ({ children }: PatternsProps) => {
  return <MainWrapper>{children}</MainWrapper>;
};

export default Patterns;
