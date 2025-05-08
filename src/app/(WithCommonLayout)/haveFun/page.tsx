import APITester from "@/components/modules/HaveFun/APITester";
import CodePlayground from "@/components/modules/HaveFun/CodePlayground";
import RepoGazer from "@/components/modules/HaveFun/RepoGazer";
import TicTacToe from "@/components/modules/HaveFun/TicTacToe";
import React from "react";

const HaveFunPage = () => {
  return (
    <div className="min-h-screen bg-white/5 border-white/10 backdrop-blur-lg py-20 px-6 md:px-20">
      <RepoGazer />
      <TicTacToe />
      <CodePlayground />
      <APITester />
    </div>
  );
};

export default HaveFunPage;
