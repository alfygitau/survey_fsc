import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { GlobalContext } from "../../components/context/MyProvider";

const Trainings = () => {
  const [trainingArea, setTrainingArea] = useState("");
  const [trainingDuration, setTrainingDuration] = useState("");
  const [trainingYear, setTrainingYear] = useState("");
  const [trainingInstitution, setTrainingInstitution] = useState("");
  const [trainingRelavance, setTrainingRelavance] = useState("");
  const [satisfactionLevel, setSatisfactionLevel] = useState("");

  const handleChange = (event) => {
    setSatisfactionLevel(event.target.value);
  };

  const [trainingArea2, setTrainingArea2] = useState("");
  const [trainingDuration2, setTrainingDuration2] = useState("");
  const [trainingYear2, setTrainingYear2] = useState("");
  const [trainingInstitution2, setTrainingInstitution2] = useState("");
  const [trainingRelavance2, setTrainingRelavance2] = useState("");
  const [satisfactionLevel2, setSatisfactionLevel2] = useState("");

  const handleChange2 = (event) => {
    setSatisfactionLevel2(event.target.value);
  };

  const [trainingArea3, setTrainingArea3] = useState("");
  const [trainingDuration3, setTrainingDuration3] = useState("");
  const [trainingYear3, setTrainingYear3] = useState("");
  const [trainingInstitution3, setTrainingInstitution3] = useState("");
  const [trainingRelavance3, setTrainingRelavance3] = useState("");
  const navigate = useNavigate();
  const [satisfactionLevel3, setSatisfactionLevel3] = useState("");
  const handleChange3 = (event) => {
    setSatisfactionLevel3(event.target.value);
  };

  const { data, updateData } = useContext(GlobalContext);

  const createTrainings = () => {
    updateData({
      trainingReceived: [
        {
          title: trainingArea,
          duration: trainingDuration,
          yearOfTraining: trainingYear,
          institution: trainingInstitution,
          valueObtained: trainingRelavance,
          satisfactoryLevel: satisfactionLevel,
        },
        {
          title: trainingArea2,
          duration: trainingDuration2,
          yearOfTraining: trainingYear2,
          institution: trainingInstitution2,
          valueObtained: trainingRelavance2,
          satisfactoryLevel: satisfactionLevel2,
        },
        {
          title: trainingArea3,
          duration: trainingDuration3,
          yearOfTraining: trainingYear3,
          institution: trainingInstitution3,
          valueObtained: trainingRelavance3,
          satisfactoryLevel: satisfactionLevel3,
        },
      ],
    });
    navigate("/roles");
  };
  return (
    <div className="w-[80%] sm:w-[95%] sm:h-full sm:my-[20px] mx-auto flex flex-col my-[40px]">
      <div className="mb-[40px] w-full">
        <div>FARM TO MARKET ALLIANCE</div>
        <p className="">Farmers Service Centres (FSC) Survey</p>
        <p className="font-bold">
          Details of training undergone(Last three trainings attended)
        </p>
      </div>
      <div className="flex items-center sm:flex-col justify-between">
        <div className="flex flex-col w-[30%] sm:w-[95%]">
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
            <div>
              <label className="text-[14px] text-left" htmlFor="satisfaction">
                Level of satisfaction
              </label>
              <div className="flex mt-[10px] items-center justify-between">
                <div className="flex items-center gap-[10px]">
                  <input
                    type="radio"
                    name="satisfaction"
                    id="highly-satisfactory"
                    value="A"
                    checked={satisfactionLevel === "A"}
                    onChange={handleChange}
                  />
                  <span className="text-[12px] truncate">
                    Highly satisfactory
                  </span>
                </div>
                <div className="flex items-center gap-[10px]">
                  <input
                    type="radio"
                    name="satisfaction"
                    id="satisfactory"
                    value="B"
                    checked={satisfactionLevel === "B"}
                    onChange={handleChange}
                  />
                  <span className="text-[12px] truncate">Satisfactory</span>
                </div>
                <div className="flex items-center gap-[10px]">
                  <input
                    type="radio"
                    name="satisfaction"
                    id="unsatisfactory"
                    value="C"
                    checked={satisfactionLevel === "C"}
                    onChange={handleChange}
                  />
                  <span className="text-[12px] truncate">Unsatisfactory</span>
                </div>
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
            <div>
              <label className="text-[14px] text-left" htmlFor="satisfaction">
                Level of satisfaction
              </label>
              <div className="flex mt-[10px] items-center justify-between">
                <div className="flex items-center gap-[10px]">
                  <input
                    type="radio"
                    name="satisfaction2"
                    id="highly-satisfactory2"
                    value="A"
                    checked={satisfactionLevel2 === "A"}
                    onChange={handleChange2}
                  />
                  <span className="text-[12px] truncate">
                    Highly satisfactory
                  </span>
                </div>
                <div className="flex items-center gap-[10px]">
                  <input
                    type="radio"
                    name="satisfaction2"
                    id="satisfactory2"
                    value="B"
                    checked={satisfactionLevel2 === "B"}
                    onChange={handleChange2}
                  />
                  <span className="text-[12px] truncate">Satisfactory</span>
                </div>
                <div className="flex items-center gap-[10px]">
                  <input
                    type="radio"
                    name="satisfaction2"
                    id="unsatisfactory2"
                    value="C"
                    checked={satisfactionLevel2 === "C"}
                    onChange={handleChange2}
                  />
                  <span className="text-[12px] truncate">Unsatisfactory</span>
                </div>
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
            <div>
              <label className="text-[14px] text-left" htmlFor="satisfaction">
                Level of satisfaction
              </label>
              <div className="flex mt-[10px] items-center justify-between">
                <div className="flex items-center gap-[10px]">
                  <input
                    type="radio"
                    name="satisfaction3"
                    id="highly-satisfactory3"
                    value="A"
                    checked={satisfactionLevel3 === "A"}
                    onChange={handleChange3}
                  />
                  <span className="text-[12px] truncate">
                    Highly satisfactory
                  </span>
                </div>
                <div className="flex items-center gap-[10px]">
                  <input
                    type="radio"
                    name="satisfaction3"
                    id="satisfactory3"
                    value="B"
                    checked={satisfactionLevel3 === "B"}
                    onChange={handleChange3}
                  />
                  <span className="text-[12px] truncate">Satisfactory</span>
                </div>
                <div className="flex items-center gap-[10px]">
                  <input
                    type="radio"
                    name="satisfaction3"
                    id="unsatisfactory3"
                    value="C"
                    checked={satisfactionLevel3 === "C"}
                    onChange={handleChange3}
                  />
                  <span className="text-[12px] truncate">Unsatisfactory</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex mt-[40px] justify-end">
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
