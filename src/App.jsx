import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/homepage/Landing";
import PersonalInformation from "./pages/personal-information/PersonalInformation";
import Education from "./pages/education/Education";
import Trainings from "./pages/trainings/Trainings";
import TrainingNeeds from "./pages/training-needs/TrainingNeeds";
import Roles from "./pages/roles/Roles";
import OtherSkills from "./pages/additional-skills/OtherSkills";
import HomeLayout from "./layout/home-layout/HomeLayout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Landing />} />
          <Route
            path="/personal-information"
            element={<PersonalInformation />}
          />
          <Route path="/education" element={<Education />} />
          <Route path="/trainings" element={<Trainings />} />
          <Route path="/training-needs" element={<TrainingNeeds />} />
          <Route path="/roles" element={<Roles />} />
          <Route path="/additional-skills" element={<OtherSkills />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
