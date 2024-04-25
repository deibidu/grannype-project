import { NavLink, Outlet } from "react-router-dom";
import "./sass/style.scss";
import "./sass/colors.scss";
import ListaCompra from "./pages/lista-de-compras";
import Calendario from "./pages/calendario";

export const App = () => {
  return (
    <div>
      <div className="menu">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/recetario">Recetario</NavLink>
        <NavLink to="/calendario">Calendario</NavLink>
        <NavLink to="/lista-de-compras">Lista de la Compra</NavLink>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
