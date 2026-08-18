import React from "react";

const Product_card = ({ product }) => {
      const { title, price_min, price_max, image, usage } = product;
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
                              {title} - <span className="text-sm">{usage}</span>
                        </h2>
                        <p>
                              <span>&#2547;</span>
                              {price_min} - {price_max}
                        </p>
                        <div className="card-actions">
                              <button className="btn primary-background w-full">
                                    Buy Now
                              </button>
                        </div>
                  </div>
            </div>
      );
};

export default Product_card;
