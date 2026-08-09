import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Hero from "../pages/Hero";
import All_products from "../pages/All_products";

const router = createBrowserRouter([
      {
            path: "/",
            Component: Root,
            children: [
                  {
                        index: true,
                        Component: Hero,
                  },
                  {
                        path: "all-products",
                        Component: All_products,
                  },
            ],
      },
]);

export default router;
