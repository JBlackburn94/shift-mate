import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row justify-center md:justify-between items-start h-[500px] md:h-[200px] w-full bg-sm-blue text-white p-5 mt-10 mx-auto">
      <div className="w-full md:w-1/2 flex flex-col justify-start items-center">
        <h4 className="font-semibold text-3xl">Contact</h4>
        <p className="mt-2 text-xl">info@shiftmate.co.uk</p>
      </div>
      <div className="w-full md:w-1/2 flex flex-col justify-start items-center mt-2 md:mt-0">
        <Link
          href="https://api.whatsapp.com/send?phone=07737129843"
          target="_blank"
          className="text-xl underline"
        >
          WhatsApp
        </Link>
        <Link
          href="https://www.facebook.com/profile.php?id=61565297475622&rdid=SDTjxWWafnUdjeqf&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FPai7heExECxXbbxS%2F"
          target="_blank"
          className="text-xl underline"
        >
          Facebook
        </Link>
        <Link
          href="https://www.linkedin.com/in/bigbearbuysltd/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          className="text-xl underline"
        >
          LinkedIn
        </Link>
        <Link
          href="https://www.instagram.com/Shiftmateservices"
          target="_blank"
          className="text-xl underline"
        >
          Instagram
        </Link>
        <Link
          href="https://www.xiaohongshu.com/user/profile/66e19600000000001d033ddd?xhsshare=CopyLink&appuid=66e19600000000001d033ddd&apptime=1728078568"
          target="_blank"
          className="text-xl underline"
        >
          Xiaohongshu
        </Link>
      </div>
    </footer>
  );
}
