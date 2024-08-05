import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GlobalContext } from "../../components/context/MyProvider";

const Landing = () => {
  const navigate = useNavigate();
  const [enumerators, setEnumerators] = useState([]);
  const [respondents, setRespondents] = useState([]);
  const [coordinators, setCordinators] = useState([]);
  const [selectedRespondent, setSelectedRespondent] = useState("");
  const [occupation, setOccupation] = useState("");
  const [enumerator, setEnumerator] = useState("");
  const [selectedCordinator, setSelectedCordinator] = useState("");

  const { data, updateData } = useContext(GlobalContext);

  const handleChangeOccupation = (e) => {
    setOccupation(e.target.value);
  };

  const handleChangeEnumerator = (e) => {
    setEnumerator(e.target.value);
    getRespondents(e.target.value);
  };

  const getEnumerators = async () => {
    try {
      const response = await axios.get(
        "https://ftma.egroup.co.ke/training/api/v1/survey/enumerators"
      );
      setEnumerators(response.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  const getCordinators = async () => {
    try {
      const response = await axios.get(
        "https://ftma.egroup.co.ke/training/api/v1/survey/coordinators"
      );
      setCordinators(response.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  const getRespondents = async (id) => {
    try {
      const response = await axios.get(
        `https://ftma.egroup.co.ke/training/api/v1/survey/respondents/list?countyId=${id}&type=FSC`
      );
      setRespondents(response.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getEnumerators();
    getCordinators();
  }, []);

  const saveRespondent = () => {
    updateData({
      ...data,
      respondentId:
        selectedRespondent.length > 0
          ? Number(selectedRespondent)
          : Number(selectedCordinator),
    });
    navigate("/education");
  };
  return (
    <div className="flex flex-col w-full gap-[20px] justify-center h-[650px]">
      <div className="w-[60%] sm:w-[95%] md:w-[75%] mx-auto">
        <div className="mb-[40px]">
          <p className="text-left font-bold">FSCs and coordinators Survey</p>
          <p>Training Needs Assessment (TNA) questionnaire</p>
        </div>
        <div className="w-[40%] sm:w-[100%]">
          <div className="flex flex-col w-full mx-auto gap-[20px]">
            <div>
              <p className="mb-[10px] text-[15px]">Select your occupation</p>
              <select
                class="h-[50px] px-[10px] w-full text-[14px] rounded-[5px] border px-[10px] border-gray-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-primary-110"
                name="title"
                id="title"
                value={occupation}
                onChange={handleChangeOccupation}
              >
                <option value="">Select occupation</option>
                <option value="enumerator">Enumerator</option>
                <option value="cordinator">Coordinator</option>
              </select>
            </div>
            {occupation === "enumerator" && (
              <div>
                <p className="mb-[10px] text-[15px]">Select Enumerator</p>
                <select
                  class="h-[50px] px-[10px] w-full text-[14px] rounded-[5px] border px-[10px] border-gray-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-primary-110"
                  value={enumerator}
                  onChange={handleChangeEnumerator}
                >
                  <option value="">Select enumerator</option>
                  {enumerators.map((item) => (
                    <option key={item.fullName} value={item.countyId}>
                      {item.fullName}
                    </option>
                  ))}
                </select>
              </div>
            )}
            {occupation === "cordinator" && (
              <div>
                <p className="mb-[10px] text-[15px]">Select your name here</p>
                <select
                  class="h-[50px] px-[10px] w-full text-[14px] rounded-[5px] border px-[10px] border-gray-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-primary-110"
                  value={selectedCordinator}
                  onChange={(e) => setSelectedCordinator(e.target.value)}
                >
                  {coordinators.map((item) => (
                    <option key={item.fullName} value={item.respondentId}>
                      {item.fullName}
                    </option>
                  ))}
                </select>
              </div>
            )}
            {occupation === "enumerator" && enumerator.length > 0 && (
              <div>
                <p className="mb-[10px] text-[15px]">
                  Select a respondent (fcs's)
                </p>
                <select
                  class="h-[50px] px-[10px] w-full text-[14px] rounded-[5px] border px-[10px] border-gray-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-primary-110"
                  name="occupations"
                  id="occupations"
                  value={selectedRespondent}
                  onChange={(e) => setSelectedRespondent(e.target.value)}
                >
                  <option value="">Select a respondent</option>
                  {respondents.map((item) => (
                    <option key={item.fullName} value={item.respondentId}>
                      {item.fullName}
                    </option>
                  ))}
                </select>
              </div>
            )}
            <div className="w-full mt-[40px]">
              <button
                onClick={saveRespondent}
                className="h-[50px] bg-gray-300 rounded w-full"
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
