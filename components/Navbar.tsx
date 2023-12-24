"use client";

import Image from "next/image";
import Link from "next/link";
import MobileNav from "./MobileNav";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "#about" },
  { label: "Congregations", href: "/congregations" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const pathName = usePathname();

  return (
    <nav className="bg-blue-900 text-white shadow-xl">
      <div className="max-w-5xl mx-auto px-10 py-5 container flex justify-between items-center">
        <Image
          src="/images/pcglogo.png"
          width={200}
          height={200}
          alt="pcg logo"
          className="flex justify-center items-center"
        />
        <ul className="md:flex justify-between items-center gap-5 uppercase font-bold hidden tracking-wide">
          {navItems.map(({ label, href }) => (
            <li key={label}>
              <Link
                className={clsx({
                  "text-red-400 transition-all duration-200 ease-in":
                    pathName === href,
                })}
                href={href}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="block md:hidden">
          <MobileNav />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
