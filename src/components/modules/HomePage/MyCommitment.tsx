"use client";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import Link from "next/link";
import { FaCode, FaLaptop, FaLaptopCode } from "react-icons/fa";
import { FaCodePullRequest } from "react-icons/fa6";
import { GrServices } from "react-icons/gr";
import { IoIosLaptop } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const commitment = [
  {
    icon: <FaLaptop className="text-white text-3xl" />,
    title: "Full Stack MERN Developer",
    description:
      "Passionate about building end-to-end MERN solutions that are fast, scalable, and user-friendly. Turning visions into powerful applications.",
  },
  {
    icon: <FaLaptopCode className="text-white text-3xl" />,
    title: "Modern Web Solutions",
    description:
      "Crafting full-stack web applications with MERN, blending intuitive design with robust functionality for exceptional user experiences.",
  },
  {
    icon: <GrServices className="text-white text-3xl" />,
    title: "Target-First Mindset",
    description:
      "Committed to delivering value—understanding project needs and providing tailored full-stack solutions that exceed expectations.",
  },
  {
    icon: <FaCode className="text-white text-3xl" />,
    title: "Clean & Efficient Code",
    description:
      "Writing scalable, readable, and optimized code across the stack to ensure maintainability and performance at every level.",
  },
  {
    icon: <IoIosLaptop className="text-white text-3xl" />,
    title: "Seamless UI/UX",
    description:
      "Designing responsive, interactive interfaces that adapt beautifully to all screens, enhancing user satisfaction and engagement.",
  },
  {
    icon: <FaCodePullRequest className="text-white text-3xl" />,
    title: "Problem Solver",
    description:
      "Thriving on challenges—solving real-world problems with full-stack solutions that are creative, efficient, and future-ready.",
  },
];

function MyCommitment() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <div className="py-12">
      <div>
        <div data-aos="fade-up" className="text-center py-8">
          <p className="text-base text-white font-semibold tracking-wide uppercase text-center">
            Building the Web, End to End
          </p>
          <h2 className="mt-2 text-2xl leading-8 tracking-tight font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400  text-center">
            Commitments
          </h2>
        </div>
      </div>
      <div className="mt-10 mx-8">
        <div
          data-aos="fade-left"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center"
        >
          {commitment.map((c) => (
            <div key={c.title} className="flex justify-center">
              <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                  <div>{c.icon}</div>
                  <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                    {c.title}
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                    {c.description}
                  </p>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyCommitment;
