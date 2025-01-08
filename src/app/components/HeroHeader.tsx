"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";

type Props = {
    basePath: string;
};

export default function HeroHeader({ basePath }: Props) {
    const typedRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        if (typedRef.current) {
            const typed = new Typed(typedRef.current, {
                strings: ["multiple models", "a framework", "our life"],
                typeSpeed: 60,
                backSpeed: 40,
                loop: true,
            });
            return () => typed.destroy();
        }
    }, []);

    return (
        <header
            className="relative w-full h-screen flex items-center justify-center text-center text-white"
            style={{
                backgroundImage: `url("${basePath}/bg1.jpg")`,
                backgroundAttachment: "fixed",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />

            {/* Content */}
            <div className="relative z-10 px-4 content-cente">
                <h2 className="text-5xl font-light mb-4">Athena project</h2>
                <h1 className="text-7xl whitespace-nowrap r">
                    <span className="font-normal">Development of</span>
                    <span ref={typedRef} className="ml-2 font-bold" />
                </h1>
            </div>
        </header>
    );
}
