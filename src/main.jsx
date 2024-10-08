import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./page/home/Home.jsx";
import App from "./App.jsx";
import Inscription from "./page/inscription/Inscription.jsx";
import Connexion from "./page/connexion/connexion.jsx";
import Moncompte from "./page/moncompte/Moncompte.jsx";
import "./index.css";

const API = import.meta.env.VITE_API_KEY;

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: async () =>
          fetch(
            `https://api.thecatapi.com/v1/images/search?limit=10&has_breeds=1&api_key=${API}`,
          ),
      },
      { path: "/inscription", element: <Inscription /> },
      { path: "/connexion", element: <Connexion /> },
      { path: "/account", element: <Moncompte /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);
