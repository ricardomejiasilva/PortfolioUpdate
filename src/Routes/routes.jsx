import { createBrowserRouter, createHashRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Project from "../Pages/Project";
import Main from "../Layouts/Main";

export const router = createHashRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/project/:id", element: <Project /> },
    ],
  },
]);
