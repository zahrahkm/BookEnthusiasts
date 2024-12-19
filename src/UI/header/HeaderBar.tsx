import React from "react";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation";

export const HeaderBar = () => {
  return (
    <header className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Logo />
          </div>
          <Navigation />
        </div>
      </div>
    </header>
  );
};
