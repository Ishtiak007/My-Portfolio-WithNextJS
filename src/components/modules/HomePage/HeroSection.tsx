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
  FaDownload,
  FaWhatsapp,
  FaPinterest,
  FaFileDownload,
} from "react-icons/fa";

const phrases = [
  "Full Stack Developer",
  "MERN Stack Developer",
  "Full Stack MERN Enthusiast",
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
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0 bg-gray-900">
      {/* Left-side social links */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      <div className="flex flex-col lg:flex-row items-center justify-center gap-6 w-full px-4 md:px-10">
        <div className="p-4 relative z-10 text-left w-full lg:w-[60%]">
          <h1 className="mt-10 md:mt-0 text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-500">
            I'm ISHTIAK AHMED
          </h1>

          <div className="text-xl sm:text-lg md:text-xl font-bold text-left text-teal-500 h-8 sm:h-12 md:h-10 overflow-hidden relative my-5">
            <div
              className={clsx(
                "transition-all duration-300 ease-in-out absolute w-full",
                fade ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"
              )}
            >
              {phrases[index]}
            </div>
          </div>

          <div className="max-w-xl">
            <p className="font-normal text-sm sm:text-base text-neutral-300 mx-auto">
              I’m your friendly neighbourhood Full Stack Developer, crafting
              smooth UIs with React and Next.js, and building robust backends
              with Node.js, Express, TypeScript, and Mongoose.
            </p>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row flex-wrap items-center gap-4">
            <Button
              borderRadius="1.75rem"
              className="bg-white h-10 w-44 dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              <a
                className="flex items-center gap-2"
                href="Resume_of_Ishtiak-Ahmed.pdf"
                download
              >
                <FaDownload /> Download Resume
              </a>
            </Button>

            <Button
              borderRadius="1.75rem"
              className="bg-white h-10 w-44 dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              <a
                className="flex items-center gap-2"
                href="CV_of_Ishtiak-Ahmed.pdf"
                download
              >
                <FaFileDownload /> Download CV
              </a>
            </Button>

            <Button
              borderRadius="1.75rem"
              className="bg-white h-10 w-44 dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              <a
                href="https://wa.me/8801853196899"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 w-full h-full justify-center"
              >
                <FaWhatsapp size={18} /> Let's Discuss
              </a>
            </Button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 items-center justify-center w-full lg:w-[40%]">
          {/* Banner Image */}
          <div className="flex justify-center w-full lg:w-auto">
            <Image
              src={bannerImage}
              alt="Banner Image"
              className="w-[80%] sm:w-[60%] lg:w-auto rounded-xl"
            />
          </div>

          {/* Social Links */}
          <div className="flex flex-row lg:flex-col gap-4 justify-center lg:justify-start">
            <Link
              href="https://github.com/Ishtiak007"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500 transition-colors text-2xl animate-float"
            >
              <FaGithub />
            </Link>
            <Link
              href="https://www.linkedin.com/in/ishtiak-ahmed-2846722a5/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500 transition-colors text-2xl animate-float delay-100"
            >
              <FaLinkedin />
            </Link>
            <Link
              href="mailto:ishtiakahmed18899@gmail.com"
              target="_blank"
              className="text-white hover:text-blue-500 transition-colors text-2xl animate-float delay-200"
            >
              <FaEnvelope />
            </Link>
            <Link
              href="https://www.facebook.com/ishtiakahmed01999"
              target="_blank"
              className="text-white hover:text-blue-500 transition-colors text-2xl animate-float delay-300"
            >
              <FaFacebook />
            </Link>
            <Link
              href="https://www.instagram.com/ishtiak_ahmed99/"
              target="_blank"
              className="text-white hover:text-blue-500 transition-colors text-2xl animate-float delay-400"
            >
              <FaInstagram />
            </Link>
            <Link
              href="https://x.com/Ishtiak02236404"
              target="_blank"
              className="text-white hover:text-blue-500 transition-colors text-2xl animate-float delay-500"
            >
              <FaTwitter />
            </Link>
            <Link
              href="https://www.pinterest.com/ishtiakahmed18899/"
              target="_blank"
              className="text-white hover:text-blue-500 transition-colors text-2xl animate-float delay-600"
            >
              <FaPinterest />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
