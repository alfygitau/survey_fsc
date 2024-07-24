import React, { useState } from "react";
import { useNavigate } from "react-router";

const TrainingNeeds = () => {
  const [selectedOptions, setSelectedOptions] = useState({
    "Basic negotiation skills": "",
    "How to effectively prepare for negotiations": "",
    "Group work/role play in negotiation preparations": "",
    "Understanding the key negotiation phases and process": "",
    "Service/Product costing and pricing skills": "",
    "Exchanging information during negotiation": "",
    "Bargaining skills": "",
    "Negotiation closing skills": "",
    "Group work/role plays in negotiation skills": "",
    "Basic understanding of level of conflicts": "",
    "Mapping of conflicts": "",
    "How to uncover needs in conflict situations": "",
    "Behaviours in conflict situations": "",
    "Conflict management skills (in general)": "",
    "The Win/Win Approach": "",
    "Creative Response": "",
    "Empathy/Listening skill": "",
    "Appropriate assertiveness": "",
    "Co-operative power": "",
    "Managing emotions": "",
    "Willingness to resolve": "",
    "Broadening perspective": "",
    "Group work/role plays": "",
    "Principles and skills of effective communication": "",
    "Active listening and clear messaging techniques": "",
    "Group work/role plays in effective communication skills": "",
    "The importance of problem solving to business managers/leaders": "",
    "Problem symptoms and means of identification": "",
    "Key problem-solving skills and strategies": "",
    "Group work on problem-solving skills": "",
    "Principles and skills of effective communication": "",
    "Active listening and clear messaging techniques": "",
    "Group work/role plays in effective communication skills": "",
    "The importance of problem solving to business managers/leaders": "",
    "Problem symptoms and means of identification": "",
    "Key problem-solving skills and strategies": "",
    "Group work on problem-solving skills": "",
  });

  const handleOptionChange = (section, value) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [section]: value,
    }));
  };

  console.log(selectedOptions);

  const navigate = useNavigate();
  const createTrainingNeeds = () => {
    navigate("/additional-skills");
  };
  return (
    <div className="w-[80%] sm:w-[95%] sm:h-full sm:mt-[20px] lg:mt-[40px] mx-auto flex flex-col h-full items-center">
      <div className="mb-[40px] w-full">
        <p className="">Farmers Service Centres (FSC) Survey</p>
        <p className="">Training Needs</p>
        <p className="font-bold">
          3. Please indicate your training needs in the context of your roles
          and responsibility in a scale of 1 - 5 (1 least preferred, 5 most
          preferred)
        </p>
      </div>
      <div className="flex w-full justify-between sm:flex-col">
        <div className="w-[30%] flex flex-col sm:w-[95%] sm:mx-auto">
          <p className="text-[14px] mb-[20px] text-left font-bold">
            NEGOTIATION SKILLS
          </p>
          <div className="mb-[10px]">
            <label className="text-[14px] text-[#000]" htmlFor="">
              1.0 Basic negotiation skills
            </label>
            <div className="flex mt-[10px] items-center gap-[30px]">
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Basic negotiation skills"
                  value="1"
                  checked={selectedOptions["Basic negotiation skills"] === "1"}
                  onChange={() =>
                    handleOptionChange("Basic negotiation skills", "1")
                  }
                />
                <span className="text-[12px] truncate">1</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Basic negotiation skills"
                  value="2"
                  checked={selectedOptions["Basic negotiation skills"] === "2"}
                  onChange={() =>
                    handleOptionChange("Basic negotiation skills", "2")
                  }
                />
                <span className="text-[12px] truncate">2</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Basic negotiation skills"
                  value="3"
                  checked={selectedOptions["Basic negotiation skills"] === "3"}
                  onChange={() =>
                    handleOptionChange("Basic negotiation skills", "3")
                  }
                />
                <span className="text-[12px] truncate">3</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Basic negotiation skills"
                  value="4"
                  checked={selectedOptions["Basic negotiation skills"] === "4"}
                  onChange={() =>
                    handleOptionChange("Basic negotiation skills", "4")
                  }
                />
                <span className="text-[12px] truncate">4</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Basic negotiation skills"
                  value="5"
                  checked={selectedOptions["Basic negotiation skills"] === "5"}
                  onChange={() =>
                    handleOptionChange("Basic negotiation skills", "5")
                  }
                />
                <span className="text-[12px] truncate">5</span>
              </div>
            </div>
          </div>
          <div className="mb-[10px]">
            <label className="text-[14px] mb-[10px] text-[#000]" htmlFor="">
              1.1 How to effectively prepare for negotiations
            </label>
            <div className="flex mt-[10px] items-center gap-[30px]">
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="How to effectively prepare for negotiations"
                  value="1"
                  checked={
                    selectedOptions[
                      "How to effectively prepare for negotiations"
                    ] === "1"
                  }
                  onChange={() =>
                    handleOptionChange(
                      "How to effectively prepare for negotiations",
                      "1"
                    )
                  }
                />
                <span className="text-[12px] truncate">1</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="How to effectively prepare for negotiations"
                  value="2"
                  checked={
                    selectedOptions[
                      "How to effectively prepare for negotiations"
                    ] === "2"
                  }
                  onChange={() =>
                    handleOptionChange(
                      "How to effectively prepare for negotiations",
                      "2"
                    )
                  }
                />
                <span className="text-[12px] truncate">2</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="How to effectively prepare for negotiations"
                  value="3"
                  checked={
                    selectedOptions[
                      "How to effectively prepare for negotiations"
                    ] === "3"
                  }
                  onChange={() =>
                    handleOptionChange(
                      "How to effectively prepare for negotiations",
                      "3"
                    )
                  }
                />
                <span className="text-[12px] truncate">3</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="How to effectively prepare for negotiations"
                  value="4"
                  checked={
                    selectedOptions[
                      "How to effectively prepare for negotiations"
                    ] === "4"
                  }
                  onChange={() =>
                    handleOptionChange(
                      "How to effectively prepare for negotiations",
                      "4"
                    )
                  }
                />
                <span className="text-[12px] truncate">4</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="How to effectively prepare for negotiations"
                  value="5"
                  checked={
                    selectedOptions[
                      "How to effectively prepare for negotiations"
                    ] === "5"
                  }
                  onChange={() =>
                    handleOptionChange(
                      "How to effectively prepare for negotiations",
                      "5"
                    )
                  }
                />
                <span className="text-[12px] truncate">5</span>
              </div>
            </div>
          </div>
          <div className="mb-[10px]">
            <label className="text-[14px] mb-[10px] text-[#000]" htmlFor="">
              1.2 Group work/role play in negotiation preparations
            </label>
            <div className="flex mt-[10px] items-center gap-[30px]">
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Group work/role play in negotiation preparations"
                  value="1"
                  checked={
                    selectedOptions[
                      "Group work/role play in negotiation preparations"
                    ] === "1"
                  }
                  onChange={() =>
                    handleOptionChange(
                      "Group work/role play in negotiation preparations",
                      "1"
                    )
                  }
                />
                <span className="text-[12px] truncate">1</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Group work/role play in negotiation preparations"
                  value="2"
                  checked={
                    selectedOptions[
                      "Group work/role play in negotiation preparations"
                    ] === "2"
                  }
                  onChange={() =>
                    handleOptionChange(
                      "Group work/role play in negotiation preparations",
                      "2"
                    )
                  }
                />
                <span className="text-[12px] truncate">2</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Group work/role play in negotiation preparations"
                  value="3"
                  checked={
                    selectedOptions[
                      "Group work/role play in negotiation preparations"
                    ] === "3"
                  }
                  onChange={() =>
                    handleOptionChange(
                      "Group work/role play in negotiation preparations",
                      "3"
                    )
                  }
                />
                <span className="text-[12px] truncate">3</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Group work/role play in negotiation preparations"
                  value="4"
                  checked={
                    selectedOptions[
                      "Group work/role play in negotiation preparations"
                    ] === "4"
                  }
                  onChange={() =>
                    handleOptionChange(
                      "Group work/role play in negotiation preparations",
                      "4"
                    )
                  }
                />
                <span className="text-[12px] truncate">4</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Group work/role play in negotiation preparations"
                  value="5"
                  checked={
                    selectedOptions[
                      "Group work/role play in negotiation preparations"
                    ] === "5"
                  }
                  onChange={() =>
                    handleOptionChange(
                      "Group work/role play in negotiation preparations",
                      "5"
                    )
                  }
                />
                <span className="text-[12px] truncate">5</span>
              </div>
            </div>
          </div>
          <div className="mb-[10px]">
            <label className="text-[14px] mb-[10px] text-[#000]" htmlFor="">
              1.3 Understanding the key negotiation phases and process
            </label>
            <div className="flex mt-[10px] items-center gap-[30px]">
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Understanding the key negotiation phases and process"
                  value="1"
                  checked={
                    selectedOptions[
                      "Understanding the key negotiation phases and process"
                    ] === "1"
                  }
                  onChange={() =>
                    handleOptionChange(
                      "Understanding the key negotiation phases and process",
                      "1"
                    )
                  }
                />
                <span className="text-[12px] truncate">1</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Understanding the key negotiation phases and process"
                  value="2"
                  checked={
                    selectedOptions[
                      "Understanding the key negotiation phases and process"
                    ] === "2"
                  }
                  onChange={() =>
                    handleOptionChange(
                      "Understanding the key negotiation phases and process",
                      "2"
                    )
                  }
                />
                <span className="text-[12px] truncate">2</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Understanding the key negotiation phases and process"
                  value="3"
                  checked={
                    selectedOptions[
                      "Understanding the key negotiation phases and process"
                    ] === "3"
                  }
                  onChange={() =>
                    handleOptionChange(
                      "Understanding the key negotiation phases and process",
                      "3"
                    )
                  }
                />
                <span className="text-[12px] truncate">3</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Understanding the key negotiation phases and process"
                  value="4"
                  checked={
                    selectedOptions[
                      "Understanding the key negotiation phases and process"
                    ] === "4"
                  }
                  onChange={() =>
                    handleOptionChange(
                      "Understanding the key negotiation phases and process",
                      "4"
                    )
                  }
                />
                <span className="text-[12px] truncate">4</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Understanding the key negotiation phases and process"
                  value="5"
                  checked={
                    selectedOptions[
                      "Understanding the key negotiation phases and process"
                    ] === "5"
                  }
                  onChange={() =>
                    handleOptionChange(
                      "Understanding the key negotiation phases and process",
                      "5"
                    )
                  }
                />
                <span className="text-[12px] truncate">5</span>
              </div>
            </div>
          </div>

          <div className="mb-[10px]">
            <label className="text-[14px] mb-[10px] text-[#000]" htmlFor="">
              1.4 Service/Product costing and pricing skills
            </label>
            <div className="flex mt-[10px] items-center gap-[30px]">
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Service/Product costing and pricing skills"
                  value="1"
                  checked={
                    selectedOptions[
                      "Service/Product costing and pricing skills"
                    ] === "1"
                  }
                  onChange={() =>
                    handleOptionChange(
                      "Service/Product costing and pricing skills",
                      "1"
                    )
                  }
                />
                <span className="text-[12px] truncate">1</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Service/Product costing and pricing skills"
                  value="2"
                  checked={
                    selectedOptions[
                      "Service/Product costing and pricing skills"
                    ] === "2"
                  }
                  onChange={() =>
                    handleOptionChange(
                      "Service/Product costing and pricing skills",
                      "2"
                    )
                  }
                />
                <span className="text-[12px] truncate">2</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Service/Product costing and pricing skills"
                  value="3"
                  checked={
                    selectedOptions[
                      "Service/Product costing and pricing skills"
                    ] === "3"
                  }
                  onChange={() =>
                    handleOptionChange(
                      "Service/Product costing and pricing skills",
                      "3"
                    )
                  }
                />
                <span className="text-[12px] truncate">3</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Service/Product costing and pricing skills"
                  value="4"
                  checked={
                    selectedOptions[
                      "Service/Product costing and pricing skills"
                    ] === "4"
                  }
                  onChange={() =>
                    handleOptionChange(
                      "Service/Product costing and pricing skills",
                      "4"
                    )
                  }
                />
                <span className="text-[12px] truncate">4</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Service/Product costing and pricing skills"
                  value="5"
                  checked={
                    selectedOptions[
                      "Service/Product costing and pricing skills"
                    ] === "5"
                  }
                  onChange={() =>
                    handleOptionChange(
                      "Service/Product costing and pricing skills",
                      "5"
                    )
                  }
                />
                <span className="text-[12px] truncate">5</span>
              </div>
            </div>
          </div>

          <div className="mb-[10px]">
            <label className="text-[14px] mb-[10px] text-[#000]" htmlFor="">
              1.5 Exchanging information during negotiation
            </label>
            <div className="flex mt-[10px] items-center gap-[30px]">
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Exchanging information during negotiation"
                  value="1"
                  checked={
                    selectedOptions[
                      "Exchanging information during negotiation"
                    ] === "1"
                  }
                  onChange={() =>
                    handleOptionChange(
                      "Exchanging information during negotiation",
                      "1"
                    )
                  }
                />
                <span className="text-[12px] truncate">1</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Exchanging information during negotiation"
                  value="2"
                  checked={
                    selectedOptions[
                      "Exchanging information during negotiation"
                    ] === "2"
                  }
                  onChange={() =>
                    handleOptionChange(
                      "Exchanging information during negotiation",
                      "2"
                    )
                  }
                />
                <span className="text-[12px] truncate">2</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Exchanging information during negotiation"
                  value="3"
                  checked={
                    selectedOptions[
                      "Exchanging information during negotiation"
                    ] === "3"
                  }
                  onChange={() =>
                    handleOptionChange(
                      "Exchanging information during negotiation",
                      "3"
                    )
                  }
                />
                <span className="text-[12px] truncate">3</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Exchanging information during negotiation"
                  value="4"
                  checked={
                    selectedOptions[
                      "Exchanging information during negotiation"
                    ] === "4"
                  }
                  onChange={() =>
                    handleOptionChange(
                      "Exchanging information during negotiation",
                      "4"
                    )
                  }
                />
                <span className="text-[12px] truncate">4</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Exchanging information during negotiation"
                  value="5"
                  checked={
                    selectedOptions[
                      "Exchanging information during negotiation"
                    ] === "5"
                  }
                  onChange={() =>
                    handleOptionChange(
                      "Exchanging information during negotiation",
                      "5"
                    )
                  }
                />
                <span className="text-[12px] truncate">5</span>
              </div>
            </div>
          </div>

          <div className="mb-[10px]">
            <label className="text-[14px] mb-[10px] text-[#000]" htmlFor="">
              1.6 Bargaining skills
            </label>
            <div className="flex mt-[10px] items-center gap-[30px]">
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Bargaining skills"
                  value="1"
                  checked={selectedOptions["Bargaining skills"] === "1"}
                  onChange={() => handleOptionChange("Bargaining skills", "1")}
                />
                <span className="text-[12px] truncate">1</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Bargaining skills"
                  value="2"
                  checked={selectedOptions["Bargaining skills"] === "2"}
                  onChange={() => handleOptionChange("Bargaining skills", "2")}
                />
                <span className="text-[12px] truncate">2</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Bargaining skills"
                  value="3"
                  checked={selectedOptions["Bargaining skills"] === "3"}
                  onChange={() => handleOptionChange("Bargaining skills", "3")}
                />
                <span className="text-[12px] truncate">3</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Bargaining skills"
                  value="4"
                  checked={selectedOptions["Bargaining skills"] === "4"}
                  onChange={() => handleOptionChange("Bargaining skills", "4")}
                />
                <span className="text-[12px] truncate">4</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Bargaining skills"
                  value="5"
                  checked={selectedOptions["Bargaining skills"] === "5"}
                  onChange={() => handleOptionChange("Bargaining skills", "5")}
                />
                <span className="text-[12px] truncate">5</span>
              </div>
            </div>
          </div>

          <div className="mb-[10px]">
            <label className="text-[14px] mb-[10px] text-[#000]" htmlFor="">
              1.7 Negotiation closing skills
            </label>
            <div className="flex mt-[10px] items-center gap-[30px]">
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Negotiation closing skills"
                  value="1"
                  checked={
                    selectedOptions["Negotiation closing skills"] === "1"
                  }
                  onChange={() =>
                    handleOptionChange("Negotiation closing skills", "1")
                  }
                />
                <span className="text-[12px] truncate">1</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Negotiation closing skills"
                  value="2"
                  checked={
                    selectedOptions["Negotiation closing skills"] === "2"
                  }
                  onChange={() =>
                    handleOptionChange("Negotiation closing skills", "2")
                  }
                />
                <span className="text-[12px] truncate">2</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Negotiation closing skills"
                  value="3"
                  checked={
                    selectedOptions["Negotiation closing skills"] === "3"
                  }
                  onChange={() =>
                    handleOptionChange("Negotiation closing skills", "3")
                  }
                />
                <span className="text-[12px] truncate">3</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Negotiation closing skills"
                  value="4"
                  checked={
                    selectedOptions["Negotiation closing skills"] === "4"
                  }
                  onChange={() =>
                    handleOptionChange("Negotiation closing skills", "4")
                  }
                />
                <span className="text-[12px] truncate">4</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Negotiation closing skills"
                  value="5"
                  checked={
                    selectedOptions["Negotiation closing skills"] === "5"
                  }
                  onChange={() =>
                    handleOptionChange("Negotiation closing skills", "5")
                  }
                />
                <span className="text-[12px] truncate">5</span>
              </div>
            </div>
          </div>

          {/*  */}
          <div className="mb-[10px]">
            <label className="text-[14px] mb-[10px] text-[#000]" htmlFor="">
              1.8 Group work/role plays in negotiation skills
            </label>
            <div className="flex mt-[10px] items-center gap-[30px]">
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Group work/role plays in negotiation skills"
                  value="1"
                  checked={
                    selectedOptions[
                      "Group work/role plays in negotiation skills"
                    ] === "1"
                  }
                  onChange={() =>
                    handleOptionChange(
                      "Group work/role plays in negotiation skills",
                      "1"
                    )
                  }
                />
                <span className="text-[12px] truncate">1</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Group work/role plays in negotiation skills"
                  value="2"
                  checked={
                    selectedOptions[
                      "Group work/role plays in negotiation skills"
                    ] === "2"
                  }
                  onChange={() =>
                    handleOptionChange(
                      "Group work/role plays in negotiation skills",
                      "2"
                    )
                  }
                />
                <span className="text-[12px] truncate">2</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Group work/role plays in negotiation skills"
                  value="3"
                  checked={
                    selectedOptions[
                      "Group work/role plays in negotiation skills"
                    ] === "3"
                  }
                  onChange={() =>
                    handleOptionChange(
                      "Group work/role plays in negotiation skills",
                      "3"
                    )
                  }
                />
                <span className="text-[12px] truncate">3</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Group work/role plays in negotiation skills"
                  value="4"
                  checked={
                    selectedOptions[
                      "Group work/role plays in negotiation skills"
                    ] === "4"
                  }
                  onChange={() =>
                    handleOptionChange(
                      "Group work/role plays in negotiation skills",
                      "4"
                    )
                  }
                />
                <span className="text-[12px] truncate">4</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Group work/role plays in negotiation skills"
                  value="5"
                  checked={
                    selectedOptions[
                      "Group work/role plays in negotiation skills"
                    ] === "5"
                  }
                  onChange={() =>
                    handleOptionChange(
                      "Group work/role plays in negotiation skills",
                      "5"
                    )
                  }
                />
                <span className="text-[12px] truncate">5</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[30%] flex flex-col sm:w-[95%] sm:mx-auto">
          <p className="text-[14px] mb-[20px] text-left font-bold">
            CONFLICT RESOLUTION SKILLS
          </p>
          <div className="mb-[10px]">
            <label className="text-[14px] mb-[10px] text-[#000]" htmlFor="">
              2.0 Basic understanding of level of conflicts
            </label>
            <div className="flex mt-[10px] items-center gap-[30px]">
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Basic understanding of level of conflicts"
                  value="1"
                  checked={
                    selectedOptions[
                      "Basic understanding of level of conflicts"
                    ] === "1"
                  }
                  onChange={() =>
                    handleOptionChange(
                      "Basic understanding of level of conflicts",
                      "1"
                    )
                  }
                />
                <span className="text-[12px] truncate">1</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Basic understanding of level of conflicts"
                  value="2"
                  checked={
                    selectedOptions[
                      "Basic understanding of level of conflicts"
                    ] === "2"
                  }
                  onChange={() =>
                    handleOptionChange(
                      "Basic understanding of level of conflicts",
                      "2"
                    )
                  }
                />
                <span className="text-[12px] truncate">2</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Basic understanding of level of conflicts"
                  value="3"
                  checked={
                    selectedOptions[
                      "Basic understanding of level of conflicts"
                    ] === "3"
                  }
                  onChange={() =>
                    handleOptionChange(
                      "Basic understanding of level of conflicts",
                      "3"
                    )
                  }
                />
                <span className="text-[12px] truncate">3</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Basic understanding of level of conflicts"
                  value="4"
                  checked={
                    selectedOptions[
                      "Basic understanding of level of conflicts"
                    ] === "4"
                  }
                  onChange={() =>
                    handleOptionChange(
                      "Basic understanding of level of conflicts",
                      "4"
                    )
                  }
                />
                <span className="text-[12px] truncate">4</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Basic understanding of level of conflicts"
                  value="5"
                  checked={
                    selectedOptions[
                      "Basic understanding of level of conflicts"
                    ] === "5"
                  }
                  onChange={() =>
                    handleOptionChange(
                      "Basic understanding of level of conflicts",
                      "5"
                    )
                  }
                />
                <span className="text-[12px] truncate">5</span>
              </div>
            </div>
          </div>

          <div className="mb-[10px]">
            <label className="text-[14px] mb-[10px] text-[#000]" htmlFor="">
              2.1 Mapping of conflicts
            </label>
            <div className="flex mt-[10px] items-center gap-[30px]">
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Mapping of conflicts"
                  value="1"
                  checked={selectedOptions["Mapping of conflicts"] === "1"}
                  onChange={() =>
                    handleOptionChange("Mapping of conflicts", "1")
                  }
                />
                <span className="text-[12px] truncate">1</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Mapping of conflicts"
                  value="2"
                  checked={selectedOptions["Mapping of conflicts"] === "2"}
                  onChange={() =>
                    handleOptionChange("Mapping of conflicts", "2")
                  }
                />
                <span className="text-[12px] truncate">2</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Mapping of conflicts"
                  value="3"
                  checked={selectedOptions["Mapping of conflicts"] === "3"}
                  onChange={() =>
                    handleOptionChange("Mapping of conflicts", "3")
                  }
                />
                <span className="text-[12px] truncate">3</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Mapping of conflicts"
                  value="4"
                  checked={selectedOptions["Mapping of conflicts"] === "4"}
                  onChange={() =>
                    handleOptionChange("Mapping of conflicts", "4")
                  }
                />
                <span className="text-[12px] truncate">4</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Mapping of conflicts"
                  value="5"
                  checked={selectedOptions["Mapping of conflicts"] === "5"}
                  onChange={() =>
                    handleOptionChange("Mapping of conflicts", "5")
                  }
                />
                <span className="text-[12px] truncate">5</span>
              </div>
            </div>
          </div>

          {/*  */}
          <div className="mb-[10px]">
            <label className="text-[14px] mb-[10px] text-[#000]" htmlFor="">
              2.2 How to uncover needs in conflict situations
            </label>
            <div className="flex mt-[10px] items-center gap-[30px]">
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="How to uncover needs in conflict situations"
                  value="1"
                  checked={
                    selectedOptions[
                      "How to uncover needs in conflict situations"
                    ] === "1"
                  }
                  onChange={() =>
                    handleOptionChange(
                      "How to uncover needs in conflict situations",
                      "1"
                    )
                  }
                />
                <span className="text-[12px] truncate">1</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="How to uncover needs in conflict situations"
                  value="2"
                  checked={
                    selectedOptions[
                      "How to uncover needs in conflict situations"
                    ] === "2"
                  }
                  onChange={() =>
                    handleOptionChange(
                      "How to uncover needs in conflict situations",
                      "2"
                    )
                  }
                />
                <span className="text-[12px] truncate">2</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="How to uncover needs in conflict situations"
                  value="3"
                  checked={
                    selectedOptions[
                      "How to uncover needs in conflict situations"
                    ] === "3"
                  }
                  onChange={() =>
                    handleOptionChange(
                      "How to uncover needs in conflict situations",
                      "3"
                    )
                  }
                />
                <span className="text-[12px] truncate">3</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="How to uncover needs in conflict situations"
                  value="4"
                  checked={
                    selectedOptions[
                      "How to uncover needs in conflict situations"
                    ] === "4"
                  }
                  onChange={() =>
                    handleOptionChange(
                      "How to uncover needs in conflict situations",
                      "4"
                    )
                  }
                />
                <span className="text-[12px] truncate">4</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="How to uncover needs in conflict situations"
                  value="5"
                  checked={
                    selectedOptions[
                      "How to uncover needs in conflict situations"
                    ] === "5"
                  }
                  onChange={() =>
                    handleOptionChange(
                      "How to uncover needs in conflict situations",
                      "5"
                    )
                  }
                />
                <span className="text-[12px] truncate">5</span>
              </div>
            </div>
          </div>

          <div className="mb-[10px]">
            <label className="text-[14px] mb-[10px] text-[#000]" htmlFor="">
              2.3 Behaviours in conflict situations
            </label>
            <div className="flex mt-[10px] items-center gap-[30px]">
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Behaviours in conflict situations"
                  value="1"
                  checked={
                    selectedOptions["Behaviours in conflict situations"] === "1"
                  }
                  onChange={() =>
                    handleOptionChange("Behaviours in conflict situations", "1")
                  }
                />
                <span className="text-[12px] truncate">1</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Behaviours in conflict situations"
                  value="2"
                  checked={
                    selectedOptions["Behaviours in conflict situations"] === "2"
                  }
                  onChange={() =>
                    handleOptionChange("Behaviours in conflict situations", "2")
                  }
                />
                <span className="text-[12px] truncate">2</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Behaviours in conflict situations"
                  value="3"
                  checked={
                    selectedOptions["Behaviours in conflict situations"] === "3"
                  }
                  onChange={() =>
                    handleOptionChange("Behaviours in conflict situations", "3")
                  }
                />
                <span className="text-[12px] truncate">3</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Behaviours in conflict situations"
                  value="4"
                  checked={
                    selectedOptions["Behaviours in conflict situations"] === "4"
                  }
                  onChange={() =>
                    handleOptionChange("Behaviours in conflict situations", "4")
                  }
                />
                <span className="text-[12px] truncate">4</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Behaviours in conflict situations"
                  value="5"
                  checked={
                    selectedOptions["Behaviours in conflict situations"] === "5"
                  }
                  onChange={() =>
                    handleOptionChange("Behaviours in conflict situations", "5")
                  }
                />
                <span className="text-[12px] truncate">5</span>
              </div>
            </div>
          </div>

          <div className="mb-[10px]">
            <label className="text-[14px] mb-[10px] text-[#000]" htmlFor="">
              2.4 Conflict management skills (in general)
            </label>
            <div className="flex mt-[10px] items-center gap-[30px]">
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Conflict management skills (in general)"
                  value="1"
                  checked={
                    selectedOptions[
                      "Conflict management skills (in general)"
                    ] === "1"
                  }
                  onChange={() =>
                    handleOptionChange(
                      "Conflict management skills (in general)",
                      "1"
                    )
                  }
                />
                <span className="text-[12px] truncate">1</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Conflict management skills (in general)"
                  value="2"
                  checked={
                    selectedOptions[
                      "Conflict management skills (in general)"
                    ] === "2"
                  }
                  onChange={() =>
                    handleOptionChange(
                      "Conflict management skills (in general)",
                      "2"
                    )
                  }
                />
                <span className="text-[12px] truncate">2</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Conflict management skills (in general)"
                  value="3"
                  checked={
                    selectedOptions[
                      "Conflict management skills (in general)"
                    ] === "3"
                  }
                  onChange={() =>
                    handleOptionChange(
                      "Conflict management skills (in general)",
                      "3"
                    )
                  }
                />
                <span className="text-[12px] truncate">3</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Conflict management skills (in general)"
                  value="4"
                  checked={
                    selectedOptions[
                      "Conflict management skills (in general)"
                    ] === "4"
                  }
                  onChange={() =>
                    handleOptionChange(
                      "Conflict management skills (in general)",
                      "4"
                    )
                  }
                />
                <span className="text-[12px] truncate">4</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Conflict management skills (in general)"
                  value="5"
                  checked={
                    selectedOptions[
                      "Conflict management skills (in general)"
                    ] === "5"
                  }
                  onChange={() =>
                    handleOptionChange(
                      "Conflict management skills (in general)",
                      "5"
                    )
                  }
                />
                <span className="text-[12px] truncate">5</span>
              </div>
            </div>
          </div>

          <div className="mb-[10px]">
            <label className="text-[14px] mb-[10px] text-[#000]" htmlFor="">
              2.5 The Win/Win Approach
            </label>
            <div className="flex mt-[10px] items-center gap-[30px]">
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="The Win/Win Approach"
                  value="1"
                  checked={selectedOptions["The Win/Win Approach"] === "1"}
                  onChange={() =>
                    handleOptionChange("The Win/Win Approach", "1")
                  }
                />
                <span className="text-[12px] truncate">1</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="The Win/Win Approach"
                  value="2"
                  checked={selectedOptions["The Win/Win Approach"] === "2"}
                  onChange={() =>
                    handleOptionChange("The Win/Win Approach", "2")
                  }
                />
                <span className="text-[12px] truncate">2</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="The Win/Win Approach"
                  value="3"
                  checked={selectedOptions["The Win/Win Approach"] === "3"}
                  onChange={() =>
                    handleOptionChange("The Win/Win Approach", "3")
                  }
                />
                <span className="text-[12px] truncate">3</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="The Win/Win Approach"
                  value="4"
                  checked={selectedOptions["The Win/Win Approach"] === "4"}
                  onChange={() =>
                    handleOptionChange("The Win/Win Approach", "4")
                  }
                />
                <span className="text-[12px] truncate">4</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="The Win/Win Approach"
                  value="5"
                  checked={selectedOptions["The Win/Win Approach"] === "5"}
                  onChange={() =>
                    handleOptionChange("The Win/Win Approach", "5")
                  }
                />
                <span className="text-[12px] truncate">5</span>
              </div>
            </div>
          </div>

          <div className="mb-[10px]">
            <label className="text-[14px] mb-[10px] text-[#000]" htmlFor="">
              2.6 Creative Response
            </label>
            <div className="flex mt-[10px] items-center gap-[30px]">
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Creative Response"
                  value="1"
                  checked={selectedOptions["Creative Response"] === "1"}
                  onChange={() => handleOptionChange("Creative Response", "1")}
                />
                <span className="text-[12px] truncate">1</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Creative Response"
                  value="2"
                  checked={selectedOptions["Creative Response"] === "2"}
                  onChange={() => handleOptionChange("Creative Response", "2")}
                />
                <span className="text-[12px] truncate">2</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Creative Response"
                  value="3"
                  checked={selectedOptions["Creative Response"] === "3"}
                  onChange={() => handleOptionChange("Creative Response", "3")}
                />
                <span className="text-[12px] truncate">3</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Creative Response"
                  value="4"
                  checked={selectedOptions["Creative Response"] === "4"}
                  onChange={() => handleOptionChange("Creative Response", "4")}
                />
                <span className="text-[12px] truncate">4</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Creative Response"
                  value="5"
                  checked={selectedOptions["Creative Response"] === "5"}
                  onChange={() => handleOptionChange("Creative Response", "5")}
                />
                <span className="text-[12px] truncate">5</span>
              </div>
            </div>
          </div>

          <div className="mb-[10px]">
            <label className="text-[14px] mb-[10px] text-[#000]" htmlFor="">
              2.7 Empathy/Listening skill
            </label>
            <div className="flex mt-[10px] items-center gap-[30px]">
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Empathy/Listening skill"
                  value="1"
                  checked={selectedOptions["Empathy/Listening skill"] === "1"}
                  onChange={() =>
                    handleOptionChange("Empathy/Listening skill", "1")
                  }
                />
                <span className="text-[12px] truncate">1</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Empathy/Listening skill"
                  value="2"
                  checked={selectedOptions["Empathy/Listening skill"] === "2"}
                  onChange={() =>
                    handleOptionChange("Empathy/Listening skill", "2")
                  }
                />
                <span className="text-[12px] truncate">2</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Empathy/Listening skill"
                  value="3"
                  checked={selectedOptions["Empathy/Listening skill"] === "3"}
                  onChange={() =>
                    handleOptionChange("Empathy/Listening skill", "3")
                  }
                />
                <span className="text-[12px] truncate">3</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Empathy/Listening skill"
                  value="4"
                  checked={selectedOptions["Empathy/Listening skill"] === "4"}
                  onChange={() =>
                    handleOptionChange("Empathy/Listening skill", "4")
                  }
                />
                <span className="text-[12px] truncate">4</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Empathy/Listening skill"
                  value="5"
                  checked={selectedOptions["Empathy/Listening skill"] === "5"}
                  onChange={() =>
                    handleOptionChange("Empathy/Listening skill", "5")
                  }
                />
                <span className="text-[12px] truncate">5</span>
              </div>
            </div>
          </div>

          <div className="mb-[10px]">
            <label className="text-[14px] mb-[10px] text-[#000]" htmlFor="">
              2.8 Appropriate assertiveness
            </label>
            <div className="flex mt-[10px] items-center gap-[30px]">
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Appropriate assertiveness"
                  value="1"
                  checked={selectedOptions["Appropriate assertiveness"] === "1"}
                  onChange={() =>
                    handleOptionChange("Appropriate assertiveness", "1")
                  }
                />
                <span className="text-[12px] truncate">1</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Appropriate assertiveness"
                  value="2"
                  checked={selectedOptions["Appropriate assertiveness"] === "2"}
                  onChange={() =>
                    handleOptionChange("Appropriate assertiveness", "2")
                  }
                />
                <span className="text-[12px] truncate">2</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Appropriate assertiveness"
                  value="3"
                  checked={selectedOptions["Appropriate assertiveness"] === "3"}
                  onChange={() =>
                    handleOptionChange("Appropriate assertiveness", "3")
                  }
                />
                <span className="text-[12px] truncate">3</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Appropriate assertiveness"
                  value="4"
                  checked={selectedOptions["Appropriate assertiveness"] === "4"}
                  onChange={() =>
                    handleOptionChange("Appropriate assertiveness", "4")
                  }
                />
                <span className="text-[12px] truncate">4</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Appropriate assertiveness"
                  value="5"
                  checked={selectedOptions["Appropriate assertiveness"] === "5"}
                  onChange={() =>
                    handleOptionChange("Appropriate assertiveness", "5")
                  }
                />
                <span className="text-[12px] truncate">5</span>
              </div>
            </div>
          </div>

          <div className="mb-[10px]">
            <label className="text-[14px] mb-[10px] text-[#000]" htmlFor="">
              2.9 Co-operative power
            </label>
            <div className="flex mt-[10px] items-center gap-[30px]">
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Co-operative power"
                  value="1"
                  checked={selectedOptions["Co-operative power"] === "1"}
                  onChange={() => handleOptionChange("Co-operative power", "1")}
                />
                <span className="text-[12px] truncate">1</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Co-operative power"
                  value="2"
                  checked={selectedOptions["Co-operative power"] === "2"}
                  onChange={() => handleOptionChange("Co-operative power", "2")}
                />
                <span className="text-[12px] truncate">2</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Co-operative power"
                  value="3"
                  checked={selectedOptions["Co-operative power"] === "3"}
                  onChange={() => handleOptionChange("Co-operative power", "3")}
                />
                <span className="text-[12px] truncate">3</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Co-operative power"
                  value="4"
                  checked={selectedOptions["Co-operative power"] === "4"}
                  onChange={() => handleOptionChange("Co-operative power", "4")}
                />
                <span className="text-[12px] truncate">4</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Co-operative power"
                  value="5"
                  checked={selectedOptions["Co-operative power"] === "5"}
                  onChange={() => handleOptionChange("Co-operative power", "5")}
                />
                <span className="text-[12px] truncate">5</span>
              </div>
            </div>
          </div>

          <div className="mb-[10px]">
            <label className="text-[14px] mb-[10px] text-[#000]" htmlFor="">
              3.0 Managing emotions
            </label>
            <div className="flex mt-[10px] items-center gap-[30px]">
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Managing emotions"
                  value="1"
                  checked={selectedOptions["Managing emotions"] === "1"}
                  onChange={() => handleOptionChange("Managing emotions", "1")}
                />
                <span className="text-[12px] truncate">1</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Managing emotions"
                  value="2"
                  checked={selectedOptions["Managing emotions"] === "2"}
                  onChange={() => handleOptionChange("Managing emotions", "2")}
                />
                <span className="text-[12px] truncate">2</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Managing emotions"
                  value="3"
                  checked={selectedOptions["Managing emotions"] === "3"}
                  onChange={() => handleOptionChange("Managing emotions", "3")}
                />
                <span className="text-[12px] truncate">3</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Managing emotions"
                  value="4"
                  checked={selectedOptions["Managing emotions"] === "4"}
                  onChange={() => handleOptionChange("Managing emotions", "4")}
                />
                <span className="text-[12px] truncate">4</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Managing emotions"
                  value="5"
                  checked={selectedOptions["Managing emotions"] === "5"}
                  onChange={() => handleOptionChange("Managing emotions", "5")}
                />
                <span className="text-[12px] truncate">5</span>
              </div>
            </div>
          </div>

          <div className="mb-[10px]">
            <label className="text-[14px] mb-[10px] text-[#000]" htmlFor="">
              3.1 Willingness to resolve
            </label>
            <div className="flex mt-[10px] items-center gap-[30px]">
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Willingness to resolve"
                  value="1"
                  checked={selectedOptions["Willingness to resolve"] === "1"}
                  onChange={() =>
                    handleOptionChange("Willingness to resolve", "1")
                  }
                />
                <span className="text-[12px] truncate">1</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Willingness to resolve"
                  value="2"
                  checked={selectedOptions["Willingness to resolve"] === "2"}
                  onChange={() =>
                    handleOptionChange("Willingness to resolve", "2")
                  }
                />
                <span className="text-[12px] truncate">2</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Willingness to resolve"
                  value="3"
                  checked={selectedOptions["Willingness to resolve"] === "3"}
                  onChange={() =>
                    handleOptionChange("Willingness to resolve", "3")
                  }
                />
                <span className="text-[12px] truncate">3</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Willingness to resolve"
                  value="4"
                  checked={selectedOptions["Willingness to resolve"] === "4"}
                  onChange={() =>
                    handleOptionChange("Willingness to resolve", "4")
                  }
                />
                <span className="text-[12px] truncate">4</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Willingness to resolve"
                  value="5"
                  checked={selectedOptions["Willingness to resolve"] === "5"}
                  onChange={() =>
                    handleOptionChange("Willingness to resolve", "5")
                  }
                />
                <span className="text-[12px] truncate">5</span>
              </div>
            </div>
          </div>

          <div className="mb-[10px]">
            <label className="text-[14px] mb-[10px] text-[#000]" htmlFor="">
              3.2 Mediation
            </label>
            <div className="flex mt-[10px] items-center gap-[30px]">
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Mediation"
                  value="1"
                  checked={selectedOptions["Mediation"] === "1"}
                  onChange={() => handleOptionChange("Mediation", "1")}
                />
                <span className="text-[12px] truncate">1</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Mediation"
                  value="2"
                  checked={selectedOptions["Mediation"] === "2"}
                  onChange={() => handleOptionChange("Mediation", "2")}
                />
                <span className="text-[12px] truncate">2</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Mediation"
                  value="3"
                  checked={selectedOptions["Mediation"] === "3"}
                  onChange={() => handleOptionChange("Mediation", "3")}
                />
                <span className="text-[12px] truncate">3</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Mediation"
                  value="4"
                  checked={selectedOptions["Mediation"] === "4"}
                  onChange={() => handleOptionChange("Mediation", "4")}
                />
                <span className="text-[12px] truncate">4</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Mediation"
                  value="5"
                  checked={selectedOptions["Mediation"] === "5"}
                  onChange={() => handleOptionChange("Mediation", "5")}
                />
                <span className="text-[12px] truncate">5</span>
              </div>
            </div>
          </div>

          <div className="mb-[10px]">
            <label className="text-[14px] mb-[10px] text-[#000]" htmlFor="">
              3.3 Broadening perspective
            </label>
            <div className="flex mt-[10px] items-center gap-[30px]">
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Broadening perspective"
                  value="1"
                  checked={selectedOptions["Broadening perspective"] === "1"}
                  onChange={() =>
                    handleOptionChange("Broadening perspective", "1")
                  }
                />
                <span className="text-[12px] truncate">1</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Broadening perspective"
                  value="2"
                  checked={selectedOptions["Broadening perspective"] === "2"}
                  onChange={() =>
                    handleOptionChange("Broadening perspective", "2")
                  }
                />
                <span className="text-[12px] truncate">2</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Broadening perspective"
                  value="3"
                  checked={selectedOptions["Broadening perspective"] === "3"}
                  onChange={() =>
                    handleOptionChange("Broadening perspective", "3")
                  }
                />
                <span className="text-[12px] truncate">3</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Broadening perspective"
                  value="4"
                  checked={selectedOptions["Broadening perspective"] === "4"}
                  onChange={() =>
                    handleOptionChange("Broadening perspective", "4")
                  }
                />
                <span className="text-[12px] truncate">4</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Broadening perspective"
                  value="5"
                  checked={selectedOptions["Broadening perspective"] === "5"}
                  onChange={() =>
                    handleOptionChange("Broadening perspective", "5")
                  }
                />
                <span className="text-[12px] truncate">5</span>
              </div>
            </div>
          </div>

          <div className="mb-[10px]">
            <label className="text-[14px] mb-[10px] text-[#000]" htmlFor="">
              3.4 Group work/role plays in Conflict resolution skills
            </label>
            <div className="flex mt-[10px] items-center gap-[30px]">
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Group work/role plays"
                  value="1"
                  checked={selectedOptions["Group work/role plays"] === "1"}
                  onChange={() =>
                    handleOptionChange("Group work/role plays", "1")
                  }
                />
                <span className="text-[12px] truncate">1</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Group work/role plays"
                  value="2"
                  checked={selectedOptions["Group work/role plays"] === "2"}
                  onChange={() =>
                    handleOptionChange("Group work/role plays", "2")
                  }
                />
                <span className="text-[12px] truncate">2</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Group work/role plays"
                  value="3"
                  checked={selectedOptions["Group work/role plays"] === "3"}
                  onChange={() =>
                    handleOptionChange("Group work/role plays", "3")
                  }
                />
                <span className="text-[12px] truncate">3</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Group work/role plays"
                  value="4"
                  checked={selectedOptions["Group work/role plays"] === "4"}
                  onChange={() =>
                    handleOptionChange("Group work/role plays", "4")
                  }
                />
                <span className="text-[12px] truncate">4</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Group work/role plays"
                  value="5"
                  checked={selectedOptions["Group work/role plays"] === "5"}
                  onChange={() =>
                    handleOptionChange("Group work/role plays", "5")
                  }
                />
                <span className="text-[12px] truncate">5</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[30%] flex flex-col sm:w-[95%] sm:mx-auto">
          <p className="text-[14px] mb-[20px] text-left font-bold">
            EFFECTIVE COMMUNICATION
          </p>
          <div className="mb-[10px]">
            <label className="text-[14px] mb-[10px] text-[#000]" htmlFor="">
              4.0 Principles and skills of effective communication
            </label>
            <div className="flex mt-[10px] items-center gap-[30px]">
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Principles and skills of effective communication"
                  value="1"
                  checked={
                    selectedOptions[
                      "Principles and skills of effective communication"
                    ] === "1"
                  }
                  onChange={() =>
                    handleOptionChange(
                      "Principles and skills of effective communication",
                      "1"
                    )
                  }
                />
                <span className="text-[12px] truncate">1</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Principles and skills of effective communication"
                  value="2"
                  checked={
                    selectedOptions[
                      "Principles and skills of effective communication"
                    ] === "2"
                  }
                  onChange={() =>
                    handleOptionChange(
                      "Principles and skills of effective communication",
                      "2"
                    )
                  }
                />
                <span className="text-[12px] truncate">2</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Principles and skills of effective communication"
                  value="3"
                  checked={
                    selectedOptions[
                      "Principles and skills of effective communication"
                    ] === "3"
                  }
                  onChange={() =>
                    handleOptionChange(
                      "Principles and skills of effective communication",
                      "3"
                    )
                  }
                />
                <span className="text-[12px] truncate">3</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Principles and skills of effective communication"
                  value="4"
                  checked={
                    selectedOptions[
                      "Principles and skills of effective communication"
                    ] === "4"
                  }
                  onChange={() =>
                    handleOptionChange(
                      "Principles and skills of effective communication",
                      "4"
                    )
                  }
                />
                <span className="text-[12px] truncate">4</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Principles and skills of effective communication"
                  value="5"
                  checked={
                    selectedOptions[
                      "Principles and skills of effective communication"
                    ] === "5"
                  }
                  onChange={() =>
                    handleOptionChange(
                      "Principles and skills of effective communication",
                      "5"
                    )
                  }
                />
                <span className="text-[12px] truncate">5</span>
              </div>
            </div>
          </div>
          <div className="mb-[10px]">
            <label className="text-[14px] mb-[10px] text-[#000]" htmlFor="">
              4.1 Active listening and clear messaging techniques
            </label>
            <div className="flex mt-[10px] items-center gap-[30px]">
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Active listening and clear messaging techniques"
                  value="1"
                  checked={
                    selectedOptions[
                      "Active listening and clear messaging techniques"
                    ] === "1"
                  }
                  onChange={() =>
                    handleOptionChange(
                      "Active listening and clear messaging techniques",
                      "1"
                    )
                  }
                />
                <span className="text-[12px] truncate">1</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Active listening and clear messaging techniques"
                  value="2"
                  checked={
                    selectedOptions[
                      "Active listening and clear messaging techniques"
                    ] === "2"
                  }
                  onChange={() =>
                    handleOptionChange(
                      "Active listening and clear messaging techniques",
                      "2"
                    )
                  }
                />
                <span className="text-[12px] truncate">2</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Active listening and clear messaging techniques"
                  value="3"
                  checked={
                    selectedOptions[
                      "Active listening and clear messaging techniques"
                    ] === "3"
                  }
                  onChange={() =>
                    handleOptionChange(
                      "Active listening and clear messaging techniques",
                      "3"
                    )
                  }
                />
                <span className="text-[12px] truncate">3</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Active listening and clear messaging techniques"
                  value="4"
                  checked={
                    selectedOptions[
                      "Active listening and clear messaging techniques"
                    ] === "4"
                  }
                  onChange={() =>
                    handleOptionChange(
                      "Active listening and clear messaging techniques",
                      "4"
                    )
                  }
                />
                <span className="text-[12px] truncate">4</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Active listening and clear messaging techniques"
                  value="5"
                  checked={
                    selectedOptions[
                      "Active listening and clear messaging techniques"
                    ] === "5"
                  }
                  onChange={() =>
                    handleOptionChange(
                      "Active listening and clear messaging techniques",
                      "5"
                    )
                  }
                />
                <span className="text-[12px] truncate">5</span>
              </div>
            </div>
          </div>

          <div className="mb-[10px]">
            <label className="text-[14px] mb-[10px] text-[#000]" htmlFor="">
              4.2 Group work/role plays in effective communication skills
            </label>
            <div className="flex mt-[10px] items-center gap-[30px]">
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Group work/role plays in effective communication skills"
                  value="1"
                  checked={
                    selectedOptions[
                      "Group work/role plays in effective communication skills"
                    ] === "1"
                  }
                  onChange={() =>
                    handleOptionChange(
                      "Group work/role plays in effective communication skills",
                      "1"
                    )
                  }
                />
                <span className="text-[12px] truncate">1</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Group work/role plays in effective communication skills"
                  value="2"
                  checked={
                    selectedOptions[
                      "Group work/role plays in effective communication skills"
                    ] === "2"
                  }
                  onChange={() =>
                    handleOptionChange(
                      "Group work/role plays in effective communication skills",
                      "2"
                    )
                  }
                />
                <span className="text-[12px] truncate">2</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Group work/role plays in effective communication skills"
                  value="3"
                  checked={
                    selectedOptions[
                      "Group work/role plays in effective communication skills"
                    ] === "3"
                  }
                  onChange={() =>
                    handleOptionChange(
                      "Group work/role plays in effective communication skills",
                      "3"
                    )
                  }
                />
                <span className="text-[12px] truncate">3</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Group work/role plays in effective communication skills"
                  value="4"
                  checked={
                    selectedOptions[
                      "Group work/role plays in effective communication skills"
                    ] === "4"
                  }
                  onChange={() =>
                    handleOptionChange(
                      "Group work/role plays in effective communication skills",
                      "4"
                    )
                  }
                />
                <span className="text-[12px] truncate">4</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Group work/role plays in effective communication skills"
                  value="5"
                  checked={
                    selectedOptions[
                      "Group work/role plays in effective communication skills"
                    ] === "5"
                  }
                  onChange={() =>
                    handleOptionChange(
                      "Group work/role plays in effective communication skills",
                      "5"
                    )
                  }
                />
                <span className="text-[12px] truncate">5</span>
              </div>
            </div>
          </div>

          <p className="text-[14px] my-[20px] text-left font-bold">
            PROBLEM SOLVING SKILLS
          </p>
          <div className="mb-[10px]">
            <label className="text-[14px] mb-[10px] text-[#000]" htmlFor="">
              5.0 The importance of problem solving to business managers/leaders
            </label>
            <div className="flex mt-[10px] items-center gap-[30px]">
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="The importance of problem solving to business managers/leaders"
                  value="1"
                  checked={
                    selectedOptions[
                      "The importance of problem solving to business managers/leaders"
                    ] === "1"
                  }
                  onChange={() =>
                    handleOptionChange(
                      "The importance of problem solving to business managers/leaders",
                      "1"
                    )
                  }
                />
                <span className="text-[12px] truncate">1</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="The importance of problem solving to business managers/leaders"
                  value="2"
                  checked={
                    selectedOptions[
                      "The importance of problem solving to business managers/leaders"
                    ] === "2"
                  }
                  onChange={() =>
                    handleOptionChange(
                      "The importance of problem solving to business managers/leaders",
                      "2"
                    )
                  }
                />
                <span className="text-[12px] truncate">2</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="The importance of problem solving to business managers/leaders"
                  value="3"
                  checked={
                    selectedOptions[
                      "The importance of problem solving to business managers/leaders"
                    ] === "3"
                  }
                  onChange={() =>
                    handleOptionChange(
                      "The importance of problem solving to business managers/leaders",
                      "3"
                    )
                  }
                />
                <span className="text-[12px] truncate">3</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="The importance of problem solving to business managers/leaders"
                  value="4"
                  checked={
                    selectedOptions[
                      "The importance of problem solving to business managers/leaders"
                    ] === "4"
                  }
                  onChange={() =>
                    handleOptionChange(
                      "The importance of problem solving to business managers/leaders",
                      "4"
                    )
                  }
                />
                <span className="text-[12px] truncate">4</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="The importance of problem solving to business managers/leaders"
                  value="5"
                  checked={
                    selectedOptions[
                      "The importance of problem solving to business managers/leaders"
                    ] === "5"
                  }
                  onChange={() =>
                    handleOptionChange(
                      "The importance of problem solving to business managers/leaders",
                      "5"
                    )
                  }
                />
                <span className="text-[12px] truncate">5</span>
              </div>
            </div>
          </div>

          <div className="mb-[10px]">
            <label className="text-[14px] mb-[10px] text-[#000]" htmlFor="">
              5.1 Problem symptoms and means of identification
            </label>
            <div className="flex mt-[10px] items-center gap-[30px]">
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Problem symptoms and means of identification"
                  value="1"
                  checked={
                    selectedOptions[
                      "Problem symptoms and means of identification"
                    ] === "1"
                  }
                  onChange={() =>
                    handleOptionChange(
                      "Problem symptoms and means of identification",
                      "1"
                    )
                  }
                />
                <span className="text-[12px] truncate">1</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Problem symptoms and means of identification"
                  value="2"
                  checked={
                    selectedOptions[
                      "Problem symptoms and means of identification"
                    ] === "2"
                  }
                  onChange={() =>
                    handleOptionChange(
                      "Problem symptoms and means of identification",
                      "2"
                    )
                  }
                />
                <span className="text-[12px] truncate">2</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Problem symptoms and means of identification"
                  value="3"
                  checked={
                    selectedOptions[
                      "Problem symptoms and means of identification"
                    ] === "3"
                  }
                  onChange={() =>
                    handleOptionChange(
                      "Problem symptoms and means of identification",
                      "3"
                    )
                  }
                />
                <span className="text-[12px] truncate">3</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Problem symptoms and means of identification"
                  value="4"
                  checked={
                    selectedOptions[
                      "Problem symptoms and means of identification"
                    ] === "4"
                  }
                  onChange={() =>
                    handleOptionChange(
                      "Problem symptoms and means of identification",
                      "4"
                    )
                  }
                />
                <span className="text-[12px] truncate">4</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Problem symptoms and means of identification"
                  value="5"
                  checked={
                    selectedOptions[
                      "Problem symptoms and means of identification"
                    ] === "5"
                  }
                  onChange={() =>
                    handleOptionChange(
                      "Problem symptoms and means of identification",
                      "5"
                    )
                  }
                />
                <span className="text-[12px] truncate">5</span>
              </div>
            </div>
          </div>

          <div className="mb-[10px]">
            <label className="text-[14px] mb-[10px] text-[#000]" htmlFor="">
              5.2 Key problem-solving skills and strategies
            </label>
            <div className="flex mt-[10px] items-center gap-[30px]">
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Key problem-solving skills and strategies"
                  value="1"
                  checked={
                    selectedOptions[
                      "Key problem-solving skills and strategies"
                    ] === "1"
                  }
                  onChange={() =>
                    handleOptionChange(
                      "Key problem-solving skills and strategies",
                      "1"
                    )
                  }
                />
                <span className="text-[12px] truncate">1</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Key problem-solving skills and strategies"
                  value="2"
                  checked={
                    selectedOptions[
                      "Key problem-solving skills and strategies"
                    ] === "2"
                  }
                  onChange={() =>
                    handleOptionChange(
                      "Key problem-solving skills and strategies",
                      "2"
                    )
                  }
                />
                <span className="text-[12px] truncate">2</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Key problem-solving skills and strategies"
                  value="3"
                  checked={
                    selectedOptions[
                      "Key problem-solving skills and strategies"
                    ] === "3"
                  }
                  onChange={() =>
                    handleOptionChange(
                      "Key problem-solving skills and strategies",
                      "3"
                    )
                  }
                />
                <span className="text-[12px] truncate">3</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Key problem-solving skills and strategies"
                  value="4"
                  checked={
                    selectedOptions[
                      "Key problem-solving skills and strategies"
                    ] === "4"
                  }
                  onChange={() =>
                    handleOptionChange(
                      "Key problem-solving skills and strategies",
                      "4"
                    )
                  }
                />
                <span className="text-[12px] truncate">4</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Key problem-solving skills and strategies"
                  value="5"
                  checked={
                    selectedOptions[
                      "Key problem-solving skills and strategies"
                    ] === "5"
                  }
                  onChange={() =>
                    handleOptionChange(
                      "Key problem-solving skills and strategies",
                      "5"
                    )
                  }
                />
                <span className="text-[12px] truncate">5</span>
              </div>
            </div>
          </div>

          <div className="mb-[10px]">
            <label className="text-[14px] mb-[10px] text-[#000]" htmlFor="">
              5.3 Group work on problem-solving skills
            </label>
            <div className="flex mt-[10px] items-center gap-[30px]">
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Group work on problem-solving skills"
                  value="1"
                  checked={
                    selectedOptions["Group work on problem-solving skills"] ===
                    "1"
                  }
                  onChange={() =>
                    handleOptionChange(
                      "Group work on problem-solving skills",
                      "1"
                    )
                  }
                />
                <span className="text-[12px] truncate">1</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Group work on problem-solving skills"
                  value="2"
                  checked={
                    selectedOptions["Group work on problem-solving skills"] ===
                    "2"
                  }
                  onChange={() =>
                    handleOptionChange(
                      "Group work on problem-solving skills",
                      "2"
                    )
                  }
                />
                <span className="text-[12px] truncate">2</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Group work on problem-solving skills"
                  value="3"
                  checked={
                    selectedOptions["Group work on problem-solving skills"] ===
                    "3"
                  }
                  onChange={() =>
                    handleOptionChange(
                      "Group work on problem-solving skills",
                      "3"
                    )
                  }
                />
                <span className="text-[12px] truncate">3</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Group work on problem-solving skills"
                  value="4"
                  checked={
                    selectedOptions["Group work on problem-solving skills"] ===
                    "4"
                  }
                  onChange={() =>
                    handleOptionChange(
                      "Group work on problem-solving skills",
                      "4"
                    )
                  }
                />
                <span className="text-[12px] truncate">4</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input
                  type="radio"
                  name="Group work on problem-solving skills"
                  value="5"
                  checked={
                    selectedOptions["Group work on problem-solving skills"] ===
                    "5"
                  }
                  onChange={() =>
                    handleOptionChange(
                      "Group work on problem-solving skills",
                      "5"
                    )
                  }
                />
                <span className="text-[12px] truncate">5</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-end">
        <button
          onClick={createTrainingNeeds}
          className="px-[20px] bg-[#FFE900] h-[50px] text-[#000]"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default TrainingNeeds;
