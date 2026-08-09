import React from "react";
import { RiMenu5Fill } from "react-icons/ri";

const Header = () => {
      return (
            <header>
                  <nav className="navbar bg-base-100 shadow-sm">
                        <div className="navbar-start">
                              <a className="text-xl">Smart Deals</a>
                        </div>
                        <div className="navbar-center hidden lg:flex">
                              <ul className="menu gap-8 menu-horizontal px-1">
                                    <li>Home</li>
                                    <li>All Products</li>
                                    <li>My Products</li>
                                    <li>My Bids</li>
                                    <li>Create Product</li>
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
                                                <li>Home</li>
                                                <li>All Products</li>
                                                <li>My Products</li>
                                                <li>My Bids</li>
                                                <li>Create Product</li>
                                          </ul>
                                    </ul>
                              </div>
                        </div>
                  </nav>
            </header>
      );
};

export default Header;
