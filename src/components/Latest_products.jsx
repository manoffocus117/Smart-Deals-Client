import React, { use } from "react";

const Latest_products = ({ latest_products_promise }) => {
      const products = use(latest_products_promise);
      return <div>Latest_products: {products.length}</div>;
};

export default Latest_products;
