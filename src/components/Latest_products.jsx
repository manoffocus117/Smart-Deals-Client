import React, { use } from "react";
import Product_card from "./Product_card";

const Latest_products = ({ latest_products_promise }) => {
      const products = use(latest_products_promise);
      return (
            <section className="w-11/12 mx-auto mb-36 ">
                  <h1 className="text-5xl text-center font-bold py-10">
                        Recent <span className="primary-color">Products</span>
                  </h1>
                  <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 items-center justify-center gap-5">
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

export default Latest_products;
