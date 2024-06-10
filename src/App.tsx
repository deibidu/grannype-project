import { NavLink, Outlet } from 'react-router-dom';
import './sass/style.scss';
import './sass/colors.scss';
import './sass/fonts.scss';
import './sass/buttons.scss';
import './components/headers/NavHeader.scss';
import { Header } from './components/header';
import { Footer } from './components/footer';
import NavHeader from './components/headers/NavHeader';

export const App = () => {
  return (
    <>
      <Header />
      <div>
        <NavLink to="/"></NavLink>
        <NavLink to="/Recipes"></NavLink>
        <NavLink to="/CreateRecipe"></NavLink>
        <NavLink to="/Calendar"></NavLink>
        <NavLink to="/ShoppingList"></NavLink>
      </div>
      <NavHeader />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
