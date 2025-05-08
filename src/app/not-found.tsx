"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const messages = [
  "404 Error: Page not found.",
  "Maybe you mistyped the URL?",
  "Or this page never existed at all...",
  "Let’s go back to safety.",
];

export default function NotFound() {
  const [displayedText, setDisplayedText] = useState("");
  const [msgIndex, setMsgIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (msgIndex >= messages.length) return;

    const currentMsg = messages[msgIndex];
    if (charIndex < currentMsg.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + currentMsg[charIndex]);
        setCharIndex(charIndex + 1);
      }, 40);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayedText("");
        setCharIndex(0);
        setMsgIndex(msgIndex + 1);
      }, 1200);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, msgIndex]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-6 text-center">
      <h1 className="text-5xl font-bold mb-6 text-red-500">404</h1>
      <div className="bg-black border border-gray-700 rounded-md p-4 w-full max-w-xl text-left font-mono text-green-400 shadow-lg min-h-[80px]">
        <span>{displayedText}</span>
        <span className="animate-pulse">|</span>
      </div>
      <Link
        href="/"
        className="mt-8 px-6 py-3 bg-fuchsia-600 rounded-full text-white hover:bg-fuchsia-700 transition"
      >
        Return to Home
      </Link>
    </div>
  );
}
