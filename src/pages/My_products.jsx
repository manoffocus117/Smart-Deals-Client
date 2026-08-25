import React, { use, useEffect, useState } from "react";
import { Auth_context } from "../context/Auth_context";
import Product_card from "../components/Product_card";

const My_products = () => {
      // user data form auth context
      const { user } = use(Auth_context);

      // state for holding my products data
      const [my_products, set_my_products] = useState([]);

      useEffect(() => {
            fetch(`http://localhost:3000/products?email=${user.email}`)
                  .then((res) => res.json())
                  .then((data) => set_my_products(data));
      }, [user?.email]);

      return (
            <section className="w-11/12 mx-auto py-32.5">
                  <h1 className="w-full text-5xl text-center font-bold mb-10">
                        My <span className="primary-color">Products</span>
                  </h1>
                  <div className="grid grid-cols-1 lg:grid-cols-3 items-center space-y-8">
                        {my_products.map((product) => (
                              <Product_card
                                    key={product._id}
                                    product={product}
                              />
                        ))}
                  </div>
            </section>
      );
};

export default My_products;
