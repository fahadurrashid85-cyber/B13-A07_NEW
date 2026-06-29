"use client";
import Link from "next/link";
import { ChartNoAxesCombined, Clock4, House } from "lucide-react";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const pathname = usePathname();
  return (
    <div>
      <div className="navbar bg-white shadow-sm">
        <div className="flex-1">
          <a className="btn btn-ghost text-2xl text-black">
            Keen<span className="text-[#37A69B]">Keeper</span>
          </a>
        </div>

        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 gap-2">
            {/* Home */}
            <li className="text-sm">
              <Link
                href="/"
                className={`group relative flex items-center gap-1 no-underline px-2 py-1 
                      transition-colors duration-200 
                      ${pathname === "/" ? "bg-[#244D3F] text-[#f2f2f2]" : "text-[#111111]"}`}
              >
                <House
                  size={16}
                  className="relative z-10 group-hover:text-black"
                />
                <span className="relative z-10 group-hover:text-black">
                  Home
                </span>
                <span
                  className={`absolute inset-0 bg-[#9bf6ff] transform scale-x-0 origin-left 
                           transition-transform duration-200 ease-out group-hover:scale-x-100`}
                ></span>
              </Link>
            </li>

            {/* Timeline */}
            <li className="text-sm">
              <Link
                href="/timeline"
                className={`group relative flex items-center gap-1 no-underline px-2 py-1 
                      transition-colors duration-200 
                      ${pathname === "/timeline" ? "bg-[#244D3F] text-[#f2f2f2]" : "text-[#111111]"}`}
              >
                <Clock4
                  size={16}
                  className="relative z-10 group-hover:text-black"
                />
                <span className="relative z-10 group-hover:text-black">
                  Timeline
                </span>
                <span
                  className={`absolute inset-0 bg-[#9bf6ff] transform scale-x-0 origin-left 
                           transition-transform duration-200 ease-out group-hover:scale-x-100`}
                ></span>
              </Link>
            </li>

            {/* Stats */}
            <li className="text-sm">
              <Link
                href="/stats"
                className={`group relative flex items-center gap-1 no-underline px-2 py-1 
                      transition-colors duration-200 
                      ${pathname === "/stats" ? "bg-[#244D3F] text-[#f2f2f2]" : "text-[#111111]"}`}
              >
                <ChartNoAxesCombined
                  size={16}
                  className="relative z-10 group-hover:text-black"
                />
                <span className="relative z-10 group-hover:text-black">
                  Stats
                </span>
                <span
                  className={`absolute inset-0 bg-[#9bf6ff] transform scale-x-0 origin-left 
                           transition-transform duration-200 ease-out group-hover:scale-x-100`}
                ></span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
