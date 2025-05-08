import Image from "next/image";
import React, { useState } from "react";
import { FaGithub, FaLink } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import ProjectCardImage from "../../../../public/assets/WeavePDF/team_project1.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { motion } from "framer-motion";
import { CgDetailsMore } from "react-icons/cg";

import css from "../../../../public/assets/icons/css-3.png";
import tailwind from "../../../../public/assets/icons/tailwind.png";
import javascript from "../../../../public/assets/icons/js.png";
import react from "../../../../public/assets/icons/react.png";
import nodejs from "../../../../public/assets/icons/nodejs.png";
import expressjs from "../../../../public/assets/icons/expressJs.png";
import jwt from "../../../../public/assets/icons/jwt.png";
import mongoDb from "../../../../public/assets/icons/mongodb.png";
import firebase from "../../../../public/assets/icons/firebase.png";
import vercel from "../../../../public/assets/icons/vercel.svg";
import daisyUi from "../../../../public/assets/icons/daisyUI.png";
import { useRouter } from "next/navigation";

const WeavePDF = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const router = useRouter();

  const data = [
    {
      img: "/assets/WeavePDF/team_project2.jpg",
    },
    {
      img: "/assets/WeavePDF/team_project3.jpg",
    },
    {
      img: "/assets/WeavePDF/team_project4.jpg",
    },
    {
      img: "/assets/WeavePDF/team_project5.jpg",
    },
    {
      img: "/assets/WeavePDF/team_project6.jpg",
    },
    {
      img: "/assets/WeavePDF/team_project7.jpg",
    },
    {
      img: "/assets/WeavePDF/team_project8.jpg",
    },
    {
      img: "/assets/WeavePDF/team_project9.jpg",
    },
    {
      img: "/assets/WeavePDF/team_project10.jpg",
    },
    {
      img: "/assets/WeavePDF/team_project11.jpg",
    },
    {
      img: "/assets/WeavePDF/team_project12.jpg",
    },
    {
      img: "/assets/WeavePDF/team_project13.jpg",
    },
    {
      img: "/assets/WeavePDF/team_project14.jpg",
    },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto mt-10 px-4">
      <div className="overflow-hidden rounded-xl shadow-lg bg-white/5 border-white/10 backdrop-blur-lg">
        {/* Image container */}
        <div className="w-full h-60 sm:h-64 md:h-72 lg:h-80 overflow-hidden group">
          <Image
            src={ProjectCardImage}
            alt="Card Image"
            className="w-full h-full object-cover object-top transition-all duration-[3000ms] ease-linear group-hover:object-bottom"
          />
        </div>

        {/* Content */}
        <div className="p-4">
          <h2 className="text-base sm:text-xl md:text-xl font-medium mb-2 text-white">
            WeavePDF (Team Project)
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-[13px] sm:text-base mb-4">
            WeavePDF: Empowering productivity with streamlined PDF management,
            essential features, and enhanced document handling for seamless
            efficiency.
          </p>

          {/* links */}
          <div className="my-4">
            <div className="flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-0">
              <button
                onClick={() => router.push(`/projectDetails/WeavePDF`)}
                className="px-6 py-2 text-white font-semibold bg-gradient-to-bl from-violet-500 to-fuchsia-500 hover:brightness-110 transition duration-300 flex items-center gap-3"
              >
                Details <CgDetailsMore />
              </button>

              {/* Live Link */}
              <a
                href="https://second-hand-marketplace-client-seven.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 text-white font-semibold bg-gradient-to-bl from-violet-500 to-fuchsia-500 hover:brightness-110 transition duration-300 flex items-center gap-3"
              >
                Live Link <FaLink />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeavePDF;
