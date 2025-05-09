/* eslint-disable react/no-unescaped-entities */
"use client";
import Link from "next/link";
import { Button } from "@/components/ui/moving-border";
import { Spotlight } from "@/components/ui/Spotlight";
import { useEffect, useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import bannerImage from "../../../../public/assets/BannerImage.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "motion/react";

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

const techIcons = [
  {
    name: "React",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    alt: "React icon",
    position: "top-0 left-[171px] md:top-20 md:left-[40%]",
    animation: {
      rotate: 360,
      transition: { duration: 8, repeat: Infinity, ease: "linear" },
    },
  },
  {
    name: "TypeScript",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    alt: "TypeScript icon",
    position: "top-[140px] left-[7px] md:top-64 md:left-[30%] lg:left-[10%]",
    animation: {
      y: [0, -10, 0],
      transition: { duration: 3, repeat: Infinity },
    },
  },
  {
    name: "Next.js",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    alt: "Next.js icon",
    position: "top-70 left-[270px] md:top-70 md:left-[56%]",
    animation: {
      scale: [1, 1.3, 1],
      transition: { duration: 4, repeat: Infinity },
    },
  },
  {
    name: "Tailwind",
    src: "https://www.svgrepo.com/show/374118/tailwind.svg",
    alt: "Tailwind CSS icon",
    position: "top-64 left-[40px] md:top-[400px] md:left-[40%]",
    animation: {
      opacity: [1, 0, 1],
      transition: { duration: 5, repeat: Infinity },
    },
  },
  {
    name: "Node.js",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    alt: "Node.js icon",
    position: "top-20 left-[250px] md:top-40 md:left-[85%]",
    animation: {
      rotate: [0, 15, -15, 0],
      transition: { duration: 6, repeat: Infinity },
    },
  },
  {
    name: "Git",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    alt: "Git icon",
    position: "top-[200px] left-[250px] md:top-[70%] md:left-[85%]",
    animation: {
      y: [0, 5, 0],
      transition: { duration: 4, repeat: Infinity },
    },
    responsive: "hidden md:flex",
  },
  {
    name: "JavaScript",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    alt: "JavaScript icon",
    position: "top-[100px] left-[100px] md:top-[500px] md:left-[20%]",
    animation: {
      scale: [1, 1.2, 1],
      transition: { duration: 5, repeat: Infinity },
    },
  },
  {
    name: "GraphQL",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    alt: "GraphQL icon",
    position: "top-[180px] left-[150px] md:top-[500px] md:left-[60%]",
    animation: {
      scale: [1, 1.1, 1],
      transition: { duration: 4, repeat: Infinity },
    },
  },
];

const phrases = [
  "Full Stack Developer",
  "MERN Stack Developer",
  "Full Stack MERN Enthusiast",
];

function HeroSection() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
      easing: "ease-in-out",
    });
  }, []);

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
      {/* <Spotlight
        className="-top-40 middle-0 md:left-60 md:-top-20"
        fill="gray"
      /> */}

      <div className="flex flex-col lg:flex-row items-center justify-center gap-6 w-full px-4 md:px-10 bg-[linear-gradient(to_right,#ffffff33_1px,transparent_1px),linear-gradient(to_bottom,#ffffff33_1px,transparent_1px)] bg-[size:6rem_4rem] h-full">
        <div
          data-aos="fade-right"
          className="p-4 relative z-10 text-left w-full lg:w-[60%]"
        >
          <h1 className="mt-10 md:mt-0 text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-500">
            I'm ISHTIAK AHMED
          </h1>

          <div className="text-xl sm:text-lg md:text-xl font-bold text-left text-gray-100 h-8 sm:h-12 md:h-10 overflow-hidden relative my-5">
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
              className="h-10 w-44 bg-fuchsia-950 text-black dark:text-white border-neutral-200 dark:border-slate-800"
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
              className="h-10 w-44 bg-fuchsia-950 text-black dark:text-white border-neutral-200 dark:border-slate-800"
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
              className="h-10 w-44 bg-fuchsia-950 text-black dark:text-white border-neutral-200 dark:border-slate-800"
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

        {techIcons.map((icon) => (
          <motion.div
            key={icon.name}
            className={`circle-icon absolute animate-float ${icon.position} ${
              icon.responsive || ""
            }`}
            animate={icon.animation}
            whileHover={{ scale: 1.3 }}
          >
            <Image width={23} height={23} src={icon.src} alt={icon.alt} />
          </motion.div>
        ))}

        <div
          data-aos="fade-left"
          className="flex flex-col lg:flex-row gap-6 items-center justify-center w-full lg:w-[40%]"
        >
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
              className="text-white hover:text-fuchsia-400 transition-colors text-2xl animate-float"
            >
              <FaGithub />
            </Link>
            <Link
              href="https://www.linkedin.com/in/ishtiak-ahmed-2846722a5/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-fuchsia-400 transition-colors text-2xl animate-float delay-100"
            >
              <FaLinkedin />
            </Link>
            <Link
              href="mailto:ishtiakahmed18899@gmail.com"
              target="_blank"
              className="text-white hover:text-fuchsia-400 transition-colors text-2xl animate-float delay-200"
            >
              <FaEnvelope />
            </Link>
            <Link
              href="https://www.facebook.com/ishtiakahmed01999"
              target="_blank"
              className="text-white hover:text-fuchsia-400 transition-colors text-2xl animate-float delay-300"
            >
              <FaFacebook />
            </Link>
            <Link
              href="https://www.instagram.com/ishtiak_ahmed99/"
              target="_blank"
              className="text-white hover:text-fuchsia-400 transition-colors text-2xl animate-float delay-400"
            >
              <FaInstagram />
            </Link>
            <Link
              href="https://x.com/Ishtiak02236404"
              target="_blank"
              className="text-white hover:text-fuchsia-400 transition-colors text-2xl animate-float delay-500"
            >
              <FaTwitter />
            </Link>
            <Link
              href="https://www.pinterest.com/ishtiakahmed18899/"
              target="_blank"
              className="text-white hover:text-fuchsia-400 transition-colors text-2xl animate-float delay-600"
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
