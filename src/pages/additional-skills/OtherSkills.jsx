import React, { useContext, useState } from "react";
import { GlobalContext } from "../../components/context/MyProvider";
import { useNavigate } from "react-router-dom";

const OtherSkills = () => {
  const [additionalModule, setAdditionalModule] = useState("");
  const [additionalModules, setAdditionalModules] = useState([]);

  const [residentialTiming, setResidentialTiming] = useState("");
  const [nonResidentialTiming, setNonResidentialTiming] = useState("");
  const [trainingDays, setTrainingDays] = useState("");

  const [additionalTopic, setAdditionalTopic] = useState("");
  const [additionalTopics, setAdditionalTopics] = useState([]);

  const addTopic = () => {
    if (additionalTopic.trim() !== "") {
      setAdditionalTopics([...additionalTopics, additionalTopic]);
      setAdditionalTopic("");
    }
  };

  const removeTopic = (topic) => {
    setAdditionalTopics(additionalTopics.filter((item) => item !== topic));
  };

  const addModule = () => {
    if (additionalModule.trim() !== "") {
      setAdditionalModules([...additionalModules, additionalModule]);
      setAdditionalModule("");
    }
  };

  const removeModule = (module) => {
    setAdditionalModules(additionalModules.filter((item) => item !== module));
  };

  const { data, updateData } = useContext(GlobalContext);
  const navigate = useNavigate();
  const saveSurvey = () => {
    const transformedTrainingNeeds = additionalModules.map((module) => ({
      training: module,
      scale: 1,
    }));

    const transformedTrainingSubTopics = additionalTopics.map((topic) => ({
      training: topic,
      scale: 1,
    }));
    updateData({
      otherTrainingNeeds: transformedTrainingNeeds,
      otherTrainingSubTopics: transformedTrainingSubTopics,
      timePreference: {
        residentialTimePreference: residentialTiming,
        noneResidentialTimePreference: nonResidentialTiming,
      },
    });
    navigate("/review");
  };
  return (
    <div className="w-[80%] sm:w-[95%] sm:h-full sm:mt-[20px] lg:mt-[50px] mx-auto flex flex-col h-full items-center">
      <div className="flex flex-col mb-[40px] w-[50%] sm:w-[95%]">
        <div>FARM TO MARKET ALLIANCE</div>
        <p className="">Farmers Service Centres (FSC) Survey</p>
        <p className="">Additional Information Training Needs</p>
      </div>
      <div className="flex flex-col w-[50%] sm:w-[95%]">
        <div className="w-full mb-[20px]">
          <label className="text-[14px] mb-[10px] text-left" htmlFor="name">
            Your suggestion for additional training sub-topics on the stated key
            topics(if any) to perform your current roles and responsbility
            completely so as to bring excellence in your FSC/organization
          </label>
          <input
            type="text"
            placeholder="Enter training sub topics"
            value={additionalModule}
            onChange={(e) => setAdditionalModule(e.target.value)}
            class="h-[50px] w-full text-[14px] rounded-[5px] border px-[10px] border-gray-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-primary-110"
          />
          <div className="w-full mt-[10px] flex justify-end">
            <button
              onClick={addModule}
              className="h-[30px] rounded cursor-pointer px-[20px] bg-[#FFCC00] flex items-center gap-[10px] justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
              >
                <g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd">
                  <path d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12m10-8a8 8 0 1 0 0 16a8 8 0 0 0 0-16" />
                  <path d="M13 7a1 1 0 1 0-2 0v4H7a1 1 0 1 0 0 2h4v4a1 1 0 1 0 2 0v-4h4a1 1 0 1 0 0-2h-4z" />
                </g>
              </svg>
              <span className="text-[13px]">Add</span>
            </button>
          </div>
        </div>
        <ul className="list-disc my-[10px] w-full">
          {additionalModules.map((module, index) => (
            <li key={index} className="flex justify-between items-center">
              {module}
              <button
                onClick={() => removeModule(module)}
                className="ml-[10px] text-red-500"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
        <div className="w-full mb-[20px]">
          <label className="text-[14px] mb-[10px] text-left" htmlFor="name">
            What other training modules do you think would be relevant to help
            you achieve proficiency in your future role outside the suggested
            modules/topics (if any)
          </label>
          <input
            type="text"
            placeholder="Enter additional training modules"
            value={additionalTopic}
            onChange={(e) => setAdditionalTopic(e.target.value)}
            class="h-[50px] w-full text-[14px] rounded-[5px] border px-[10px] border-gray-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-primary-110"
          />
          <div className="w-full mt-[10px] flex justify-end">
            <button
              onClick={addTopic}
              className="h-[30px] rounded cursor-pointer px-[20px] bg-[#FFCC00] flex items-center gap-[10px] justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
              >
                <g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd">
                  <path d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12m10-8a8 8 0 1 0 0 16a8 8 0 0 0 0-16" />
                  <path d="M13 7a1 1 0 1 0-2 0v4H7a1 1 0 1 0 0 2h4v4a1 1 0 1 0 2 0v-4h4a1 1 0 1 0 0-2h-4z" />
                </g>
              </svg>
              <span className="text-[13px]">Add</span>
            </button>
          </div>
        </div>
        <ul className="list-disc my-[10px] w-full">
          {additionalTopics.map((topic, index) => (
            <li key={index} className="flex justify-between items-center">
              {topic}
              <button
                onClick={() => removeTopic(topic)}
                className="ml-[10px] text-red-500"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
        <div className="w-full mb-[20px]">
          <label className="text-[14px] mb-[10px] text-left" htmlFor="name">
            What is the appropriate timing for the suggested training? Indicate
            the start for morning sessions if:
          </label>
          <div className="mb-[20px]">
            <label
              className="text-[14px] mb-[10px] text-left"
              htmlFor="residential-timing"
            >
              Residential?
            </label>
            <input
              type="time"
              id="residential-timing"
              value={residentialTiming}
              onChange={(e) => setResidentialTiming(e.target.value)}
              className="h-[50px] w-full text-[14px] rounded-[5px] border px-[10px] border-gray-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-primary-110"
            />
          </div>
          <div className="mb-[20px]">
            <label
              className="text-[14px] mb-[10px] text-left"
              htmlFor="non-residential-timing"
            >
              Non-residential?
            </label>
            <input
              type="time"
              id="non-residential-timing"
              value={nonResidentialTiming}
              onChange={(e) => setNonResidentialTiming(e.target.value)}
              className="h-[50px] w-full text-[14px] rounded-[5px] border px-[10px] border-gray-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-primary-110"
            />
          </div>
          <div className="mb-[20px]">
            <label
              className="text-[14px] mb-[10px] text-left"
              htmlFor="training-days"
            >
              How many days are convenient for the entire training course (based
              on the training areas you have preferred)?
            </label>
            <input
              type="text"
              id="training-days"
              placeholder="Enter the number of days for the training"
              value={trainingDays}
              onChange={(e) => setTrainingDays(e.target.value)}
              className="h-[50px] w-full text-[14px] rounded-[5px] border px-[10px] border-gray-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-primary-110"
            />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-end">
        <button
          onClick={saveSurvey}
          className="px-[20px] bg-[#FFE900] h-[50px] text-[#000]"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default OtherSkills;
