import APITester from "@/components/modules/HaveFun/APITester";
import CodePlayground from "@/components/modules/HaveFun/CodePlayground";
import RepoGazer from "@/components/modules/HaveFun/RepoGazer";
import TicTacToe from "@/components/modules/HaveFun/TicTacToe";
import React from "react";

const HaveFunPage = () => {
  return (
    <div className="min-h-screen bg-[#173447] py-20 px-6 md:px-20">
      <RepoGazer />
      <TicTacToe />
      <CodePlayground />
      <APITester />
    </div>
  );
};

export default HaveFunPage;
