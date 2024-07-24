import React, { useState } from "react";

const OtherSkills = () => {
  const [additionalTraining, setAdditionalTraining] = useState("");
  const [additionalModules, setAdditionalModules] = useState("");

  const saveSurvey = () => {};
  return (
    <div className="w-[80%] sm:w-[95%] sm:h-full sm:mt-[20px] lg:mt-[40px] mx-auto flex flex-col h-full justify-center items-center">
      <div>FARM TO MARKET ALLIANCE</div>
      <div className="mb-[40px] w-full">
        <p className="text-center">Farmers Service Centres (FSC) Survey</p>
        <p className="text-center">Additional Information Training Needs</p>
      </div>
      <div className="flex flex-col w-[50%]">
        <div className="w-full mb-[20px]">
          <label className="text-[14px] mb-[10px] text-left" htmlFor="name">
            Your suggestion for additional training sub-topics on the stated key
            topics(if any) to perform your current roles and responsbility
            completely so as to bring excellence in your FSC/organization
          </label>
          <textarea
            type="text"
            placeholder="Enter training sub topics"
            value={additionalTraining}
            onChange={(e) => setAdditionalTraining(e.target.value)}
            class="min-h-[100px] w-full text-[14px] rounded-[5px] border px-[10px] border-gray-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-primary-110"
          />
        </div>
        <div className="w-full mb-[20px]">
          <label className="text-[14px] mb-[10px] text-left" htmlFor="name">
            What other training modules do you thin would be relevant to help
            you achieve proficiency in your future role outside the suggested
            modules/topics (if any)
          </label>
          <textarea
            type="text"
            placeholder="Enter additional training modules"
            value={additionalModules}
            onChange={(e) => setAdditionalModules(e.target.value)}
            class="min-h-[100px] w-full text-[14px] rounded-[5px] border px-[10px] border-gray-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-primary-110"
          />
        </div>
        <div className="w-full mb-[20px]">
          <label className="text-[14px] mb-[10px] text-left" htmlFor="name">
            What is the appropriate timing for the suggested training? Indicate
            the start for morning sessions if:
          </label>
          <div className="mb-[20px]">
            <label className="text-[14px] mb-[10px] text-left" htmlFor="name">
              Residential?
            </label>
            <input
              type="time"
              class="h-[50px] w-full text-[14px] rounded-[5px] border px-[10px] border-gray-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-primary-110"
            />
          </div>
          <div className="mb-[20px]">
            <label className="text-[14px] mb-[10px] text-left" htmlFor="name">
              Non-residential?
            </label>
            <input
              type="time"
              class="h-[50px] w-full text-[14px] rounded-[5px] border px-[10px] border-gray-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-primary-110"
            />
          </div>
          <div className="mb-[20px]">
            <label className="text-[14px] mb-[10px] text-left" htmlFor="name">
              How many days are convinient for the entire training course (based
              on the training areas you have preferred)?
            </label>
            <input
              type="text"
              placeholder="Enter the number of days for the training"
              class="h-[50px] w-full text-[14px] rounded-[5px] border px-[10px] border-gray-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-primary-110"
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
