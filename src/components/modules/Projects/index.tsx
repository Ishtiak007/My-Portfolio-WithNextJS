"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectOne from "../AllProjects/ProjectOne";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("fullstack");

  const fullStackProjects = [
    <ProjectOne key={1} />,
    <ProjectOne key={2} />,
    <ProjectOne key={3} />,
  ];
  const frontEndProjects = [<ProjectOne key={4} />, <ProjectOne key={5} />];

  const currentProjects =
    activeTab === "fullstack" ? fullStackProjects : frontEndProjects;

  return (
    <div className="max-w-screen-xl mx-auto px-4 my-8">
      {/* Tabs */}
      <div className="flex justify-center mb-6">
        <button
          onClick={() => setActiveTab("fullstack")}
          className={`px-4 py-2 font-semibold rounded-l-full border transition-all duration-300 ease-in-out transform ${
            activeTab === "fullstack"
              ? "bg-teal-800 text-white scale-105 shadow-md"
              : "bg-gray-100 text-gray-800 hover:bg-teal-100"
          }`}
        >
          Full Stack
        </button>
        <button
          onClick={() => setActiveTab("frontend")}
          className={`px-4 py-2 font-semibold rounded-r-full border transition-all duration-300 ease-in-out transform ${
            activeTab === "frontend"
              ? "bg-teal-800 text-white scale-105 shadow-md"
              : "bg-gray-100 text-gray-800 hover:bg-teal-100"
          }`}
        >
          Frontend
        </button>
      </div>

      {/* Animated Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {currentProjects}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Projects;
