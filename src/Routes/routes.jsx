import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Project from "../Pages/Project";
import Main from "../Layouts/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/project/:id", element: <Project /> },
    ],
  },
]);
