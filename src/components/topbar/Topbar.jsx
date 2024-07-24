import React from "react";
import { useNavigate } from "react-router-dom";

const Topbar = () => {
  const navigate = useNavigate();
  return (
    <div className="h-[100px] bg-[#5E4F43] shadow-md w-full">
      <div className="w-[80%] h-full mx-auto">
        <div className="h-full flex items-center">
          <img
            onClick={() => navigate("/")}
            className="h-[75%] cursor-pointer"
            src="/logo.png"
            alt="logo"
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
