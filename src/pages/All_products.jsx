import React from "react";
import { useLoaderData } from "react-router";
import Product_card from "../components/Product_card";

const All_products = () => {
      const products = useLoaderData();
      return (
            <section className="w-11/12 mx-auto py-32.5">
                  <h1 className="w-full text-5xl text-center font-bold mb-10">
                        All <span className="primary-color">Products</span>
                  </h1>
                  <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 items-stretch justify-center gap-5">
                        {products.map((product) => (
                              <Product_card
                                    key={product._id}
                                    product={product}
                              />
                        ))}
                  </div>
            </section>
      );
};

export default All_products;
