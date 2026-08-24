import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router";

const Create_product = () => {
      const handle_create_product = (event) => {
            event.preventDefault();
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
                        <fieldset className="fieldset flex">
                              <fieldset className="fieldset w-full">
                                    <label className="label" htmlFor="title">
                                          Title
                                    </label>
                                    <input
                                          type="text"
                                          id="title"
                                          className="input w-full"
                                          placeholder="Name of Product"
                                    />
                              </fieldset>
                              <fieldset className="fieldset w-full">
                                    <label htmlFor="category">Category</label>
                                    <select
                                          id="category"
                                          className="select w-full"
                                          defaultValue="Select Category"
                                    >
                                          <option disabled>
                                                Select Category
                                          </option>
                                          <option>Crimson</option>
                                          <option>Amber</option>
                                          <option>Velvet</option>
                                    </select>
                              </fieldset>
                        </fieldset>

                        {/* min price & max price */}
                        <fieldset className="fieldset flex">
                              <fieldset className="fieldset w-full">
                                    <label
                                          className="label"
                                          htmlFor="min-price"
                                    >
                                          Min Price
                                    </label>
                                    <input
                                          type="text"
                                          id="min-price"
                                          className="input w-full"
                                          placeholder="Min Price"
                                    />
                              </fieldset>
                              <fieldset className="fieldset w-full">
                                    <label
                                          className="label"
                                          htmlFor="max-price"
                                    >
                                          Max Price
                                    </label>
                                    <input
                                          type="text"
                                          id="max-price"
                                          className="input w-full"
                                          placeholder="Max Price"
                                    />
                              </fieldset>
                        </fieldset>

                        {/* product condition & usage */}
                        <fieldset className="fieldset flex items-center">
                              <fieldset className="w-full flex flex-col gap-2">
                                    <label>Product Condition</label>
                                    <fieldset className="flex items-center gap-2 w-full">
                                          <input
                                                type="radio"
                                                name="radio-1"
                                                id="brand-new"
                                                className="radio"
                                          />
                                          <label
                                                className="label"
                                                htmlFor="brand-new"
                                          >
                                                Brand New
                                          </label>
                                          <input
                                                type="radio"
                                                name="radio-1"
                                                id="used"
                                                className="radio"
                                          />
                                          <label
                                                className="label"
                                                htmlFor="used"
                                          >
                                                Used
                                          </label>
                                    </fieldset>
                              </fieldset>
                              <fieldset className="fieldset w-full">
                                    <label
                                          className="label"
                                          htmlFor="product-usage"
                                    >
                                          Product Usage Time
                                    </label>
                                    <input
                                          type="text"
                                          id="product-usage"
                                          className="input w-full"
                                          placeholder="Product Usage Time"
                                    />
                              </fieldset>
                        </fieldset>

                        {/* product image url */}
                        <fieldset className="fieldset w-full">
                              <label htmlFor="">Product Image URL</label>
                              <label className="input validator w-full">
                                    <input
                                          type="url"
                                          required
                                          placeholder="https://"
                                          value="https://"
                                          pattern="^(https?://)?([a-zA-Z0-9]([a-zA-Z0-9\-].*[a-zA-Z0-9])?\.)+[a-zA-Z].*$"
                                          title="Must be valid URL"
                                    />
                              </label>
                              <p className="validator-hint">
                                    Must be valid URL
                              </p>
                        </fieldset>

                        {/* seller name & email */}
                        <fieldset className="fieldset flex">
                              <fieldset className="fieldset w-full">
                                    <label
                                          className="label"
                                          htmlFor="seller-name"
                                    >
                                          Seller Name
                                    </label>
                                    <input
                                          type="text"
                                          id="seller-name"
                                          className="input w-full"
                                          placeholder="Name"
                                    />
                              </fieldset>
                              <fieldset className="fieldset w-full">
                                    <label
                                          className="label"
                                          htmlFor="seller-email"
                                    >
                                          Seller Email
                                    </label>
                                    <input
                                          type="text"
                                          id="seller-email"
                                          className="input w-full"
                                          placeholder="Email"
                                    />
                              </fieldset>
                        </fieldset>

                        {/* seller contact & image url */}
                        <fieldset className="fieldset flex">
                              <fieldset className="fieldset w-full">
                                    <label
                                          className="label"
                                          htmlFor="seller-contact"
                                    >
                                          Seller Name
                                    </label>
                                    <input
                                          type="text"
                                          id="seller-contact"
                                          className="input w-full"
                                          placeholder="01234567890"
                                    />
                              </fieldset>
                              <fieldset className="fieldset w-full">
                                    <label htmlFor="">Seller Image URL</label>
                                    <label className="input validator w-full">
                                          <input
                                                type="url"
                                                required
                                                placeholder="https://"
                                                value="https://"
                                                pattern="^(https?://)?([a-zA-Z0-9]([a-zA-Z0-9\-].*[a-zA-Z0-9])?\.)+[a-zA-Z].*$"
                                                title="Must be valid URL"
                                          />
                                    </label>
                                    <p className="validator-hint">
                                          Must be valid URL
                                    </p>
                              </fieldset>
                        </fieldset>

                        {/* seller location */}
                        <fieldset className="fieldset w-full">
                              <label htmlFor="">Location</label>
                              <input
                                    type="url"
                                    className="input w-full"
                                    required
                                    placeholder="Street, City, Country"
                              />
                        </fieldset>

                        {/* product description */}
                        <fieldset className="fieldset w-full">
                              <legend className="fieldset-legend">
                                    Simple Description about your Product
                              </legend>
                              <textarea
                                    className="textarea h-24 w-full"
                                    placeholder=""
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
