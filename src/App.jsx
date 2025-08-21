import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import HomePage from "./pages/HomePage";
import AboutPage from "./components/About/Aboutpage";
import ContactPage from "./components/ContactPage";
import Panel from "./components/Panel";
import ProblemPage from "./components/ProblemPage";
import Roadmap from "./components/Roadmap";
import AuthPage from "./pages/AuthPage";
import Login from "./components/Login";
import Signup from "./components/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "contact", element: <ContactPage /> },

      // Problem page must come before :level
      { path: ":level/:topic/:problem", element: <ProblemPage /> },

      // Panel for level
      { path: ":level", element: <Panel /> },

      // Roadmap page
      { path: "roadmap/:level", element: <Roadmap /> },

      // Authentication routes
      {
        path: "auth",
        element: <AuthPage />,
        children: [
          { index: true, element: <Login /> },
          { path: "login", element: <Login /> },
          { path: "signup", element: <Signup /> },
        ],
      },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;