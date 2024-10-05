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
import { SiXiaohongshu } from "react-icons/si";

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
      <div className="flex lg:hidden justify-between items-center bg-sm-yellow text-sm-blue px-5 py-2 relative">
        <div className="flex justify-center items-center gap-2">
          <Link
            href="https://api.whatsapp.com/send?phone=07737129843"
            target="_blank"
          >
            <FaWhatsapp className="text-xl" />
          </Link>
          <Link
            href="https://www.facebook.com/profile.php?id=61565297475622&rdid=SDTjxWWafnUdjeqf&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FPai7heExECxXbbxS%2F"
            target="_blank"
          >
            <FaFacebook className="text-xl" />
          </Link>
          <Link
            href="https://www.instagram.com/Shiftmateservices"
            target="_blank"
          >
            <FaInstagram className="text-xl" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/bigbearbuysltd/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
          >
            <FaLinkedin className="text-xl" />
          </Link>
          <Link
            href="https://www.xiaohongshu.com/user/profile/66e19600000000001d033ddd?xhsshare=CopyLink&appuid=66e19600000000001d033ddd&apptime=1728078568"
            target="_blank"
          >
            <SiXiaohongshu className="text-xl text-white bg-red-500 rounded p-1" />
          </Link>
        </div>
        <span className="flex justify-center items-center gap-2">
          <Mail />
          <Link href="info@shiftmate.co.uk">Email</Link>
        </span>
      </div>
      <div className="flex justify-between items-center bg-sm-blue text-white py-5 lg:py-10 px-5 h-16">
        <div className="flex justify-start items-center w-1/3">
          <Link href="/">
            <Image src={logo} alt="Shift Mate Logo" className="w-1/2" />
          </Link>
        </div>
        <div className="hidden lg:flex justify-center items-center gap-10 w-1/3">
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
        <div className="hidden lg:flex justify-end items-center gap-5 w-1/3">
          <Link
            href="https://api.whatsapp.com/send?phone=07737129843"
            target="_blank"
          >
            <FaWhatsapp className="text-4xl" />
          </Link>
          <Link
            href="https://www.facebook.com/profile.php?id=61565297475622&rdid=SDTjxWWafnUdjeqf&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FPai7heExECxXbbxS%2F"
            target="_blank"
          >
            <FaFacebook className="text-4xl" />
          </Link>
          <Link
            href="https://www.instagram.com/Shiftmateservices"
            target="_blank"
          >
            <FaInstagram className="text-4xl" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/bigbearbuysltd/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
          >
            <FaLinkedin className="text-4xl" />
          </Link>
          <Link
            href="https://www.xiaohongshu.com/user/profile/66e19600000000001d033ddd?xhsshare=CopyLink&appuid=66e19600000000001d033ddd&apptime=1728078568"
            target="_blank"
          >
            <SiXiaohongshu className="text-4xl text-white bg-red-500 rounded p-1" />
          </Link>
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
          className="bg-sm-blue text-sm-yellow h-screen w-full absolute top-0 left-0 p-5 gap-2 flex justify-between items-center overflow-hidden"
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
            <p className="text-xl">info@shiftmate.co.uk</p>
            <div className="flex justify-center items-center gap-2">
              <Link
                href="https://api.whatsapp.com/send?phone=07737129843"
                target="_blank"
              >
                <FaWhatsapp className="text-4xl" />
              </Link>
              <Link
                href="https://www.facebook.com/profile.php?id=61565297475622&rdid=SDTjxWWafnUdjeqf&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FPai7heExECxXbbxS%2F"
                target="_blank"
              >
                <FaFacebook className="text-4xl" />
              </Link>
              <Link
                href="https://www.instagram.com/Shiftmateservices"
                target="_blank"
              >
                <FaInstagram className="text-4xl" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/bigbearbuysltd/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
              >
                <FaLinkedin className="text-4xl" />
              </Link>
              <Link
                href="https://www.xiaohongshu.com/user/profile/66e19600000000001d033ddd?xhsshare=CopyLink&appuid=66e19600000000001d033ddd&apptime=1728078568"
                target="_blank"
              >
                <SiXiaohongshu className="text-4xl text-white bg-red-500 rounded p-1" />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </motion.nav>
  );
}
