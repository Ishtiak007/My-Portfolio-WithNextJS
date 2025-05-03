"use client";
import Link from "next/link";
import {
  FaCopy,
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import toast from "react-hot-toast";

function Footer() {
  const email = "ishtiakahmed18899@gmail.com";

  const copyToClipboard = () => {
    // Copy the email to the clipboard
    navigator.clipboard
      .writeText(email)
      .then(() => {
        // Show toast notification after copying
        toast.success("Email address copied!");
      })
      .catch(() => {
        // Error handling
        toast.error("Failed to copy!");
      });
  };
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">About Me</h2>
          <p className="mb-4">
            CSE student & passionate Full-Stack MERN enthusiast from BD,
            crafting digital experiences with modern web technologies.
          </p>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4-4">
            Quick Links
          </h2>
          <ul>
            <li>
              <Link
                href="/"
                className="hover:text-white transition-colors duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="hover:text-white transition-colors duration-300"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-white transition-colors duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">
            Follow me on
          </h2>
          <div className="flex space-x-4 flex-col">
            <div className="flex flex-row lg:flex-col gap-4 justify-center lg:justify-start">
              <Link
                href="https://www.linkedin.com/in/ishtiak-ahmed-2846722a5/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-teal-400 transition-colors text-2xl "
              >
                <FaLinkedin />
              </Link>
              <Link
                href="https://www.facebook.com/ishtiakahmed01999"
                target="_blank"
                className="text-white hover:text-teal-400 transition-colors text-2xl"
              >
                <FaFacebook />
              </Link>
              <Link
                href="https://www.instagram.com/ishtiak_ahmed99/"
                target="_blank"
                className="text-white hover:text-teal-400 transition-colors text-2xl"
              >
                <FaInstagram />
              </Link>
              <Link
                href="https://x.com/Ishtiak02236404"
                target="_blank"
                className="text-white hover:text-teal-400 transition-colors text-2xl"
              >
                <FaTwitter />
              </Link>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact Me</h2>
          <p>Rangpur, Bangladesh</p>

          <h1
            onClick={copyToClipboard}
            className="text-right flex items-center gap-2 my-7"
          >
            <FaCopy className="text-white cursor-pointer" />{" "}
            ishtiakahmed18899@gmail.com{" "}
          </h1>
          <p>Phone: +880 1853-19689</p>
        </div>
      </div>
      <p className="text-center text-xs pt-8">
        © 2025 Ishtiak Ahmed. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
