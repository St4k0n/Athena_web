import Image from "next/image";

type Props = {
    basePath: string;
};

export default function MyFooter({ basePath }: Props) {
    return (
        <footer className="bg-black text-white text-sm py-4 flex gap-6 flex-wrap items-center justify-center pt-16 scroll-mt-16">
        <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    href="https://nextjs.org/learn"
    target="_blank"
    rel="noopener noreferrer"
        >
        <Image
            aria-hidden
    src={`${basePath}/file.svg`}
    alt="File icon"
    width={16}
    height={16}
    />
    Learn
    </a>
    <a
    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    href="https://vercel.com/templates?framework=next.js"
    target="_blank"
    rel="noopener noreferrer"
        >
        <Image
            aria-hidden
    src={`${basePath}/window.svg`}
    alt="Window icon"
    width={16}
    height={16}
    />
    Examples
    </a>
    <a
    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    href="https://nextjs.org"
    target="_blank"
    rel="noopener noreferrer"
        >
        <Image
            aria-hidden
    src={`${basePath}/globe.svg`}
    alt="Globe icon"
    width={16}
    height={16}
    />
    Go to nextjs.org →
      </a>
      <span>|</span>
      <span>© {new Date().getFullYear()} ATHENA. All rights reserved.</span>
    </footer>
);
}
