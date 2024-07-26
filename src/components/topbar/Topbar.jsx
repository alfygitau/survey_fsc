import React from "react";
import { useNavigate } from "react-router-dom";

const Topbar = () => {
  const navigate = useNavigate();
  return (
    <div className="h-[120px] bg-[#fff] shadow-md w-full">
      <div className="w-[80%] h-full mx-auto">
        <div className="h-full flex items-center lg:justify-between sm:flex-col sm:gap-[10px]">
          <img
            onClick={() => navigate("/")}
            className="h-[75%] cursor-pointer"
            src="/lal_logo2-1.png"
            alt="logo"
          />
          <div className="flex items-center gap-[20px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 32 32"
            >
              <g
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              >
                <circle cx="16" cy="11" r="4" />
                <path d="M24 15c-3 7-8 15-8 15s-5-8-8-15s2-13 8-13s11 6 8 13" />
              </g>
            </svg>
            <p className="text-[15px] text-[#000]">
              Apple Wood, Off Ngong Road, Nairobi
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
