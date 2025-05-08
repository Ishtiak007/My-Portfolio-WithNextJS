// You can import images directly or use paths (recommended for public assets)
import javascript from "../../public/assets/icons/js.png";
import typescript from "../../public/assets/icons/typescript.svg";
import tailwind from "../../public/assets/icons/tailwind.png";
import redux from "../../public/assets/icons/redux.svg";
import nextJs from "../../public/assets/icons/nextjs.svg";
import nodejs from "../../public/assets/icons/nodejs.png";
import expressjs from "../../public/assets/icons/expressJs.png";
import mongoDb from "../../public/assets/icons/mongodb.png";
import mongoose from "../../public/assets/icons/mongoose.svg";
import jwt from "../../public/assets/icons/jwt.png";
import cloudinary from "../../public/assets/icons/cloudinary.svg";

export interface Project {
  id: string;
  title: string;
  description: string;
  images: string[];
  frontend: { icon: any; label: string }[];
  backend: { icon: any; label: string }[];
}

export const projects: Record<string, Project> = {
  SecondHandMarketPlace: {
    id: "SecondHandMarketPlace",
    title: "SecondHand Marketplace",
    description: "Amader desher na bangladesh",
    images: [
      "/assets/SecondHandMarketPlace/AboutUsPage.png",
      "/assets/SecondHandMarketPlace/AddProduct.png",
      "/assets/SecondHandMarketPlace/AllProducts.png",
    ],
    frontend: [
      { icon: "/assets/icons/js.png", label: "JavaScript" },
      { icon: "/assets/icons/typescript.svg", label: "Typescript" },
      { icon: "/assets/icons/redux.svg", label: "Redux" },
      { icon: "/assets/icons/nextjs.svg", label: "NextJs" },
      { icon: "/assets/icons/tailwind.png", label: "Tailwind CSS" },
    ],
    backend: [
      { icon: "/assets/icons/typescript.svg", label: "Typescript" },
      { icon: "/assets/icons/nodejs.png", label: "NodeJS" },
      { icon: "/assets/icons/expressJs.png", label: "ExpressJS" },
      { icon: "/assets/icons/mongoose.svg", label: "Mongoose" },
      { icon: "/assets/icons/mongodb.png", label: "MongoDB" },
      { icon: "/assets/icons/jwt.png", label: "JWT" },
      { icon: "/assets/icons/cloudinary.svg", label: "Cloudinary" },
    ],
  },
  SecondHandMarketPlace2: {
    id: "SecondHandMarketPlace",
    title: "SecondHand Marketplace",
    description: "Amader desher na bangladesh",
    images: [
      "/assets/SecondHandMarketPlace/AboutUsPage.png",
      "/assets/SecondHandMarketPlace/AddProduct.png",
      "/assets/SecondHandMarketPlace/AllProducts.png",
      "/assets/SecondHandMarketPlace/AllProducts.png",
      "/assets/SecondHandMarketPlace/AllProducts.png",
    ],
    frontend: [
      { icon: "/assets/icons/js.png", label: "JavaScript" },
      { icon: "/assets/icons/typescript.svg", label: "Typescript" },
      { icon: "/assets/icons/redux.svg", label: "Redux" },
      { icon: "/assets/icons/nextjs.svg", label: "NextJs" },
      { icon: "/assets/icons/tailwind.png", label: "Tailwind CSS" },
    ],
    backend: [
      { icon: "/assets/icons/typescript.svg", label: "Typescript" },
      { icon: "/assets/icons/nodejs.png", label: "NodeJS" },
      { icon: "/assets/icons/expressJs.png", label: "ExpressJS" },
      { icon: "/assets/icons/mongoose.svg", label: "Mongoose" },
      { icon: "/assets/icons/mongodb.png", label: "MongoDB" },
      { icon: "/assets/icons/jwt.png", label: "JWT" },
      { icon: "/assets/icons/cloudinary.svg", label: "Cloudinary" },
    ],
  },
};
