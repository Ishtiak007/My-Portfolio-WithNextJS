/* eslint-disable react/jsx-key */
"use client";
import React from "react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";
import Image from "next/image";

import alemeno from "../../../../public/assets/ProjectOverview/Alemeno.png";
import amrutam from "../../../../public/assets/ProjectOverview/Amrutam-AyurvedaImage.jpg";
import dashboardImp from "../../../../public/assets/ProjectOverview/dashboardImp.jpg";
import foodFestival from "../../../../public/assets/ProjectOverview/FoodFestival.png";
import libraryManagement from "../../../../public/assets/ProjectOverview/Library.png";
import oldenGoods from "../../../../public/assets/ProjectOverview/OldenGoods.png";
import petAdoption from "../../../../public/assets/ProjectOverview/PetAdoption.png";
import secondHand from "../../../../public/assets/ProjectOverview/secondHand.png";
import shebaDashboard from "../../../../public/assets/ProjectOverview/Sheba.png";
import tm from "../../../../public/assets/ProjectOverview//TM2.png";
import weavePdf from "../../../../public/assets/ProjectOverview//WeavePDF.png";
import stationeryShop from "../../../../public/assets/ProjectOverview//stationery.png";

export function CompleteProjectOverview() {
  const items = [
    {
      title: "Alemeno Academy",
      image: alemeno,
      className: "absolute top-10 left-[20%] rotate-[-5deg]",
    },
    {
      title: "Amrutam Ayurveda",
      image: amrutam,
      className: "absolute top-40 left-[25%] rotate-[-7deg]",
    },
    {
      title: "Dashboard",
      image: dashboardImp,
      className: "absolute top-5 left-[40%] rotate-[8deg]",
    },
    {
      title: "Food Festival",
      image: foodFestival,
      className: "absolute top-32 left-[55%] rotate-[10deg]",
    },
    {
      title: "Library Management",
      image: libraryManagement,
      className: "absolute top-20 right-[35%] rotate-[2deg]",
    },
    {
      title: "Olden Goods",
      image: oldenGoods,
      className: "absolute top-24 left-[45%] rotate-[-7deg]",
    },
    {
      title: "Pet Adoption",
      image: petAdoption,
      className: "absolute top-8 left-[30%] rotate-[4deg]",
    },
    {
      title: "SecondHand Market",
      image: secondHand,
      className: "absolute top-8 left-[20%] rotate-[7deg]",
    },
    {
      title: "Sheba Dashboard",
      image: shebaDashboard,
      className: "absolute top-8 left-[60%] rotate-[8deg]",
    },
    {
      title: "Task Management",
      image: tm,
      className: "absolute top-8 left-[70%] rotate-[4deg]",
    },
    {
      title: "Weave PDF",
      image: weavePdf,
      className: "absolute top-8 left-[70%] rotate-[4deg]",
    },
    {
      title: "Stationery Shop",
      image: stationeryShop,
      className: "absolute top-8 left-[70%] rotate-[4deg]",
    },
  ];
  return (
    <DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-clip">
      <p className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-gray-400 md:text-4xl dark:text-neutral-800">
        I have completed over 20 full-stack projects, including both frontend
        and backend development.
      </p>
      {items.map((item) => (
        <DraggableCardBody className={item.className}>
          <Image
            src={item.image}
            alt={item.title}
            className="pointer-events-none relative z-10  object-cover"
            width={800} // Set a proper width
            height={600} // Set a proper height
          />
          <h3 className="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300">
            {item.title}
          </h3>
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
  );
}
