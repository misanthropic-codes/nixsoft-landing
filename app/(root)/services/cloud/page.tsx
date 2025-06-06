import React from "react";
import NixSoftHero from "./sections/hero";
import ServicesPage from "./sections/Services";

export default function Home() {
  return (
    <div className="min-h-screen py-[100px] bg-gradient-to-br from-navy-900 via-blue-900 to-blue-800">
      <NixSoftHero />
      <ServicesPage />
     
    </div>
  );
}
