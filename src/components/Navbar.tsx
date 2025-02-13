"use client"
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/ticz.png"
import { Icon } from "@iconify/react";

const Navbar = () => {
  return (
    <header className="max-w-1200 mx-auto p-3">
        <nav className="flex justify-between p-2 border border-[#197686] rounded-lg ">
            <div className="flex items-center gap-1">
                {/* icon */}
                <div className="border border-opacity-25 bg-[#052F35] border-[#197686] rounded-lg p-1">
                    <Icon icon="hugeicons:ticket-01" color="white" width="24" height="24" />
                </div>
                <Image src={Logo} width={40} height={40} alt="Logo"/>
            </div>

            <div className="hidden sm:flex">
                <ul className="flex justify-center text-[#B3B3B3] items-center gap-3 active:text-white hover:cursor-pointer">
                    <li>Events</li>
                    <li>My Tickets</li>
                    <li>About Project</li>
                </ul>
            </div>

            <div>
                <button title="my tickets" className="bg-white p-2 text-center rounded-lg w-32">
                    <Link href="./" className="flex items-center justify-center text-sm uppercase text-black">
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