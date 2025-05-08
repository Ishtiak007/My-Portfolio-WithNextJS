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
  FoodFestival: {
    id: "FoodFestival",
    title: "Food Festival",
    description: "Amader desher na bangladesh",
    images: [
      "/assets/FoodFestival/ff1.png",
      "/assets/FoodFestival/ff2.png",
      "/assets/FoodFestival/ff3.png",
      "/assets/FoodFestival/ff4.png",
      "/assets/FoodFestival/ff5.png",
      "/assets/FoodFestival/ff6.png",
      "/assets/FoodFestival/ff7.png",
      "/assets/FoodFestival/ff8.png",
      "/assets/FoodFestival/ff9.png",
      "/assets/FoodFestival/ff10.png",
      "/assets/FoodFestival/ff11.png",
      "/assets/FoodFestival/ff12.png",
    ],
    githubFrontendLink:
      "https://github.com/Ishtiak007/SecondHandMarketplace-Client?tab=readme-ov-file",
    githubBackendLink:
      "https://github.com/Ishtiak007/SecondHandMarketplace-Server",
    frontend: [
      { icon: css, label: "CSS" },
      { icon: javascript, label: "JavaScript" },
      { icon: react, label: "ReactJS" },
      { icon: daisyUi, label: "DaisyUI" },
      { icon: firebase, label: "Firebase" },
      { icon: vercel, label: "Vercel" },
      { icon: tailwind, label: "Tailwind CSS" },
    ],
    backend: [
      { icon: nodejs, label: "NodeJS" },
      { icon: expressjs, label: "ExpressJS" },
      { icon: mongoDb, label: "MongoDB" },
      { icon: jwt, label: "JWT" },
    ],
  },
  PetAdoption: {
    id: "PetAdoption",
    title: "Pet Adoption",
    description: "Amader desher na bangladesh",
    images: [
      "/assets/PetAdoption/img162.png",
      "/assets/PetAdoption/img163.png",
      "/assets/PetAdoption/img164.png",
      "/assets/PetAdoption/img165.png",
      "/assets/PetAdoption/img166.png",
      "/assets/PetAdoption/img167.png",
      "/assets/PetAdoption/img168.png",
      "/assets/PetAdoption/img169.png",
      "/assets/PetAdoption/img170.png",
      "/assets/PetAdoption/img171.png",
      "/assets/PetAdoption/img172.png",
      "/assets/PetAdoption/img173.png",
      "/assets/PetAdoption/img174.png",
    ],
    githubFrontendLink:
      "https://github.com/Ishtiak007/SecondHandMarketplace-Client?tab=readme-ov-file",
    githubBackendLink:
      "https://github.com/Ishtiak007/SecondHandMarketplace-Server",
    frontend: [
      { icon: css, label: "CSS" },
      { icon: javascript, label: "JavaScript" },
      { icon: react, label: "ReactJS" },
      { icon: daisyUi, label: "DaisyUI" },
      { icon: firebase, label: "Firebase" },
      { icon: vercel, label: "Vercel" },
      { icon: tailwind, label: "Tailwind CSS" },
    ],
    backend: [
      { icon: nodejs, label: "NodeJS" },
      { icon: expressjs, label: "ExpressJS" },
      { icon: mongoDb, label: "MongoDB" },
      { icon: jwt, label: "JWT" },
    ],
  },
  WeavePDF: {
    id: "WeavePDF",
    title: "WeavePDF",
    description: "Amader desher na bangladesh",
    images: [
      "/assets/WeavePDF/team_project2.jpg",
      "/assets/WeavePDF/team_project3.jpg",
      "/assets/WeavePDF/team_project4.jpg",
      "/assets/WeavePDF/team_project5.jpg",
      "/assets/WeavePDF/team_project6.jpg",
      "/assets/WeavePDF/team_project7.jpg",
      "/assets/WeavePDF/team_project8.jpg",
      "/assets/WeavePDF/team_project9.jpg",
      "/assets/WeavePDF/team_project10.jpg",
      "/assets/WeavePDF/team_project11.jpg",
      "/assets/WeavePDF/team_project12.jpg",
      "/assets/WeavePDF/team_project13.jpg",
      "/assets/WeavePDF/team_project14.jpg",
    ],
    githubFrontendLink:
      "https://github.com/Ishtiak007/SecondHandMarketplace-Client?tab=readme-ov-file",
    githubBackendLink:
      "https://github.com/Ishtiak007/SecondHandMarketplace-Server",
    frontend: [
      { icon: css, label: "CSS" },
      { icon: javascript, label: "JavaScript" },
      { icon: react, label: "ReactJS" },
      { icon: daisyUi, label: "DaisyUI" },
      { icon: firebase, label: "Firebase" },
      { icon: vercel, label: "Vercel" },
      { icon: tailwind, label: "Tailwind CSS" },
    ],
    backend: [
      { icon: nodejs, label: "NodeJS" },
      { icon: expressjs, label: "ExpressJS" },
      { icon: mongoDb, label: "MongoDB" },
      { icon: jwt, label: "JWT" },
    ],
  },
  ShebaDashboard: {
    id: "ShebaDashboard",
    title: "WeavePDF",
    description: "Amader desher na bangladesh",
    images: [
      "/assets/ShebaDashboard/sd1.png",
      "/assets/ShebaDashboard/sd2.png",
      "/assets/ShebaDashboard/sd3.png",
      "/assets/ShebaDashboard/sd4.png",
      "/assets/ShebaDashboard/sd5.png",
      "/assets/ShebaDashboard/sd6.png",
    ],
    githubFrontendLink:
      "https://github.com/Ishtiak007/SecondHandMarketplace-Client?tab=readme-ov-file",
    githubBackendLink:
      "https://github.com/Ishtiak007/SecondHandMarketplace-Server",
    frontend: [
      { icon: css, label: "CSS" },
      { icon: javascript, label: "JavaScript" },
      { icon: react, label: "ReactJS" },
      { icon: daisyUi, label: "DaisyUI" },
      { icon: firebase, label: "Firebase" },
      { icon: vercel, label: "Vercel" },
      { icon: tailwind, label: "Tailwind CSS" },
    ],
    backend: [
      { icon: nodejs, label: "NodeJS" },
      { icon: expressjs, label: "ExpressJS" },
      { icon: mongoDb, label: "MongoDB" },
      { icon: jwt, label: "JWT" },
    ],
  },
  ShreyuDashboard: {
    id: "ShreyuDashboard",
    title: "Shreyu Dashboard",
    description: "Amader desher na bangladesh",
    images: [
      "/assets/ShreyuDashboard/dashboard2.png",
      "/assets/ShreyuDashboard/dashboard3.png",
      "/assets/ShreyuDashboard/dashboard4.png",
      "/assets/ShreyuDashboard/dashboard5.png",
      "/assets/ShreyuDashboard/dashboard6.jpg",
      "/assets/ShreyuDashboard/dashboard7.jpg",
      "/assets/ShreyuDashboard/dashboard8.jpg",
      "/assets/ShreyuDashboard/dashboard9.jpg",
      "/assets/ShreyuDashboard/dashboard10.png",
      "/assets/ShreyuDashboard/dashboard11.png",
      "/assets/ShreyuDashboard/dashboard12.jpg",
      "/assets/ShreyuDashboard/dashboard13.png",
      "/assets/ShreyuDashboard/dashboard14.jpg",
    ],
    githubFrontendLink:
      "https://github.com/Ishtiak007/SecondHandMarketplace-Client?tab=readme-ov-file",
    githubBackendLink:
      "https://github.com/Ishtiak007/SecondHandMarketplace-Server",
    frontend: [
      { icon: css, label: "CSS" },
      { icon: javascript, label: "JavaScript" },
      { icon: react, label: "ReactJS" },
      { icon: daisyUi, label: "DaisyUI" },
      { icon: firebase, label: "Firebase" },
      { icon: vercel, label: "Vercel" },
      { icon: tailwind, label: "Tailwind CSS" },
    ],
    backend: [
      { icon: nodejs, label: "NodeJS" },
      { icon: expressjs, label: "ExpressJS" },
      { icon: mongoDb, label: "MongoDB" },
      { icon: jwt, label: "JWT" },
    ],
  },
  LibraryManagement: {
    id: "LibraryManagement",
    title: "Library Management",
    description: "Amader desher na bangladesh",
    images: [
      "/assets/LibraryManagement/img1.png",
      "/assets/LibraryManagement/img2.png",
      "/assets/LibraryManagement/img3.png",
      "/assets/LibraryManagement/img4.png",
      "/assets/LibraryManagement/img5.png",
      "/assets/LibraryManagement/img6.png",
      "/assets/LibraryManagement/img7.png",
      "/assets/LibraryManagement/img8.png",
    ],
    githubFrontendLink:
      "https://github.com/Ishtiak007/SecondHandMarketplace-Client?tab=readme-ov-file",
    githubBackendLink:
      "https://github.com/Ishtiak007/SecondHandMarketplace-Server",
    frontend: [
      { icon: css, label: "CSS" },
      { icon: javascript, label: "JavaScript" },
      { icon: react, label: "ReactJS" },
      { icon: daisyUi, label: "DaisyUI" },
      { icon: firebase, label: "Firebase" },
      { icon: vercel, label: "Vercel" },
      { icon: tailwind, label: "Tailwind CSS" },
    ],
    backend: [
      { icon: nodejs, label: "NodeJS" },
      { icon: expressjs, label: "ExpressJS" },
      { icon: mongoDb, label: "MongoDB" },
      { icon: jwt, label: "JWT" },
    ],
  },
  TaskManagement: {
    id: "TaskManagement",
    title: "Task Management",
    description: "Amader desher na bangladesh",
    images: [
      "/assets/TaskManagement/TM2.png",
      "/assets/TaskManagement/TM3.png",
      "/assets/TaskManagement/TM4.png",
    ],
    githubFrontendLink:
      "https://github.com/Ishtiak007/SecondHandMarketplace-Client?tab=readme-ov-file",
    githubBackendLink:
      "https://github.com/Ishtiak007/SecondHandMarketplace-Server",
    frontend: [
      { icon: css, label: "CSS" },
      { icon: javascript, label: "JavaScript" },
      { icon: react, label: "ReactJS" },
      { icon: daisyUi, label: "DaisyUI" },
      { icon: firebase, label: "Firebase" },
      { icon: vercel, label: "Vercel" },
      { icon: tailwind, label: "Tailwind CSS" },
    ],
    backend: [
      { icon: nodejs, label: "NodeJS" },
      { icon: expressjs, label: "ExpressJS" },
      { icon: mongoDb, label: "MongoDB" },
      { icon: jwt, label: "JWT" },
    ],
  },
};
