import Image from "next/image";
import PaddingContainer from "../PaddingContainer/PaddingContainer";
import Link from "next/link";

export default function Navbar({}) {
  return (
    <nav className="py-[18px] sticky top-0 z-50 bg-white">
      <PaddingContainer>
        <div className="flex items-center justify-between h-auto w-full">
          <Link href="/" className="text-[#1679AB] text-[16px] font-bold">
            Giska Cantik
          </Link>
          <ul className="md:flex gap-[40px] hidden items-center rounded-[96px] text-[14px] px-[24px] py-[13px]">
            <li className="hover:text-[#074173]">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-[#074173]">
              <Link href="/">Services</Link>
            </li>
            <li className="hover:text-[#074173]">
              <Link href="/">Why Us</Link>
            </li>
            <li className="hover:text-[#074173]">
              <Link href="/">Our Process</Link>
            </li>
            <li className="hover:text-[#074173]">
              <Link href="/">Our Work</Link>
            </li>
            <li className="hover:text-[#074173]">
              <Link href="/">FAQs</Link>
            </li>
          </ul>
          <button className="hidden md:block rounded-[106px] bg-[#074173] text-[#fff] text-[12px] py-[13px] px-[30px]">
            Login
          </button>
        </div>
      </PaddingContainer>
    </nav>
  );
}
