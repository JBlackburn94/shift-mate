import Link from "next/link";
import { BsWhatsapp } from "react-icons/bs";

export default function ContactBanner() {
  return (
    <section className="flex justify-between items-center m-10 p-5 h-[100px] w-[90%] bg-white mx-auto">
      <h2 className="text-2xl font-light">
        Moving house?{" "}
        <span className="font-bold text-neutral-900">Get help today.</span>
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-2 text-white font-bold bg-sm-red p-5">
        <Link
          href="https://api.whatsapp.com/send?phone=07737129843"
          target="_blank"
        >
          WhatsApp
        </Link>
        <BsWhatsapp className="text-bold text-xl" />
      </div>
    </section>
  );
}
