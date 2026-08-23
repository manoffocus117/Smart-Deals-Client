import React, { use, useEffect, useState } from "react";
import { Auth_context } from "./../context/Auth_context";

const My_bids = () => {
      // user data
      const { user } = use(Auth_context);

      // state for holding bids data
      const [bids, set_bids] = useState([]);

      // loading user bids data
      useEffect(() => {
            // checking user is login
            if (user?.email) {
                  fetch(`http://localhost:3000/bids?email=${user.email}`)
                        .then((res) => res.json())
                        .then((data) => set_bids(data));
            }
      }, [user?.email]);

      return (
            <section className="w-11/12 mx-auto">
                  <h1 className="primary-color text-5xl">
                        My_bids : {bids.length}
                  </h1>
            </section>
      );
};

export default My_bids;
