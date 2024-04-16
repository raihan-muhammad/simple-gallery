"use client";
import { useRouter } from "next/navigation";
import PaddingContainer from "../PaddingContainer/PaddingContainer";
import Link from "next/link";

export default function Navbar({}) {
  const router = useRouter();
  let token: any;
  if (typeof window !== "undefined") token = localStorage.getItem("user");

  const signOut = () => {
    localStorage.clear();
    router.push("/login");
  };

  return (
    <nav className="py-[18px] sticky top-0 z-50 bg-white">
      <PaddingContainer>
        <div className="flex items-center justify-between h-auto w-full">
          <Link href="/" className="text-[#1679AB] text-[16px] font-bold">
            Giska Cantik
          </Link>
          <ul className="md:flex gap-[40px] hidden items-center rounded-[96px] text-[14px] px-[24px] py-[13px]">
            <li className="hover:text-[#074173]">
              <Link href="/">General</Link>
            </li>
            <li className="hover:text-[#074173]">
              <Link href="/">Random</Link>
            </li>
            <li className="hover:text-[#074173]">
              <Link href="/">One Piece</Link>
            </li>
            <li className="hover:text-[#074173]">
              <Link href="/">Naruto</Link>
            </li>
            <li className="hover:text-[#074173]">
              <Link href="/">Animal</Link>
            </li>
            <li className="hover:text-[#074173]">
              <Link href="/">Art</Link>
            </li>
          </ul>
          {token ? (
            <button
              onClick={signOut}
              className="md:block rounded-[106px] bg-[#c5365c] font-[600] text-[#fff] text-[12px] py-[13px] px-[30px]"
            >
              Logout
            </button>
          ) : (
            <Link href="/login">
              <button className="md:block rounded-[106px] bg-[#3c8c20] font-[600] text-[#fff] text-[12px] py-[13px] px-[30px]">
                Login
              </button>
            </Link>
          )}
        </div>
      </PaddingContainer>
    </nav>
  );
}
