"use client";
import Image from "next/image";
import logo from "../../public/shift-logo.svg";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { Divide as Hamburger } from "hamburger-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: "spring", bounce: 0, duration: 0.2 }}
          className="bg-sm-yellow text-sm-blue h-screen w-full absolute top-0 left-0 p-5 gap-2 flex justify-between items-center overflow-hidden"
        >
          <div className="h-full w-[75%] flex flex-col justify-start items-start gap-20 pt-14">
            {links.map((link) => (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ staggerChildren: 1, delay: 0.2 }}
                key={link.id}
              >
                <Link href={link.link} className="text-4xl font-bold uppercase">
                  {link.name}
                </Link>
              </motion.span>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col justify-end items-end gap-4 h-full w-[25%]"
          >
            <p>info@shiftmate.co.uk</p>
            <div className="flex justify-center items-center gap-2">
              <Link
                href="https://api.whatsapp.com/send?phone=07737129843"
                target="_blank"
              >
                <FaWhatsapp className="text-3xl" />
              </Link>
              <Link
                href="https://www.facebook.com/profile.php?id=61565297475622&rdid=SDTjxWWafnUdjeqf&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FPai7heExECxXbbxS%2F"
                target="_blank"
              >
                <FaFacebook className="text-3xl" />
              </Link>
              <Link
                href="https://www.instagram.com/Shiftmateservices"
                target="_blank"
              >
                <FaInstagram className="text-3xl" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/bigbearbuysltd/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
              >
                <FaLinkedin className="text-3xl" />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </motion.nav>
  );
}
