"use client";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FaWhatsapp } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import { Button } from "../ui/button";
import { CiMenuBurger } from "react-icons/ci";
import Link from "next/link";
import { AlignJustify } from "lucide-react";

const headerLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Courses", path: "/courses" },
];

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className="text-[#FF3C3F] cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
        <SheetTitle></SheetTitle>
        <div className="grid py-4 list-none mt-14">
          {headerLinks.map((item) => {
            const isActive =
              (pathname.includes(item?.path) && item?.path?.length > 1) ||
              pathname === item?.path;

            const linkClasses = `-mx-3 text-md font-regular hover:text-[#FF3C3F] px-3 py-4 ${
              isActive ? "text-[#FF3C3F] bg-gray-50 rounded-lg" : ""
            }`;

            return (
              <Link href={item?.path} key={item?.name} className={linkClasses}>
                {" "}
                <SheetClose>{item?.name} </SheetClose>
              </Link>
            );
          })}
        </div>
        
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
