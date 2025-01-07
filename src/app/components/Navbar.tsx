export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-black text-white px-8 py-4 flex justify-between items-center">
            <div className="font-bold text-xl">
                Personala
            </div>
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
                    <a href="#services" className="hover:text-gray-300">
                        Services
                    </a>
                </li>
                <li>
                    <a href="#portfolio" className="hover:text-gray-300">
                        Portfolio
                    </a>
                </li>
                <li>
                    <a href="#testimonials" className="hover:text-gray-300">
                        Testimonials
                    </a>
                </li>
                <li>
                    <a href="#blog" className="hover:text-gray-300">
                        Blog
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
