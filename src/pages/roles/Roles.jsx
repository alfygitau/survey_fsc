import React, { useState } from "react";
import { useNavigate } from "react-router";

const Roles = () => {
  const [otherRole, setOtherRole] = useState("");
  const navigate = useNavigate();

  const createRoles = () => {
    navigate("/training-needs");
  };
  return (
    <div className="w-[70%] sm:w-[95%] sm:h-full sm:mt-[20px] mx-auto flex flex-col mt-[40px] justify-center items-center">
      <div>FARM TO MARKET ALLIANCE</div>
      <div className="mb-[40px] w-full">
        <p className="text-center">Farmers Service Centres (FSC) Survey</p>
        <p className="text-center font-bold">
          Roles and responsibility analysis
        </p>
      </div>
      <div className="flex sm:flex-col justify-between w-full">
        <div className="flex flex-col w-[45%] sm:w-[95%] mx-auto">
          <p className="text-[15px] mb-[10px]">
            What are your current roles and responsibility at FSC?
          </p>
          <div className="flex items-center gap-[10px]">
            <div className="flex items-center gap-[10px]">
              <input type="checkbox" name="ag" id="ag" />
              <p className="text-[12px]">Aggregator</p>
            </div>
            <div className="flex items-center gap-[10px]">
              <input type="checkbox" name="ag" id="ag" />
              <p className="text-[12px]">Input distributor</p>
            </div>
            <div className="flex items-center gap-[10px]">
              <input type="checkbox" name="ag" id="ag" />
              <p className="text-[12px]">Special services</p>
            </div>
            <div className="flex items-center gap-[10px]">
              <input type="checkbox" name="ag" id="ag" />
              <p className="text-[12px]">Trainor</p>
            </div>
          </div>
          <div className="flex flex-col mt-[10px] mb-[15px] gap-[10px]">
            <p className="text-[12px]">Other roles (Not specified above)</p>
            <textarea
              type="text"
              placeholder="Describe your specific role"
              value={otherRole}
              onChange={(e) => setOtherRole(e.target.value)}
              class="min-h-[100px] w-full text-[14px] rounded-[5px] border px-[10px] border-gray-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-primary-110"
            />
          </div>
          <div className="flex flex-col mt-[10px] mb-[10px] gap-[10px]">
            <p className="text-[15px] mb-[10px]">
              What skills are required for your role (According to you)?
            </p>
            <textarea
              type="text"
              placeholder="Enter the skills required for your role?"
              value={otherRole}
              onChange={(e) => setOtherRole(e.target.value)}
              class="min-h-[100px] w-full text-[14px] rounded-[5px] border px-[10px] border-gray-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-primary-110"
            />
          </div>
          <p className="text-[15px] mb-[10px]">
            Do you have experience working with vendors in the following areas?
          </p>
          <div className="flex items-center gap-[10px]">
            <div className="flex items-center gap-[10px]">
              <input type="checkbox" name="ag" id="ag" />
              <p className="text-[12px]">Input suppliers</p>
            </div>
            <div className="flex items-center gap-[10px]">
              <input type="checkbox" name="ag" id="ag" />
              <p className="text-[12px]">Aggregators</p>
            </div>
            <div className="flex items-center gap-[10px]">
              <input type="checkbox" name="ag" id="ag" />
              <p className="text-[12px]">Financial service institutions</p>
            </div>
            <div className="flex items-center gap-[10px]">
              <input type="checkbox" name="ag" id="ag" />
              <p className="text-[12px]">Marketors</p>
            </div>
          </div>
          <div className="flex flex-col mt-[10px] mb-[15px] gap-[10px]">
            <p className="text-[12px]">Other vendors (specify)</p>
            <textarea
              type="text"
              placeholder="Describe your specific role"
              value={otherRole}
              onChange={(e) => setOtherRole(e.target.value)}
              class="min-h-[100px] w-full text-[14px] rounded-[5px] border px-[10px] border-gray-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-primary-110"
            />
          </div>
          <div className="flex flex-col mt-[10px] mb-[15px] gap-[10px]">
            <p className="text-[15px] mb-[10px]">
              How do you access marketing information on pricing to ensure you
              negotiate for the best price(s)?
            </p>
            <textarea
              type="text"
              placeholder="How you access marketing information?"
              value={otherRole}
              onChange={(e) => setOtherRole(e.target.value)}
              class="min-h-[100px] w-full text-[14px] rounded-[5px] border px-[10px] border-gray-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-primary-110"
            />
          </div>
        </div>
        <div className="flex flex-col w-[45%] sm:w-[95%] mx-auto">
          <div className="flex flex-col mt-[10px] mb-[15px] gap-[10px]">
            <p className="text-[15px] mb-[10px]">
              What kind of inputs do you deal with?
            </p>
            <textarea
              type="text"
              placeholder="How you access marketing information?"
              value={otherRole}
              onChange={(e) => setOtherRole(e.target.value)}
              class="min-h-[100px] w-full text-[14px] rounded-[5px] border px-[10px] border-gray-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-primary-110"
            />
          </div>
          <div className="flex flex-col mt-[10px] mb-[15px] gap-[10px]">
            <p className="text-[15px] mb-[10px]">
              What challenges are you facing in accessing the market for the
              inputs?
            </p>
            <textarea
              type="text"
              placeholder="Challenges in accessing the market for inputs?"
              value={otherRole}
              onChange={(e) => setOtherRole(e.target.value)}
              class="min-h-[100px] w-full text-[14px] rounded-[5px] border px-[10px] border-gray-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-primary-110"
            />
          </div>
          <div className="flex flex-col mt-[10px] mb-[15px] gap-[10px]">
            <p className="text-[15px] mb-[10px]">
              What other key challenges do you encounter in your FSC operations
              (currently)
            </p>
            <textarea
              type="text"
              placeholder="Other challenges in your operations"
              value={otherRole}
              onChange={(e) => setOtherRole(e.target.value)}
              class="min-h-[100px] w-full text-[14px] rounded-[5px] border px-[10px] border-gray-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-primary-110"
            />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-end">
        <button
          onClick={createRoles}
          className="px-[20px] bg-[#FFE900] h-[50px] text-[#000]"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Roles;
