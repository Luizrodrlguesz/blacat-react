import React, { Children } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "../error";
import Home from "../home";
import Female from "../female";
import Male from "../male";

const Main = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      Children: [
        { path: "../male", element: <Male /> },
        { path: "../female", element: <Female /> },
      ],
    },
    { path: "*", element: <Error /> },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
export default Main;
