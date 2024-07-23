import React from "react";

const Topbar = () => {
  return (
    <div className="h-[100px] bg-[#5E4F43] shadow-md w-full">
      <div className="w-[80%] h-full mx-auto">
        <div className="h-full flex items-center">
          <img className="h-[75%]" src="/logo.png" alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
