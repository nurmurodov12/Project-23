import React from "react";

const Contact = () => {
  return (
    <div className="container">
      <h1 className="text-2xl pt-[70px] pl-[70px] text-[#ed239f99] text-center pb-5">
        Sign Up
      </h1>
      <div className="flex justify-center">
        <form
          id="form-contact"
          className="border-[#008000] border rounded-2xl  w-[500px] p-[20px] flex flex-col gap-6 items-center mb-7"
        >
          <div className="flex flex-col w-full gap-2">
            <label className="font-light">Enter your name:</label>
            <input
              type="text"
              placeholder="Example:John"
              className="w-full border-2 border-[#a3a3a5] p-2 rounded-[8px] outline-0"
            />
          </div>

          <div className="flex flex-col w-full gap-2">
            <label className="font-light">Enter your surname:</label>
            <input
              type="text"
              placeholder="Example:Smith"
              className="w-full border-2 border-[#a3a3a5] p-2 rounded-[8px] outline-0"
            />
          </div>

          <div className="flex flex-col w-full gap-2">
            <label className="font-light">Enter your phone number:</label>
            <input
              type="tel"
              placeholder="Example:+998 12 345 67 89"
              className="w-full border-2 border-[#a3a3a5] p-2 rounded-[8px] outline-0"
            />
          </div>

          <div className="flex flex-col w-full gap-2">
            <label className="font-light">Write me:</label>
            <textarea
              className="w-full border-2 border-[#a3a3a5] p-2 rounded-[8px] outline-0"
              placeholder=" Example: Hi Temur..."
            ></textarea>
          </div>

          <div className="flex flex-col w-full gap-2">
            <button className="button-contact">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
