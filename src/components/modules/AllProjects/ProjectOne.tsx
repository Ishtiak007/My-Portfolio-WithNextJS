import Image from "next/image";
import React, { useState } from "react";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaLink,
  FaStreetView,
} from "react-icons/fa";
import { TbSunglasses } from "react-icons/tb";
import { RxCross2 } from "react-icons/rx";
import cardImage from "../../../../public/assets/ProjectOne/HomePage.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { motion } from "framer-motion";
import { CgDetailsMore } from "react-icons/cg";

const ProjectOne = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const data = [
    {
      img: "/assets/ProjectOne/AboutUsPage.png",
    },
    {
      img: "/assets/ProjectOne/AddProduct.png",
    },
    {
      img: "/assets/ProjectOne/AllProducts.png",
    },
    {
      img: "/assets/ProjectOne/ContactPage.png",
    },
    {
      img: "/assets/ProjectOne/CheckOutPage.png",
    },
    {
      img: "/assets/ProjectOne/FAQPage.png",
    },
    {
      img: "/assets/ProjectOne/ManageAllProducts.png",
    },
    {
      img: "/assets/ProjectOne/ManageAllUser.png",
    },
    {
      img: "/assets/ProjectOne/PaymentPage.png",
    },
    {
      img: "/assets/ProjectOne/ProductDetails.png",
    },
    {
      img: "/assets/ProjectOne/ProfilePage.png",
    },
    {
      img: "/assets/ProjectOne/Purchases.png",
    },
    {
      img: "/assets/ProjectOne/Sales.png",
    },
  ];
  return (
    <div className="w-full max-w-3xl mx-auto mt-10 px-4">
      <div className="overflow-hidden rounded-xl shadow-lg bg-gray-900">
        {/* Image container */}
        <div className="w-full h-60 sm:h-64 md:h-72 lg:h-80 overflow-hidden group">
          <Image
            src={cardImage}
            alt="Card Image"
            className="w-full h-full object-cover object-top transition-all duration-[3000ms] ease-linear group-hover:object-bottom"
          />
        </div>

        {/* Content */}
        <div className="p-4">
          <h2 className="text-base sm:text-xl md:text-xl font-medium mb-2 text-white">
            SecondHand Marketplace
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-[13px] sm:text-base mb-4">
            This is a description for the card. Hover the image to see the
            smooth pan effect from top to bottom.
          </p>

          {/* links */}
          <div className=" my-4">
            <div>
              <div className="flex justify-between ">
                <button
                  onClick={() =>
                    (
                      document.getElementById(
                        "my_modal_projectOne"
                      ) as HTMLDialogElement
                    )?.showModal()
                  }
                  className="px-4 py-2 rounded-xl bg-gray-800 w-[140px] justify-center text-sm font-bold flex items-center gap-2 text-white shadow-md transition-all duration-300 ease-in-out hover:bg-gray-700 hover:scale-105 hover:shadow-lg active:scale-95"
                >
                  Details <CgDetailsMore />
                </button>
                <button>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-gray-800 w-[140px] justify-center text-sm font-bold flex items-center gap-2 text-white shadow-md transition-all duration-300 ease-in-out hover:bg-gray-700 hover:scale-105 hover:shadow-lg active:scale-95"
                    href="https://curious-dragon-bfb4a4.netlify.app/"
                  >
                    Live Link <FaLink></FaLink>
                  </a>
                </button>
              </div>
              <div className="flex justify-between my-3">
                <button>
                  <a
                    className="px-4 py-2 rounded-xl bg-gray-800 w-[140px] justify-center text-sm font-bold flex items-center gap-2 text-white shadow-md transition-all duration-300 ease-in-out hover:bg-gray-700 hover:scale-105 hover:shadow-lg active:scale-95"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/Md-Rakib-Hassan/WeavePDF"
                  >
                    Client <FaGithub></FaGithub>
                  </a>
                </button>
                <button>
                  <a
                    className="px-4 py-2 rounded-xl bg-gray-800 w-[140px] justify-center text-sm font-bold flex items-center gap-2 text-white shadow-md transition-all duration-300 ease-in-out hover:bg-gray-700 hover:scale-105 hover:shadow-lg active:scale-95"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/Md-Rakib-Hassan/WeavePDF-Backend"
                  >
                    Server <FaGithub></FaGithub>
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <dialog id="my_modal_projectOne" className="modal">
        <div className="bg-gray-700 modal-box w-full max-w-[95%] sm:max-w-3xl md:max-w-4xl lg:max-w-6xl p-2 sm:px-4">
          <>
            <div className="flex justify-center items-center m-auto">
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
          <div className="flex justify-center items-center my-5 text-center px-2">
            <div>
              <p className="text-gray-100 text-sm sm:text-base">
                <span className="text-sky-400">Admin email :</span> a@a.com
              </p>
              <p className="text-gray-100 text-sm sm:text-base">
                <span className="text-sky-400">Admin password :</span> admin@123
              </p>
            </div>
          </div>
          <div className="modal-action flex justify-center">
            <form method="dialog">
              <button className="bg-gray-300 rounded-full p-3 sm:p-4 flex justify-center gap-2 items-center">
                <RxCross2 className="font-bold" /> Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default ProjectOne;
