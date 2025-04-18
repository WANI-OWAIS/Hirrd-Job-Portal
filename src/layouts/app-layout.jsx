import React from "react";
import { Outlet } from "react-router-dom";
import "../App.css";
import Header from "../components/header";

const AppLayout = () => {
  return (
    <div>
      <div className="grid-background"></div>
      <main className="min-h-screen w-full max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <Header />
        <Outlet />
      </main>
      <div className="p-10 text-center bg-gray-800 mt-10">
        Made with 💗 by WaniOwais
      </div>
    </div>
  );
};

export default AppLayout;         
