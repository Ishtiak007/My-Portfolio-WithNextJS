"use client";

import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";

export function BlogCard3D({
  title,
  description,
  image,
  link,
}: {
  title: string;
  description: string;
  image: string;
  link: string;
}) {
  return (
    <CardContainer className="inter-var w-full max-w-md">
      <CardBody className="bg-white dark:bg-black border p-4 sm:p-6 rounded-xl w-full h-full flex flex-col justify-between">
        <div>
          <CardItem
            translateZ="50"
            className="text-lg sm:text-xl font-bold text-neutral-700 dark:text-white"
          >
            {title}
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm sm:text-base mt-2 dark:text-neutral-300 h-20"
          >
            {description}
          </CardItem>
        </div>

        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={image}
            alt="blog"
            width={1000}
            height={400}
            className="h-40 sm:h-48 w-full object-cover rounded-xl"
          />
        </CardItem>

        <div className="mt-6 text-right">
          <CardItem translateZ={20} as={Link} href={link}>
            <button className="py-2 px-4 bg-fuchsia-500 text-white text-sm rounded-md hover:bg-fuchsia-600 transition">
              Read More →
            </button>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
