import React, { useContext } from "react";
import { GlobalContext } from "../../components/context/MyProvider";

const Review = () => {
  const { data } = useContext(GlobalContext);

  console.log(data);
  return (
    <div className="w-[70%] sm:w-[95%] sm:h-full sm:mt-[20px] mx-auto flex flex-col min-h-[650px] items-center">
      <div className="mb-[40px] mt-[20px] w-full">
        <div>FARM TO MARKET ALLIANCE</div>
        <p className="">Farmers Service Centres (FSC) Survey</p>
        <p className=" font-bold">Review your survey choices</p>
      </div>
      <div className="flex w-full sm:flex-col">
        <div className="w-[45%] flex flex-col sm:w-[95%] sm:mx-auto">
          <div className="mb-[20px]">
            <p className="text-[16px] font-semibold mb-[10px]">
              1.0 Education/occupational level information
            </p>
            <div className="flex items-center gap-[10px]">
              <p className="text-[15px] text-[#000]">Primary level:</p>
              <p className="text-[15px] text-[#000]">
                {data.education.primarySchoolAttended}
              </p>
            </div>
            <div className="flex items-center gap-[10px]">
              <p className="text-[15px] text-[#000]">Secondary level:</p>
              <p className="text-[15px] text-[#000]">
                {data.education.secondarySchoolAttended}
              </p>
            </div>
            <div className="flex items-center gap-[10px]">
              <p className="text-[15px] text-[#000]">Tertiary level:</p>
              <p className="text-[15px] text-[#000]">
                {data.education.collegeAttended}
              </p>
            </div>
          </div>
          <div className="mb-[20px]">
            <p className="text-[16px] font-semibold mb-[10px]">2.0 Fsc Roles</p>
            {data.fscRoles.length > 0 ? (
              data.fscRoles.map((role) => (
                <>
                  <div className="flex items-center gap-[20px]">
                    <p className="text-[15px] text-[#000]">{role?.title}</p>
                  </div>
                </>
              ))
            ) : (
              <p>No role recorded</p>
            )}
          </div>
          <div className="mb-[20px]">
            <p className="text-[16px] mb-[10px]">
              3.0 Required skills for your role
            </p>
            {data.skillsRequired.length > 0 ? (
              data.skillsRequired.map((skill) => (
                <>
                  <div className="flex items-center gap-[20px]">
                    <p className="text-[15px] text-[#000]">{skill?.skill}</p>
                  </div>
                </>
              ))
            ) : (
              <p>No skills recorded</p>
            )}
          </div>
        </div>
        <div className="w-[45%] flex flex-col sm:w-[95%] sm:mx-auto">
          <div className="mb-[20px]">
            <p className="text-[16px] font-semibold font-semibold mb-[10px]">
              5.0 Do you have experience with the following vendors?
            </p>
            <div className="flex items-center gap-[10px]">
              <p className="text-[15px] text-[#000]">Input Supply</p>
              <p className="text-[15px] text-[#000]">
                {data.vendorsExperience.inputSupply ? "Yes" : "No"}
              </p>
            </div>
            <div className="flex items-center gap-[10px]">
              <p className="text-[15px] text-[#000]">
                Financial service Institutions
              </p>
              <p className="text-[15px] text-[#000]">
                {data.vendorsExperience.financialServiceInstitutions
                  ? "Yes"
                  : "No"}
              </p>
            </div>
            <div className="flex items-center gap-[10px]">
              <p className="text-[15px] text-[#000]">Marketers experience</p>
              <p className="text-[15px] text-[#000]">
                {data.vendorsExperience.marketersExperience ? "Yes" : "No"}
              </p>
            </div>
            <div className="flex items-center gap-[10px]">
              <p className="text-[15px] text-[#000]">Input Distribution</p>
              <p className="text-[15px] text-[#000]">
                {data.vendorsExperience.inputDistribution ? "Yes" : "No"}
              </p>
            </div>
          </div>
          <div className="mb-[20px]">
            <p className="text-[16px] font-semibold mb-[10px]">
              6.0 Other training needs/modules
            </p>
            {data.otherTrainingNeeds.length > 0 ? (
              data.otherTrainingNeeds.map((training, index) => (
                <div className="my-[10px] w-full">
                  <div className="flex items-center gap-[10px]">
                    <p className="text-[15px] text-[#000] font-bold">Title:</p>
                    <p className="text-[15px] text-[#000]">{training?.title}</p>
                  </div>
                  <div className="flex items-center gap-[10px]">
                    <p className="text-[15px] text-[#000]">
                      Training duration:
                    </p>
                    <p className="text-[15px] text-[#000]">
                      {training?.duration}
                    </p>
                  </div>
                  <div className="flex items-center gap-[10px]">
                    <p className="text-[15px] text-[#000]">Year of training:</p>
                    <p className="text-[15px] text-[#000]">
                      {training?.yearOfTraining}
                    </p>
                  </div>
                  <div className="flex items-center gap-[10px]">
                    <p className="text-[15px] text-[#000]">
                      Level of satidfaction:
                    </p>
                    <p className="text-[15px] text-[#000]">
                      {training?.satisfactoryLevel}
                    </p>
                  </div>
                  <div className="flex flex-col my-[10px]">
                    <p className="text-[15px] text-[#000]">
                      Training relevance:
                    </p>
                    <p className="text-[15px] text-[#000]">
                      {training?.valueObtained}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p>No additional training recomended</p>
            )}
          </div>
          <div className="mb-[20px]">
            <p className="text-[16px] font-semibold mb-[10px]">
              7.0 Other training sub topics
            </p>
            {data.otherTrainingSubTopics.length > 0 ? (
              data.otherTrainingSubTopics.map((training, index) => (
                <div className="my-[10px] w-full">
                  <div className="flex items-center gap-[10px]">
                    <p className="text-[15px] text-[#000] font-bold">Title:</p>
                    <p className="text-[15px] text-[#000]">{training?.title}</p>
                  </div>
                  <div className="flex items-center gap-[10px]">
                    <p className="text-[15px] text-[#000]">
                      Training duration:
                    </p>
                    <p className="text-[15px] text-[#000]">
                      {training?.duration}
                    </p>
                  </div>
                  <div className="flex items-center gap-[10px]">
                    <p className="text-[15px] text-[#000]">Year of training:</p>
                    <p className="text-[15px] text-[#000]">
                      {training?.yearOfTraining}
                    </p>
                  </div>
                  <div className="flex items-center gap-[10px]">
                    <p className="text-[15px] text-[#000]">
                      Level of satidfaction:
                    </p>
                    <p className="text-[15px] text-[#000]">
                      {training?.satisfactoryLevel}
                    </p>
                  </div>
                  <div className="flex flex-col my-[10px]">
                    <p className="text-[15px] text-[#000]">
                      Training relevance:
                    </p>
                    <p className="text-[15px] text-[#000]">
                      {training?.valueObtained}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p>No additional training sub topic recomended</p>
            )}
          </div>
        </div>
      </div>
      <div className="mb-[20px] sm:w-[95%] mx-auto w-full">
        <p className="text-[16px] font-semibold mb-[10px]">4.0 Training recieved so far</p>
        <div className="w-full">
          {data.trainingReceived.length > 0 ? (
            <table className="w-full border-collapse table-fixed text-[12px] border border-gray-300">
              <thead>
                <tr>
                  <th className="border border-gray-300 p-[10px]">Topic</th>
                  <th className="border border-gray-300 p-[10px]">
                    Training duration
                  </th>
                  <th className="border border-gray-300 p-[10px]">
                    Year of training
                  </th>
                  <th className="border border-gray-300 p-[10px]">
                    Level of satisfaction
                  </th>
                  <th className="border border-gray-300 p-[10px]">
                    Training relevance
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.trainingReceived.map((training, index) => (
                  <tr key={index} className="border border-gray-300">
                    <td className="border truncate border-gray-300 p-[10px]">
                      {training?.title}
                    </td>
                    <td className="border border-gray-300 p-[10px]">
                      {training?.duration}
                    </td>
                    <td className="border border-gray-300 p-[10px]">
                      {training?.yearOfTraining}
                    </td>
                    <td className="border border-gray-300 p-[10px]">
                      {training?.satisfactoryLevel}
                    </td>
                    <td className="border sm:truncate border-gray-300 p-[10px]">
                      {training?.valueObtained}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No skills recorded</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Review;
