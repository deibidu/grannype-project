import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavHeader.scss';
import MenuIconGrey from '../../assets/images/Menu_Icon_Grey.svg';
import RecipeIconGrey from '../../assets/images/Recetario_Icon_Grey.svg';
import CreateRecipeIconGrey from '../../assets/images/Crear_Icon_Grey.svg';
import CalendarIconGrey from '../../assets/images/Calendar_Icon_Grey.svg';
import ShoppingListIconGrey from '../../assets/images/Compra_Icon_Grey.svg';

function NavHeader() {
    return (
        <div className="section-header">
            <NavLink to="/" className={({ isActive }) => (`nav-link orange-nav ${isActive ? 'orange-nav--active' : ''}`)}>
                <img src={MenuIconGrey} alt="MenuIconGrey" className="icon" />
                <p className="section-name">Menú</p>
            </NavLink>

            <NavLink to="/Recipes" className={({ isActive }) => (`nav-link green-nav ${isActive ? 'green-nav--active' : ''}`)}>
                <img src={RecipeIconGrey} alt="RecipeIconGrey" className="icon" />
                <p className="section-name">Recetario</p>
            </NavLink>

            <NavLink to="/CreateRecipe" className={({ isActive }) => (`nav-link yellow-nav ${isActive ? 'yellow-nav--active' : ''}`)}>
                <img src={CreateRecipeIconGrey} alt="CreateRecipeIconGrey" className="icon" />
                <p className="section-name">Crear receta</p>
            </NavLink>

            <NavLink to="/Calendar" className={({ isActive }) => (`nav-link blue-nav ${isActive ? 'blue-nav--active' : ''}`)}>
                <img src={CalendarIconGrey} alt="CalendarIconGrey" className="icon" />
                <p className="section-name">Calendario</p>
            </NavLink>

            <NavLink to="/ShoppingList" className={({ isActive }) => (`nav-link pink-nav ${isActive ? 'pink-nav--active' : ''}`)}>
                <img src={ShoppingListIconGrey} alt="ShoppingListIconGrey" className="icon" />
                <p className="section-name">Lista de la compra</p>
            </NavLink>
        </div>
    );
}

export default NavHeader;