import React, { use, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router";
import { Auth_context } from "../context/Auth_context";
import Swal from "sweetalert2";

const Create_product = () => {
      // state for category option value
      const [category_value, set_category_value] = useState("");

      // user data form auth context
      const { user } = use(Auth_context);

      // handler for category option value
      const handle_category_change = (event) => {
            set_category_value(event.target.value);
      };

      const handle_create_product = (event) => {
            event.preventDefault();

            const form = event.target;

            const product_title = form.product_title.value;
            const category = category_value;
            const min_price = form.min_price.value;
            const max_price = form.max_price.value;
            const condition = form.condition.value;
            const usage_time = form.usage_time.value;
            const product_image_url = form.product_image_url.value;
            const seller_name = form.seller_name.value;
            const seller_email = form.seller_email.value;
            const seller_number = form.seller_number.value;
            const seller_image_url = form.seller_image_url.value;
            const seller_location = form.seller_location.value;
            const product_description = form.product_description.value;

            event.target.reset();

            const new_product = {
                  title: product_title,
                  price_min: min_price,
                  price_max: max_price,
                  email: seller_email,
                  category: category,
                  created_at: new Date().toISOString(),
                  image: product_image_url,
                  status: "pending",
                  location: seller_location,
                  seller_image: seller_image_url,
                  seller_name: seller_name,
                  condition: condition,
                  usage: usage_time,
                  description: product_description,
                  seller_contact: seller_number,
            };

            fetch("http://localhost:3000/products", {
                  method: "POST",
                  headers: {
                        "content-type": "application/json",
                  },
                  body: JSON.stringify(new_product),
            })
                  .then((res) => res.json())
                  .then((data) =>
                        Swal.fire({
                              title: "Success",
                              text: "Your product has been created successfully!",
                              icon: "success",
                        }),
                  );
      };
      return (
            <section className="w-11/12 mx-auto py-30 flex flex-col items-center justify-center gap-10">
                  <Link
                        to={"/all-products"}
                        className="flex items-center gap-2"
                  >
                        <FaArrowLeft /> Back to Products
                  </Link>
                  <h1 className="text-5xl font-bold">
                        Create <span className="primary-color">A Product</span>
                  </h1>
                  <form
                        onSubmit={handle_create_product}
                        className="fieldset bg-white w-80 md:w-200 border-base-300 rounded-box border p-10 space-y-2"
                  >
                        {/* product name & category field */}
                        <fieldset className="fieldset flex flex-col md:flex-row">
                              {/* product name */}
                              <fieldset className="fieldset w-full">
                                    <label
                                          className="label font-medium text-black"
                                          htmlFor="title"
                                    >
                                          Title
                                    </label>
                                    <input
                                          name="product_title"
                                          type="text"
                                          id="title"
                                          className="input w-full outline-none"
                                          placeholder="Name of Product"
                                          required
                                    />
                              </fieldset>
                              {/* product category */}
                              <fieldset className="fieldset w-full">
                                    <label
                                          className="font-medium"
                                          htmlFor="category"
                                    >
                                          Category
                                    </label>
                                    <select
                                          id="category"
                                          onChange={handle_category_change}
                                          value={category_value}
                                          className="select w-full outline-none"
                                          required
                                    >
                                          <option value="">
                                                Select a Category
                                          </option>
                                          <option value="camera">Camera</option>
                                          <option value="electronics">
                                                Electronics
                                          </option>
                                          <option value="furniture">
                                                Furniture
                                          </option>
                                          <option value="gaming">Gaming</option>
                                          <option value="music">Music</option>
                                          <option value="office">Office</option>
                                          <option value="sports">Sports</option>
                                    </select>
                              </fieldset>
                        </fieldset>

                        {/* min price & max price field */}
                        <fieldset className="fieldset flex flex-col md:flex-row">
                              {/* min price */}
                              <fieldset className="fieldset w-full">
                                    <label
                                          className="label font-medium text-black"
                                          htmlFor="min-price"
                                    >
                                          Min Price
                                    </label>
                                    <input
                                          name="min_price"
                                          type="number"
                                          id="min-price"
                                          className="input w-full outline-none"
                                          placeholder="Min Price"
                                          required
                                    />
                              </fieldset>
                              {/* max price */}
                              <fieldset className="fieldset w-full">
                                    <label
                                          className="label font-medium text-black"
                                          htmlFor="max-price"
                                    >
                                          Max Price
                                    </label>
                                    <input
                                          name="max_price"
                                          type="number"
                                          id="max-price"
                                          className="input w-full outline-none"
                                          placeholder="Max Price"
                                          required
                                    />
                              </fieldset>
                        </fieldset>

                        {/* product condition & usage field */}
                        <fieldset className="fieldset flex flex-col md:flex-row items-center">
                              {/* product condition */}
                              <fieldset className="w-full flex flex-col gap-2">
                                    <label className="font-medium">
                                          Product Condition
                                    </label>
                                    {/* condition brand new & used */}
                                    <fieldset className="flex items-center gap-2 w-full">
                                          {/* brand new radio */}
                                          <label
                                                className="label"
                                                htmlFor="brand-new"
                                          >
                                                <input
                                                      type="radio"
                                                      name="condition"
                                                      className="radio"
                                                      value="new"
                                                      required
                                                />
                                                Brand New
                                          </label>
                                          {/* used radio */}
                                          <label
                                                className="label"
                                                htmlFor="used"
                                          >
                                                <input
                                                      type="radio"
                                                      name="condition"
                                                      className="radio"
                                                      value="used"
                                                      required
                                                />
                                                Used
                                          </label>
                                    </fieldset>
                              </fieldset>
                              {/* product usage time */}
                              <fieldset className="fieldset w-full">
                                    <label
                                          className="label font-medium text-black"
                                          htmlFor="product-usage"
                                    >
                                          Product Usage Time
                                    </label>
                                    <input
                                          name="usage_time"
                                          type="text"
                                          id="product-usage"
                                          className="input w-full outline-none"
                                          placeholder="e.g. 1 year 3 month"
                                          required
                                    />
                              </fieldset>
                        </fieldset>

                        {/* product image url field */}
                        <fieldset className="fieldset w-full">
                              <label className="font-medium" htmlFor="">
                                    Product Image URL
                              </label>
                              <label className="input w-full outline-none">
                                    <input
                                          name="product_image_url"
                                          type="url"
                                          placeholder="https://"
                                          defaultValue="https://"
                                          pattern="^(https?://)?([a-zA-Z0-9]([a-zA-Z0-9\-].*[a-zA-Z0-9])?\.)+[a-zA-Z].*$"
                                          title="Must be valid URL"
                                          required
                                    />
                              </label>
                        </fieldset>

                        {/* seller name & email field */}
                        <fieldset className="fieldset flex flex-col md:flex-row">
                              {/* seller name */}
                              <fieldset className="fieldset w-full">
                                    <label
                                          className="label font-medium text-black"
                                          htmlFor="seller-name"
                                    >
                                          Seller Name
                                    </label>
                                    <input
                                          name="seller_name"
                                          type="text"
                                          id="seller-name"
                                          className="input w-full outline-none"
                                          placeholder="Name"
                                          defaultValue={user?.displayName}
                                          readOnly
                                    />
                              </fieldset>
                              {/* seller email */}
                              <fieldset className="fieldset w-full">
                                    <label
                                          className="label font-medium text-black"
                                          htmlFor="seller-email"
                                    >
                                          Seller Email
                                    </label>
                                    <input
                                          name="seller_email"
                                          type="text"
                                          id="seller-email"
                                          className="input w-full outline-none"
                                          placeholder="Email"
                                          defaultValue={user?.email}
                                          readOnly
                                    />
                              </fieldset>
                        </fieldset>

                        {/* seller contact & image url field */}
                        <fieldset className="fieldset flex flex-col md:flex-row">
                              {/* seller number */}
                              <fieldset className="fieldset w-full">
                                    <label
                                          className="label font-medium text-black"
                                          htmlFor="seller-contact"
                                    >
                                          Seller Contact
                                    </label>
                                    <input
                                          name="seller_number"
                                          type="number"
                                          id="seller-contact"
                                          className="input w-full outline-none"
                                          placeholder="01234567890"
                                          defaultValue={user?.phoneNumber}
                                    />
                              </fieldset>
                              {/* seller image url */}
                              <fieldset className="fieldset w-full">
                                    <label className="font-medium" htmlFor="">
                                          Seller Image URL
                                    </label>
                                    <label className="input w-full outline-none">
                                          <input
                                                name="seller_image_url"
                                                type="url"
                                                placeholder="https://"
                                                defaultValue={user?.photoURL}
                                                readOnly
                                                pattern="^(https?://)?([a-zA-Z0-9]([a-zA-Z0-9\-].*[a-zA-Z0-9])?\.)+[a-zA-Z].*$"
                                                title="Must be valid URL"
                                          />
                                    </label>
                              </fieldset>
                        </fieldset>

                        {/* seller location field */}
                        <fieldset className="fieldset w-full">
                              <label className="font-medium" htmlFor="location">
                                    Location
                              </label>
                              <input
                                    name="seller_location"
                                    id="location"
                                    type="text"
                                    className="input w-full outline-none"
                                    placeholder="Street, City, Country"
                                    required
                              />
                        </fieldset>

                        {/* product description field */}
                        <fieldset className="fieldset w-full">
                              <legend className="fieldset-legend font-medium">
                                    Simple Description about your Product
                              </legend>
                              <textarea
                                    name="product_description"
                                    className="textarea h-24 w-full outline-none"
                                    placeholder="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate nostrum autem"
                                    required
                              ></textarea>
                        </fieldset>

                        {/* submit button */}
                        <button
                              className="btn primary-background text-[1rem] text-white font-medium mt-2"
                              type="submit"
                        >
                              Create Product
                        </button>
                  </form>
            </section>
      );
};

export default Create_product;
