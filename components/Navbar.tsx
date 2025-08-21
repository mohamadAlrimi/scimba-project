"use client"
import Link from "next/link";
import { useState } from "react";
export default function Navbar(){
    const[open, setOpen ] = useState(false);
 
    return (
    <nav className="w-full flex justify-between items-center py-4 px-8 ">
   <div className="font-bold  text-2xl">MyWebsite</div>
   <button className="font-bold text-2xl md:hidden"  onClick={()=> setOpen(!open)}>  ☰</button>
    
   <ul className="hidden  md:flex gap-8">
    <li><Link href="/">Home</Link></li>
    <li><Link href="/about">About</Link></li>
    <li><Link href="/">Servcies</Link></li>
    <li><Link href="/">Contact</Link></li>
    </ul>
    {open && (<div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden">
        <ul className=" flex flex-col gap-4 p-6">
    <li><Link href="/">Home</Link></li>
    <li><Link href="/">About</Link></li>
    <li><Link href="/">Servcies</Link></li>
    <li><Link href="/">Contact</Link></li>
    </ul>
    </div>)}
    <button className="border px-4 py-2 cursor-pointer bg-black text-white rounded hover:bg-gray-800 transition">Login</button>
        </nav>
    )
}