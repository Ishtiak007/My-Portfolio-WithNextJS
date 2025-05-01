"use client";

import { BackgroundBeams } from "@/components/ui/background-beams";
import { Button } from "@/components/ui/moving-border";
import React, { FormEvent, useState } from "react";

function ContactMe() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Submitted:", { email, message });
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 pt-36 relative">
      {" "}
      {/* Ensure the container is relative */}
      {/* BackgroundBeams with adjusted z-index */}
      <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-0" />
      {/* Content with higher z-index */}
      <div className="max-w-2xl mx-auto p-4 relative z-10">
        {" "}
        {/* Add relative and z-10 to bring content to the front */}
        <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">
          Contact With Me
        </h1>
        <p className="text-neutral-400 max-w-lg mx-auto my-2 text-sm text-center">
          I’m always open to new opportunities, collaborations, or simply a
          friendly tech chat. Whether you have a project idea, want to work
          together, or need help with web development, feel free to reach out.
          Let’s build something amazing together!
        </p>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-gray-400 "
            required
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your message"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-gray-400  resize-none"
            rows={5}
            required
          ></textarea>
          <div className="flex justify-center">
            <Button
              type="submit"
              className="px-6 py-2 rounded-lg bg-[#173447] text-white font-medium hover:bg-teal-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
            >
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
