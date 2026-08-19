import React from "react";
import { useLoaderData } from "react-router";

const Product_details = () => {
      const product = useLoaderData();
      console.log(product);
      return <div>Product_details</div>;
};

export default Product_details;
