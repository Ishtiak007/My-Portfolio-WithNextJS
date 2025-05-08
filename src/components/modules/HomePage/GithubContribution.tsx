"use client";
import GitHubCalendar from "react-github-calendar";
import { useState } from "react";

const GithubContribution = () => {
  const [imgSrc, setImgSrc] = useState(
    "https://github-readme-streak-stats.herokuapp.com/?user=ishtiak007&theme=tokyonight"
  );
  return (
    <div className="min-h-[65vh]  px-4 py-10">
      <div className="text-center py-8">
        <h2 className="mt-2 text-2xl leading-8 tracking-tight font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400  text-center">
          My GitHub Activities
        </h2>
      </div>

      <div className="bg-white/5 border-white/10 backdrop-blur-lg dark:text-white w-full max-w-6xl mx-auto p-6 md:p-10 rounded-3xl shadow-lg">
        <div className="flex justify-center items-center">
          <GitHubCalendar
            username="Ishtiak007"
            colorScheme="light"
            blockSize={15}
            blockMargin={5}
            fontSize={16}
          />
        </div>
      </div>
    </div>
  );
};

export default GithubContribution;
