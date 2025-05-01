"use client";

import html from "../../../../public/assets/icons/html-5.png";
import css from "../../../../public/assets/icons/css-3.png";
import bootstrap from "../../../../public/assets/icons/bootstrap.png";
import tailwind from "../../../../public/assets/icons/tailwind.png";
import javascript from "../../../../public/assets/icons/js.png";
import react from "../../../../public/assets/icons/react.png";
import nodejs from "../../../../public/assets/icons/nodejs.png";
import expressjs from "../../../../public/assets/icons/expressJs.png";
import jwt from "../../../../public/assets/icons/jwt.png";
import netlify from "../../../../public/assets/icons/netlify.webp";
import figma from "../../../../public/assets/icons/figma.png";
import devtools from "../../../../public/assets/icons/devTools.png";
import mongoDb from "../../../../public/assets/icons/mongodb.png";
import firebase from "../../../../public/assets/icons/firebase.png";
import vercel from "../../../../public/assets/icons/vercel.svg";
import vscode from "../../../../public/assets/icons/vscode.png";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import Marquee from "react-fast-marquee";

function SkillsIcons() {
  return (
    <div className="h-[40rem] w-full bg-gray-900 dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8 z-10">
        Hear our Harmony: Voices of success
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <Marquee>
            <div className="mx-3">
              <Image className="w-12 h-12" src={html} alt="Skill Icon" />
            </div>
            <div className="mx-3">
              <Image className="w-12 h-12" src={css} alt="Skill Icon" />
            </div>
            <div className="mx-3">
              <Image className="w-12 h-12" src={bootstrap} alt="Skill Icon" />
            </div>
            <div className="mx-3">
              <Image className="w-12 h-12" src={tailwind} alt="Skill Icon" />
            </div>
            <div className="mx-3">
              <Image className="w-12 h-12" src={javascript} alt="Skill Icon" />
            </div>
            <div className="mx-3">
              <Image className="w-12 h-12" src={react} alt="Skill Icon" />
            </div>
            <div className="mx-3">
              <Image className="w-12 h-12" src={nodejs} alt="Skill Icon" />
            </div>
            <div className="mx-3">
              <Image className="w-12 h-12" src={expressjs} alt="Skill Icon" />
            </div>
            <div className="mx-3">
              <Image className="w-12 h-12" src={firebase} alt="Skill Icon" />
            </div>
            <div className="mx-3">
              <Image className="w-12 h-12" src={jwt} alt="Skill Icon" />
            </div>
            <div className="mx-3">
              <Image className="w-12 h-12" src={nodejs} alt="Skill Icon" />
            </div>
            <div className="mx-3">
              <Image className="w-12 h-12" src={expressjs} alt="Skill Icon" />
            </div>
            <div className="mx-3">
              <Image className="w-12 h-12" src={firebase} alt="Skill Icon" />
            </div>
            <div className="mx-3">
              <Image className="w-12 h-12" src={jwt} alt="Skill Icon" />
            </div>
            <div className="mx-3">
              <Image className="w-12 h-12" src={react} alt="Skill Icon" />
            </div>
            <div className="mx-3">
              <FaGithub className="w-12 h-12" />
            </div>
            <div className="mx-3">
              <Image className="w-12 h-12" src={netlify} alt="Skill Icon" />
            </div>
            <div className="mx-3">
              <Image
                className="w-12 h-12 bg-white rounded-md"
                src={vercel}
                alt="Skill Icon"
              />
            </div>
            <div className="mx-3">
              <Image className="w-12 h-12" src={vscode} alt="Skill Icon" />
            </div>
            <div className="mx-3">
              <Image className="w-12 h-12" src={figma} alt="Skill Icon" />
            </div>
            <div className="mx-3">
              <Image className="w-12 h-12" src={devtools} alt="Skill Icon" />
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
}

export default SkillsIcons;
