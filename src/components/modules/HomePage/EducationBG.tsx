"use client";
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const EducationBG = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div ref={containerRef} className="lg:p-7 bg-fuchsia-800/15">
      <div className="text-center py-8" data-aos="fade-down">
        <p className="text-base text-white font-semibold tracking-wide uppercase text-center">
          Educational Background
        </p>
        <h2 className="mt-2 text-2xl leading-8 tracking-tight font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400  text-center">
          Here's my educational background details
        </h2>
      </div>

      <div className="lg:flex gap-4 " data-aos="fade-up">
        {/* Education Section */}
        <div
          className="space-y-6 relative pl-5 border-l-2 border-gray-400 flex-1"
          data-aos="fade-right"
        >
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold text-white">
              Education Details
            </h3>
          </div>

          {/* Box 1 */}
          <div
            data-aos="fade-right"
            className="relative pl-5 bg-white/5 border-white/10 backdrop-blur-lg p-3"
          >
            <span className="absolute -left-[13px] top-0 w-[13px] h-[23px] rounded-md bg-fuchsia-600 border-2 border-gray-900"></span>
            <h4 className="text-gray-300 font-semibold">Batch 2017</h4>
            <h3 className="text-[20px] py-2 text-gray-300">
              Secondary School Degree (SSC)
            </h3>
            <p className="text-[15px] text-gray-300">
              School: Kurigram Collectorate School and College, Kurigram
            </p>
            <p className="text-[15px] text-gray-300">SSC: 5.00 (A+)</p>
            <p className="text-[15px] text-gray-300">Passing Year: 2017</p>
            <p className="text-[15px] text-gray-300">Background: Science</p>
          </div>

          {/* Box 2 */}
          <div
            data-aos="fade-right"
            className="relative pl-5 bg-white/5 border-white/10 backdrop-blur-lg p-3"
          >
            <span className="absolute -left-[13px] top-0 w-[13px] h-[23px] rounded-md bg-fuchsia-600 border-2 border-gray-900"></span>
            <h4 className="text-gray-300 font-semibold">2017 - 2019</h4>
            <h3 className="text-[20px] py-2 text-gray-300">
              Higher School Degree (HSC)
            </h3>
            <p className="text-[15px] text-gray-300">
              College: Rangpur Collectorate School and College, Rangpur
            </p>
            <p className="text-[15px] text-gray-300">HSC: 5.00 (A+)</p>
            <p className="text-[15px] text-gray-300">Passing Year: 2019</p>
            <p className="text-[15px] text-gray-300">Background: Science</p>
          </div>

          {/* Box 3 */}
          <div
            className="relative pl-5 pb-0 bg-white/5 border-white/10 backdrop-blur-lg p-3"
            data-aos="fade-right"
          >
            <span className="absolute -left-[13px] top-0 w-[13px] h-[23px] rounded-md bg-fuchsia-600 border-2 border-gray-900"></span>
            <h4 className="text-gray-300 font-semibold">2022 - (Present)</h4>
            <h3 className="text-[20px] py-2 text-gray-300">
              Bachelor Of Science Degree
            </h3>
            <p className="text-[15px] text-gray-300">
              Department: Computer Science And Engineering (CSE)
            </p>
            <p className="text-[15px] text-gray-300">
              Rangpur Engineering College, Affiliated by University of Rajshahi
            </p>

            <div className="mt-4">
              <h4 className="text-gray-300 text-[20px] mb-2">
                Notable Courses:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 text-[14px] text-gray-300">
                <ul className="space-y-1">
                  <li>CSE1111 - Introduction to Computer Systems</li>
                  <li>
                    CSE1112 - Computer Maintenance and Engineering Drawing Lab
                  </li>
                  <li>CSE1121 - Structural Programming Language</li>
                  <li>CSE1122 - Structural Programming Language Lab</li>
                  <li>PHY1211 - Basic Electricity and Electrical Circuits</li>
                  <li>CSE1211 - Introduction to Digital Electronics</li>
                  <li>CSE1221 - Object Oriented Programming</li>
                  <li>CSE1222 - Object Oriented Programming Lab</li>
                  <li>STAT2111 - Theory of Statistics</li>
                  <li>MATH2131 - Differential Equations and Optimization</li>
                  <li>CSE2111 - Digital System Design</li>
                  <li>CSE2121 - Data Structure</li>
                  <li>CSE2131 - Discrete Mathematics</li>
                  <li>CSE2142 - Writing Professional Code Lab</li>
                </ul>
                <ul className="space-y-1">
                  <li>LAW2211 - Cyber and Intellectual Property Law</li>
                  <li>MATH2231 - Numerical Methods</li>
                  <li>MATH2241 - Linear Algebra</li>
                  <li>CSE2211 - Theory of Computation</li>
                  <li>CSE2221 - Design and Analysis of Algorithms</li>
                  <li>CSE2231 - Computer Architecture and Organization</li>
                  <li>ICE3161 - Communication Engineering</li>
                  <li>CSE3162 - Mobile Application Development</li>
                  <li>
                    CSE3151 - Engineering Ethics and Environment Protection
                  </li>
                  <li>CSE3141 - Compiler Design</li>
                  <li>CSE3111 - Software Engineering</li>
                  <li>CSE3121 - Database Management Systems</li>
                  <li>CSE3131 - Web Engineering</li>
                  <li>CSE2252 - Web Application Development Lab</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Development Experience */}
        <div
          className="space-y-6 relative pl-5 border-gray-400 flex-1"
          data-aos="fade-left"
        >
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold text-white">
              Development Experience
            </h3>
          </div>

          <div className="space-y-6 relative pl-5 border-l-2 border-gray-400">
            {/* Box 1 */}
            <div
              className="relative pl-5 bg-white/5 border-white/10 backdrop-blur-lg p-3"
              data-aos="fade-left"
            >
              <span className="absolute -left-[13px] top-0 w-[13px] h-[23px] rounded-md bg-fuchsia-600 border-2 border-[#1e1e1e]"></span>
              <h4 className="text-gray-300 font-semibold">2022 - (Present)</h4>
              <h3 className="text-[20px] py-2 text-gray-300">
                Real-Life Projects
              </h3>
              <p className="text-[15px] text-gray-300">
                Full Stack MERN developer skilled in building robust, scalable
                web applications. I seamlessly integrate front-end design with
                efficient back-end logic, ensuring responsive UI, secure APIs,
                and dynamic user experiences.
              </p>
            </div>

            {/* Box 2 */}
            <div
              className="relative pl-5 bg-white/5 border-white/10 backdrop-blur-lg p-3"
              data-aos="fade-left"
            >
              <span className="absolute -left-[13px] top-0 w-[13px] h-[23px] rounded-md bg-fuchsia-600 border-2 border-[#1e1e1e]"></span>
              <h4 className="text-gray-300 font-semibold">2022 - (Present)</h4>
              <h3 className="text-[20px] py-2 text-gray-300">
                Frontend Development
              </h3>
              <p className="text-[15px] text-gray-300">
                Expertise in <span className="text-blue-300"> Typescript</span>,
                <span className="text-blue-300"> Javascript</span>,
                <span className="text-blue-300"> React JS</span>,
                <span className="text-blue-300"> Next JS</span>,
                <span className="text-blue-300"> Tailwind CSS</span>,
                <span className="text-blue-300"> Shadcn UI</span>, and{" "}
                <span className="text-blue-300"> Bootstrap</span>.
              </p>
            </div>

            {/* Box 3 */}
            <div
              className="relative pl-5 bg-white/5 border-white/10 backdrop-blur-lg p-3"
              data-aos="fade-left"
            >
              <span className="absolute -left-[13px] top-0 w-[13px] h-[23px] rounded-md bg-fuchsia-600 border-2 border-[#1e1e1e]"></span>
              <h4 className="text-gray-300 font-semibold">2022 - (Present)</h4>
              <h3 className="text-[20px] py-2 text-gray-300">
                Backend Development
              </h3>
              <p className="text-[15px] text-gray-300">
                Specializing in{" "}
                <span className="text-blue-300"> Typescript</span>,
                <span className="text-blue-300"> Node.js</span>,
                <span className="text-blue-300"> Express.js</span>,
                <span className="text-blue-300"> Mongoose</span>, with focus on
                scalable, RESTful APIs and secure integrations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationBG;
