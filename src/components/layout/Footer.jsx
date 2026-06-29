import Link from "next/link";
import {
  RiFacebookFill,
  RiInstagramFill,
  RiTwitterXFill,
} from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-[#244D3F] text-base-content rounded p-10">
      <div className="text-center text-white">
        <p className="text-4xl font-bold">KeenKeeper</p>
        <p className="w-[600px]">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
      </div>

      <nav>
        <p className="text-xl font-bold">Social Links</p>

        <div className="grid grid-flow-col gap-4">
          <a className="p-2 rounded-full bg-white cursor-pointer text-[#101727]">
            <RiInstagramFill />
          </a>
          <a className="p-2 rounded-full bg-white cursor-pointer text-[#101727]">
            <RiFacebookFill />
          </a>
          <a className="p-2 rounded-full bg-white cursor-pointer text-[#101727]">
            <RiTwitterXFill />
          </a>
        </div>
      </nav>
      <aside className="flex justify-between gap-80 ">
        <p className="text-left">
          {" "}
          © {new Date().getFullYear()} KeenKeeper. All rights reserved.
        </p>
        <div className="flex justify-end gap-4">
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Use</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </aside>
    </footer>
  );
};

export default Footer;
