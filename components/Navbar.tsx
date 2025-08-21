"use client"
import Link from "next/link";
import { useState } from "react";

export default  function Navbar(){
    const [isOpen, setIsOpen] = useState(false);
    return(
        <nav className=" w-full flex justify-between  px-4 py-6 items-center ">
            <div className="font-bold text-2xl"> MyWebsit</div>
            <button className="md:hidden text-2xl"  onClick={()=> setIsOpen(!isOpen)}  >   ☰</button>
            <ul className=" hidden  md:flex gap-6">
                <li><Link href="/">Home</Link></li>
                <li><Link href="about">About</Link></li>
                <li><Link href="service">Service</Link></li>
                <li><Link href="contact">Contact</Link></li>
            </ul>
            <button className="cursor-pointer transition hover:bg-gray-800 border rounded px-4 py-2 bg-black text-white ">Login</button>
  {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden">
          <ul className="flex flex-col gap-4 p-6">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li>
              <button className="w-full px-4 py-2 bg-black text-white rounded">
                Login
              </button>
            </li>
          </ul>
        </div>
      )}
        </nav>
    )
}