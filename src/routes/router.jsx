import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Hero from "../pages/Hero";

const router = createBrowserRouter([
      {
            path: "/",
            element: <Root />,
            children: [
                  {
                        path: "/",
                        element: <Hero />,
                  },
            ],
      },
]);

export default router;
