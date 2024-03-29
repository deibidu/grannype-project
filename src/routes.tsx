import { createBrowserRouter } from "react-router-dom";
import { App } from "./App.tsx";

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
        element: <div>Calendario</div>,
      },
      {
        path: "/lista-compra",
        element: <div>Lista de la Compra</div>,
      },
      {
        path: "/patterns.tsx",
        element: <div>Patterns</div>,
      },
    ],
  },
]);
