// App.tsx
import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { Layout } from "./components/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
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
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
