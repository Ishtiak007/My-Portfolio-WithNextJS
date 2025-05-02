"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SecondHandMarketPlace from "../AllProjects/SecondHandMarketPlace";
import FoodFestival from "../AllProjects/FoodFestival";
import OldenGoods from "../AllProjects/OldenGoods";
import PetAdoption from "../AllProjects/PetAdoption";
import AlemenoAcademy from "../AllProjects/AlemenoAcademy";
import StationeryShop from "../AllProjects/StationeryShop";
import ShebaDashboard from "../AllProjects/ShebaDashboard";
import ShreyuDashboard from "../AllProjects/ShreyuDashboard";
import LibraryManagement from "../AllProjects/LibraryManagement";
import TaskManagement from "../AllProjects/TaskManagement";
import WeavePDF from "../AllProjects/WeavePDF";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("fullstack");

  // Full stack projects
  const fullStackProjects = [
    <SecondHandMarketPlace key={1} />,
    <FoodFestival key={2} />,
    <OldenGoods key={3} />,
    <StationeryShop key={4} />,
    <PetAdoption key={5} />,
    <WeavePDF key={6} />,
  ];

  // Frontend projects
  const frontEndProjects = [
    <ShebaDashboard key={7} />,
    <ShreyuDashboard key={8} />,
    <LibraryManagement key={9} />,
    <TaskManagement key={10} />,
    <AlemenoAcademy key={11} />,
  ];

  const currentProjects =
    activeTab === "fullstack" ? fullStackProjects : frontEndProjects;

  return (
    <div className="bg-gray-900">
      <div className="text-center py-8">
        <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
          Here are some projects with Forrentend and Fullstack.
        </h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
          My Projects
        </p>
      </div>
      <div className="max-w-screen-xl mx-auto">
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
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 p-5"
          >
            {currentProjects}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Projects;
