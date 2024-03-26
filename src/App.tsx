import { NavLink, Outlet } from "react-router-dom";

export const App = () => {
  return (
    <div>
      <div className="menu">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/recetario">Recetario</NavLink>
        <NavLink to="/calendario">Calendario</NavLink>
        <NavLink to="/lista-compra">Lista de la Compra</NavLink>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
