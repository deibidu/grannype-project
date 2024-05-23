import { NavLink, Outlet } from 'react-router-dom';
import './sass/style.scss';
import './sass/colors.scss';
import './sass/fonts.scss';
import './sass/buttons.scss';
import { Header } from './components/header';
import { Footer } from './components/footer';
import NavHeader from './components/headers/NavHeader';

export const App = () => {
  return (
    <div>
      <Header />
      <div className="menu">
        <NavLink to="/" className={'font-text-semibold'}>
          Home
        </NavLink>
        <NavLink to="/Recipes" className={'font-text-semibold'}>
          Recipes
        </NavLink>
        <NavLink to="/CreateRecipe" className={'font-text-semibold'}>
          Create Recipe
        </NavLink>
        <NavLink to="/Calendar" className={'font-text-semibold'}>
          Calendar
        </NavLink>
        <NavLink to="/ShoppingList" className={'font-text-semibold'}>
          Shopping List
        </NavLink>
      </div>
      <NavHeader></NavHeader><NavHeader />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
