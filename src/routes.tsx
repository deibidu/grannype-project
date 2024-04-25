import { createBrowserRouter } from "react-router-dom";
import { App } from "./App.tsx";
import { ListaCompra } from "./pages/lista-de-compras.tsx";
import { Calendario } from "./pages/calendario.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <div>Home</div>,
      },
      {
        path: "/recetario",
        element: <div>Recetario</div>,
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
