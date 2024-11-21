import Image from "next/image";
import Logo from "@/public/logo.png";
import Link from "next/link";
import { MdCall, MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <main className="bg-white">
      <section className="container py-6">
        <article className="flex flex-col md:flex-row lg:flex-row justify-between md:items-center lg:items-center">
          <article>
            <Link href="/">
              <Image src={Logo} width={100} height={100} alt="Footer Logo" />
            </Link>
            <h4 className="text-lg font-semibold py-2">
              The Digital Tutors
            </h4>
            
          </article>
          <article className="mt-4">
            <Link
              href={`tel:`}
              className="flex gap-2 text-md font-medium py-2">
              <span className="text-xl text-[#002391]">
                <MdCall />
              </span>
              +91 1234567890
            </Link>

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
