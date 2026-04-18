import React from "react";
import { Outlet } from "react-router-dom";
import Products from "./../products/products";
import logo from "../../image/image.png";

const Asosiy = ({ addToCart }) => {
  return (
    <div className="container pt-10">
      <div className="">
        <div className="w-[1000px] h-auto p-[30px] bg-[#EAF1EB] rounded-[15px] flex items-center gap-10 ml-30">
          <div>
            <h1 className="text-[30px] w-[650px] font-semibold">
              ANANAS MARKET Basil Seeds for Indoor and Outdoor Market
            </h1>
            <p className="w-[560px] font-light text-[16px] pt-3">
              Be sure of our quality - the freshest batches of this season.
              Non-GMO, Heirloom - our seeds were tested and have the best
              germination ratings. Your easy growing experience is our guarantee
            </p>
            <div className="pt-8 flex items-center gap-5">
              <i className="fa-solid fa-fire text-[30px] text-[#E55C5C]"></i>
              <h1 className="text-[42px] ">$1300</h1>
              <p className="text-[25px] line-through text-[#70737C]">$1500</p>
            </div>
          </div>

          <img className="w-[250px]" src={logo} alt="" />
        </div>
      </div>

      <div>
        <Products addToCart={addToCart} />
      </div>
    </div>
  );
};

export default Asosiy;
