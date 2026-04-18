import React, { useEffect, useState } from "react";
import Product from "./../products/product";

const Products = ({ addToCart }) => {
  const [data, setData] = useState([]);
  const [handleChange, setHandleChange] = useState("");
  const [fakerData, setFakerData] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // API data
    const fetchData = async () => {
      const response = await fetch(
        "https://69c558688a5b6e2dec2c41b6.mockapi.io/imtihon",
      );

      const responseJson = await response.json();
      setData(responseJson);
      setFakerData(responseJson);
    };

    fetchData();
  }, []);

  const search = (e) => {
    e.preventDefault();

    const filterProduct = fakerData.filter((val) => {
      return val.description.toLowerCase().includes(handleChange.toLowerCase());
    });

    setData(filterProduct);
  };

  const sortAz = () => {
    const sorted = [...data].sort((a, b) => {
      return a.description.localeCompare(b.description);
    });
    setData(sorted);
  };

  const sortZA = () => {
    const sorted = [...data].sort((a, b) => {
      return b.description.localeCompare(a.description);
    });

    setData(sorted);
  };


  return (
    <div className="w-[100%] h-auto pt-[70px] pb-10 pl-10">
      <div className="flex items-center gap-4">
        <h1 className="font-semibold text-[36px]">Our Products</h1>
        <i className="fa-solid fa-arrow-right text-[35px]"></i>
      </div>

      <form
        className="w-[350px] flex border rounded items-center  p-3 mb-6"
        onSubmit={search}
      >
        <input
          type="text"
          placeholder="Which are you need product ?"
          className="w-full outline-0"
          onChange={(e) => {
            setHandleChange(e.target.value);
          }}
        />
        <button className="cursor-pointer border p-1 rounded bg-gray-600 text-white active:bg-gray-500 ">
          Search
        </button>
      </form>

      <div className="flex gap-10">
        <button id="button-33" onClick={sortAz}>
          Filter (A-Z)
        </button>

        <button id="button-33" onClick={sortZA}>
          Filter (Z-A)
        </button>
      </div>

      <div className="w-full h-auto grid grid-cols-5 pl-15 pt-[50px] gap-x-[20px] gap-y-[70px]">
        {data.map((val) => {
          return (
            <Product
              id={val.id}
              image={val.image}
              discount={val.discount}
              starts={val.starts}
              description={val.description}
              key={val.id}
              credit={val.credit}
              oldprice={val.oldprice}
              newprice={val.newprice}
              addToCart={addToCart}
              key={val.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Products;
