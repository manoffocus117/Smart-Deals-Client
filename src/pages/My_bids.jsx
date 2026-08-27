import React, { use, useEffect, useState } from "react";
import { Auth_context } from "./../context/Auth_context";
import Swal from "sweetalert2";

const My_bids = () => {
      // user data
      const { user } = use(Auth_context);

      // state for holding bids data
      const [bids, set_bids] = useState([]);

      // loading user bids data
      useEffect(() => {
            // checking user is login
            if (user?.email) {
                  fetch(`http://localhost:3000/bids?email=${user.email}`, {
                        headers: {
                              authorization: `Bearer ${user.accessToken}`,
                        },
                  })
                        .then((res) => res.json())
                        .then((data) => set_bids(data));
            }
      }, [user]);

      const handle_remove_bid = (_id) => {
            Swal.fire({
                  title: "Are you sure?",
                  text: "You won't be able to revert this!",
                  icon: "warning",
                  showCancelButton: true,
                  confirmButtonColor: "#3085d6",
                  cancelButtonColor: "#d33",
                  confirmButtonText: "Yes, delete it!",
            }).then((result) => {
                  if (result.isConfirmed)
                        // deleting bid
                        fetch(`http://localhost:3000/bids/${_id}`, {
                              method: "DELETE",
                        })
                              .then((res) => res.json())
                              .then((data) => {
                                    if (data.deletedCount) {
                                          Swal.fire({
                                                title: "Deleted!",
                                                text: "Your bid has been deleted.",
                                                icon: "success",
                                          });

                                          // removing bid from ui
                                          const remaining_bids = bids.filter(
                                                (bid) => bid._id !== _id,
                                          );
                                          set_bids(remaining_bids);
                                    }
                              });
            });
      };

      return (
            <section className="w-11/12 mx-auto pb-32.5">
                  <h1 className="text-5xl font-bold mb-10 capitalize text-center">
                        My Bids :{" "}
                        <span className="primary-color">{bids.length}</span>
                  </h1>
                  <div className="overflow-x-auto">
                        <table className="table">
                              {/* head */}
                              <thead className="bg-base-200">
                                    <tr>
                                          <th>SL No.</th>
                                          <th>Product</th>
                                          <th>Seller</th>
                                          <th>Bid Price</th>
                                          <th>Status</th>
                                          <th>Actions</th>
                                    </tr>
                              </thead>
                              <tbody>
                                    {/* row 1 */}
                                    {bids.map((bid, index) => (
                                          <tr key={bid._id}>
                                                <th>{index + 1}</th>
                                                {/* product */}
                                                <td>
                                                      <div className="flex items-center gap-3">
                                                            <div className="avatar">
                                                                  <div className="mask rounded-full h-12 w-12">
                                                                        <img
                                                                              src={
                                                                                    bids.buyer_image
                                                                              }
                                                                              alt={
                                                                                    bids.buyer_name
                                                                              }
                                                                        />
                                                                  </div>
                                                            </div>
                                                            <div>
                                                                  <div className="font-bold">
                                                                        {
                                                                              bids.buyer_name
                                                                        }
                                                                  </div>
                                                                  <div className="text-sm opacity-50">
                                                                        {
                                                                              bids.buyer_email
                                                                        }
                                                                  </div>
                                                            </div>
                                                      </div>
                                                </td>
                                                {/* seller info */}
                                                <td>
                                                      <span>&#2547;</span>{" "}
                                                      <span>
                                                            {bids.bid_price}
                                                      </span>
                                                </td>
                                                {/* bid price */}
                                                <td>
                                                      <span>&#2547;</span>{" "}
                                                      <span>
                                                            {bid.bid_price}
                                                      </span>
                                                </td>
                                                {/* status */}
                                                <td>
                                                      {bid.status ===
                                                      "success" ? (
                                                            <span className="badge badge-success">
                                                                  {bid.status}
                                                            </span>
                                                      ) : (
                                                            <span className="badge badge-warning">
                                                                  {bid.status}
                                                            </span>
                                                      )}
                                                </td>
                                                {/* bid actions */}
                                                <th>
                                                      <button
                                                            onClick={() =>
                                                                  handle_remove_bid(
                                                                        bid._id,
                                                                  )
                                                            }
                                                            className="btn btn-outline btn-error"
                                                      >
                                                            Remove Bid
                                                      </button>
                                                </th>
                                          </tr>
                                    ))}
                              </tbody>
                        </table>
                  </div>
            </section>
      );
};

export default My_bids;
