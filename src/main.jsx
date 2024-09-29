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
import PersonalBlogs from "./pages/PersonalBlogs";
import LearningBlogs from "./pages/LearningBlogs";
import Events from "./pages/Events";
import Projects from "./pages/Projects";
import Cv from "./pages/Cv";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "personalblogs",
    element: <PersonalBlogs />,
  },
  {
    path: "learningblogs",
    element: <LearningBlogs />,
  },
  {
    path: "events",
    element: <Events />,
  },
  {
    path: "cv",
    element: <Cv />,
  },
  {
    path: "projects",
    element: <Projects />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
