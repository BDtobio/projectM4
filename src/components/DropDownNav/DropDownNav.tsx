"use client";

import { useState } from "react";
import { navConfig, NavItem } from "@/config/navConfig";
import Link from "next/link";
import UserAvatar from "../userAvatar/UserAvatar";

export default function NavbarClient() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
     
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-black focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md z-40">
          <div className="flex flex-col items-center space-y-4 py-4">
            {navConfig.map((el: NavItem) => (
              <Link
                key={`/${el.path}`}
                href={el.path}
                onClick={() => setIsMenuOpen(false)}
                className="text-lg text-black hover:text-gray-600"
              >
                {el.text}
              </Link>
            ))}
            <UserAvatar />
          </div>
        </div>
      )}
    </>
  );
}
