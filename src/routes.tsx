import { createBrowserRouter } from 'react-router-dom';
import { App } from './App.tsx';
import { ShoppingList } from './pages/ShoppingList.tsx';
import { Calendar } from './pages/Calendar.tsx';
import { CreateRecipe } from './pages/CreateRecipe.tsx';
import { Recipes } from './pages/Recipes.tsx';
import { Home } from './pages/Home.tsx';
import { Header } from './components/header.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/Header',
        element: <Header />,
      },
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/Recipes',
        element: <Recipes />,
      },
      {
        path: '/CreateRecipe',
        element: <CreateRecipe />,
      },
      {
        path: '/Calendar',
        element: <Calendar />,
      },
      {
        path: '/ShoppingList',
        element: <ShoppingList />,
      },
      {
        path: '/patterns.tsx',
        element: <div>Patterns</div>,
      },
    ],
  },
]);
