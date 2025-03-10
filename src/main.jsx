import { ChakraProvider } from "@chakra-ui/react";
import { system } from "@chakra-ui/react/preset";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import "./index.css";
import App from "./pages/App.jsx";
import PersonalBlogs from "./pages/PersonalBlogs";
import LearningBlogs from "./pages/learningBlogs.jsx";
import Events from "./pages/events.jsx";
import Projects from "./pages/projects.jsx";
import Cv from "./pages/cv.jsx";
import CatProj from "./pages/catProj.jsx";
import Tamassa from "./pages/PersonalBlogs/tamassa.jsx";
import React from "react";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<App />} />
        <Route path="catproject" element={<CatProj />} />
        <Route path="personalblogs" element={<PersonalBlogs />} />
        <Route path="learningblogs" element={<LearningBlogs />} />
        <Route path="events" element={<Events />} />
        <Route path="cv" element={<Cv />} />
        <Route path="projects" element={<Projects />} />
        <Route path="tamassa" element={<Tamassa />} />
      </Routes>
    </AnimatePresence>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ChakraProvider value={system}>
      <Router>
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            <AnimatedRoutes />
          </motion.div>
        </AnimatePresence>
      </Router>
    </ChakraProvider>
  </StrictMode>
);
