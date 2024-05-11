import { NavLink, Outlet } from "react-router-dom";
import "./sass/style.scss";
import "./sass/colors.scss";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import ListaCompra from "./pages/lista-de-compras";
import Calendario from "./pages/calendario";
import Recetario from "./pages/recetario";
import CrearReceta from ".pages/create-recipe";

export const App = () => {
  return (
    <div>
      <Header />
      <div className="menu">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/recetario">Recetario</NavLink>
        <NavLink to="/recetario">Crear receta</NavLink>
        <NavLink to="/calendario">Calendario</NavLink>
        <NavLink to="/lista-de-compras">Lista de la Compra</NavLink>
      </div>
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
