import React from "react";
import NixSoftHero from "../devops/sections/hero";
import ServicesPage from "./sections/services";

function page() {
  return (
    <div className="min-h-screen py-[100px] bg-gradient-to-br from-navy-900 via-blue-900 to-blue-800">
      <NixSoftHero />
      <ServicesPage />
    </div>
  );
}

export default page;
