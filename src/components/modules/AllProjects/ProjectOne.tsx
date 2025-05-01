import Image from "next/image";
import React from "react";
import cardImage from "../../../../public/assets/ProjectOne/HomePage.png";

const ProjectOne = () => {
  return (
    <div className="w-full max-w-2xl mx-auto mt-10 px-4">
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
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-white">
            Card Title
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-4">
            This is a description for the card. Hover the image to see the
            smooth pan effect from top to bottom.
          </p>

          {/* Tech list */}
          <div>
            <h1 className="text-base font-bold mb-2 text-white">
              Used Technologies
            </h1>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li>Next.js</li>
              <li>Tailwind CSS</li>
              <li>DaisyUI</li>
              <li>React</li>
              <li>Firebase</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDB</li>
              <li>Mongoose</li>
              <li>JWT</li>
              <li>Vercel</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectOne;
