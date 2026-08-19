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
import Private_route from "../providers/Private_route";
import Product_details from "./../pages/Product_details";

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
                        path: "product-details/:id",
                        Component: Product_details,
                  },
                  {
                        path: "my-products",
                        element: (
                              <Private_route>
                                    <My_products />
                              </Private_route>
                        ),
                  },
                  {
                        path: "my-bids",
                        element: (
                              <Private_route>
                                    <My_bids />
                              </Private_route>
                        ),
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
