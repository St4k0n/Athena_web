type Props = {
    basePath: string;
};

export default function ContactSection({ basePath }: Props) {
    return (
        <section
            id="contact"
            className="
              relative
              w-full
              py-16
              text-white
              min-h-[80vh]
              scroll-mt-16"
            style={{
                backgroundImage: `url("${basePath}/contact-bg.jpg")`,
                backgroundAttachment: "fixed",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>

            <div className="relative max-w-6xl mx-auto px-4 sm:px-8">
                {/* Title */}
                <h2 className="text-center text-3xl sm:text-4xl font-bold mb-8">
                    Get In Touch
                </h2>

                {/* Grid: left = form, right = contact details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Contact Form */}
                    <form className="bg-black/40 rounded-md p-6 sm:p-10">
                        {/* Name + Email (two columns on larger screens) */}
                        <div
                            className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-200"
                                >
                                    Name *
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    className="mt-1 block w-full bg-transparent border-b border-gray-500
                             focus:border-[#cfa165] focus:outline-none transition-colors"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-200"
                                >
                                    Email *
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    className="mt-1 block w-full bg-transparent border-b border-gray-500
                             focus:border-[#cfa165] focus:outline-none transition-colors"
                                    placeholder="Your Email"
                                />
                            </div>
                        </div>

                        {/* Subject */}
                        <div className="mb-6">
                            <label
                                htmlFor="subject"
                                className="block text-sm font-medium text-gray-200"
                            >
                                Subject
                            </label>
                            <input
                                id="subject"
                                type="text"
                                className="mt-1 block w-full bg-transparent border-b border-gray-500
                           focus:border-[#cfa165] focus:outline-none transition-colors"
                                placeholder="Your Subject"
                            />
                        </div>

                        {/* Message */}
                        <div className="mb-6">
                            <label
                                htmlFor="message"
                                className="block text-sm font-medium text-gray-200"
                            >
                                Your Message *
                            </label>
                            <textarea
                                id="message"
                                rows={4}
                                className="mt-1 block w-full bg-transparent border-b border-gray-500
                           focus:border-[#cfa165] focus:outline-none transition-colors"
                                placeholder="Your Message"
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="bg-[#cfa165] hover:bg-[#b88b57] text-white font-semibold px-6 py-3
                         rounded-md transition-colors"
                        >
                            Send Message
                        </button>
                    </form>

                    {/* Contact Info */}
                    <div
                        className="bg-black/40 rounded-md p-6 sm:p-10 flex flex-col justify-center space-y-6">
                        <div>
                            <h3 className="text-xl font-semibold text-[#cfa165] mb-2">Phone</h3>
                            <p className="text-sm text-gray-200">+20 010 2517
                                8918</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-[#cfa165] mb-2">Email</h3>
                            <a className="text-sm text-gray-200"
                               href="mailto:contact@projectname.com"
                               target="_blank"
                            >
                                contact@projectname.com</a>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-[#cfa165] mb-2">Address</h3>
                            <p className="text-sm text-gray-200">3481 Melrose
                                Place, Los Angeles</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
