// You can import images directly or use paths (recommended for public assets)
import html from "../../public/assets/icons/html-5.png";
import css from "../../public/assets/icons/css-3.png";
import bootstrap from "../../public/assets/icons/bootstrap.png";
import tailwind from "../../public/assets/icons/tailwind.png";
import javascript from "../../public/assets/icons/js.png";
import react from "../../public/assets/icons/react.png";
import nodejs from "../../public/assets/icons/nodejs.png";
import expressjs from "../../public/assets/icons/expressJs.png";
import jwt from "../../public/assets/icons/jwt.png";
import netlify from "../../public/assets/icons/netlify.webp";
import figma from "../../public/assets/icons/figma.png";
import devtools from "../../public/assets/icons/devTools.png";
import mongoDb from "../../public/assets/icons/mongodb.png";
import firebase from "../../public/assets/icons/firebase.png";
import vercel from "../../public/assets/icons/vercel.svg";
import vscode from "../../public/assets/icons/vscode.png";
import mongoose from "../../public/assets/icons/mongoose.svg";
import typescript from "../../public/assets/icons/typescript.svg";
import nextJs from "../../public/assets/icons/nextjs.svg";
import redux from "../../public/assets/icons/redux.svg";
import cloudinary from "../../public/assets/icons/cloudinary.svg";
import daisyUi from "../../public/assets/icons/daisyUI.png";

export interface Project {
  id: string;
  title: string;
  description: string;
  images: string[];
  githubFrontendLink: string;
  githubBackendLink: string;
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
      "/assets/SecondHandMarketPlace/ContactPage.png",
      "/assets/SecondHandMarketPlace/CheckOutPage.png",
      "/assets/SecondHandMarketPlace/FAQPage.png",
      "/assets/SecondHandMarketPlace/ManageAllProducts.png",
      "/assets/SecondHandMarketPlace/ManageAllUser.png",
      "/assets/SecondHandMarketPlace/PaymentPage.png",
      "/assets/SecondHandMarketPlace/ProductDetails.png",
      "/assets/SecondHandMarketPlace/ProfilePage.png",
      "/assets/SecondHandMarketPlace/Purchases.png",
      "/assets/SecondHandMarketPlace/Sales.png",
    ],
    githubFrontendLink:
      "https://github.com/Ishtiak007/SecondHandMarketplace-Client?tab=readme-ov-file",
    githubBackendLink:
      "https://github.com/Ishtiak007/SecondHandMarketplace-Server",
    frontend: [
      { icon: javascript, label: "JavaScript" },
      { icon: typescript, label: "Typescript" },
      { icon: redux, label: "Redux" },
      { icon: nextJs, label: "NextJs" },
      { icon: tailwind, label: "Tailwind CSS" },
    ],
    backend: [
      { icon: typescript, label: "Typescript" },
      { icon: nodejs, label: "NodeJS" },
      { icon: expressjs, label: "ExpressJS" },
      { icon: mongoose, label: "Mongoose" },
      { icon: mongoDb, label: "MongoDB" },
      { icon: jwt, label: "JWT" },
      { icon: cloudinary, label: "Cloudinary" },
    ],
  },
};
