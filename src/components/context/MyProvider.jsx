import React, { createContext, useState } from "react";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [data, setData] = useState({
    education: {
      secondarySchoolAttended: "",
      collegeAttended: "",
      primarySchoolAttended: "",
    },
    fscRoles: [
      {
        title: "",
      },
      {
        title: "",
      },
    ],
    marketInformation: {
      informationReceptionMethod: "",
      inputsDealsWith: "",
      inputsAccessChallenges: "",
      otherChallenges: "",
    },
    skillsRequired: [
      {
        skill: "",
      },
      {
        skill: "",
      },
    ],
    trainingNeeds: [
      {
        training: "",
        scale: 1,
      },
    ],
    otherTrainingNeeds: [
      {
        training: "",
        scale: 1,
      },
    ],
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
  });

  const updateData = (newData) => {
    setData((prevData) => ({ ...prevData, ...newData }));
  };

  return (
    <GlobalContext.Provider value={{ data, updateData }}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
