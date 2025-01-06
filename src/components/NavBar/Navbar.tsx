
import Image from "next/image";
import { navConfig, NavItem } from "@/config/navConfig";
import Link from "next/link";

import UserAvatar from "../userAvatar/UserAvatar";
import NavbarClient from "../DropDownNav/DropDownNav";
import Private from "../Private/Private";
import CartStatus from "../CartStatus/CartStatus";







export default function Navbar() {
  


 
    return (
     
      <nav className="bg-white shadow-md fixed top-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center text-black text-2xl font-semibold">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                alt="Apple Logo"
                width={32}
                height={32}
                priority
              />
            </Link>
          </div>

         
          <div className="hidden md:flex space-x-8">
            {navConfig.map((el: NavItem) => {
              return !el.isPrivate?(
             <div key={`/${el.path}`}>
                <Link href={el.path}>
                  <span>{el.text}</span>
                </Link>
              </div>
             ) : (
              <div key={`/${el.path}`}>
              <Private>
                <div>
                <Link href={el.path}>
                  <span>{el.text}</span>
                </Link>
                </div>
              
              </Private>
              </div>
              );
              
               })}
            <div>
                <CartStatus/>
              </div>
          <div>
              <UserAvatar />
              </div>
              
            </div>
            <NavbarClient />
            </div>
          
      </nav>
    );
}
