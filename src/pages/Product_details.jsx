import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router";

const Product_details = () => {
      const product = useLoaderData();
      const {
            category,
            condition,
            created_at,
            description,
            email,
            image,
            location,
            price_max,
            price_min,
            seller_contact,
            seller_image,
            seller_name,
            status,
            title,
            usage,
            _id,
      } = product;

      return (
            <section className="w-11/12 mx-auto my-32.5 grid grid-cols-1 md:grid-cols-7 gap-10 items-center">
                  {/* back to product */}
                  <Link
                        to={-1}
                        className="flex items-center gap-2 font-semibold md:hidden"
                  >
                        <FaArrowLeft /> Back to products
                  </Link>
                  {/* product description */}
                  <div className="col-span-4 md:col-span-3 space-y-8">
                        <figure className="h-96 md:h-150">
                              <img
                                    src={image}
                                    alt=""
                                    className="h-full w-full object-cover rounded-xl"
                              />
                        </figure>
                        {/* product description */}
                        <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col gap-2">
                              <h1 className="text-2xl font-semibold pb-6">
                                    Product Description
                              </h1>
                              <div className="flex flex-row justify-between">
                                    <h3 className="font-semibold capitalize">
                                          <span className="primary-color">
                                                Condition:
                                          </span>
                                          {condition}
                                    </h3>
                                    <h3 className="font-semibold capitalize">
                                          <span className="primary-color">
                                                Usage Time:
                                          </span>
                                          {usage}
                                    </h3>
                              </div>
                              <span className="divider m-0"></span>
                              <p className="text-secondary">{description}</p>
                        </div>
                  </div>
                  {/* product & seller information */}
                  <div className="col-span-4 space-y-5">
                        <Link
                              to={-1}
                              className="md:flex items-center gap-2 font-semibold hidden"
                        >
                              <FaArrowLeft /> Back to products
                        </Link>
                        <h1 className="text-2xl md:text-5xl font-bold">
                              {title}
                        </h1>
                        <span className="badge bg-purple-200 text-purple-600 border-none p-3 rounded-full">
                              {category}
                        </span>
                        {/* product price */}
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                              <h3 className="text-green-400 font-bold">
                                    <span>&#2547;</span>
                                    {price_min} - {price_max}
                              </h3>
                              <span>Price starts from</span>
                        </div>
                        {/* product details */}
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                              <h3 className="font-bold text-2xl pb-5">
                                    Product Details
                              </h3>
                              <p>
                                    <span className="font-bold">
                                          Product ID:
                                    </span>{" "}
                                    {_id}
                              </p>
                              <p>
                                    <span className="font-bold">Posted:</span>{" "}
                                    {created_at.slice(0, 10)}
                              </p>
                        </div>
                        {/* seller information */}
                        <div className="bg-white p-6 rounded-xl shadow-sm space-y-3">
                              <h3 className="font-bold text-2xl pb-2">
                                    Seller Information
                              </h3>
                              <div className="flex flex-row items-center gap-4">
                                    <figure className="w-14 h-14">
                                          <img
                                                src={seller_image}
                                                alt=""
                                                className="w-full h-full object-cover rounded-full"
                                          />
                                    </figure>
                                    <div className="flex flex-col">
                                          <span className="font-semibold">
                                                {seller_name}
                                          </span>
                                          <span className="text-gray-500">
                                                {email}
                                          </span>
                                    </div>
                              </div>
                              <h3 className="font-semibold">
                                    Location:{" "}
                                    <span className="font-normal">
                                          {location}
                                    </span>
                              </h3>
                              <h3 className="font-semibold">
                                    Contact:{" "}
                                    <span className="font-normal">
                                          {seller_contact}
                                    </span>
                              </h3>
                              <h3 className="font-semibold">
                                    Status:
                                    <span className="badge badge-warning font-normal">
                                          {status}
                                    </span>
                              </h3>
                        </div>
                        <button className="btn primary-background w-full">
                              I want to Buy This Product
                        </button>
                  </div>
            </section>
      );
};

export default Product_details;
