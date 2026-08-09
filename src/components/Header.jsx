import React from "react";
import { RiMenu5Fill } from "react-icons/ri";
import { Link, NavLink } from "react-router";

const Header = () => {
      const links = (
            <>
                  <li>
                        <NavLink to={"/"}>Home</NavLink>
                  </li>
                  <li>
                        <NavLink to={"/all-products"}>All products</NavLink>
                  </li>
                  <li>
                        <NavLink to={"/my-products"}>My products</NavLink>
                  </li>
                  <li>
                        <NavLink to={"/my-bids"}>My Bids</NavLink>
                  </li>
                  <li>
                        <NavLink to={"/create-product"}>Create Product</NavLink>
                  </li>
            </>
      );

      return (
            <header className="w-11/12 mx-auto">
                  <nav className="navbar">
                        <div className="navbar-start">
                              <Link to={"/"} className="text-[2rem] font-bold">
                                    Smart
                                    <span className="primary-color">Deals</span>
                              </Link>
                        </div>
                        <div className="navbar-center hidden lg:flex">
                              <ul className="menu gap-8 menu-horizontal px-1">
                                    {links}
                              </ul>
                        </div>
                        <div className="navbar-end gap-3">
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
                                                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                                      />
                                                </div>
                                          </div>
                                          <ul
                                                tabIndex="-1"
                                                className="menu menu-sm dropdown-content bg-base-100 rounded z-1 mt-5 w-52 p-2 shadow"
                                          >
                                                <li>
                                                      <a>Profile</a>
                                                </li>
                                                <li>
                                                      <a>Settings</a>
                                                </li>
                                                <li>
                                                      <a>Logout</a>
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
                                          <ul className="menu gap-3 px-1">
                                                {links}
                                          </ul>
                                    </ul>
                              </div>
                        </div>
                  </nav>
            </header>
      );
};

export default Header;
