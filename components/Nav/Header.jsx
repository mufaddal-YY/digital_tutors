"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import Logo from "@/public/logo.png";
import MobileNav from "./MobileNav";

const headerLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Courses", path: "/course" },
];

const Header = () => {
  const pathname = usePathname();
  return (
    <main className="bg-white fixed shadow-sm w-full top-0 z-[1000]">
      <header className="container">
        <div className="flex flex-row justify-between items-center">
          <div>
            <Link href="/">
              <Image
                className="py-2"
                src={Logo}
                width={100}
                height={100}
                alt="Logo"
              />
            </Link>
          </div>

          <nav className="list-none lg:flex flex-row justify-end items-center hidden">
            {headerLinks.map((item) => {
              const isActive =
                (pathname.includes(item?.path) && item?.path?.length > 1) ||
                pathname === item?.path;

              const linkClasses = `text-md font-regular border border-[#fff] rounded-lg hover:text-[#FF3C3F] mx-4 px-4 py-1 transition-colors duration-600 ease-in-out ${
                isActive ? "text-[#FF3C3F] border !border-[#FF3C3F]" : ""
              }`;

              return (
                <Link
                  href={item?.path}
                  key={item?.name}
                  className={linkClasses}>
                  {item?.name}
                </Link>
              );
            })}
          </nav>
          <div className="justify-end flex lg:hidden ">
            <MobileNav />
          </div>
          <div className="hidden lg:flex">
            <Link href="#cta">
              <Button className="btn-primary">
                Enquire Now
              </Button>
            </Link>
          </div>
        </div>
      </header>
    </main>
  );
};

export default Header;
