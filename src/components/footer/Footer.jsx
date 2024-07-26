import React from "react";

const Footer = () => {
  return (
    <div className="h-[200px] bg-[#21293B] flex items-center">
      <div className="w-[80%] border-b border-white mx-auto flex flex-col justify-end items-center h-full">
        <img
          className="h-[100px] w-[100px] mb-[10px]"
          src="/lliffton-Logo.png"
          alt="logo"
        />
        <p className="text-white w-full text-center text-[24px]">
          Making markets work better for farmers
        </p>
      </div>
    </div>
  );
};

export default Footer;
