import Image from "next/image";

type Props = {
    basePath: string;
};

export default function ExtraImagesSection({ basePath }: Props) {
    return (
        <section id="jsp" className="max-w-4xl mx-auto p-6 sm:p-8 mb-8 bg-black/40 rounded-md pt-16 scroll-mt-16 min-h-[100vh]">
        <h2 className="text-2xl font-semibold mb-4">Style with Image</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="rounded-md overflow-hidden">
            <Image
            src={`${basePath}/window.svg`}
        alt="Crypto Image 1"
        width={600}
        height={400}
        className="w-full h-auto"
        />
        <p className="text-sm mt-2 text-center">Image Description</p>
        </div>
        <div className="rounded-md overflow-hidden">
        <Image
            src={`${basePath}/logo2.png`}
        alt="Crypto Image 2"
        width={600}
        height={400}
        className="w-full h-auto"
        />
        <p className="text-sm mt-2 text-center">Image Description</p>
        </div>
        </div>
        </section>
    );
}
