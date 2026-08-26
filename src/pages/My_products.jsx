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
                        My Products:{" "}
                        <span className="primary-color">
                              {my_products.length}
                        </span>
                  </h1>
                  <div className="overflow-x-auto">
                        <table className="table">
                              {/* head */}
                              <thead>
                                    <tr>
                                          <th>SL No</th>
                                          <th>Image</th>
                                          <th>Product Name</th>
                                          <th>Category</th>
                                          <th>Price</th>
                                          <th>Status</th>
                                          <th className="w-70">Actions</th>
                                    </tr>
                              </thead>
                              <tbody>
                                    {/* row 1 */}
                                    {my_products.map((product, index) => (
                                          <tr key={product._id}>
                                                <td>{index + 1}</td>
                                                <td>
                                                      <img
                                                            src={product.image}
                                                            alt={product.title}
                                                            className="h-12 w-12 rounded-full"
                                                      />
                                                </td>
                                                <td>{product.title}</td>
                                                <td>{product.category}</td>
                                                <td>
                                                      <span>&#2547;</span>{" "}
                                                      <span>
                                                            {product.price_min}
                                                      </span>{" "}
                                                      -{" "}
                                                      <span>
                                                            {product.price_max}
                                                      </span>
                                                </td>
                                                <td>
                                                      <span className="badge badge-warning">
                                                            {product.status}
                                                      </span>
                                                </td>
                                                <td className="w-70 flex flex-row gap-3 mt-2">
                                                      <button className="btn btn-sm btn-outline btn-primary">
                                                            Edit
                                                      </button>
                                                      <button className="btn btn-sm btn-outline btn-error">
                                                            Delete
                                                      </button>
                                                      <button className="btn btn-sm btn-outline btn-success">
                                                            Make Sold
                                                      </button>
                                                </td>
                                          </tr>
                                    ))}
                              </tbody>
                        </table>
                  </div>
            </section>
      );
};

export default My_products;
