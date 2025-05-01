/* eslint-disable react/no-unescaped-entities */
"use client";
import Link from "next/link";
import { Button } from "@/components/ui/moving-border";
import { Spotlight } from "@/components/ui/Spotlight";
import { useEffect, useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import bannerImage from "../../../../public/assets/BannerImage.png";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const phrases = [
  "Full Stack Developer",
  "MERN Stack Developer",
  "Problem Solver",
];

function HeroSection() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true); // Trigger fade out
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % phrases.length); // Update phrase
        setFade(false); // Fade in
      }, 300); // Matches transition duration
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      {/* Left-side social links */}
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="blue" />

      <div className="lg:flex items-center">
        <div className="flex gap-6 items-center lg:w-[40%]">
          <div className="md:flex flex-col gap-4 ">
            <Link
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition-colors text-2xl"
            >
              <FaGithub />
            </Link>
            <Link
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition-colors text-2xl"
            >
              <FaLinkedin />
            </Link>
            <Link
              href="mailto:you@example.com"
              className="text-white hover:text-blue-400 transition-colors text-2xl"
            >
              <FaEnvelope />
            </Link>
            <Link
              href="mailto:you@example.com"
              className="text-white hover:text-blue-400 transition-colors text-2xl"
            >
              <FaFacebook />
            </Link>
            <Link
              href="mailto:you@example.com"
              className="text-white hover:text-blue-400 transition-colors text-2xl"
            >
              <FaInstagram />
            </Link>
            <Link
              href="mailto:you@example.com"
              className="text-white hover:text-blue-400 transition-colors text-2xl"
            >
              <FaTwitter />
            </Link>
          </div>
          {/* banner image */}
          <Image
            src={bannerImage}
            alt="Banner Image"
            className="w-auto rounded-xl"
          />
        </div>

        <div className="p-4 relative z-10 text-left lg:w-[600]">
          <h1 className="mt-20 md:mt-0 text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            I'm ISHTIAK AHMED
          </h1>

          <div className="text-2xl sm:text-lg md:text-xl font-bold text-left text-red-400 dark:text-blue-400 h-8 sm:h-12 md:h-10 overflow-hidden relative my-5">
            <div
              className={clsx(
                "transition-all duration-300 ease-in-out absolute w-full",
                fade ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"
              )}
            >
              {phrases[index]}
            </div>
          </div>

          <div className="max-w-lg">
            <p className="font-normal text-base md:text-base text-neutral-300  mx-auto">
              I’m your friendly neighbourhood Full Stack Developer, crafting
              smooth UIs with React and Next.js, and building robust backends
              with Node.js, Express, TypeScript, and Mongoose.
            </p>
          </div>

          <div className="mt-4 flex justify-start gap-4">
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800 cursor-pointer"
            >
              Download Resume
            </Button>
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800 cursor-pointer"
            >
              Let's Discuss
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
