"use client"
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/ticz.png"
import { Icon } from "@iconify/react";

const Navbar = () => {
  return (
    <header className="max-w-1200 mx-auto p-3">
        <nav className="flex justify-between p-2 border ">
            <div className="flex items-center">
                {/* icon */}
                <div className="border rounded-lg p-1">
                    <Icon icon="hugeicons:ticket-01" color="white" width="24" height="24" />
                </div>
                <Image src={Logo} width={30} height={30} alt="Logo"/>
            </div>

            <div className="hidden sm:flex">
                <ul className="flex justify-center text-[#B3B3B3] items-center gap-3 active:text-white">
                    <li>Events</li>
                    <li>My Tickets</li>
                    <li>About Project</li>
                </ul>
            </div>

            <div>
                <button title="my tickets" className="bg-white p-2 rounded-lg w-32">
                    <Link href="./" className="flex items-center uppercase text-black">
                        My Tickets
                        <Icon icon="solar:arrow-right-linear" width="24" height="24" />
                    </Link>
                </button>
            </div>
        </nav>
    </header>
  )
}

export default Navbar