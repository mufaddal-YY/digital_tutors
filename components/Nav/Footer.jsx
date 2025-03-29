import Image from "next/image";
import Logo from "@/public/logo.png";
import Link from "next/link";
import { MdCall, MdEmail } from "react-icons/md";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <main className="bg-white">
      <section className="container py-6">
        <article className="flex flex-col md:flex-row lg:flex-row justify-between md:items-center lg:items-center">
          <article>
            <Link href="/">
              <Image src={Logo} width={100} height={100} alt="Footer Logo" />
            </Link>
            <div className="py-2">
              <div className="flex flex-row justify-start gap-4">
                <Link
                  target="_blank"
                  href={"https://www.instagram.com/thedigitaltutors"}
                  className="flex items-center">
                  <div className="border-2 rounded-full p-2 hover:border-[#1A0034] hover:text-[#1A0034]">
                    <FaInstagram />
                  </div>
                </Link>
                <Link
                  target="_blank"
                  href={"https://www.facebook.com/thedigitaltutors"}
                  className="flex items-center">
                  <div className="border-2 rounded-full p-2 hover:border-[#1A0034] hover:text-[#1A0034]">
                    <FaFacebookF />
                  </div>
                </Link>

                <Link
                  target="_blank"
                  href={
                    "https://www.youtube.com/channel/UCW9RTIZSrYvzgCAuzcYcAAQ"
                  }
                  className="flex items-center">
                  <div className="border-2 rounded-full p-2 hover:border-[#1A0034] hover:text-[#1A0034]">
                    <FaYoutube />
                  </div>
                </Link>
              </div>
            </div>
          </article>
          <article className="mt-4">
            <Link
              href={`mailto:`}
              className="flex gap-2 text-md font-medium py-2">
              <span className="text-xl text-[#002391]">
                <MdEmail />
              </span>
              connect@digitaltutors.com
            </Link>
          </article>
        </article>
      </section>
    </main>
  );
};

export default Footer;
