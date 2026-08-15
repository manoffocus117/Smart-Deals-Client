import React from "react";
import { FaSearch } from "react-icons/fa";

const Hero = () => {
      return (
            <section className="hero-bg">
                  <div className="w-11/12 mx-auto min-h-[60%] flex flex-col items-center justify-center gap-5">
                        <h1 className="text-7xl w-1/2 text-center font-bold">
                              Deal your{" "}
                              <span className="primary-color">Products</span> in
                              a <span className="primary-color">Smart</span> way
                              !
                        </h1>
                        <p className="text-xl text-gray-500">
                              SmartDeals helps you sell, resell, and shop from
                              trusted local sellers — all in one place!
                        </p>
                        <div className="join w-137.5">
                              <input
                                    className="input join-item w-full rounded-l-full outline-none"
                                    placeholder="search For Products, Categories..."
                              />
                              <button className="btn join-item rounded-r-full primary-background text-white font-semibold">
                                    <FaSearch />
                              </button>
                        </div>
                        <div className="space-x-4">
                              <button className="btn primary-background text-white rounded">
                                    Watch All Products
                              </button>
                              <button className="btn gradient-btn">
                                    Post an Product
                              </button>
                        </div>
                  </div>
            </section>
      );
};

export default Hero;
