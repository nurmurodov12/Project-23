import React from "react";
import logo from "../../image/image.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="max-w-[1400px]  h-auto mx-auto">
      <div
        className="w-full h-auto flex justify-evenly items-center  bg-white w-full  top-0 left-0 fixed z-40"
        id="header-nav"
      >
        <div >
          <img className="w-[120px]" src={logo} alt="" />
        </div>

        <div >
          <ul className="flex gap-8">
            <li>
              <NavLink
                className="text-[#70737C] text-[14px] font-normal uppercase  hover:text-[#a3a3a5]"
                to={"/"}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-[#70737C] text-[14px] font-normal uppercase  hover:text-[#a3a3a5]"
                to={"/products"}
              >
                All Products
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-[#70737C] text-[14px] font-normal uppercase  hover:text-[#a3a3a5]"
                to="/about"
              >
                About Ananas Market
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-[#70737C] text-[14px] font-normal uppercase hover:text-[#a3a3a5] "
                to={"/contact"}
              >
                CONTACTS
              </NavLink>
            </li>
            <li>
              <a
                className="text-[#70737C] text-[14px] font-normal uppercase hover:text-[#a3a3a5] "
                href="#"
              >
                FAQ
              </a>
            </li>
          </ul>
        </div>

        <div className="flex gap-3.5 items-center">
          <div className="flex gap-3">
            <i className=" cursor-pointer fa-brands fa-instagram text-[#70737C] text-[20px]"></i>
            <i className=" cursor-pointer fa-brands fa-telegram text-[#70737C] text-[20px]"></i>
            <i className=" cursor-pointer fa-brands fa-twitter text-[#70737C] text-[20px]"></i>
          </div>

          <form className="w-[285px] border border-[#EFEFEF] rounded-[71px] h-[48px] flex pl-5">
            <button>
              <i className="fa-solid fa-magnifying-glass text-[#70737C]"></i>
            </button>
            <input
              className="outline-0 pl-3 placeholder:text-[14px]"
              type="text"
              placeholder="Search"
            />
          </form>

          <div className="flex gap-6 text-[#359740]">
            <i className="fa-regular fa-heart cursor-pointer"></i>
            <NavLink
              className="fa-solid fa-cart-shopping cursor-pointer"
              to={"/basket"}
            ></NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
