import React, { useState } from "react";
import { useNavigate } from "react-router";

const Education = () => {
  const [primaryLevel, setPrimaryLevel] = useState("");
  const [secondaryLevel, setSecondaryLevel] = useState("");
  const [tertiaryLevel, setTertiaryLevel] = useState("");
  const navigate = useNavigate();

  const createEducationDetails = () => {
    navigate("/trainings");
  };

  return (
    <div className="w-[60%] sm:w-[95%] sm:h-full sm:my-[20px] mx-auto flex flex-col w-[100vw] my-[40px] justify-center items-center">
      <div>FARM TO MARKET ALLIANCE</div>
      <div className="mb-[30px] w-full">
        <p className="text-center">Farmers Service Centres (FSC)</p>
        <p className="text-center font-bold">
          Education, occupation and recent training attended (Please specify)
        </p>
      </div>
      <div className="flex flex-col w-[50%] sm:w-[95%] mx-auto">
        <div className="w-full mb-[20px]">
          <label className="text-[14px] text-left" htmlFor="name">
            Primary
          </label>
          <textarea
            type="text"
            placeholder="Enter primary education level details"
            value={primaryLevel}
            onChange={(e) => setPrimaryLevel(e.target.value)}
            class="min-h-[100px] w-full text-[14px] rounded-[5px] border px-[10px] border-gray-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-primary-110"
          />
        </div>
        <div className="w-full mb-[20px]">
          <label className="text-[14px] text-left" htmlFor="name">
            Secondary
          </label>
          <textarea
            type="text"
            placeholder="Enter secondary education level details"
            value={secondaryLevel}
            onChange={(e) => setSecondaryLevel(e.target.value)}
            class="min-h-[100px] w-full text-[14px] rounded-[5px] border px-[10px] border-gray-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-primary-110"
          />
        </div>
        <div className="w-full mb-[20px]">
          <label className="text-[14px] text-left" htmlFor="name">
            Tertiary/college
          </label>
          <textarea
            type="text"
            placeholder="Enter tertiary education level details"
            value={tertiaryLevel}
            onChange={(e) => setTertiaryLevel(e.target.value)}
            class="min-h-[100px] w-full text-[14px] rounded-[5px] border px-[10px] border-gray-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-primary-110"
          />
        </div>
        <div className="flex items-center mb-[20px] gap-[10px]">
          <input type="checkbox" name="noneLevel" id="noneLevel" />I did not
          attend any education or occupation level training
        </div>
        <button
          onClick={createEducationDetails}
          className="w-full bg-[#FFE900] h-[50px] text-[#000]"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Education;
