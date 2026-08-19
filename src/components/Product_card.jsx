import React from "react";
import { Link } from "react-router";

const Product_card = ({ product }) => {
      const { _id, title, price_min, price_max, image, usage } = product;
      return (
            <div className="card bg-base-100 lg:w-110 md:w-80 mx-auto shadow-sm">
                  <figure className="m-4 h-72 rounded-xl">
                        <img
                              src={image}
                              alt={title}
                              className="rounded-xl object-cover"
                        />
                  </figure>
                  <div className="card-body">
                        <h2 className="card-title">
                              {title} -{" "}
                              <span className="text-sm">[{usage}]</span>
                        </h2>
                        <p className="primary-color font-semibold">
                              <span>&#2547;</span>
                              {price_min} - {price_max}
                        </p>
                        <div className="card-actions">
                              <Link
                                    to={`/product-details/${_id}`}
                                    className="btn gradient-btn hover:primary-background w-full"
                              >
                                    View Details
                              </Link>
                        </div>
                  </div>
            </div>
      );
};

export default Product_card;
