"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const phrases = [
  "High-Converting UIs.",
  "Lightning-Fast Apps.",
  "Smooth Animations.",
  "Flawless Mobile UX."
];

export default function TypewriterHeadline() {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = 80;
    const deletingSpeed = 40;
    const pauseBeforeDelete = 2000;
    const pauseBeforeType = 500;

    const currentPhrase = phrases[phraseIndex];

    const handleTyping = () => {
      if (!isDeleting && text === currentPhrase) {
        setTimeout(() => setIsDeleting(true), pauseBeforeDelete);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      } else {
        const nextText = isDeleting
          ? currentPhrase.substring(0, text.length - 1)
          : currentPhrase.substring(0, text.length + 1);

        setText(nextText);
      }
    };

    const timer = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : text === "" ? pauseBeforeType : typingSpeed
    );

    return () => clearTimeout(timer);
  }, [text, isDeleting, phraseIndex]);

  return (
    <span className="inline-flex items-center justify-center whitespace-nowrap">
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00e5ff] to-[#39ff14] text-center">
        {text}
      </span>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
        className="inline-block w-[2px] sm:w-[3px] h-[1em] bg-[#00f0ff] ml-1 shadow-[0_0_8px_#00f0ff]"
      />
    </span>
  );
}