import React from "react";
import logo from "../../image/image.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div
      className="container pt-4 flex items-center justify-evenly "
      id="header-nav"
    >
      <div>
        <ul className="flex gap-8">
          <li>
            <NavLink
              className="text-[#70737C] text-[14px] font-normal uppercase  hover:text-[#a3a3a5]"
              to={"/products"}
            >
              All Products
            </NavLink>
          </li>
          <li>
            <a
              className="text-[#70737C] text-[14px] font-normal uppercase  hover:text-[#a3a3a5]  "
              href="#"
            >
              ABOUT ANANAS MARKET
            </a>
          </li>
          <li>
            <a
              className="text-[#70737C] text-[14px] font-normal uppercase hover:text-[#a3a3a5] "
              href="#"
            >
              CONTACTS
            </a>
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

      <div>
        <img className="w-[120px]" src={logo} alt="" />
      </div>

      <div className="flex gap-5 items-center">
        <div className="flex gap-3">
          <i className=" cursor-pointer fa-brands fa-instagram text-[#70737C] text-[20px]"></i>
          <i className=" cursor-pointer fa-brands fa-telegram text-[#70737C] text-[20px]"></i>
          <i className=" cursor-pointer fa-brands fa-twitter text-[#70737C] text-[20px]"></i>
        </div>

        <ul className="flex gap-8">
          <li>
            <a
              href=""
              className="text-[#70737C] text-[14px] font-normal uppercase  hover:text-[#a3a3a5]"
            >
              Terms&Conditions
            </a>
          </li>
          <li>
            <a
              href=""
              className="text-[#70737C] text-[14px] font-normal uppercase  hover:text-[#a3a3a5]"
            >
              Privacy Policy
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
