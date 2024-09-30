"use client";
import Image from "next/image";
import logo from "../../public/shift-logo.svg";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { Divide as Hamburger } from "hamburger-react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Nav() {
  const [open, setOpen] = useState(false);

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
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", bounce: 0, duration: 0.2 }}
          className="flex flex-col gap-14 text-4xl justify-center items-center h-screen w-full absolute top-0 left-0 font-bold bg-sm-yellow text-black z-40"
        >
          {links.map((link) => (
            <Link key={link.id} href={link.link}>
              {link.name}
            </Link>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}
