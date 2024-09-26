import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
} from "react-router-dom";
import App from "./pages/App.jsx";
import Blogs from "./pages/Blogs";
import Events from "./pages/Events";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "blogs",
    element: <Blogs />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
