import React, { use } from "react";
import { RiMenu5Fill } from "react-icons/ri";
import { Link, NavLink } from "react-router";
import { Auth_context } from "../context/Auth_context";

const Header = () => {
      // user
      const { user, sign_out_user } = use(Auth_context);

      // navbar links
      const links = (
            <>
                  <li>
                        <NavLink to={"/"}>Home</NavLink>
                  </li>
                  <li>
                        <NavLink to={"/all-products"}>All products</NavLink>
                  </li>
                  {/* conditional routes */}
                  {user && (
                        <>
                              <li>
                                    <NavLink to={"/my-products"}>
                                          My products
                                    </NavLink>
                              </li>
                              <li>
                                    <NavLink to={"/my-bids"}>My Bids</NavLink>
                              </li>
                        </>
                  )}
                  <li>
                        <NavLink to={"/create-product"}>Create Product</NavLink>
                  </li>
            </>
      );

      // handler for sign out user
      const handle_sign_out = () => {
            sign_out_user()
                  .then((result) => {
                        alert("user signed out successfully");
                  })
                  .catch((error) => {
                        alert(error.message);
                  });
      };

      return (
            <header className="w-11/12 mx-auto py-2">
                  <nav className="navbar p-0">
                        <div className="navbar-start">
                              <Link to={"/"} className="text-[2rem] font-bold">
                                    Smart
                                    <span className="primary-color">Deals</span>
                              </Link>
                        </div>
                        <div className="navbar-center hidden lg:flex">
                              <ul className="menu gap-8 menu-horizontal px-1 font-medium">
                                    {links}
                              </ul>
                        </div>
                        <div className="navbar-end gap-3">
                              {/* conditional navbar item user profile & login, sign up button */}
                              {user ? (
                                    // user profile
                                    <>
                                          <div className="flex gap-2">
                                                <div className="dropdown dropdown-end">
                                                      <div
                                                            tabIndex={0}
                                                            role="button"
                                                            className="btn btn-ghost btn-circle avatar"
                                                      >
                                                            <div className="w-10 rounded-full">
                                                                  <img
                                                                        alt="User image"
                                                                        src={
                                                                              user
                                                                                    ? user.photoURL
                                                                                    : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                                                        }
                                                                  />
                                                            </div>
                                                      </div>
                                                      <ul
                                                            tabIndex="-1"
                                                            className="menu menu-sm dropdown-content bg-base-100 rounded z-1 mt-5 w-52 p-2 shadow font-medium"
                                                      >
                                                            <li>
                                                                  <NavLink
                                                                        to={
                                                                              "/profile"
                                                                        }
                                                                  >
                                                                        Profile
                                                                  </NavLink>
                                                            </li>
                                                            <li>
                                                                  <button
                                                                        onClick={
                                                                              handle_sign_out
                                                                        }
                                                                  >
                                                                        Logout
                                                                  </button>
                                                            </li>
                                                      </ul>
                                                </div>
                                          </div>
                                          <div className="dropdown dropdown-end lg:hidden">
                                                <div
                                                      tabIndex={0}
                                                      role="button"
                                                      className="btn text-2xl border-none p-0 lg:hidden"
                                                >
                                                      <RiMenu5Fill />
                                                </div>
                                                <ul
                                                      tabIndex="-1"
                                                      className="menu menu-sm dropdown-content bg-base-100 rounded z-1 mt-5 w-52 p-2 shadow"
                                                >
                                                      <ul className="menu gap-3 px-1 font-medium">
                                                            {links}
                                                      </ul>
                                                </ul>
                                          </div>
                                    </>
                              ) : (
                                    // login & sign up button
                                    <>
                                          <Link
                                                to={"/login"}
                                                className={
                                                      "gradient-btn px-4 py-3"
                                                }
                                          >
                                                Login
                                          </Link>
                                          <Link
                                                to={"/register"}
                                                className={
                                                      "primary-background rounded px-4 py-3 text-white"
                                                }
                                          >
                                                Register
                                          </Link>
                                    </>
                              )}
                        </div>
                  </nav>
            </header>
      );
};

export default Header;
