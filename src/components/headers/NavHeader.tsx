import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavHeader.scss';
import { MenuIconGrey } from '../icons/MenuIconGrey';
import { RecetarioIconGrey } from '../icons/RecetarioIconGrey';
import { CrearIconGrey } from '../icons/CrearIconGrey';
import { CalendarIconGrey } from '../icons/CalendarIconGrey';
import { CompraIconGrey } from '../icons/CompraIconGrey';

function NavHeader() {
    return (
        <div className="section-header">
            <NavLink to="/" className={({ isActive }) => (`nav-link orange-nav ${isActive ? 'orange-nav--active' : ''}`)}>
                <MenuIconGrey className='icon' />
                <p className="section-name">Menú</p>
            </NavLink>

            <NavLink to="/Recipes" className={({ isActive }) => (`nav-link green-nav ${isActive ? 'green-nav--active' : ''}`)}>
                <RecetarioIconGrey className="icon" />
                <p className="section-name">Recetario</p>
            </NavLink>

            <NavLink to="/CreateRecipe" className={({ isActive }) => (`nav-link yellow-nav ${isActive ? 'yellow-nav--active' : ''}`)}>
                <CrearIconGrey className="icon" />
                <p className="section-name">Crear receta</p>
            </NavLink>

            <NavLink to="/Calendar" className={({ isActive }) => (`nav-link blue-nav ${isActive ? 'blue-nav--active' : ''}`)}>
                <CalendarIconGrey className="icon" />
                <p className="section-name">Calendario</p>
            </NavLink>

            <NavLink to="/ShoppingList" className={({ isActive }) => (`nav-link pink-nav ${isActive ? 'pink-nav--active' : ''}`)}>
                <CompraIconGrey className="icon" />
                <p className="section-name">Lista de la compra</p>
            </NavLink>
        </div>
    );
}

export default NavHeader;