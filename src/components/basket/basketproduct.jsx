import React from "react";

const Basketproduct = ({id, image, description, newprice, oldprice,deleteProduct }) => {
    
  function fromBasketDelete() {
    deleteProduct(id)
  }

  console.log(id);
  

  return (
    <div className="w-[70%] h-auto justify-evenly p-3 rounded-[12px]" id="basket">
      <div className="flex  justify-evenly  items-center ">
        <div>
          <img className="w-[150px]" src={image} alt="" />
        </div>

        <div>
          <h1 className="text-[24px] font-[400] w-[500px]">{description}</h1>
        </div>

        <div>
          <p className="line-through text-[#4d4f59] text-[15px]">
            {oldprice} so'm
          </p>
          <p className="text-3xl text-[#7f4dff] pt-2"> {newprice} so'm</p>
        <button className="cursor-pointer" onClick={fromBasketDelete}>
          <i className="fa-solid fa-trash text-red-500"></i>
        </button>
        </div>

      </div>
    </div>
  );
};

export default Basketproduct;