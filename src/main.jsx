import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./page/home/Home.jsx";
import App from "./App.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        // loader: async () => fetch(`${URL}/api/films`),
      },
      // { path: "/inscription", element: <Inscription /> },
      // { path: "/connection", element: <Connection /> },
      // { path: "/account", element: <Account /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
