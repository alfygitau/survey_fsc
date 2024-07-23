import React from "react";
import { useNavigate } from "react-router";

const TrainingNeeds = () => {
  const navigate = useNavigate();
  const createTrainingNeeds = () => {
    navigate("/additional-skills");
  };
  return (
    <div className="w-[80%] overflow-y-auto sm:w-[95%] sm:h-full sm:my-[20px] lg:my-[40px] mx-auto flex flex-col w-[100vw] h-full justify-center items-center">
      <div>FARM TO MARKET ALLIANCE</div>
      <div className="mb-[40px] w-full">
        <p className="text-center">Farmers Service Centres (FSC)</p>
        <p className="text-center">Training Needs</p>
        <p className="text-center font-bold">
          Please indicate your training needs in the context of your roles and
          responsibility in a scale of 1 - 5 (1 least preferred, 5 most
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
                <input type="radio" name="one" id="one" />
                <span className="text-[12px] truncate">1</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="two" id="two" />
                <span className="text-[12px] truncate">2</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="three" id="three" />
                <span className="text-[12px] truncate">3</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="four" id="four" />
                <span className="text-[12px] truncate">4</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="five" id="five" />
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
                <input type="radio" name="one" id="one" />
                <span className="text-[12px] truncate">1</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="two" id="two" />
                <span className="text-[12px] truncate">2</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="three" id="three" />
                <span className="text-[12px] truncate">3</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="four" id="four" />
                <span className="text-[12px] truncate">4</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="five" id="five" />
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
                <input type="radio" name="one" id="one" />
                <span className="text-[12px] truncate">1</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="two" id="two" />
                <span className="text-[12px] truncate">2</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="three" id="three" />
                <span className="text-[12px] truncate">3</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="four" id="four" />
                <span className="text-[12px] truncate">4</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="five" id="five" />
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
                <input type="radio" name="one" id="one" />
                <span className="text-[12px] truncate">1</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="two" id="two" />
                <span className="text-[12px] truncate">2</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="three" id="three" />
                <span className="text-[12px] truncate">3</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="four" id="four" />
                <span className="text-[12px] truncate">4</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="five" id="five" />
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
                <input type="radio" name="one" id="one" />
                <span className="text-[12px] truncate">1</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="two" id="two" />
                <span className="text-[12px] truncate">2</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="three" id="three" />
                <span className="text-[12px] truncate">3</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="four" id="four" />
                <span className="text-[12px] truncate">4</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="five" id="five" />
                <span className="text-[12px] truncate">5</span>
              </div>
            </div>
          </div>
          <div className="mb-[10px]">
            <label className="text-[14px] mb-[10px] text-[#000]" htmlFor="">
              1.5 Exchanging information during negatiation
            </label>
            <div className="flex mt-[10px] items-center gap-[30px]">
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="one" id="one" />
                <span className="text-[12px] truncate">1</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="two" id="two" />
                <span className="text-[12px] truncate">2</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="three" id="three" />
                <span className="text-[12px] truncate">3</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="four" id="four" />
                <span className="text-[12px] truncate">4</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="five" id="five" />
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
                <input type="radio" name="one" id="one" />
                <span className="text-[12px] truncate">1</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="two" id="two" />
                <span className="text-[12px] truncate">2</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="three" id="three" />
                <span className="text-[12px] truncate">3</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="four" id="four" />
                <span className="text-[12px] truncate">4</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="five" id="five" />
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
                <input type="radio" name="one" id="one" />
                <span className="text-[12px] truncate">1</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="two" id="two" />
                <span className="text-[12px] truncate">2</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="three" id="three" />
                <span className="text-[12px] truncate">3</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="four" id="four" />
                <span className="text-[12px] truncate">4</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="five" id="five" />
                <span className="text-[12px] truncate">5</span>
              </div>
            </div>
          </div>
          <div className="mb-[10px]">
            <label className="text-[14px] mb-[10px] text-[#000]" htmlFor="">
              1.8 Group work/role plays in negotiation skills
            </label>
            <div className="flex mt-[10px] items-center gap-[30px]">
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="one" id="one" />
                <span className="text-[12px] truncate">1</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="two" id="two" />
                <span className="text-[12px] truncate">2</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="three" id="three" />
                <span className="text-[12px] truncate">3</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="four" id="four" />
                <span className="text-[12px] truncate">4</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="five" id="five" />
                <span className="text-[12px] truncate">5</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[30%] flex flex-col sm:w-[95%] sm:mx-auto">
          <p className="text-[14px] mb-[20px] text-left font-bold">
            1.9 CONFLICT RESOLUTION SKILLS
          </p>
          <div className="mb-[10px]">
            <label className="text-[14px] mb-[10px] text-[#000]" htmlFor="">
              2.0 Basic understanding of level of conflicts
            </label>
            <div className="flex mt-[10px] items-center gap-[30px]">
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="one" id="one" />
                <span className="text-[12px] truncate">1</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="two" id="two" />
                <span className="text-[12px] truncate">2</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="three" id="three" />
                <span className="text-[12px] truncate">3</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="four" id="four" />
                <span className="text-[12px] truncate">4</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="five" id="five" />
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
                <input type="radio" name="one" id="one" />
                <span className="text-[12px] truncate">1</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="two" id="two" />
                <span className="text-[12px] truncate">2</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="three" id="three" />
                <span className="text-[12px] truncate">3</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="four" id="four" />
                <span className="text-[12px] truncate">4</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="five" id="five" />
                <span className="text-[12px] truncate">5</span>
              </div>
            </div>
          </div>
          <div className="mb-[10px]">
            <label className="text-[14px] mb-[10px] text-[#000]" htmlFor="">
              2.2 How to uncover needs in conflict situations
            </label>
            <div className="flex mt-[10px] items-center gap-[30px]">
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="one" id="one" />
                <span className="text-[12px] truncate">1</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="two" id="two" />
                <span className="text-[12px] truncate">2</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="three" id="three" />
                <span className="text-[12px] truncate">3</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="four" id="four" />
                <span className="text-[12px] truncate">4</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="five" id="five" />
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
                <input type="radio" name="one" id="one" />
                <span className="text-[12px] truncate">1</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="two" id="two" />
                <span className="text-[12px] truncate">2</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="three" id="three" />
                <span className="text-[12px] truncate">3</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="four" id="four" />
                <span className="text-[12px] truncate">4</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="five" id="five" />
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
                <input type="radio" name="one" id="one" />
                <span className="text-[12px] truncate">1</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="two" id="two" />
                <span className="text-[12px] truncate">2</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="three" id="three" />
                <span className="text-[12px] truncate">3</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="four" id="four" />
                <span className="text-[12px] truncate">4</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="five" id="five" />
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
                <input type="radio" name="one" id="one" />
                <span className="text-[12px] truncate">1</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="two" id="two" />
                <span className="text-[12px] truncate">2</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="three" id="three" />
                <span className="text-[12px] truncate">3</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="four" id="four" />
                <span className="text-[12px] truncate">4</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="five" id="five" />
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
                <input type="radio" name="one" id="one" />
                <span className="text-[12px] truncate">1</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="two" id="two" />
                <span className="text-[12px] truncate">2</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="three" id="three" />
                <span className="text-[12px] truncate">3</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="four" id="four" />
                <span className="text-[12px] truncate">4</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="five" id="five" />
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
                <input type="radio" name="one" id="one" />
                <span className="text-[12px] truncate">1</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="two" id="two" />
                <span className="text-[12px] truncate">2</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="three" id="three" />
                <span className="text-[12px] truncate">3</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="four" id="four" />
                <span className="text-[12px] truncate">4</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="five" id="five" />
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
                <input type="radio" name="one" id="one" />
                <span className="text-[12px] truncate">1</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="two" id="two" />
                <span className="text-[12px] truncate">2</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="three" id="three" />
                <span className="text-[12px] truncate">3</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="four" id="four" />
                <span className="text-[12px] truncate">4</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="five" id="five" />
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
                <input type="radio" name="one" id="one" />
                <span className="text-[12px] truncate">1</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="two" id="two" />
                <span className="text-[12px] truncate">2</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="three" id="three" />
                <span className="text-[12px] truncate">3</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="four" id="four" />
                <span className="text-[12px] truncate">4</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="five" id="five" />
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
                <input type="radio" name="one" id="one" />
                <span className="text-[12px] truncate">1</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="two" id="two" />
                <span className="text-[12px] truncate">2</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="three" id="three" />
                <span className="text-[12px] truncate">3</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="four" id="four" />
                <span className="text-[12px] truncate">4</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="five" id="five" />
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
                <input type="radio" name="one" id="one" />
                <span className="text-[12px] truncate">1</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="two" id="two" />
                <span className="text-[12px] truncate">2</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="three" id="three" />
                <span className="text-[12px] truncate">3</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="four" id="four" />
                <span className="text-[12px] truncate">4</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="five" id="five" />
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
                <input type="radio" name="one" id="one" />
                <span className="text-[12px] truncate">1</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="two" id="two" />
                <span className="text-[12px] truncate">2</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="three" id="three" />
                <span className="text-[12px] truncate">3</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="four" id="four" />
                <span className="text-[12px] truncate">4</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="five" id="five" />
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
                <input type="radio" name="one" id="one" />
                <span className="text-[12px] truncate">1</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="two" id="two" />
                <span className="text-[12px] truncate">2</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="three" id="three" />
                <span className="text-[12px] truncate">3</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="four" id="four" />
                <span className="text-[12px] truncate">4</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="five" id="five" />
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
                <input type="radio" name="one" id="one" />
                <span className="text-[12px] truncate">1</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="two" id="two" />
                <span className="text-[12px] truncate">2</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="three" id="three" />
                <span className="text-[12px] truncate">3</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="four" id="four" />
                <span className="text-[12px] truncate">4</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="five" id="five" />
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
                <input type="radio" name="one" id="one" />
                <span className="text-[12px] truncate">1</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="two" id="two" />
                <span className="text-[12px] truncate">2</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="three" id="three" />
                <span className="text-[12px] truncate">3</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="four" id="four" />
                <span className="text-[12px] truncate">4</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="five" id="five" />
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
                <input type="radio" name="one" id="one" />
                <span className="text-[12px] truncate">1</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="two" id="two" />
                <span className="text-[12px] truncate">2</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="three" id="three" />
                <span className="text-[12px] truncate">3</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="four" id="four" />
                <span className="text-[12px] truncate">4</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="five" id="five" />
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
                <input type="radio" name="one" id="one" />
                <span className="text-[12px] truncate">1</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="two" id="two" />
                <span className="text-[12px] truncate">2</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="three" id="three" />
                <span className="text-[12px] truncate">3</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="four" id="four" />
                <span className="text-[12px] truncate">4</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="five" id="five" />
                <span className="text-[12px] truncate">5</span>
              </div>
            </div>
          </div>
          <p className="text-[14px] my-[20px] text-left font-bold">
            PROBLEM SOLVING SKILLS
          </p>
          <div className="mb-[10px]">
            <label className="text-[14px] mb-[10px] text-[#000]" htmlFor="">
              5.0 The importance of problem solving to business managers
              /leaders
            </label>
            <div className="flex mt-[10px] items-center gap-[30px]">
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="one" id="one" />
                <span className="text-[12px] truncate">1</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="two" id="two" />
                <span className="text-[12px] truncate">2</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="three" id="three" />
                <span className="text-[12px] truncate">3</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="four" id="four" />
                <span className="text-[12px] truncate">4</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="five" id="five" />
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
                <input type="radio" name="one" id="one" />
                <span className="text-[12px] truncate">1</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="two" id="two" />
                <span className="text-[12px] truncate">2</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="three" id="three" />
                <span className="text-[12px] truncate">3</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="four" id="four" />
                <span className="text-[12px] truncate">4</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="five" id="five" />
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
                <input type="radio" name="one" id="one" />
                <span className="text-[12px] truncate">1</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="two" id="two" />
                <span className="text-[12px] truncate">2</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="three" id="three" />
                <span className="text-[12px] truncate">3</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="four" id="four" />
                <span className="text-[12px] truncate">4</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="five" id="five" />
                <span className="text-[12px] truncate">5</span>
              </div>
            </div>
          </div>
          <div className="mb-[10px]">
            <label className="text-[14px] mb-[10px] text-[#000]" htmlFor="">
              5.3 Group work on problem saolving skills
            </label>
            <div className="flex mt-[10px] items-center gap-[30px]">
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="one" id="one" />
                <span className="text-[12px] truncate">1</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="two" id="two" />
                <span className="text-[12px] truncate">2</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="three" id="three" />
                <span className="text-[12px] truncate">3</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="four" id="four" />
                <span className="text-[12px] truncate">4</span>
              </div>
              <div className="flex items-center gap-[10px]">
                <input type="radio" name="five" id="five" />
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
