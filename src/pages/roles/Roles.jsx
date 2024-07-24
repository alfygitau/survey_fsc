import React, { useState } from "react";
import { useNavigate } from "react-router";

const Roles = () => {
  const [otherRoles, setOtherRoles] = useState("");
  const [roles, setRoles] = useState([]);
  const navigate = useNavigate();
  const [vendorsExperience, setVendorsExperience] = useState({
    inputSupply: false,
    inputDistribution: false,
    financialServiceInstitutions: false,
    marketersExperience: false,
  });
  const [otherRole, setOtherRole] = useState("");
  const [skills, setSkills] = useState([]);
  const [currentSkill, setCurrentSkill] = useState("");
  const [otherFscRoles, setOtherFscRoles] = useState([]);
  const [farmInput, setFarmInput] = useState("");
  const [farmInputs, setFarmInputs] = useState([]);
  const [marketChallenge, setmarketChallenge] = useState("");
  const [marketChallenges, setmarketChallenges] = useState([]);
  const [otherChallenge, setotherChallenge] = useState("");
  const [otherChallenges, setotherChallenges] = useState([]);
  const [otherVendor, setotherVendor] = useState("");
  const [marketingInformation, setMarketingInformation] = useState("");
  const [otherVendors, setotherVendors] = useState([]);

  const addOtherRole = () => {
    if (otherRole.trim() === "") return;
    setOtherFscRoles([...otherFscRoles, { title: otherRole }]);
    setOtherRole("");
  };

  const removeOtherRole = (role) => {
    setOtherFscRoles(otherFscRoles.filter((r) => r.title !== role));
  };

  const handleVendorCheckboxChange = (vendorType) => {
    setVendorsExperience((prevState) => ({
      ...prevState,
      [vendorType]: !prevState[vendorType],
    }));
  };

  const handleSkillChange = (e) => {
    setCurrentSkill(e.target.value);
  };

  const addSkill = () => {
    if (currentSkill.trim() !== "") {
      setSkills((prevSkills) => [...prevSkills, currentSkill.trim()]);
      setCurrentSkill("");
    }
  };

  const removeSkill = (skillToRemove) => {
    setSkills((prevSkills) =>
      prevSkills.filter((skill) => skill !== skillToRemove)
    );
  };

  const handleCheckboxChange = (role) => {
    setRoles((prevRoles) => {
      const roleIndex = prevRoles.findIndex((r) => r.title === role);
      if (roleIndex > -1) {
        return prevRoles.filter((r) => r.title !== role);
      } else {
        return [...prevRoles, { title: role }];
      }
    });
  };

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
              <input
                type="checkbox"
                id="aggregator"
                checked={roles?.some((r) => r.title === "Aggregator")}
                onChange={() => handleCheckboxChange("Aggregator")}
              />
              <p className="text-[12px]">Aggregator</p>
            </div>
            <div className="flex items-center gap-[10px]">
              <input
                type="checkbox"
                id="inputDistributor"
                checked={roles?.some((r) => r.title === "Input distributor")}
                onChange={() => handleCheckboxChange("Input distributor")}
              />
              <p className="text-[12px]">Input distributor</p>
            </div>
            <div className="flex items-center gap-[10px]">
              <input
                type="checkbox"
                id="specialServices"
                checked={roles?.some((r) => r.title === "Special services")}
                onChange={() => handleCheckboxChange("Special services")}
              />
              <p className="text-[12px]">Special services</p>
            </div>
            <div className="flex items-center gap-[10px]">
              <input
                type="checkbox"
                id="trainer"
                checked={roles?.some((r) => r.title === "Trainor")}
                onChange={() => handleCheckboxChange("Trainor")}
              />
              <p className="text-[12px]">Trainor</p>
            </div>
          </div>
          <div className="flex flex-col mt-[10px] mb-[15px] gap-[10px]">
            <div className="flex items-center justify-between w-full">
              <p className="text-[12px]">Other roles (Not specified above)</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                className="cursor-pointer"
                onClick={addOtherRole}
              >
                <g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd">
                  <path d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12m10-8a8 8 0 1 0 0 16a8 8 0 0 0 0-16" />
                  <path d="M13 7a1 1 0 1 0-2 0v4H7a1 1 0 1 0 0 2h4v4a1 1 0 1 0 2 0v-4h4a1 1 0 1 0 0-2h-4z" />
                </g>
              </svg>
            </div>
            <textarea
              type="text"
              placeholder="Describe your specific role"
              value={otherRole}
              onChange={(e) => setOtherRole(e.target.value)}
              class="min-h-[100px] w-full text-[14px] rounded-[5px] border px-[10px] border-gray-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-primary-110"
            />
          </div>
          <ul className="list-disc my-[20px] w-full">
            {otherFscRoles.map((role, index) => (
              <li key={index} className="flex justify-between items-center">
                {role.title}
                <button
                  onClick={() => removeOtherRole(role.title)}
                  className="ml-[10px] text-red-500"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="flex flex-col mt-[10px] mb-[10px] gap-[10px]">
            <div className="flex items-center justify-between w-full">
              <p className="text-[15px] mb-[10px]">
                What skills are required for your role (According to you)?
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                className="cursor-pointer"
                onClick={addSkill}
              >
                <g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd">
                  <path d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12m10-8a8 8 0 1 0 0 16a8 8 0 0 0 0-16" />
                  <path d="M13 7a1 1 0 1 0-2 0v4H7a1 1 0 1 0 0 2h4v4a1 1 0 1 0 2 0v-4h4a1 1 0 1 0 0-2h-4z" />
                </g>
              </svg>
            </div>
            <textarea
              type="text"
              placeholder="Enter the skills required for your role?"
              value={currentSkill}
              onChange={handleSkillChange}
              class="min-h-[100px] w-full text-[14px] rounded-[5px] border px-[10px] border-gray-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-primary-110"
            />
          </div>
          <ul className="list-disc my-[20px] w-full">
            {skills.map((skill, index) => (
              <li key={index} className="flex justify-between items-center">
                {skill}
                <button
                  onClick={() => removeSkill(skill)}
                  className="ml-[10px] text-red-500"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <p className="text-[15px] mb-[10px]">
            Do you have experience working with vendors in the following areas?
          </p>
          <div className="flex items-center gap-[10px]">
            <div className="flex items-center gap-[10px]">
              <input
                type="checkbox"
                id="inputSupply"
                checked={vendorsExperience.inputSupply}
                onChange={() => handleVendorCheckboxChange("inputSupply")}
              />
              <p className="text-[12px]">Input suppliers</p>
            </div>
            <div className="flex items-center gap-[10px]">
              <input
                type="checkbox"
                id="inputDistribution"
                checked={vendorsExperience.inputDistribution}
                onChange={() => handleVendorCheckboxChange("inputDistribution")}
              />
              <p className="text-[12px]">Input distribution</p>
            </div>
            <div className="flex items-center gap-[10px]">
              <input
                type="checkbox"
                id="financialServiceInstitutions"
                checked={vendorsExperience.financialServiceInstitutions}
                onChange={() =>
                  handleVendorCheckboxChange("financialServiceInstitutions")
                }
              />
              <p className="text-[12px]">Financial service institutions</p>
            </div>
            <div className="flex items-center gap-[10px]">
              <input
                type="checkbox"
                id="marketersExperience"
                checked={vendorsExperience.marketersExperience}
                onChange={() =>
                  handleVendorCheckboxChange("marketersExperience")
                }
              />
              <p className="text-[12px]">Marketers</p>
            </div>
          </div>
          <div className="flex flex-col mt-[10px] mb-[15px] gap-[10px]">
            <p className="text-[12px]">Other vendors (specify)</p>
            <textarea
              type="text"
              placeholder="Describe your specific role"
              value={otherVendor}
              onChange={(e) => setotherVendor(e.target.value)}
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
              value={marketingInformation}
              onChange={(e) => setMarketingInformation(e.target.value)}
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
              value={farmInput}
              onChange={(e) => setFarmInput(e.target.value)}
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
              value={marketChallenge}
              onChange={(e) => setmarketChallenge(e.target.value)}
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
              value={otherChallenge}
              onChange={(e) => setotherChallenge(e.target.value)}
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
