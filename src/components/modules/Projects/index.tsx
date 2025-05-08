"use client";
import React, { useEffect, useState } from "react";
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
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("fullstack");

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
      easing: "ease-in-out",
    });
  }, []);

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
    <div className="bg-white/5 border-white/10 backdrop-blur-lg">
      <div data-aos="fade-up" className="text-center py-8">
        <p className="text-base text-white font-semibold tracking-wide uppercase text-center">
          Here are some projects with Forrentend and Fullstack.
        </p>
        <h2 className="mt-2 text-2xl leading-8 tracking-tight font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400  text-center">
          My Projects
        </h2>
      </div>
      <div className="max-w-screen-xl mx-auto">
        {/* Tabs */}
        <div className="flex justify-center mb-6">
          <button
            onClick={() => setActiveTab("fullstack")}
            className={`px-4 py-2 font-semibold  border transition-all duration-300 ease-in-out transform ${
              activeTab === "fullstack"
                ? "bg-fuchsia-800 text-white scale-105 shadow-md"
                : "bg-gray-100 text-gray-800 hover:bg-fuchsia-100"
            }`}
          >
            Full Stack
          </button>
          <button
            onClick={() => setActiveTab("frontend")}
            className={`px-4 py-2 font-semibold  border transition-all duration-300 ease-in-out transform ${
              activeTab === "frontend"
                ? "bg-fuchsia-800 text-white scale-105 shadow-md"
                : "bg-gray-100 text-gray-800 hover:bg-fuchsia-100"
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
