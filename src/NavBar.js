import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
export default function NavBar() {
  const [menuToggle, setMenuToggle] = useState(false);
  const [socialToggle, setSocialToggle] = useState(false);
  const [headerFixed, setHeaderFixed] = useState(false);
  let links = [
    {
      name: "HOME",
      link: "/",
    },
    {
      name: "PAGES",
      link: "/page",
    },
    {
      name: "Blog",
      link: "/blog",
    },
    {
      name: "SHOP",
      link: "/shop",
    },
    {
      name: "ABOUT",
      link: "/about",
    },
    {
      name: "CONTACT US",
      link: "/contact",
    },
  ];
  // add Listeners();
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      setHeaderFixed(true);
    } else {
      setHeaderFixed(false);
    }
  });
  return (
    <>
      {/* header-section */}
      <header
        className={` bg-white  header-section mb-5  style-4 ${
          headerFixed ? "header-fixed fadeInUp" : ""
        }`}
      >
        <div
          className={` header-top d-md-none bg-white  ${
            socialToggle ? "open" : ""
          }`}
        >
          <div className="container">
            <div className=" d-flex  justify-content-between ">
              <NavLink to="/signup" className="lab-btn me-3">
                <span>create Account</span>
              </NavLink>
              <NavLink to="/login" className="lab-btn me-3">
                lOG IN
              </NavLink>
            </div>
          </div>
        </div>
        {/* header bottom  */}
        <div className="header-bottom">
          <div className="container">
            <div className="header-wrapper">
              {/* logo  */}
              <div className="logo-search-acte">
                <div className="logo">
                  <Link to="/">
                    <img src="logo_dark (1).png" alt="logo-website" />
                  </Link>
                </div>
              </div>
              {/* menu area  */}
              <div className="menu-area">
                <div className="menu">
                  <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>
                    {links.map((link) => (
                      <li>
                        <NavLink
                          to={link.link}
                          className="text-gray-700 block px-2 py-2 rounded-md text-base font-medium "
                        >
                          {link.name}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* sig in & log in  */}
                <Link to="/signup" className="lab-btn  me-3 d-none d-md-block ">
                  Create Account
                </Link>
                <Link to="/login" className="d-none  d-md-block ">
                  LOG IN
                </Link>
                <Link to="/cart-page" className=" m-2 ">
                  <i class="icofont-cart-alt icon"></i>
                </Link>
                {/* menu toggler  */}
                <div
                  onClick={() => setMenuToggle(!menuToggle)}
                  className={`header-bar d-lg-none ${
                    menuToggle ? "active" : ""
                  }`}
                >
                  <span className="icon_menu"></span>
                  <span className="icon_menu"></span>
                  <span className="icon_menu"></span>
                </div>
                {/* social togger  */}
                <div
                  className="ellepsis-bar d-md-none "
                  onClick={() => setSocialToggle(!socialToggle)}
                >
                  <i class="icofont-login icons"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* <Outlet /> */}
    </>
  );
}
