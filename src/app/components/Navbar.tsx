"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
    const [visible, setVisible] = useState(true);
    const [bgColor, setBgColor] = useState("bg-black");
    const [lastScrollY, setLastScrollY] = useState(0);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY) {
            setVisible(false);
        } else {
            setVisible(true);
        }
        setLastScrollY(currentScrollY);

        if (currentScrollY > 50) {
            setBgColor("bg-neutral-900");
        } else {
            setBgColor("bg-black");
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [handleScroll, lastScrollY]);

    return (
        <nav
            className={`
        fixed top-0 left-0 w-full z-50 text-white px-8 py-4
        flex justify-between items-center
        transition-all duration-300 transform
        ${visible ? "translate-y-0" : "-translate-y-full"} 
        ${bgColor}
      `}
        >
            <div className="font-bold text-xl">Athena</div>
            <ul className="flex space-x-6">
                <li>
                    <a href="#overview" className="hover:text-gray-300">
                        Overview
                    </a>
                </li>
                <li>
                    <a href="#team" className="hover:text-gray-300">
                        About
                    </a>
                </li>
                <li>
                    <a href="#timeline" className="hover:text-gray-300">
                        Timeline
                    </a>
                </li>
                <li>
                    <a href="#testimonials" className="hover:text-gray-300">
                        Testimonials
                    </a>
                </li>
                <li>
                    <a href="#jsp" className="hover:text-gray-300">
                        jsp
                    </a>
                </li>
                <li>
                    <a href="#contact" className="hover:text-gray-300">
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    );
}
