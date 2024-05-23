import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavHeader.scss';

function NavHeader() {
    return (
        <div className="section-header">
            <NavLink to="/" className={({ isActive }) => (`orange-nav ${isActive ? 'orenge-nav--active' : ''}`)} style={{ borderBottom: '3px solid #FF683F', backgroundColor: '#FDFBF5' }}>
                <img src="../assets/Images/Menu_Icon_Grey" alt="Menu_Icon_Grey" className="icon" />
                <p className="section-name">Menú</p>
            </NavLink>

            <NavLink to="/Recipes" className={({ isActive }) => (`green-nav ${isActive ? 'green-nav--active' : ''}`)} style={{ backgroundColor: '#FDFBF5', borderBottom: '3px solid #4AAF73' }}>
                <img src="../assets/Images/Recipe_Icon_Grey" alt="Recipe_Icon_Grey" className="icon" />
                <p className="section-name">Recipes</p>
            </NavLink>

            <NavLink to="/CreateRecipe" className={({ isActive }) => (`yellow-nav ${isActive ? 'yellow-nav--active' : ''}`)} style={{ color: '#FDFBF5', backgroundColor: '#DC5F7D' }}>
                <img src="../assets/Images/Crear_Icon_Creamy" alt="Crear_Icon_Creamy" className="icon" />
                <p className="section-name">Crear receta</p>
            </NavLink>

            <NavLink to="/Calendar" className={({ isActive }) => (`blue-nav ${isActive ? 'blue-nav--active' : ''}`)} className="container" style={{ backgroundColor: '#FDFBF5', borderBottom: '3px solid #3E86C1' }}>
                <img src="../assets/Images/Calendar_Icon_Grey" alt="Calendar_Icon_Grey" className="icon"></img>
                <p className="section-name">Calendar</p>
            </NavLink>

            <NavLink to="/ShoppingList" className={({ isActive }) => (`pink-nav ${isActive ? 'pink-nav--active' : ''}`)} style={{ backgroundColor: '#FDFBF5', borderBottom: '3px solid #DC5F7D' }}>
                <img src="../assets/Images/Compra_Icon_Grey" alt="Compra_Icon_Grey" className="icon" />
                <p className="section-name">Compra</p>
            </NavLink>
        </div>
    );
}

export default NavHeader;