import Image from "next/image";
import React, { useState } from "react";
import { FaGithub, FaLink } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import ProjectCardImage from "../../../../public/assets/StationeryShop/stationeryShop.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { motion } from "framer-motion";
import { CgDetailsMore } from "react-icons/cg";

import html from "../../../../public/assets/icons/html-5.png";
import css from "../../../../public/assets/icons/css-3.png";
import bootstrap from "../../../../public/assets/icons/bootstrap.png";
import tailwind from "../../../../public/assets/icons/tailwind.png";
import javascript from "../../../../public/assets/icons/js.png";
import react from "../../../../public/assets/icons/react.png";
import nodejs from "../../../../public/assets/icons/nodejs.png";
import expressjs from "../../../../public/assets/icons/expressJs.png";
import jwt from "../../../../public/assets/icons/jwt.png";
import mongoDb from "../../../../public/assets/icons/mongodb.png";
import mongoose from "../../../../public/assets/icons/mongoose.svg";
import typescript from "../../../../public/assets/icons/typescript.svg";
import redux from "../../../../public/assets/icons/redux.svg";
import cloudinary from "../../../../public/assets/icons/cloudinary.svg";

const StationeryShop = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const data = [
    {
      img: "/assets/StationeryShop/AboutUsPage.png",
    },
    {
      img: "/assets/StationeryShop/AddProduct.png",
    },
    {
      img: "/assets/StationeryShop/sts1.png",
    },
    {
      img: "/assets/StationeryShop/sts2.png",
    },
    {
      img: "/assets/StationeryShop/sts3.png",
    },
    {
      img: "/assets/StationeryShop/sts4.png",
    },
    {
      img: "/assets/StationeryShop/sts5.png",
    },
    {
      img: "/assets/StationeryShop/sts6.png",
    },
    {
      img: "/assets/StationeryShop/sts7.png",
    },
    {
      img: "/assets/StationeryShop/sts8.png",
    },
    {
      img: "/assets/StationeryShop/sts9.png",
    },
    {
      img: "/assets/StationeryShop/sts10.png",
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
            Stationery Shop
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-[13px] sm:text-base mb-4">
            Stationery Shop is a platform where users sell and manage stationery
            products, with admin controls and integrated ShurjoPay payments.
          </p>

          {/* links */}
          <div className="my-4">
            <div className="flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-0">
              <button
                onClick={() =>
                  (
                    document.getElementById(
                      "my_modal_stationeryshop"
                    ) as HTMLDialogElement
                  )?.showModal()
                }
                className="w-full sm:w-[140px] px-4 py-2 rounded-xl bg-gray-800 text-sm font-bold flex items-center justify-center gap-2 text-white shadow-md transition-all duration-300 ease-in-out hover:bg-gray-700 hover:scale-105 hover:shadow-lg active:scale-95"
              >
                Details <CgDetailsMore />
              </button>

              {/* Live Link */}
              <a
                href="https://stationery-shop-frontend-beta.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-[140px] px-4 py-2 rounded-xl bg-gray-800 text-sm font-bold flex items-center justify-center gap-2 text-white shadow-md transition-all duration-300 ease-in-out hover:bg-gray-700 hover:scale-105 hover:shadow-lg active:scale-95"
              >
                Live Link <FaLink />
              </a>
            </div>

            <div className="flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-0 my-3">
              {/* Frontend github */}
              <a
                href="https://github.com/Ishtiak007/Stationery-Shop-Frontend?tab=readme-ov-file"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-[140px] px-4 py-2 rounded-xl bg-gray-800 text-sm font-bold flex items-center justify-center gap-2 text-white shadow-md transition-all duration-300 ease-in-out hover:bg-gray-700 hover:scale-105 hover:shadow-lg active:scale-95"
              >
                Client <FaGithub />
              </a>
              <a
                href="https://github.com/Ishtiak007/Stationery-Shop-Server"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-[140px] px-4 py-2 rounded-xl bg-gray-800 text-sm font-bold flex items-center justify-center gap-2 text-white shadow-md transition-all duration-300 ease-in-out hover:bg-gray-700 hover:scale-105 hover:shadow-lg active:scale-95"
              >
                Server <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <dialog
        id="my_modal_stationeryshop"
        className="modal scrollbar-hidden rounded-md"
      >
        <div className="bg-white/5 border-white/10 backdrop-blur-lg modal-box w-full max-w-[95%] sm:max-w-3xl md:max-w-4xl lg:max-w-6xl p-4 sm:px-4">
          <div className="modal-action flex justify-end my-2">
            <form method="dialog">
              <button className="bg-white rounded-full p-2 sm:p-4 flex justify-center gap-2 items-center">
                <RxCross2 className="font-extrabold" />
              </button>
            </form>
          </div>
          <>
            <div className="flex justify-center items-center m-auto rounded-md">
              <Swiper
                modules={[Navigation, Autoplay, EffectFade]}
                spaceBetween={30}
                slidesPerView={1}
                autoplay={{ delay: 6000, disableOnInteraction: false }}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                speed={3000}
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
              >
                {data.map((d, index) => (
                  <SwiperSlide key={index}>
                    <motion.div
                      key={activeIndex}
                      className="relative w-full mx-auto h-[200px] sm:h-[350px] md:h-[500px] lg:h-[650px] bg-cover bg-center bg-no-repeat px-2 sm:px-4 rounded-md"
                      style={{ backgroundImage: `url(${d.img})` }}
                      initial={{ scale: 1.2 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 3, ease: "easeOut" }}
                    ></motion.div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </>
          <section className="bg-gray-900 text-white py-5 px-4">
            <div className="max-w-screen-xl mx-auto space-y-7">
              <div>
                <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 my-5">
                  Stationery Shop
                </h2>
                <p className="text-center">
                  This platform lets users easily list and manage their
                  stationery products for sale. From adding new items to
                  handling orders, everything is designed to be smooth and
                  user-friendly. Admins get enhanced controls—they can manage
                  users, oversee all products and orders, and keep the platform
                  running efficiently. Plus, with ShurjoPay integrated, payments
                  are secure and hassle-free. It’s a simple, smart solution for
                  anyone looking to buy or sell stationery online.
                </p>
              </div>
              <h2 className="text-xl font-bold text-center text-transparent bg-clip-text bg-white">
                Used Technologies
              </h2>

              {/* Frontend */}
              <div>
                <h3 className="text-lg font-semibold mb-6 text-center underline text-white uppercase">
                  Frontend
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
                  {[
                    { icon: css, label: "CSS" },
                    { icon: javascript, label: "JavaScript" },
                    { icon: typescript, label: "Typescript" },
                    { icon: react, label: "React" },
                    { icon: redux, label: "Redux" },
                    { icon: tailwind, label: "Tailwind CSS" },
                  ].map((tech, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col items-center p-4 bg-gray-800 rounded-xl shadow hover:scale-105 transition-transform duration-300"
                    >
                      <Image
                        src={tech.icon}
                        alt={tech.label}
                        className="w-7 h-7"
                      />
                      <p className="mt-2 text-sm">{tech.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Backend */}
              <div>
                <h3 className="text-lg font-semibold mb-6 text-center underline text-white uppercase">
                  Backend
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
                  {[
                    { icon: typescript, label: "Typescript" },
                    { icon: nodejs, label: "NodeJS" },
                    { icon: expressjs, label: "ExpressJS" },
                    { icon: mongoose, label: "Mongoose" },
                    { icon: mongoDb, label: "MongoDB" },
                    { icon: jwt, label: "JWT" },
                    { icon: cloudinary, label: "Cloudinary" },
                  ].map((tech, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col items-center p-4 bg-gray-800 rounded-xl shadow hover:scale-105 transition-transform duration-300"
                    >
                      <Image
                        src={tech.icon}
                        alt={tech.label}
                        className="w-7 h-7"
                      />
                      <p className="mt-2 text-sm">{tech.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </dialog>
    </div>
  );
};

export default StationeryShop;
