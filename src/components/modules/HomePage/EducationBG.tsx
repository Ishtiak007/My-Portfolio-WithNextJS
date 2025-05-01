import React from "react";

const EducationBG = () => {
  return (
    <div className="lg:p-7 bg-gray-900">
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold text-white">
          Education Background
        </h3>
      </div>

      <div className="lg:flex gap-4 ">
        <div className="space-y-6 relative pl-5 border-l-2 border-gray-400 flex-1">
          {/* Box 1 */}
          <div className="relative pl-5">
            <span className="absolute -left-[13px] top-0 w-[13px] h-[23px] rounded-md bg-teal-500 border-2 border-gray-900"></span>
            <h4 className="text-teal-500 font-semibold">Batch 2017</h4>
            <h3 className="text-[19px] py-2 text-gray-300">
              Secondary School Degree (SSC)
            </h3>
            <p className="text-sm text-gray-400">
              School: Kurigram Collectorate School and College, Kurigram
            </p>
            <p className="text-sm text-gray-400">SSC: 5.00 (A+)</p>
            <p className="text-sm text-gray-400">Passing Year: 2017</p>
          </div>

          {/* Box 2 */}
          <div className="relative pl-5">
            <span className="absolute -left-[13px] top-0 w-[13px] h-[23px] rounded-md bg-teal-500 border-2 border-gray-900"></span>
            <h4 className="text-teal-500 font-semibold">2017 - 2019</h4>
            <h3 className="text-[19px] py-2 text-gray-300">
              Higher School Degree (HSC)
            </h3>
            <p className="text-sm text-gray-400">
              College: Rangpur Collectorate School and College, Rangpur
            </p>
            <p className="text-sm text-gray-400">HSC: 5.00 (A+)</p>
            <p className="text-sm text-gray-400">Passing Year: 2019</p>
          </div>

          {/* Box 3 */}
          <div className="relative pl-5 pb-0">
            <span className="absolute -left-[13px] top-0 w-[13px] h-[23px] rounded-md bg-teal-500 border-2 border-gray-900"></span>
            <h4 className="text-teal-500 font-semibold">2022 - (Present)</h4>
            <h3 className="text-[19px] py-2 text-gray-300">
              Bachelor Of Science Degree
            </h3>
            <p className="text-sm text-gray-500">
              Department: Computer Science And Engineering (CSE)
            </p>
            <p className="text-sm text-gray-500">
              Rangpur Engineering College, Affiliated by University of Rajshahi
            </p>

            {/* Notable Courses Section */}
            <div className="mt-4">
              <h4 className="text-gray-300 font-semibold mb-2">
                Notable Courses:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 text-sm text-gray-400">
                <ul className="space-y-1">
                  <li>CSE1111: Introduction to Computer Systems </li>
                  <li>
                    CSE1112: Computer Maintenance and Engineering Drawing Lab{" "}
                  </li>
                  <li>CSE1121: Structural Programming Language </li>
                  <li>CSE1122: Structural Programming Language Lab.</li>
                  <li>PHY 1211: Basic Electricity and Electrical Circuits </li>
                  <li>CSE 1211: Introduction to Digital Electronics</li>
                  <li>CSE 1221: Object Oriented Programming </li>
                  <li>CSE 1222: Object Oriented Programming Lab </li>
                  <li>STAT 2111: Theory of Statistics </li>
                  <li>MATH 2131: Differential Equations and Optimization</li>
                  <li>CSE 2111: Digital System Design</li>
                  <li>CSE 2121: Data Structure </li>
                  <li>CSE 2131: Discrete Mathematics </li>
                  <li>CSE2142: Writing Professional Code Lab </li>
                </ul>
                <ul className="space-y-1">
                  <li>LAW 2211: Cyber and Intellectual Property Law </li>
                  <li>MATH 2231: Numerical Methods </li>
                  <li>MATH 2241: Linear Algebra </li>
                  <li>CSE 2211 - Theory of Computation</li>
                  <li>CSE2221 - Design and Analysis of Algorithms</li>
                  <li>CSE 2231 - Computer Architecture and Organization </li>
                  <li>ICE 3161 - Communication Engineering</li>
                  <li>CSE 3162 - Mobile Application Development</li>
                  <li>
                    CSE 3151 - Engineering Ethics and Environment Protection{" "}
                  </li>
                  <li>CSE 3141 - Compiler Design</li>
                  <li>CSE 3111 - Software Engineering</li>
                  <li>CSE 3121 - Database Management Systems </li>
                  <li>CSE 3131 - Web Engineering</li>
                  <li>CSE 2252 - Web Application Development Lab </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6 relative pl-5 border-gray-400 flex-1">
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold text-white">My Experience</h3>
          </div>

          <div className="space-y-6 relative pl-5 border-l-2 border-gray-400">
            {/* Box 1 */}
            <div className="relative pl-5">
              <span className="absolute -left-[13px] top-0 w-[13px] h-[23px] rounded-md bg-teal-500 border-2 border-[#1e1e1e]"></span>
              <h4 className="text-teal-500 font-semibold">2022 - (Present)</h4>
              <h3 className="text-[19px] py-2 text-gray-300">
                Real Life Project
              </h3>
              <p className="text-sm text-gray-400">
                Creative thinker in MERN stack web development. I thrive on
                crafting unique solutions, merging design and code seamlessly.
                Committed to enhancing user experiences through innovative and
                impactful web development.
              </p>
            </div>

            {/* Box 2 */}
            <div className="relative pl-5">
              <span className="absolute -left-[13px] top-0 w-[13px] h-[23px] rounded-md bg-teal-500 border-2 border-[#1e1e1e]"></span>
              <h4 className="text-teal-500 font-semibold">2022 - (Present)</h4>
              <h3 className="text-[19px] py-2 text-gray-300">Frontend Side</h3>
              <p className="text-sm text-gray-400">
                As a front-end web developer, I specialize in
                <span className="text-green-300"> React JS</span>,
                <span className="text-green-300"> Tailwind CSS</span>,
                <span className="text-green-300"> DaisyUI</span>, (Sometime
                <span className="text-green-300"> Bootstrap</span>), and
                <span className="text-green-300"> Material UI</span> (Learning)
                crafting clear and concise code. I am dedicated to creating
                visually appealing and user-friendly interfaces, ensuring a
                seamless and engaging web experience.
              </p>
            </div>

            {/* Box 3 */}
            <div className="relative pl-5 pb-0">
              <span className="absolute -left-[13px] top-0 w-[13px] h-[23px] rounded-md bg-teal-500 border-2 border-[#1e1e1e]"></span>
              <h4 className="text-teal-500 font-semibold">2022 - (Present)</h4>
              <h3 className="text-[19px] py-2 text-gray-300">Backend Side</h3>
              <p className="text-sm text-gray-400">
                Experienced backend developer adept in
                <span className="text-green-300"> Node JS</span>,
                <span className="text-green-300"> Express JS</span>,
                <span className="text-green-300"> React JS</span>, and
                <span className="text-green-300"> MongoDB</span>. Skillfully
                architects robust solutions for seamless integration and dynamic
                functionality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationBG;
