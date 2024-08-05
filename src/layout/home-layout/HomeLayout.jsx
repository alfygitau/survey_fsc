import React from "react";
import Topbar from "../../components/topbar/Topbar";
import { Outlet } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Copyright from "../../components/Copyright";

const HomeLayout = () => {
  return (
    <div className="w-full relative">
      <div className="fixed w-full top-0">
        <Topbar />
      </div>
      <div className="mt-[140px] mb-[100px]">
        <Outlet />
      </div>
      <div className="w-full">
        <Footer />
        <Copyright />
      </div>
    </div>
  );
};

export default HomeLayout;
