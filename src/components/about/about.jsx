import React from "react";
import me from "../../image/me.jpg";

const About = () => {
  return (
    <div className="container p-[40px]">
      <div className="w-[600px] h-auto bg-emerald-100 p-7 rounded-2xl">
        <div className="flex items-center">
          <h1>Users</h1>
          <i className="fa-solid fa-chevron-down"></i>
        </div>

        <div className="pt-5 flex justify-evenly">
          <div
            className="w-[150px] bg-[#f3f3f3] rounded-[10px] h-auto p-4 "
            id="rating"
          >
            <p className="text-[30px] text-center text-[#70737C]">15k+</p>
            <p className="text-[15px] font-normal text-[#70737C]  text-center pt-2 font-light">
              Happy Customer
            </p>
          </div>

          <div
            className="w-[150px] h-auto p-4 bg-[#f3f3f3] rounded-[10px]"
            id="rating"
          >
            <p className="text-[30px] text-center text-[#70737C]">12k+</p>
            <p className="text-[15px] font-normal text-[#70737C]  text-center pt-2 font-light">
              Ticket Solved
            </p>
          </div>

          <div
            className="w-[150px] bg-[#f3f3f3] rounded-[10px] h-auto p-4"
            id="rating"
          >
            <p className="text-[30px] text-center text-[#70737C]">9/10</p>
            <p className="text-[15px] font-normal  text-[#70737C] text-center pt-2 font-light">
              Average Rating
            </p>
          </div>
        </div>
      </div>

      <div className="pt-20">
        <div className="flex justify-center gap-[100px] items-center">
          <div>
            <img src={me} className="w-[250px] rounded-2xl" alt="" />
          </div>

          <div>
            <div className="flex items-center gap-2">
              <p className="text-[#888888] text-[16px] font-semibold tracking-[2px]">
                ABOUT ME
              </p>
              <span className="w-[80px] bg-[#ed239f99] h-[4px] blur-[4px]"></span>
            </div>

            <h1 className="text-[42px] w-[600px] font-extrabold leading-[50px]">
              Creative and exuberant developer
            </h1>
            <h1 className="w-[400px] pt-4 text-[#888] tracking-[1px]">
              I am Mr Temur I am 16 years old.I am birth at the Kattakurgan.My
              work is write code.My hobby is sleep.I junior
              programmer.Programming Language: JavaScript, React.js, Tailwind
              css, Sass for now. I very love the programmer !!!
            </h1>
            <button className="flex items-center cursor-pointer mt-4 gap-3.5" id={"call"}>
              <a href="https://t.me/TNfrontend">Call me</a>
              <i className="fa-brands fa-telegram"></i>

            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
