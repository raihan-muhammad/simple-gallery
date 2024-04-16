"use client";
import { useRouter } from "next/navigation";
import PaddingContainer from "../PaddingContainer/PaddingContainer";
import Link from "next/link";
import Image from "next/image";
import { useRef, useState } from "react";
import useOutsideClick from "@/hooks/useClickOutside";

export default function Navbar({}) {
  const router = useRouter();
  const [isClickToggle, setIsClickToggle] = useState(false);
  const toggleRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setIsClickToggle(!isClickToggle);
  };
  useOutsideClick(toggleRef, handleToggle);

  let token: any;
  let user: any;
  if (typeof window !== "undefined") user = localStorage.getItem("user");
  if (typeof window !== "undefined") token = localStorage.getItem("token");

  const userJSON = user ? JSON.parse(user) : null;

  const signOut = () => {
    localStorage.clear();
    router.push("/login");
  };

  return (
    <nav className="py-[18px] sticky top-0 z-50 bg-white">
      <PaddingContainer>
        <div className="flex items-center justify-between h-auto w-full relative">
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
            <>
              <div
                className="flex gap-[10px] cursor-pointer"
                onClick={handleToggle}
                ref={toggleRef}
              >
                <Image
                  src={userJSON?.photoURL}
                  alt={userJSON?.displayName}
                  width={30}
                  height={30}
                  className="rounded-[50%]"
                />
                <p>{userJSON?.displayName}</p>
              </div>
              {isClickToggle && (
                <div className="shadow-inner bg-[#f3f3f3] rounded-lg p-[20px] absolute top-[50px] right-0">
                  <button
                    onClick={signOut}
                    className="md:block rounded-[106px] bg-[#c5365c] font-[600] text-[#fff] text-[12px] py-[13px] px-[30px]"
                  >
                    Logout
                  </button>
                </div>
              )}
            </>
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
