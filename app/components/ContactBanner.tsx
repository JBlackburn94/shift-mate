import Link from "next/link";
import { BsWhatsapp } from "react-icons/bs";

export default function ContactBanner() {
  return (
    <section className="flex justify-between items-center m-10 h-[100px] w-[90%] bg-white mx-auto">
      <div className="p-5">
        <h2 className="text-2xl font-light">
          Moving house?{" "}
          <span className="font-bold text-neutral-900">Get help today.</span>
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-2 h-full w-[30%] text-white font-bold bg-sm-red hover:bg-red-400 px-5">
        <Link
          href="https://api.whatsapp.com/send?phone=07737129843"
          target="_blank"
          className="text-lg md:text-xl lg:text-2xl"
        >
          WhatsApp
        </Link>
        <BsWhatsapp className="text-bold text-xl md:text-2xl" />
      </div>
    </section>
  );
}
