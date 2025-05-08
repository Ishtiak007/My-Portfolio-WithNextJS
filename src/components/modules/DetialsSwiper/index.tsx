"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

export default function ProjectSwiper({ images }: { images: string[] }) {
  return (
    <Swiper
      modules={[Navigation, Autoplay, EffectFade]}
      spaceBetween={30}
      slidesPerView={1}
      autoplay={{ delay: 5000 }}
      effect="fade"
      speed={2000}
      fadeEffect={{ crossFade: true }}
    >
      {images.map((img, idx) => (
        <SwiperSlide key={idx}>
          <motion.div
            className="w-full h-[300px] sm:h-[450px] md:h-[600px] bg-cover bg-center rounded-md"
            style={{ backgroundImage: `url(${img})` }}
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
