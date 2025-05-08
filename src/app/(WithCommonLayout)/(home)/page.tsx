import { AboutMe } from "@/components/modules/HomePage/AboutMe";
import EducationBG from "@/components/modules/HomePage/EducationBG";
import GithubContribution from "@/components/modules/HomePage/GithubContribution";
import HeroSection from "@/components/modules/HomePage/HeroSection";
import MyCommitment from "@/components/modules/HomePage/MyCommitment";
import { CompleteProjectOverview } from "@/components/modules/HomePage/ProjectOverview";
import SkillsIcons from "@/components/modules/HomePage/SkillsIconMove";
import Projects from "@/components/modules/Projects";
import React from "react";

const HomePage = () => {
  return (
    <main className="min-h-screen overflow-hidden">
      <HeroSection />
      <AboutMe />
      <EducationBG />
      <CompleteProjectOverview />
      <Projects />
      <MyCommitment />
      <SkillsIcons />
      <GithubContribution />
    </main>
  );
};

export default HomePage;
