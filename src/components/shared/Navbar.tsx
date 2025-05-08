"use client";
import React from "react";
import { FaBlog, FaCode, FaGamepad, FaHome, FaUser } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { FloatingNav } from "../ui/floating-navbar";
export function Navbar() {
  const navItems = [
    {
      name: "HOME",
      link: "/",
      icon: <FaHome className="h-4 w-4 text-white" />,
    },
    {
      name: "PROJECTS",
      link: "/projects",
      icon: <FaCode className="h-4 w-4 text-white" />,
    },
    {
      name: "BLOGS",
      link: "/blogs",
      icon: <FaBlog className="h-4 w-4 text-white" />,
    },
    {
      name: "CONTACT",
      link: "/contact",
      icon: <FaMessage className="h-4 w-4 text-white" />,
    },
    {
      name: "HAVE FUN",
      link: "/haveFun",
      icon: <FaGamepad className="h-4 w-4 text-white" />,
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
