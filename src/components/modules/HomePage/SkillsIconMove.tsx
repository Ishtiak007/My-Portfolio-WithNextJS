"use client";
import { FaDatabase, FaGithub } from "react-icons/fa";
import Image from "next/image";
import Marquee from "react-fast-marquee";

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
import mongoose from "../../../../public/assets/icons/mongoose.svg";
import typescript from "../../../../public/assets/icons/typescript.svg";
import nextJs from "../../../../public/assets/icons/nextjs.svg";
import cloudinary from "../../../../public/assets/icons/cloudinary.svg";

function SkillsIcons() {
  return (
    <div className="min-h-screen w-full bg-gray-900 dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden p-5">
      <div className="text-center">
        <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
          Technologies & Tools
        </h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
          Skills
        </p>
      </div>
      <div className="px-4 py-10">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 max-w-screen-xl mx-auto">
          {/* Frontend */}
          <div className="bg-gray-900 rounded-xl shadow-2xl p-5">
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-pink-400 text-center mb-6 text-2xl font-bold">
              Frontend Side
            </h1>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 ">
              {[
                { src: html, label: "HTML-5" },
                { src: css, label: "CSS-3" },
                { src: bootstrap, label: "Bootstrap" },
                { src: tailwind, label: "Tailwind" },
                { src: javascript, label: "JavaScript" },
                { src: typescript, label: "Typescript" },
                { src: react, label: "React" },
                { src: nextJs, label: "NextJS" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center p-3 bg-gray-800 rounded-xl shadow hover:scale-105 duration-300 animate-float"
                >
                  <Image
                    src={item.src}
                    alt={item.label}
                    className="w-10 h-10 "
                  />
                  <p className="text-white mt-2 text-sm ">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="bg-gray-900 rounded-xl shadow-2xl p-5">
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-pink-400 text-center mb-6 text-2xl font-bold">
              Backend Side
            </h1>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
              {[
                { src: typescript, label: "Typescript" },
                { src: nodejs, label: "NodeJS" },
                { src: expressjs, label: "Express" },
                { src: jwt, label: "JWT" },
                { src: cloudinary, label: "Cloudinary" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center p-3 bg-gray-800 rounded-xl shadow hover:scale-105 duration-300 animate-float"
                >
                  <Image
                    src={item.src}
                    alt={item.label}
                    className="w-10 h-10"
                  />
                  <p className="text-white mt-2 text-sm">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="bg-gray-900 rounded-xl shadow-2xl p-5">
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-pink-400 text-center mb-6 text-2xl font-bold">
              Tools
            </h1>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
              {[
                {
                  icon: <FaGithub className="w-10 h-10 text-white" />,
                  label: "GitHub",
                },
                { src: netlify, label: "Netlify" },
                { src: vercel, label: "Vercel", bgWhite: true },
                { src: vscode, label: "VS Code" },
                { src: figma, label: "Figma" },
                { src: devtools, label: "Dev Tools" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center p-3 bg-gray-800 rounded-xl shadow hover:scale-105 duration-300 animate-float"
                >
                  {item.icon ? (
                    item.icon
                  ) : (
                    <Image
                      src={item.src}
                      alt={item.label}
                      className={`w-10 h-10 ${
                        item.bgWhite ? "bg-white p-1 rounded-md" : ""
                      }`}
                    />
                  )}
                  <p className="text-white mt-2 text-sm">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Database */}
          <div className="bg-gray-900 rounded-xl shadow-2xl p-5">
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-pink-400 text-center mb-6 text-2xl font-bold">
              Database
            </h1>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
              {[
                {
                  icon: <FaDatabase className="w-10 h-10 text-white" />,
                  label: "Local Storage",
                },
                { src: mongoDb, label: "MongoDB" },
                { src: mongoose, label: "Mongoose" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center p-3 bg-gray-800 rounded-xl shadow hover:scale-105 duration-300 animate-float"
                >
                  {item.icon ? (
                    item.icon
                  ) : (
                    <Image
                      src={item.src}
                      alt={item.label}
                      className="w-10 h-10"
                    />
                  )}
                  <p className="text-white mt-2 text-sm">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Marquee */}
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
            <div className="mx-3">
              <Image className="w-12 h-12" src={mongoose} alt="Skill Icon" />
            </div>
            <div className="mx-3">
              <Image className="w-12 h-12" src={typescript} alt="Skill Icon" />
            </div>
            <div className="mx-3">
              <Image className="w-12 h-12" src={nextJs} alt="Skill Icon" />
            </div>
            <div className="mx-3">
              <Image className="w-12 h-12" src={cloudinary} alt="Skill Icon" />
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
}

export default SkillsIcons;
