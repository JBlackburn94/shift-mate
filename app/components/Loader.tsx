"use client";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Loader() {
  const headingOne = ["S", "H", "I", "F", "T"];
  const headingTwo = ["M", "A", "T", "E"];

  useEffect(() => {
    document.body.classList.add("no-scroll");

    const timer = setTimeout(() => {
      document.body.classList.remove("no-scroll");
    }, 3200);

    return () => {
      clearTimeout(timer);
      document.body.classList.remove("no-scroll");
    };
  }, []);

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: "-100%" }}
      transition={{ delay: 2.7, duration: 0.5 }}
      className="flex flex-col justify-center items-center h-screen w-full bg-sm-yellow px-5 absolute"
    >
      <motion.div
        initial={{ y: 0, opacity: 1 }}
        animate={{ y: "-100%", opacity: 0 }}
        transition={{ delay: 2.6, duration: 0.4 }}
        className="h-[4rem] flex overflow-hidden font-[family-name:var(--font-get-voip)]"
      >
        {headingOne.map((letter, index) => (
          <motion.h1
            key={index}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="text-5xl font-bold text-sm-red"
          >
            {letter}
          </motion.h1>
        ))}
        {headingTwo.map((letter, index) => (
          <motion.h1
            key={index}
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="text-5xl font-bold text-sm-blue"
          >
            {letter}
          </motion.h1>
        ))}
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.2 }}
        className="mt-5"
      >
        Loading
      </motion.p>
      <motion.span
        initial={{ width: 0 }}
        animate={{ width: 200 }}
        transition={{ delay: 0.6, duration: 2 }}
        className="h-5 bg-sm-red w-[200px] md:w-[400px] mt-2 flex justify-start items-start"
      ></motion.span>
    </motion.div>
  );
}
