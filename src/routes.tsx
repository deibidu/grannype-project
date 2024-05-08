import { createBrowserRouter } from "react-router-dom";
import { App } from "./App.tsx";
import { ListaCompra } from "./pages/lista-de-compras.tsx";
import { Calendario } from "./pages/calendario.tsx";
import { Recetario } from "./pages/recetario.tsx";
import { Home } from "./pages/Home.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/recetario",
        element: <Recetario />,
      },
      {
        path: "/calendario",
        element: <Calendario />,
      },
      {
        path: "/lista-de-compras",
        element: <ListaCompra />,
      },
      {
        path: "/patterns.tsx",
        element: <div>Patterns</div>,
      },
    ],
  },
]);
