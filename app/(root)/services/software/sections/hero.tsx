"use client";
import React from "react";

const NixSoftHero = () => {
  return (
    <div className="relative w-full py-10 bg-indigo-900 overflow-hidden">
      {/* Network background effect */}
      <div className="absolute inset-0 opacity-30">
        {/* This would typically be an SVG or canvas animation for the network lines */}
        {/* For a static representation, we're using a div with background properties */}
      </div>
      <div className="relative z-10 max-w-5xl mx-auto px-4 h-full flex flex-col justify-center">
        <h1 className="text-white text-4xl md:text-5xl font-bold mb-2">
          Software Development:
          <br />
          Custom Application 
          <br />
          <span className="text-cyan-400">Development</span>
        </h1>
        <p className="text-white text-lg md:text-xl max-w-xl mb-8">
          Nixsoft Technologies helps clients transform their business challenges into powerful, 
          scalable software solutions tailored specifically to their unique requirements and workflow.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button
          onClick={() => (window.location.href = "/services")}
          className="px-8 py-3 bg-blue-500 text-white font-medium rounded hover:bg-blue-600 transition-colors">
            Our Services
          </button>
          <button
            onClick={() => (window.location.href = "/pricing")}
            className="px-8 py-3 bg-transparent border-2 border-white text-white font-medium rounded hover:bg-white hover:bg-opacity-10 transition-colors"
          >
            Get a Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default NixSoftHero;