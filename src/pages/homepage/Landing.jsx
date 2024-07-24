import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col w-full gap-[20px] justify-center h-[650px]">
      <div className="w-[60%] mx-auto">
        <div className="mb-[40px]">
          <p className="text-left">Farmers Service Centres (FSC) Survey</p>
          <p>Training Needs Assessment (TNA) questionnaire</p>
        </div>
        <div className="w-[40%]">
          <div className="flex flex-col w-full mx-auto gap-[20px]">
            <div>
              <p>Select your occupation</p>
              <select
                class="min-h-[50px] px-[10px] w-full text-[14px] rounded-[5px] border px-[10px] border-gray-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-primary-110"
                name="occupations"
                id="occupations"
              >
                <option value="ac">Agribusiness Coordinator</option>
                <option value="en">Enumerator</option>
              </select>
            </div>
            <div>
              <p>Select your Farm service centre</p>
              <select
                class="min-h-[50px] px-[10px] w-full text-[14px] rounded-[5px] border px-[10px] border-gray-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-primary-110"
                name="occupations"
                id="occupations"
              >
                <option value="kenedy">Kennedy Babu</option>
                <option value="alfred">Alfred Kariuki</option>
              </select>
            </div>
            <div className="w-full">
              <button
                onClick={() => navigate("/education")}
                className="h-[50px] bg-gray-300 w-full"
              >
                Proceed
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
