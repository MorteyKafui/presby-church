"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { navItems } from "./Navbar";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const MobileNav = () => {
  const pathName = usePathname();

  return (
    <Sheet>
      <SheetTrigger>
        <MenuIcon />
      </SheetTrigger>
      <SheetContent>
        <ul className="flex flex-col items-center justify-between gap-10 mt-10 font-bold uppercase text-blue-800">
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
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
