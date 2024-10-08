import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row justify-center md:justify-between items-start h-[500px] md:h-[200px] w-full bg-sm-blue text-white p-5 mt-10 mx-auto">
      <div className="w-full md:w-1/2 flex flex-col justify-start items-center">
        <h4 className="font-semibold text-3xl">Contact</h4>
        <p className="mt-2 text-xl">info@shiftmate.co.uk</p>
        <p className=" text-xl">Contact number</p>
      </div>
      <div className="w-full md:w-1/2 flex flex-col justify-start items-center mt-2 md:mt-0">
        <Link href="#" className="text-xl underline">
          WhatsApp
        </Link>
        <Link href="#" className="text-xl underline">
          Facebook
        </Link>
        <Link href="#" className="text-xl underline">
          Instagram
        </Link>
        <Link href="#" className="text-xl underline">
          Instagram
        </Link>
        <Link href="#" className="text-xl underline">
          Xiaohongshu
        </Link>
      </div>
    </footer>
  );
}
