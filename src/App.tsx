// App.tsx
import './App.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout";
import React from 'react';

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
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;