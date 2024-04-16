import { useRouter } from "next/navigation";
import { useState, useRef } from "react";
import PaddingContainer from "../PaddingContainer/PaddingContainer";
import Link from "next/link";
import Image from "next/image";
import useOutsideClick from "@/hooks/useClickOutside";

export default function Navbar({}) {
  const router = useRouter();
  const [isClickToggleDropdown, setIsClickToggleDropdown] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const toggleRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setActiveLink(""); // Clear active link when toggling menu
  };

  const handleDropdown = () => {
    setIsClickToggleDropdown(!isClickToggleDropdown);
  };

  const handleLinkClick = (link: string) => {
    setActiveLink(link); // Set active link when a link is clicked
  };

  useOutsideClick(toggleRef, handleDropdown);

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
            <NavItem
              href="/"
              label="General"
              active={activeLink === "/" || true}
              onClick={handleLinkClick}
            />
            <NavItem
              href="/random"
              label="Random"
              active={activeLink === "/random"}
              onClick={handleLinkClick}
            />
            <NavItem
              href="/onepiece"
              label="One Piece"
              active={activeLink === "/onepiece"}
              onClick={handleLinkClick}
            />
            <NavItem
              href="/naruto"
              label="Naruto"
              active={activeLink === "/naruto"}
              onClick={handleLinkClick}
            />
            <NavItem
              href="/animal"
              label="Animal"
              active={activeLink === "/animal"}
              onClick={handleLinkClick}
            />
            <NavItem
              href="/art"
              label="Art"
              active={activeLink === "/art"}
              onClick={handleLinkClick}
            />
          </ul>
          {token ? (
            <>
              <div
                className="flex gap-[10px] cursor-pointer items-center"
                onClick={handleDropdown}
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
              {isClickToggleDropdown && (
                <div
                  className="shadow-inner bg-[#f3f3f3] rounded-lg p-[20px] absolute top-[50px] right-0"
                  ref={toggleRef}
                >
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

interface NavItemProps {
  href: string;
  label: string;
  active: boolean;
  onClick: (href: string) => void;
}

const NavItem: React.FC<NavItemProps> = ({ href, label, active, onClick }) => {
  return (
    <li className={active ? "font-bold" : ""} onClick={() => onClick(href)}>
      <Link href={href}>{label}</Link>
    </li>
  );
};
