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

  const [marketChallenge, setMarketChallenge] = useState("");
  const [marketChallenges, setMarketChallenges] = useState([]);
  const [otherChallenge, setOtherChallenge] = useState("");
  const [otherChallenges, setOtherChallenges] = useState([]);
  const [otherVendor, setOtherVendor] = useState("");
  const [marketingInformation, setMarketingInformation] = useState("");
  const [otherVendors, setOtherVendors] = useState([]);

  const addInput = () => {
    if (farmInput.trim()) {
      setFarmInputs([...farmInputs, farmInput]);
      setFarmInput("");
    }
  };

  const removeInput = (input) => {
    const newInputs = farmInputs.filter((c) => c !== input);
    setFarmInputs(newInputs);
  };

  const addOtherChallenge = () => {
    if (otherChallenge.trim()) {
      setOtherChallenges([...otherChallenges, otherChallenge]);
      setOtherChallenge("");
    }
  };

  const removeOtherChallenge = (challenge) => {
    setOtherChallenges(otherChallenges.filter((c) => c !== challenge));
  };

  const addMarketChallenge = () => {
    if (marketChallenge.trim()) {
      setMarketChallenges([...marketChallenges, marketChallenge]);
      setMarketChallenge("");
    }
  };

  const removeMarketChallenge = (challenge) => {
    setMarketChallenges(marketChallenges.filter((c) => c !== challenge));
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
      <div className="mb-[40px] mt-[50px] w-full">
        <div>FARM TO MARKET ALLIANCE</div>
        <p className="">Farmers Service Centres (FSC) Survey</p>
        <p className=" font-bold">Roles and responsibility analysis</p>
      </div>
      <div className="flex sm:flex-col justify-between w-full">
        <div className="flex flex-col w-[45%] sm:w-[95%]">
          <p className="text-[15px] mb-[40px]">
            What are your current roles and responsibility at FSC? (Check where
            appropriate)
          </p>
          <div className="flex items-center mb-[20px] gap-[10px]">
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
          <div className="flex flex-col mt-[10px] mb-[10px] gap-[10px]">
            <div className="flex items-center justify-between w-full">
              <p className="text-[15px] mb-[20px]">
                What skills are required for your role (According to you)?
              </p>
            </div>
            <input
              type="text"
              placeholder="Enter the skills required for your role?"
              value={currentSkill}
              onChange={handleSkillChange}
              class="h-[50px] w-full text-[14px] rounded-[5px] border px-[10px] border-gray-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-primary-110"
            />
            <div className="w-full flex justify-end">
              <button
                onClick={addSkill}
                className="h-[30px] rounded cursor-pointer px-[20px] bg-[#FFCC00] flex items-center gap-[10px] justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="currentColor"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  >
                    <path d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12m10-8a8 8 0 1 0 0 16a8 8 0 0 0 0-16" />
                    <path d="M13 7a1 1 0 1 0-2 0v4H7a1 1 0 1 0 0 2h4v4a1 1 0 1 0 2 0v-4h4a1 1 0 1 0 0-2h-4z" />
                  </g>
                </svg>
                <span className="text-[13px]">Add</span>
              </button>
            </div>
          </div>
          <ul className="list-disc my-[10px] w-full">
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
          <p className="text-[15px] mb-[20px]">
            Do you have experience working with vendors in the following areas?
            (Check where appropriate)
          </p>
          <div className="flex items-center mb-[20px] gap-[10px]">
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
            <p className="text-[15px] mb-[20px]">
              How do you access marketing information on pricing to ensure you
              negotiate for the best price(s)?
            </p>
            <textarea
              type="text"
              placeholder="How you access marketing information?"
              value={marketingInformation}
              onChange={(e) => setMarketingInformation(e.target.value)}
              class="h-[100px] w-full text-[14px] rounded-[5px] border px-[10px] border-gray-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-primary-110"
            />
          </div>
        </div>
        <div className="flex flex-col w-[45%] sm:w-[95%]">
          <div className="flex flex-col mb-[15px] gap-[10px]">
            <p className="text-[15px] mb-[10px]">
              What kind of inputs do you deal with?
            </p>
            <input
              type="text"
              placeholder="How you access marketing information?"
              value={farmInput}
              onChange={(e) => setFarmInput(e.target.value)}
              class="h-[50px] w-full text-[14px] rounded-[5px] border px-[10px] border-gray-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-primary-110"
            />
            <div className="w-full flex justify-end">
              <button
                onClick={addInput}
                className="h-[30px] rounded cursor-pointer px-[20px] bg-[#FFCC00] flex items-center gap-[10px] justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="currentColor"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  >
                    <path d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12m10-8a8 8 0 1 0 0 16a8 8 0 0 0 0-16" />
                    <path d="M13 7a1 1 0 1 0-2 0v4H7a1 1 0 1 0 0 2h4v4a1 1 0 1 0 2 0v-4h4a1 1 0 1 0 0-2h-4z" />
                  </g>
                </svg>
                <span className="text-[13px]">Add</span>
              </button>
            </div>
          </div>
          <ul className="list-disc my-[10px] w-full">
            {farmInputs.map((input, index) => (
              <li key={index} className="flex justify-between items-center">
                {input}
                <button
                  onClick={() => removeInput(input)}
                  className="ml-[10px] text-red-500"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="flex flex-col mt-[10px] mb-[15px] gap-[10px]">
            <div className="flex items-center justify-between w-full">
              <p className="text-[15px] mb-[10px]">
                What challenges are you facing in accessing the market for the
                inputs?
              </p>
            </div>
            <input
              type="text"
              placeholder="Challenges in accessing the market for inputs?"
              value={marketChallenge}
              onChange={(e) => setMarketChallenge(e.target.value)}
              class="h-[50px] w-full text-[14px] rounded-[5px] border px-[10px] border-gray-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-primary-110"
            />
            <div className="w-full flex justify-end">
              <button
                onClick={addMarketChallenge}
                className="h-[30px] rounded cursor-pointer px-[20px] bg-[#FFCC00] flex items-center gap-[10px] justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="currentColor"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  >
                    <path d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12m10-8a8 8 0 1 0 0 16a8 8 0 0 0 0-16" />
                    <path d="M13 7a1 1 0 1 0-2 0v4H7a1 1 0 1 0 0 2h4v4a1 1 0 1 0 2 0v-4h4a1 1 0 1 0 0-2h-4z" />
                  </g>
                </svg>
                <span className="text-[13px]">Add</span>
              </button>
            </div>
          </div>
          <div className="my-[10px] w-full">
            <ul className="list-disc">
              {marketChallenges.map((challenge, index) => (
                <li key={index} className="flex justify-between items-center">
                  {challenge}
                  <button
                    onClick={() => removeMarketChallenge(challenge)}
                    className="ml-[10px] text-red-500"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col mt-[10px] mb-[15px] gap-[10px]">
            <div className="flex items-center justify-between w-full">
              <p className="text-[15px] mb-[10px]">
                What other key challenges do you encounter in your FSC
                operations (currently)?
              </p>
            </div>
            <input
              type="text"
              placeholder="Other challenges in your operations"
              value={otherChallenge}
              onChange={(e) => setOtherChallenge(e.target.value)}
              class="h-[50px] w-full text-[14px] rounded-[5px] border px-[10px] border-gray-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-primary-110"
            />
            <div className="w-full flex justify-end">
              <button
                onClick={addOtherChallenge}
                className="h-[30px] rounded cursor-pointer px-[20px] bg-[#FFCC00] flex items-center gap-[10px] justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="currentColor"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  >
                    <path d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12m10-8a8 8 0 1 0 0 16a8 8 0 0 0 0-16" />
                    <path d="M13 7a1 1 0 1 0-2 0v4H7a1 1 0 1 0 0 2h4v4a1 1 0 1 0 2 0v-4h4a1 1 0 1 0 0-2h-4z" />
                  </g>
                </svg>
                <span className="text-[13px]">Add</span>
              </button>
            </div>
          </div>
          <div className="my-[10px] w-full">
            <ul className="list-disc">
              {otherChallenges.map((challenge, index) => (
                <li key={index} className="flex justify-between items-center">
                  {challenge}
                  <button
                    onClick={() => removeOtherChallenge(challenge)}
                    className="ml-[10px] text-red-500"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
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
