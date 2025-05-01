"use client";

import { BackgroundBeams } from "@/components/ui/background-beams";
import { Button } from "@/components/ui/moving-border";
import React, { FormEvent, useRef, useState } from "react";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";

function ContactMe() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_cawnu8j",
        "template_f3kyxvg",
        form.current,
        "0EucXb_zUMFzsGLwF"
      )
      .then(
        (result) => {
          console.log(result.text);
          if (result.text === "OK") {
            Swal.fire(
              "Good job!",
              "Message has been sent successfully!",
              "success"
            );
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 pt-36 relative">
      <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-0" />
      <div className="max-w-2xl mx-auto p-4 relative z-10">
        <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">
          Contact With Me
        </h1>
        <p className="text-neutral-400 max-w-lg mx-auto my-2 text-sm text-center">
          I’m always open to new opportunities, collaborations, or simply a
          friendly tech chat. Whether you have a project idea, want to work
          together, or need help with web development, feel free to reach out.
          Let’s build something amazing together!
        </p>
        <form ref={form} onSubmit={sendEmail} className="space-y-4 mt-4">
          <input
            type="email"
            name="from_email"
            placeholder="Your email address"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-gray-400"
            required
          />
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-gray-400"
            required
          />
          <input
            type="text"
            name="from_subject"
            placeholder="Subject"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-gray-400"
            required
          />
          <input
            type="number"
            name="phoneNumber"
            placeholder="Number"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-gray-400"
            required
          />
          <textarea
            name="message"
            placeholder="Your message"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-gray-400 resize-none"
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
