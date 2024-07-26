import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GlobalContext } from "../../components/context/MyProvider";

const Landing = () => {
  const navigate = useNavigate();
  const [enumerators, setEnumerators] = useState([]);
  const [respondents, setRespondents] = useState([]);
  const [selectedRespondent, setSelectedRespondent] = useState("");

  const { data, updateData } = useContext(GlobalContext);

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

  const getRespondents = async () => {
    try {
      const response = await axios.get(
        "https://ftma.egroup.co.ke/training/api/v1/survey/coordinators"
      );
      setRespondents(response.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getEnumerators();
    getRespondents();
  }, []);

  const saveRespondent = () => {
    updateData({
      respondentId: Number(selectedRespondent),
    });
    navigate("/education");
  };
  return (
    <div className="flex flex-col w-full gap-[20px] justify-center h-[650px]">
      <div className="w-[60%] sm:w-[95%] mx-auto">
        <div className="mb-[40px]">
          <p className="text-left">Farmers Service Centres (FSC) Survey</p>
          <p>Training Needs Assessment (TNA) questionnaire</p>
        </div>
        <div className="w-[40%] sm:w-[100%]">
          <div className="flex flex-col w-full mx-auto gap-[20px]">
            <div>
              <p className="mb-[10px] text-[15px]">Select your occupation</p>
              <select
                class="h-[50px] px-[10px] w-full text-[14px] rounded-[5px] border px-[10px] border-gray-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-primary-110"
                name="occupations"
                id="occupations"
              >
                <option value="">Select enumerator</option>
                {enumerators.map((item) => (
                  <option key={item.fullName} value={item.fullName}>
                    {item.fullName}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <p className="mb-[10px] text-[15px]">Select a respondent (fcs)</p>
              <select
                class="h-[50px] px-[10px] w-full text-[14px] rounded-[5px] border px-[10px] border-gray-300 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-primary-110"
                name="occupations"
                id="occupations"
                value={selectedRespondent}
                onChange={(e) => setSelectedRespondent(e.target.value)}
              >
                <option value="">Select respondent</option>
                {respondents.map((item) => (
                  <option key={item.fullName} value={item.respondentId}>
                    {item.fullName}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-full">
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
