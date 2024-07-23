import React from "react";

const Footer = () => {
  return (
    <div className="h-[160px] bg-[#5E4F43] flex items-center">
      <div className="w-[80%] mx-auto flex gap-[100px] items-center">
        <div>
          <img className="h-[80px]" src="/logo.png" alt="logo" />
        </div>
        <p className="text-white text-[20px]">
          Making markets work better for farmers
        </p>
      </div>
    </div>
  );
};

export default Footer;
