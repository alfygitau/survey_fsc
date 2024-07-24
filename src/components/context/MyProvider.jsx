import React, { createContext, useState } from "react";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [data, setData] = useState({
    fsc: {
      firstName: "",
      lastName: "",
      gender: "",
      ageGroup: "",
      email: "",
      msisdn: "",
      isPwd: false,
      valueChain: "",
      fscTire: "",
      yearOfJoining: "",
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
    skillsRequired: [{ skills: "" }, { skills: "" }],
    trainingNeeds: [
      { training: "", scale: 5 },
      { training: "", scale: 4 },
    ],
    trainingReceived: [
      {
        title: "",
        duration: "",
        yearOfTraining: "",
        institution: "",
        valueObtained: "",
        satisfactoryLevel: 4,
      },
      {
        title: "",
        duration: "",
        yearOfTraining: "",
        institution: "",
        valueObtained: "",
        satisfactoryLevel: 5,
      },
    ],
    vendorsExperience: {
      inputSupply: true,
      inputDistribution: false,
      financialServiceInstitutions: false,
      marketersExperience: true,
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
