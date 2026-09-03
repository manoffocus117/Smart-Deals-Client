import React, { use, useEffect, useRef, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router";
import { Auth_context } from "../context/Auth_context";
import Swal from "sweetalert2";
import axios from "axios";

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
            _id: product_id,
      } = product;

      // state for product bids
      const [product_bids, set_product_bids] = useState([]);

      // bid modal reference
      const bid_modal_ref = useRef(null);

      // user data from auth context
      const { user } = use(Auth_context);

      // handler for bid modal open
      const handle_modal_open = () => {
            bid_modal_ref.current.showModal();
      };

      // handler for bid modal close
      const handle_modal_close = () => {
            bid_modal_ref.current.close();
      };

      // handler for bid submit
      const handle_bid_submit = (event) => {
            event.preventDefault();

            const form = event.target;
            const name = form.name.value;
            const email = form.email.value;
            const amount = form.bid_amount.value;
            const contact = form.phone_number.value;

            event.target.reset();

            const new_bid = {
                  product: product_id,
                  buyer_name: name,
                  buyer_email: email,
                  buyer_image: user?.photoURL,
                  buyer_contact: contact,
                  bid_price: Number(amount),
                  status: "Pending",
            };

            // send bids data to the server/database
            fetch("https://smart-deals-server-inky.vercel.app/bids", {
                  method: "POST",
                  headers: {
                        "content-type": "application/json",
                  },
                  body: JSON.stringify(new_bid),
            })
                  .then((res) => res.json())
                  .then((data) => {
                        if (data.insertedId) {
                              Swal.fire({
                                    title: "Success",
                                    text: "You bid has been Placed!",
                                    icon: "success",
                              });

                              // close modal after form submit
                              bid_modal_ref.current.close();

                              // add new bid to the state
                              new_bid._id = data.insertedId;
                              const new_bids = [...product_bids, new_bid];
                              new_bids.sort(
                                    (a, b) => b.bid_price - a.bid_price,
                              );
                              set_product_bids(new_bids);
                        } else {
                              Swal.fire({
                                    title: "Error",
                                    text: "Something went wrong",
                                    icon: "error",
                              });
                        }
                  });
      };

      // getting bids api for a product
      // useEffect(() => {
      //       fetch(`https://smart-deals-server-inky.vercel.app/products/bids/${product_id}`, {
      //             headers: {
      //                   authorization: `Bearer ${user.accessToken}`,
      //             },
      //       })
      //             .then((res) => res.json())
      //             .then((data) => set_product_bids(data));
      // }, [product_id, user]);

      // loading bids data for a product using axios
      useEffect(() => {
            axios.get(
                  `https://smart-deals-server-inky.vercel.app/products/bids/${product_id}`,
            ).then((data) => {
                  console.log("after axios get request", data);
            });
      }, [product_id]);

      return (
            <>
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
                                          alt={title}
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
                                    <p className="text-secondary">
                                          {description}
                                    </p>
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
                                          {product_id}
                                    </p>
                                    <p>
                                          <span className="font-bold">
                                                Posted:
                                          </span>{" "}
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
                              {/* place bid button */}
                              <button
                                    className="btn primary-background w-full"
                                    onClick={handle_modal_open}
                              >
                                    I want to Buy This Product
                              </button>
                              {/* dialog box for bid */}
                              <dialog
                                    ref={bid_modal_ref}
                                    className="modal modal-center sm:modal-middle"
                              >
                                    <div className="modal-box">
                                          <h3 className="font-bold text-center text-2xl mb-4">
                                                Give Seller Your Offered Price
                                          </h3>
                                          <form
                                                onSubmit={handle_bid_submit}
                                                className="fieldset space-y-3"
                                          >
                                                {/* buyer name & email field */}
                                                <fieldset className="flex flex-col md:flex-row justify-between">
                                                      {/* buyer name field */}
                                                      <fieldset className="fieldset">
                                                            <label className="label text-black text-sm font-medium">
                                                                  Buyer Name
                                                            </label>
                                                            <input
                                                                  name="name"
                                                                  type="text"
                                                                  className="input validator w-full outline-none"
                                                                  defaultValue={
                                                                        user?.displayName
                                                                  }
                                                                  readOnly
                                                            />
                                                      </fieldset>

                                                      {/* buyer email field */}
                                                      <fieldset className="fieldset">
                                                            <label className="label text-black text-sm font-medium">
                                                                  Buyer Email
                                                            </label>
                                                            <input
                                                                  name="email"
                                                                  type="email"
                                                                  className="input validator w-full outline-none"
                                                                  defaultValue={
                                                                        user?.email
                                                                  }
                                                                  readOnly
                                                            />
                                                      </fieldset>
                                                </fieldset>

                                                {/* buyer image url field */}
                                                <fieldset className="fieldset">
                                                      <label className="label text-black text-sm font-medium">
                                                            Buyer Image URL
                                                      </label>
                                                      <input
                                                            name="buyer_image"
                                                            type="url"
                                                            className="input validator w-full outline-none"
                                                            defaultValue={
                                                                  user?.photoURL
                                                            }
                                                            readOnly
                                                      />
                                                      <span className="validator-hint hidden">
                                                            Required
                                                      </span>
                                                </fieldset>

                                                {/* bid amount field */}
                                                <fieldset className="fieldset">
                                                      <label className="label text-black text-sm font-medium">
                                                            Place your Price
                                                      </label>
                                                      <input
                                                            name="bid_amount"
                                                            type="number"
                                                            className="input validator w-full outline-none"
                                                            placeholder="Place your Price"
                                                            required
                                                      />
                                                      <span className="validator-hint hidden">
                                                            Required
                                                      </span>
                                                </fieldset>

                                                {/* contact info field */}
                                                <fieldset className="fieldset">
                                                      <label className="label text-black text-sm font-medium">
                                                            Contact Info
                                                      </label>
                                                      <input
                                                            name="phone_number"
                                                            type="number"
                                                            className="input validator w-full outline-none"
                                                            placeholder="Phone Number"
                                                            required
                                                      />
                                                      <span className="validator-hint hidden">
                                                            Required
                                                      </span>
                                                </fieldset>

                                                {/* form action */}
                                                <div className="flex items-center justify-end gap-5 mt-5">
                                                      {/* cancel button */}
                                                      <span
                                                            className="btn gradient-btn outline-none"
                                                            onClick={
                                                                  handle_modal_close
                                                            }
                                                      >
                                                            Cancel
                                                      </span>
                                                      {/* submit button */}
                                                      <button
                                                            className="btn primary-background text-[1rem] text-white font-medium outline-none"
                                                            type="submit"
                                                      >
                                                            Submit Bid
                                                      </button>
                                                </div>
                                          </form>
                                    </div>
                              </dialog>
                        </div>
                  </section>
                  {/* bids for a product */}
                  <section className="w-11/12 mx-auto pb-32.5">
                        <h1 className="text-5xl font-bold mb-10 capitalize">
                              bids for this product:{" "}
                              <span className="primary-color">
                                    {product_bids.length}
                              </span>
                        </h1>
                        <div className="overflow-x-auto">
                              <table className="table">
                                    {/* head */}
                                    <thead className="bg-base-200">
                                          <tr>
                                                <th>SL No.</th>
                                                <th>Buyer</th>
                                                <th>Bid Price</th>
                                                <th>Actions</th>
                                          </tr>
                                    </thead>
                                    <tbody>
                                          {/* row 1 */}
                                          {product_bids.map((bid, index) => (
                                                <tr key={bid._id}>
                                                      <th>{index + 1}</th>
                                                      {/* buyer */}
                                                      <td>
                                                            <div className="flex items-center gap-3">
                                                                  <div className="avatar">
                                                                        <div className="mask rounded-full h-12 w-12">
                                                                              <img
                                                                                    src={
                                                                                          bid.buyer_image
                                                                                    }
                                                                                    alt={
                                                                                          bid.buyer_name
                                                                                    }
                                                                              />
                                                                        </div>
                                                                  </div>
                                                                  <div>
                                                                        <div className="font-bold">
                                                                              {
                                                                                    bid.buyer_name
                                                                              }
                                                                        </div>
                                                                        <div className="text-sm opacity-50">
                                                                              {
                                                                                    bid.buyer_email
                                                                              }
                                                                        </div>
                                                                  </div>
                                                            </div>
                                                      </td>
                                                      {/* bid amount */}
                                                      <td>
                                                            <span>&#2547;</span>{" "}
                                                            <span>
                                                                  {
                                                                        bid.bid_price
                                                                  }
                                                            </span>
                                                      </td>
                                                      {/* bid actions */}
                                                      <th className="space-x-2">
                                                            <button className="btn btn-outline btn-success">
                                                                  Accept Offer
                                                            </button>
                                                            <button className="btn btn-outline btn-warning">
                                                                  Reject Offer
                                                            </button>
                                                      </th>
                                                </tr>
                                          ))}
                                    </tbody>
                              </table>
                        </div>
                  </section>
            </>
      );
};

export default Product_details;
