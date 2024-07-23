import React, { useState } from "react";
import { useNavigate } from "react-router";

const Trainings = () => {
  const [trainingArea, setTrainingArea] = useState("");
  const [trainingDuration, setTrainingDuration] = useState("");
  const [trainingYear, setTrainingYear] = useState("");
  const [trainingInstitution, setTrainingInstitution] = useState("");
  const [trainingRelavance, setTrainingRelavance] = useState("");

  const [trainingArea2, setTrainingArea2] = useState("");
  const [trainingDuration2, setTrainingDuration2] = useState("");
  const [trainingYear2, setTrainingYear2] = useState("");
  const [trainingInstitution2, setTrainingInstitution2] = useState("");
  const [trainingRelavance2, setTrainingRelavance2] = useState("");

  const [trainingArea3, setTrainingArea3] = useState("");
  const [trainingDuration3, setTrainingDuration3] = useState("");
  const [trainingYear3, setTrainingYear3] = useState("");
  const [trainingInstitution3, setTrainingInstitution3] = useState("");
  const [trainingRelavance3, setTrainingRelavance3] = useState("");

  const navigate = useNavigate();

  const createTrainings = () => {
    navigate("/roles");
  };
  return (
    <div className="w-[80%] sm:w-[95%] sm:h-full sm:my-[20px] mx-auto flex flex-col w-[100vw] my-[40px] justify-center items-center">
      <div>FARM TO MARKET ALLIANCE</div>
      <div className="mb-[40px] w-full">
        <p className="text-center">Farmers Service Centres (FSC) Survey</p>
        <p className="text-center font-bold">
          Details of training undergone(Last three trainings attended)
        </p>
      </div>
      <div className="flex items-center sm:flex-col justify-between">
        <div className="flex flex-col w-[30%] sm:w-[95%] mx-auto">
          <div className="w-full mb-[20px]">
            <p className="text-[15px] font-bold">1st Training</p>
            <label className="text-[14px] text-left" htmlFor="name">
              Area of training undergone
            </label>
            <textarea
              type="text"
              placeholder="Enter area of training undergone"
              value={trainingArea}
              onChange={(e) => setTrainingArea(e.target.value)}
              class="h-[100px] w-full text-[14px] mt-[10px] rounded-[5px] border px-[10px] border-gray-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-primary-110"
            />
            <div className="mb-[10px]">
              <label className="text-[14px] text-left" htmlFor="name">
                Duration of training
              </label>
              <input
                type="text"
                placeholder="Enter training duration"
                value={trainingDuration}
                onChange={(e) => setTrainingDuration(e.target.value)}
                class="h-[50px] w-full text-[14px] mt-[10px] rounded-[5px] border px-[10px] border-gray-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-primary-110"
              />
            </div>
            <div className="mb-[10px]">
              <label className="text-[14px] text-left" htmlFor="name">
                Year of training
              </label>
              <input
                type="text"
                placeholder="Enter training year"
                value={trainingYear}
                onChange={(e) => setTrainingYear(e.target.value)}
                class="h-[50px] w-full text-[14px] mt-[10px] rounded-[5px] border px-[10px] border-gray-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-primary-110"
              />
            </div>
            <div className="mb-[10px]">
              <label className="text-[14px] text-left" htmlFor="name">
                Institution that impacted the training skills
              </label>
              <input
                type="text"
                placeholder="Enter training institution"
                value={trainingInstitution}
                onChange={(e) => setTrainingInstitution(e.target.value)}
                class="h-[50px] w-full text-[14px] mt-[10px] rounded-[5px] border px-[10px] border-gray-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-primary-110"
              />
            </div>
            <div className="mb-[10px]">
              <label className="text-[14px] text-left" htmlFor="name">
                Relevance of training in enhancing your perfomance in FSC duties
              </label>
              <input
                type="text"
                placeholder="Enter training institution"
                value={trainingRelavance}
                onChange={(e) => setTrainingRelavance(e.target.value)}
                class="h-[50px] w-full text-[14px] mt-[10px] rounded-[5px] border px-[10px] border-gray-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-primary-110"
              />
            </div>
            <label className="text-[14px] text-left" htmlFor="name">
              Level of satisfaction
            </label>
            <div className="flex mt-[10px] items-center justify-between">
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="one" id="one" />
                <span className="text-[12px] truncate">
                  Highly satisfactory
                </span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="two" id="two" />
                <span className="text-[12px] truncate">Satisfactory</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="three" id="three" />
                <span className="text-[12px] truncate">Unsatisfactory</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[30%] sm:w-[95%] mx-auto">
          <div className="w-full mb-[20px]">
            <p className="text-[15px] font-bold">2nd Training</p>
            <label className="text-[14px] text-left" htmlFor="name">
              Area of training undergone
            </label>
            <textarea
              type="text"
              placeholder="Enter area of training undergone"
              value={trainingArea2}
              onChange={(e) => setTrainingArea2(e.target.value)}
              class="h-[100px] w-full text-[14px] mt-[10px] rounded-[5px] border px-[10px] border-gray-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-primary-110"
            />
            <div className="mb-[10px]">
              <label className="text-[14px] text-left" htmlFor="name">
                Duration of training
              </label>
              <input
                type="text"
                placeholder="Enter training duration"
                value={trainingDuration2}
                onChange={(e) => setTrainingDuration2(e.target.value)}
                class="h-[50px] w-full text-[14px] mt-[10px] rounded-[5px] border px-[10px] border-gray-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-primary-110"
              />
            </div>
            <div className="mb-[10px]">
              <label className="text-[14px] text-left" htmlFor="name">
                Year of training
              </label>
              <input
                type="text"
                placeholder="Enter training year"
                value={trainingYear2}
                onChange={(e) => setTrainingYear2(e.target.value)}
                class="h-[50px] w-full text-[14px] mt-[10px] rounded-[5px] border px-[10px] border-gray-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-primary-110"
              />
            </div>
            <div className="mb-[10px]">
              <label className="text-[14px] text-left" htmlFor="name">
                Institution that impacted the training skills
              </label>
              <input
                type="text"
                placeholder="Enter training institution"
                value={trainingInstitution2}
                onChange={(e) => setTrainingInstitution2(e.target.value)}
                class="h-[50px] w-full text-[14px] mt-[10px] rounded-[5px] border px-[10px] border-gray-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-primary-110"
              />
            </div>
            <div className="mb-[10px]">
              <label className="text-[14px] text-left" htmlFor="name">
                Relevance of training in enhancing your perfomance in FSC duties
              </label>
              <input
                type="text"
                placeholder="Enter training institution"
                value={trainingRelavance2}
                onChange={(e) => setTrainingRelavance2(e.target.value)}
                class="h-[50px] w-full text-[14px] mt-[10px] rounded-[5px] border px-[10px] border-gray-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-primary-110"
              />
            </div>
            <label className="text-[14px] text-left" htmlFor="name">
              Level of satisfaction
            </label>
            <div className="flex mt-[10px] items-center justify-between">
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="one" id="one" />
                <span className="text-[12px] truncate">
                  Highly satisfactory
                </span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="two" id="two" />
                <span className="text-[12px] truncate">Satisfactory</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="three" id="three" />
                <span className="text-[12px] truncate">Unsatisfactory</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[30%] sm:w-[95%] mx-auto">
          <div className="w-full mb-[20px]">
            <p className="text-[15px] font-bold">3rd Training</p>
            <label className="text-[14px] text-left" htmlFor="name">
              Area of training undergone
            </label>
            <textarea
              type="text"
              placeholder="Enter area of training undergone"
              value={trainingArea3}
              onChange={(e) => setTrainingArea3(e.target.value)}
              class="h-[100px] w-full text-[14px] mt-[10px] rounded-[5px] border px-[10px] border-gray-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-primary-110"
            />
            <div className="mb-[10px]">
              <label className="text-[14px] text-left" htmlFor="name">
                Duration of training
              </label>
              <input
                type="text"
                placeholder="Enter training duration"
                value={trainingDuration3}
                onChange={(e) => setTrainingDuration3(e.target.value)}
                class="h-[50px] w-full text-[14px] mt-[10px] rounded-[5px] border px-[10px] border-gray-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-primary-110"
              />
            </div>
            <div className="mb-[10px]">
              <label className="text-[14px] text-left" htmlFor="name">
                Year of training
              </label>
              <input
                type="text"
                placeholder="Enter training year"
                value={trainingYear3}
                onChange={(e) => setTrainingYear3(e.target.value)}
                class="h-[50px] w-full text-[14px] mt-[10px] rounded-[5px] border px-[10px] border-gray-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-primary-110"
              />
            </div>
            <div className="mb-[10px]">
              <label className="text-[14px] text-left" htmlFor="name">
                Institution that impacted the training skills
              </label>
              <input
                type="text"
                placeholder="Enter training institution"
                value={trainingInstitution3}
                onChange={(e) => setTrainingInstitution3(e.target.value)}
                class="h-[50px] w-full text-[14px] mt-[10px] rounded-[5px] border px-[10px] border-gray-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-primary-110"
              />
            </div>
            <div className="mb-[10px]">
              <label className="text-[14px] text-left" htmlFor="name">
                Relevance of training in enhancing your perfomance in FSC duties
              </label>
              <input
                type="text"
                placeholder="Enter training institution"
                value={trainingRelavance3}
                onChange={(e) => setTrainingRelavance3(e.target.value)}
                class="h-[50px] w-full text-[14px] mt-[10px] rounded-[5px] border px-[10px] border-gray-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-primary-110"
              />
            </div>
            <label className="text-[14px] text-left" htmlFor="name">
              Level of satisfaction
            </label>
            <div className="flex items-center mt-[10px] justify-between">
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="one" id="one" />
                <span className="text-[12px] truncate">
                  Highly satisfactory
                </span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="two" id="two" />
                <span className="text-[12px] truncate">Satisfactory</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="three" id="three" />
                <span className="text-[12px] truncate">Unsatisfactory</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-end">
        <button
          onClick={createTrainings}
          className="px-[20px] bg-[#FFE900] h-[50px] text-[#000]"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Trainings;
