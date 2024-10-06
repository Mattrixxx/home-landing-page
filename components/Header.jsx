'use client'

import { RiMenu4Line } from "@remixicon/react"
import Image from "next/image"
import { useState } from "react"

const Header = () => {
    const [toggle, setToggle] = useState(false)
  return (
    <header className="sticky top-0 h-[90px] shadow-xl z-30 bg-white">
        <div className="container mx-auto flex justify-between items-center h-full">

            {/* Logo */}
            <a href="#">
                <Image src={`assets/images/logo.svg`} width={200} height={60} alt="logo" />
            </a>
            {/* Nav */}
            <nav>
                {/* Mobile Toggle */}
                <div className="cursor-pointer lg:hidden" onClick={() => setToggle(!toggle)}>
                    <RiMenu4Line className="text-4xl text-primary" /> 
                </div>
                <ul className={`fixed w-full h-0 p-0 bg-white overflow-hidden border-t top-[90px] left-0 right-0 flex flex-col gap-4 lg:relative lg:flex-row lg:p-0 lg:top-0 lg:border-none lg:h-full transition-all duration-300 ${toggle ? 'nav-is-open' : ''}`}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Testimoials</a></li>
                    <li><a href="#">Our Work</a></li>
                    <li><a href="#">News</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Header