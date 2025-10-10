// App.tsx
import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import { Layout } from "./components/Layout";
import RestrictPages from "./components/RestrictPages";
import { AuthProvider } from "./context/AuthProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <HelmetProvider>
        <Layout />
      </HelmetProvider>
    ),
    children: [
      {
        path: "/",
        Component: React.lazy(() => import("./pages/Home")),
      },
      {
        path: "/about-us",
        Component: React.lazy(() => import("./pages/AboutUs")),
      },
      {
        path: "/services",
        Component: React.lazy(() => import("./pages/Services")),
      },
      {
        path: "/contact-us",
        Component: React.lazy(() => import("./pages/ContactUs")),
      },
      {
        path: "*",
        Component: React.lazy(() => import("./pages/NotFound")),
      },
    ],
  },
  {
    path: "/admin",
    element: (
      <AuthProvider>
        <RestrictPages />,
      </AuthProvider>
    ),
    children: [
      {
        path: "mail",
        Component: React.lazy(() => import("./pages/MailSystem")),
      },
    ],
  },
  {
    path: "/admin/auth",
    element: (
      <AuthProvider>
        <RestrictPages requireAuth={false} />
      </AuthProvider>
    ),
    children: [
      {
        path: "login",
        Component: React.lazy(() => import("./auth/Login")),
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}

export default App;
