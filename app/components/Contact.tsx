import Image from "next/image";
import logo from "../../public/shift-logo.svg";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center h-[500px] w-[90%] m-10 mx-auto bg-sm-blue">
      <div className="flex justify-center items-center p-5 text-white h-full w-full">
        <Image src={logo} alt="ShiftMate logo" />
      </div>
      <div className="flex flex-col justify-center items-center p-5 gap-10 bg-white h-full w-full">
        <div className="flex flex-col justify-center items-center gap-4">
          <h2 className="text-3xl font-bold mt-10">Contact</h2>
          <p className="text-lg md:text-xl lg:text-2xl font-light text-center">
            Your go-to guy for all things moving, lifting, and delivering! From
            house removals to student moves, we've got you covered with a smile
            😊 🚚
          </p>
        </div>
        <div className="flex flex-row lg:flex-col justify-between lg:justify-start items-center lg:items-start w-full gap-2">
          <span className="flex gap-2">
            <Mail size={24} />
            <Link className="underline" href="mailto:info@shiftmate.co.uk">
              info@shiftmate.co.uk
            </Link>
          </span>
          <span className="flex gap-2">
            <Phone size={24} />
            <Link
              className="underline"
              href="https://api.whatsapp.com/send?phone=07737129843"
            >
              WhatsApp
            </Link>
          </span>
        </div>
      </div>
    </section>
  );
}
