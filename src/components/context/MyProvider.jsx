import React, { createContext, useState, useEffect } from "react";
const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const retrieveInitialData = () => {
    const savedData = localStorage.getItem("globalData");
    return savedData
      ? JSON.parse(savedData)
      : {
          respondentId: null,
          education: {
            secondarySchoolAttended: "",
            collegeAttended: "",
            primarySchoolAttended: "",
          },
          fscRoles: [{ title: "" }, { title: "" }],
          marketInformation: {
            informationReceptionMethod: "",
            inputsDealsWith: "",
            inputsAccessChallenges: "",
            otherChallenges: "",
          },
          skillsRequired: [{ skill: "" }, { skill: "" }],
          trainingNeeds: [{ training: "", scale: 1 }],
          otherTrainingNeeds: [{ training: "", scale: 1 }],
          trainingReceived: [
            {
              title: "",
              duration: "",
              yearOfTraining: "",
              institution: "",
              valueObtained: "",
              satisfactoryLevel: "B",
            },
            {
              title: "",
              duration: "",
              yearOfTraining: "",
              institution: "",
              valueObtained: "",
              satisfactoryLevel: "C",
            },
          ],
          vendorsExperience: {
            inputSupply: false,
            inputDistribution: false,
            financialServiceInstitutions: false,
            marketersExperience: false,
          },
          timePreference: {
            residentialTimePreference: "",
            noneResidentialTimePreference: "",
          },
        };
  };

  const [data, setData] = useState(retrieveInitialData);

  const updateData = (newData) => {
    setData((prevData) => {
      const updatedData = {
        ...prevData,
        ...newData,
        education: {
          ...prevData.education,
          ...newData.education,
        },
        fscRoles: newData.fscRoles || prevData.fscRoles,
        marketInformation: {
          ...prevData.marketInformation,
          ...newData.marketInformation,
        },
        skillsRequired: newData.skillsRequired || prevData.skillsRequired,
        trainingNeeds: newData.trainingNeeds || prevData.trainingNeeds,
        otherTrainingNeeds:
          newData.otherTrainingNeeds || prevData.otherTrainingNeeds,
        trainingReceived: newData.trainingReceived || prevData.trainingReceived,
        vendorsExperience: {
          ...prevData.vendorsExperience,
          ...newData.vendorsExperience,
        },
        timePreference: {
          ...prevData.timePreference,
          ...newData.timePreference,
        },
      };
      localStorage.setItem("globalData", JSON.stringify(updatedData));
      return updatedData;
    });
  };

  return (
    <GlobalContext.Provider value={{ data, updateData }}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
