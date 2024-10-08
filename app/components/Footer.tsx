import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row gap-10 justify-center md:justify-between items-start h-[500px] md:h-[200px] w-full bg-sm-blue text-white p-5 mt-10 mx-auto">
      <div className="w-full md:w-1/2 flex flex-col justify-start items-center">
        <h4 className="font-semibold text-2xl">Contact</h4>
        <p className="mt-2">info@shiftmate.co.uk</p>
        <p>Contact number</p>
      </div>
      <div className="w-full md:w-1/2 flex flex-col justify-start items-center">
        <Link href="#" className="mt-2 underline">
          WhatsApp
        </Link>
        <Link href="#" className="underline">
          Facebook
        </Link>
        <Link href="#" className="underline">
          Instagram
        </Link>
        <Link href="#" className="underline">
          Instagram
        </Link>
        <Link href="#" className="underline">
          Xiaohongshu
        </Link>
      </div>
    </footer>
  );
}
