/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React, { useState } from "react";
import { FaGithub, FaLink } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import ProjectCardImage from "../../../../public/assets/ShreyuDashboard/dashboard1.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { motion } from "framer-motion";
import { CgDetailsMore } from "react-icons/cg";

import css from "../../../../public/assets/icons/css-3.png";
import tailwind from "../../../../public/assets/icons/tailwind.png";
import react from "../../../../public/assets/icons/react.png";
import daisyUi from "../../../../public/assets/icons/daisyUI.png";
import { useRouter } from "next/navigation";

const ShreyuDashboard = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const router = useRouter();
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
            Shreyu Dashboard
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-[13px] sm:text-base mb-4">
            Shreyu Dashboard features a contemporary design, seamlessly blending
            Tailwind CSS and React to deliver a refined frontend experience.
          </p>

          {/* links */}
          <div className="my-4">
            <div className="flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-0">
              <button
                onClick={() => router.push(`/projectDetails/ShreyuDashboard`)}
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

export default ShreyuDashboard;
