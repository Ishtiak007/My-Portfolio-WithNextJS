import { AboutMe } from "@/components/modules/HomePage/AboutMe";
import EducationBG from "@/components/modules/HomePage/EducationBG";
import HeroSection from "@/components/modules/HomePage/HeroSection";
import { CompleteProjectOverview } from "@/components/modules/HomePage/ProjectOverview";
import Projects from "@/components/modules/Projects";
import React from "react";

const HomePage = () => {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <AboutMe />
      <EducationBG />
      <CompleteProjectOverview />
      <Projects />
    </main>
  );
};

export default HomePage;
