import React, { useState, useEffect } from "react";
import Basket from "./../basket/basket";

const Product = ({
  id,
  image,
  discount,
  description,
  starts,
  credit,
  oldprice,
  newprice,
  basket,
  addToCart,
}) => {
  
  function productAdd() {
    const obj = {
      id: id,
      image: image,
      discount: discount,
      description: description,
      starts: starts,
      credit: credit,
      oldprice: oldprice,
      newprice: newprice,
    };
    addToCart(obj);
  }

  return (
    <div className="p-2 rounded-2xl" id="product">
      <div className="relative">
        <img
          src={image}
          className="w-[100%] h-[294px] object-cover rounded-2xl rounded-b-[0]"
          alt=""
        />
        {discount ? (
          <p className="absolute bottom-1 left-2 bg-[#7000FF] py-1 px-1 rounded text-white">
            Exsclusive
          </p>
        ) : (
          <p className="absolute bottom-1 left-2 py-1 px-1 rounded text-white bg-[#3B007D]">
            Discount
          </p>
        )}
      </div>

      {description.length > 65 ? (
        <p className="text-[13px] font-normal pt-3 h-[40px]">
          {description.slice(0, 65)}...
        </p>
      ) : (
        <p className="text-[13px] pt-3 h-[40px]">{description}</p>
      )}

      <div className="flex items-center pt-3 gap-1.5">
        <i className="fa-solid fa-star text-[#FFB54C] text-[11px] font-light"></i>
        <p className="text-[#8B8E99] text-[11.2px] font-light">{starts}</p>
        <p className="text-[#8B8E99] text-[11.2px] font-light">
          ({Math.floor(Math.random() * 4000)} sharh)
        </p>
      </div>

      <div className="pt-0.5">
        <span className="bg-[#FFFF00] text-[11px] p-1 rounded">
          {credit} so'm/oyiga
        </span>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex flex-col pt-5">
          <p className="text-[12px] text-[#8B8E99] line-through">
            {oldprice} so'm
          </p>
          <p className="text-[#1F2026] text-[14px]">{newprice} so'm</p>
        </div>

        <div className=" cursor-pointer w-[42px] h-[42px] rounded-[50%] border-2 p-2 border-[#36364033] flex justify-center items-center">
          <button onClick={productAdd}>
            <i className="fa-solid fa-cart-plus cursor-pointer"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
