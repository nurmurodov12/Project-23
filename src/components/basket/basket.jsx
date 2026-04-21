import React, { useEffect, useState } from "react";
import Product from "./../products/product";
// import Basket from './basket';
import Basketproduct from "./basketproduct";

const Basket = (props) => {
  const [product, setProduct] = useState(props.arra);
  const [fakerProduct, setFakerProduct] = useState(props.arra);

  const deleteProduct = (id) => {
    const filterItem = product.filter((val) => {
      return val.id !== id;
    });

    setProduct(filterItem);
  };

  return (
    <div className="container pb-6 mt-[100px]">
      <div className="flex  items-center gap-5 p-7">
        <h1 className="text-2xl">
          Savatingiz,{" "}
          <span className="text-[#7e818c]">{product.length} ta mahsulot</span>
        </h1>
      </div>
      {product.length > 0 ? (
        <span>
          <p className="text-[#4d4f59] text-[14px] font-[400] pl-[25px]">
            Ananas Market yetkazib berishi{" "}
          </p>
          <h1 className="font-[500] text-[18px] pl-[25px] pt-2 pb-4">
            Tanlangan vaqt yetkazamiz
          </h1>
        </span>
      ) : (
        <p className="pl-2">"Savatingiz hozircha bo'sh"</p>
      )}
      <div className="w-[full] flex flex-col gap-4">
        {product.map((val) => {
          return (
            <Basketproduct
              key={val.id}
              image={val.image}
              description={val.description}
              newprice={val.newprice}
              oldprice={val.newprice}
              id={val.id}
              deleteProduct={deleteProduct}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Basket;
