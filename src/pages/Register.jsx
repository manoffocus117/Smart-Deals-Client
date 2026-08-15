import React, { use } from "react";
import { Link } from "react-router";
import { Auth_context } from "../context/Auth_context";

const Register = () => {
      const handle_register_form = (event) => {
            event.preventDefault();
            const form = event.target;
            const name = form.name.value;
            const email = form.email.value;
            const image_url = form.image_url.value;
            const password = form.password.value;
            event.target.reset();
      };

      // auth context
      const { sign_in_with_google } = use(Auth_context);

      // handler for google sign in
      const handle_google_sign_in = () => {
            sign_in_with_google()
                  .then((result) => {
                        console.log(result.user);
                  })
                  .catch((error) => {
                        console.log(error);
                  });
      };

      return (
            <section className="w-11/12 mx-auto py-30 flex flex-col items-center justify-center">
                  <div className="bg-white w-123 border-base-300 rounded-box border p-10 space-y-2">
                        <form
                              onSubmit={handle_register_form}
                              className="fieldset"
                        >
                              <div className="space-y-3">
                                    <h1 className="text-4xl font-semibold text-center">
                                          Register
                                    </h1>
                                    <p className="text-[1rem] text-center">
                                          Already have an account?{" "}
                                          <Link
                                                to={"/login"}
                                                className="primary-color"
                                          >
                                                Login Now
                                          </Link>
                                    </p>
                              </div>

                              {/* name field */}
                              <fieldset className="fieldset">
                                    <label className="label text-[1rem] font-medium">
                                          Name
                                    </label>
                                    <input
                                          name="name"
                                          type="text"
                                          className="input validator w-full outline-none"
                                          placeholder="name"
                                          required
                                    />
                                    <p className="validator-hint hidden">
                                          Required
                                    </p>
                              </fieldset>

                              {/* email field */}
                              <fieldset className="fieldset">
                                    <label className="label text-[1rem] font-medium">
                                          Email
                                    </label>
                                    <input
                                          name="email"
                                          type="email"
                                          className="input validator w-full outline-none"
                                          placeholder="Email"
                                          required
                                    />
                                    <p className="validator-hint hidden">
                                          Required
                                    </p>
                              </fieldset>

                              {/* image url field */}
                              <fieldset className="fieldset">
                                    <label className="label text-[1rem] font-medium">
                                          Image URL
                                    </label>
                                    <input
                                          name="image_url"
                                          type="url"
                                          className="input validator w-full outline-none"
                                          placeholder="Image URL"
                                          required
                                    />
                                    <span className="validator-hint hidden">
                                          Required
                                    </span>
                              </fieldset>

                              {/* password field */}
                              <fieldset className="fieldset">
                                    <label className="label text-[1rem] font-medium">
                                          Password
                                    </label>
                                    <input
                                          name="password"
                                          type="password"
                                          className="input validator w-full outline-none"
                                          placeholder="Password"
                                          required
                                    />
                                    <span className="validator-hint hidden">
                                          Required
                                    </span>
                              </fieldset>

                              {/* submit button */}
                              <button
                                    className="btn primary-background text-[1rem] text-white font-medium mt-2"
                                    type="submit"
                              >
                                    Register
                              </button>
                        </form>
                        <div className="divider w-full text-[1rem] font-semibold py-6">
                              OR
                        </div>

                        {/* register with google button */}
                        <button
                              onClick={handle_google_sign_in}
                              className="btn bg-white text-black text-[1rem] border-[#e5e5e5] w-full"
                        >
                              <svg
                                    aria-label="Google logo"
                                    width="16"
                                    height="16"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                              >
                                    <g>
                                          <path
                                                d="m0 0H512V512H0"
                                                fill="#fff"
                                          ></path>
                                          <path
                                                fill="#34a853"
                                                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                                          ></path>
                                          <path
                                                fill="#4285f4"
                                                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                                          ></path>
                                          <path
                                                fill="#fbbc02"
                                                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                                          ></path>
                                          <path
                                                fill="#ea4335"
                                                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                                          ></path>
                                    </g>
                              </svg>
                              Register with Google
                        </button>
                  </div>
            </section>
      );
};

export default Register;
