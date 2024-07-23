import React, { useState } from "react";
import { useNavigate } from "react-router";

const PersonalInformation = () => {
  const [name, setName] = useState("");
  const [county, setCounty] = useState("");
  const [subcounty, setSubcounty] = useState("");
  const [ward, setWard] = useState("");
  const [village, setVillage] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [valueChain, setValueChain] = useState("");
  const navigate = useNavigate();

  const createPersonalInformation = async () => {
    navigate("/education");
  };
  return (
    <div className="w-[60%] sm:w-[95%] sm:h-full sm:my-[20px] mx-auto flex flex-col w-[100vw] h-[100vh] justify-center items-center">
      <div>FARM TO MARKET ALLIANCE</div>
      <div className="mb-[30px] w-full">
        <p className="text-center">Farmers Service Centres (FSC) Survey</p>
        <p className="text-center">
          Training Needs Assessment (TNA) questionnaire
        </p>
      </div>
      <div className="flex w-full sm:flex-col justify-between">
        <div className="flex flex-col w-[45%] sm:w-full">
          <p className="text-left text-[14px] mb-[10px] font-bold">
            Personal Data
          </p>
          <div className="w-full mb-[20px]">
            <label className="text-[14px] text-left" htmlFor="name">
              FSC Name
            </label>
            <input
              type="text"
              placeholder="Enter fsc name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              class="h-[50px] w-full text-[14px] rounded-[5px] border px-[10px] border-gray-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-primary-110"
            />
          </div>
          <div className="w-full mb-[10px]">
            <label className="text-[14px] text-left" htmlFor="name">
              County
            </label>
            <input
              type="text"
              placeholder="Enter your county"
              value={county}
              onChange={(e) => setCounty(e.target.value)}
              class="h-[50px] w-full text-[14px] rounded-[5px] border px-[10px] border-gray-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-primary-110"
            />
          </div>
          <div className="w-full mb-[10px]">
            <label className="text-[14px] text-left" htmlFor="name">
              SubCounty
            </label>
            <input
              type="text"
              placeholder="Enter your subcounty"
              value={subcounty}
              onChange={(e) => setSubcounty(e.target.value)}
              class="h-[50px] w-full text-[14px] rounded-[5px] border px-[10px] border-gray-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-primary-110"
            />
          </div>
          <div className="w-full mb-[10px]">
            <label className="text-[14px] text-left" htmlFor="name">
              Ward
            </label>
            <input
              type="text"
              placeholder="Enter your ward"
              value={ward}
              onChange={(e) => setWard(e.target.value)}
              class="h-[50px] w-full text-[14px] rounded-[5px] border px-[10px] border-gray-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-primary-110"
            />
          </div>
          <div className="w-full mb-[10px]">
            <label className="text-[14px] text-left" htmlFor="name">
              Village
            </label>
            <input
              type="text"
              placeholder="Enter your village name"
              value={village}
              onChange={(e) => setVillage(e.target.value)}
              class="h-[50px] w-full text-[14px] rounded-[5px] border px-[10px] border-gray-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-primary-110"
            />
          </div>
        </div>
        <div className="w-[45%] sm:w-full flex flex-col">
          <p className="text-left text-[14px] mb-[10px] font-bold">
            Contact information
          </p>
          <div className="w-full mb-[20px]">
            <label className="text-[14px] text-left" htmlFor="name">
              Contact mobile
            </label>
            <input
              type="text"
              placeholder="Enter your mobile number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              class="h-[50px] w-full text-[14px] rounded-[5px] border px-[10px] border-gray-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-primary-110"
            />
          </div>
          <div className="w-full mb-[20px]">
            <label className="text-[14px] text-left" htmlFor="name">
              Contact email
            </label>
            <input
              type="text"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              class="h-[50px] w-full text-[14px] rounded-[5px] border px-[10px] border-gray-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-primary-110"
            />
          </div>
          <div className="w-full mb-[20px]">
            <label className="text-[14px] text-left" htmlFor="name">
              Value chain
            </label>
            <input
              type="text"
              placeholder="Enter your value chain"
              value={valueChain}
              onChange={(e) => setValueChain(e.target.value)}
              class="h-[50px] w-full text-[14px] rounded-[5px] border px-[10px] border-gray-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-primary-110"
            />
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-end">
        <button
          onClick={createPersonalInformation}
          className="px-[20px] bg-[#FFE900] h-[50px] text-[#000]"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default PersonalInformation;
