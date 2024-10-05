"use client";
import Image from "next/image";
import logo from "../../public/shift-logo.svg";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { Divide as Hamburger } from "hamburger-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [open]);

  const links = [
    {
      id: 1,
      name: "Home",
      link: "/",
    },
    {
      id: 2,
      name: "About",
      link: "#about",
    },
    {
      id: 3,
      name: "Services",
      link: "#services",
    },
    {
      id: 4,
      name: "Contact",
      link: "#contact",
    },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.7, duration: 0.2 }}
      className="z-40"
    >
      <div className="flex justify-between items-center bg-sm-blue text-sm-yellow px-5 py-2 relative">
        <span className="flex justify-center items-center gap-2">
          <Phone />
          <p>Phone</p>
        </span>
        <span className="flex justify-center items-center gap-2">
          <Mail />
          <p>Email</p>
        </span>
      </div>
      <div className="flex justify-between items-center bg-sm-yellow text-black px-5 h-16">
        <Link href="/">
          <Image
            src={logo}
            alt="Shift Mate Logo"
            className="w-1/2 ml-[-40px]"
          />
        </Link>
        <div className="hidden lg:flex gap-10">
          {links.map((link) => (
            <Link
              href={link.link}
              key={link.id}
              className="hover:scale-105 transition-all duration-100 ease-in-out"
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="block lg:hidden z-50">
          <Hamburger toggled={open} toggle={setOpen} />
        </div>
      </div>
      {open && (
        <motion.div
          initial={{ x: "-100" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", bounce: 0, duration: 0.5 }}
          className="bg-sm-yellow text-sm-blue h-screen w-full absolute top-0 left-0 p-5 gap-2 flex justify-between items-center overflow-hidden"
        >
          <div className="border border-white h-full w-[75%] flex flex-col justify-center items-start gap-20">
            {links.map((link) => (
              <motion.span
                initial={{ x: "100", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ staggerChildren: 1 }}
              >
                <Link
                  href={link.link}
                  key={link.id}
                  className="text-4xl font-bold uppercase"
                >
                  {link.name}
                </Link>
              </motion.span>
            ))}
          </div>
          <div className="border border-white h-full w-[25%]"></div>
        </motion.div>
      )}
    </motion.nav>
  );
}
