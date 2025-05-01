import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import imageOne from "../../../../public/assets/AboutMeOne.png";
import imageTwo from "../../../../public/assets/AboutMeTwo.jpg";
import imageThree from "../../../../public/assets/AboutMeThree.jpg";
import imageFour from "../../../../public/assets/AboutMeFour.jpg";

export function AboutMe() {
  const testimonials = [
    {
      quote:
        "I’m Ishtiak Ahmed, a Computer Science student from Rangpur, Bangladesh. I enjoy solving problems with logic and creativity. My studies and passion for tech drive me to build meaningful applications. I’m eager to grow in a collaborative environment and contribute to real-world software solutions that make a difference.",
      name: "Ishtiak Ahmed",
      designation: "Computer Science Background",
      src: imageTwo,
    },
    {
      quote:
        "I build full-stack applications using React, Next.js, Node.js, Express, MongoDB, TypeScript, and JavaScript. I focus on responsive UI, scalable backend, and clean code. I work well with APIs, authentication, and version control. I’m always learning and aim to create fast, reliable, and user-centered web experiences across the entire stack.",
      name: "Ishtiak Ahmed",
      designation: "Skill set: Full stack MERN enthusiast",
      src: imageOne,
    },
    {
      quote:
        "I’m committed to growing through consistent practice, learning, and collaboration. My GitHub activity reflects my dedication. I value teamwork, quality, and creative thinking. I aim to contribute to innovative projects that have impact, improve lives, and challenge me to become a better developer every single day.",
      name: "Ishtiak Ahmed",
      designation: "Commitment to Growth and Innovation",
      src: imageFour,
    },
  ];
  return (
    <>
      <div className="py-12 bg-[#173447]">
        <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase text-center">
          About Me
        </h2>
        <p className="mt-2 text-2xl leading-8 tracking-tight font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400  text-center">
          From Code to Creation – Meet Ishtiak Ahmed
        </p>
        <AnimatedTestimonials testimonials={testimonials} />
      </div>
    </>
  );
}
