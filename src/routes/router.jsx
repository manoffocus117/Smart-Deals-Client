import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Hero from "../pages/Hero";
import All_products from "../pages/All_products";
import My_products from "../pages/My_products";
import My_bids from "../pages/My_bids";
import Create_product from "../pages/Create_product";
import Login from "../pages/Login";
import Register from "../pages/Register";

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
                  {
                        path: "my-products",
                        Component: My_products,
                  },
                  {
                        path: "my-bids",
                        Component: My_bids,
                  },
                  {
                        path: "create-product",
                        Component: Create_product,
                  },
                  {
                        path: "login",
                        Component: Login,
                  },
                  {
                        path: "register",
                        Component: Register,
                  },
            ],
      },
]);

export default router;
