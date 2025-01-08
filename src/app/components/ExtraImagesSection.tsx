"use client";

import { useState } from "react";
import Image from "next/image";

// Type for an image object
type ImageData = {
    src: string;
    alt: string;
    description: string;
};

// Define images array within the same file
const images: ImageData[] = [
    { src: "Screenshot1.png", alt: "Image 1", description: "Cluster Manager" },
    { src: "Screenshot2.png", alt: "Image 2", description: "Agent Benchmark" },
    { src: "Screenshot3.png", alt: "Image 3", description: "Agent Manager" },
    { src: "Screenshot4.png", alt: "Image 4", description: "Dataset Analysis" },
    { src: "Screenshot5.png", alt: "Image 5", description: "Dataset Analysis" },
];

// Component Props type
type Props = {
    basePath: string;
};

export default function ExtraImagesSection({ basePath }: Props) {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <section id="photos" className="max-w-full mx-auto p-6 sm:p-8 m-8 mb-8 bg-black/40 rounded-md pt-16 scroll-mt-16 min-h-[100vh]">
            <h2 className="text-2xl font-semibold mb-4 text-center">Photos of the project</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="relative group overflow-hidden rounded-md border-4 border-[#cfa165]"
                        onClick={() => setSelectedImage(`${basePath}/${image.src}`)} // Open modal with the clicked image
                    >
                        <Image
                            src={`${basePath}/${image.src}`}
                            alt={image.alt}
                            layout="responsive"
                            width={16}
                            height={9}
                            className="transition-transform duration-700 group-hover:scale-105 object-cover cursor-pointer"
                        />
                        {/* Top Overlay */}
                        <div
                            className="absolute top-0 left-0 w-full h-1/2 bg-black transform translate-x-full group-hover:translate-x-0 transition-transform duration-700 z-10"
                        />
                        {/* Bottom Overlay */}
                        <div
                            className="absolute bottom-0 left-0 w-full h-1/2 bg-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 z-10"
                        />
                        {/* Text Overlay */}
                        <div
                            className="absolute inset-0 flex items-center justify-center"
                        >
                            <p className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-20">
                                {image.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal for showing the full image */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
                    onClick={() => setSelectedImage(null)} // Close modal on click
                >
                    <div className="relative max-w-6xl w-full p-4">
                        <button
                            className="absolute top-4 right-4 text-white text-2xl font-bold"
                            onClick={() => setSelectedImage(null)}
                        >
                            ✕
                        </button>
                        <Image
                            src={selectedImage}
                            alt="Selected Image" layout="responsive" width={16} height={9} className="object-contain"
                        />
                    </div>
                </div>
            )}
        </section> );
}
