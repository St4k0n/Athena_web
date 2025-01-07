"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";
import Image from "next/image";

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
            className="relative w-full h-screen flex items-center justify-center text-center text-white">
            <div className="absolute inset-0">
                <Image
                    src={`${basePath}/bg1.jpg`}
                    alt="Hero background"
                    fill
                    style={{objectFit: "cover"}}
                    priority
                />
            </div>

            <div className="absolute inset-0 bg-black bg-opacity-50 z-0"/>

            <div className="relative z-10 max-w-2xl px-4">
                <h2 className="text-xl font-light mb-4">Athena project</h2>
                <h1 className="text-5xl whitespace-nowrap">
                    <span className="font-normal">Development of</span>
                    <span ref={typedRef} className="ml-2 font-bold"/>
                </h1>
            </div>
        </header>
    );
}
