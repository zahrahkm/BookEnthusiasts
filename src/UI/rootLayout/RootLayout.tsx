import React from "react";
import { Outlet } from "react-router-dom";
import { HeaderBar } from "../header/HeaderBar";
import { Footer } from "../footer/Footer";

export const RootLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <HeaderBar />

      <Outlet />

      <Footer />
    </div>
  );
};
