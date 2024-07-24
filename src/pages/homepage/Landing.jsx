import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-[20px] w-[100vw] h-[500px]">
      <p>Farmers Service Centres (FSC) Survey</p>
      <p>Training Needs Assessment (TNA) questionnaire</p>
      <Link to="/personal-information">Start the questionnaire</Link>
    </div>
  );
};

export default Landing;
