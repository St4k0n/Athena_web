type Props = {
    basePath: string;
};

export default function TestimonialsSection({ basePath }: Props) {
    return (
        <section
            id="testimonials"
            className="
        relative
        w-full
        min-h-[80vh]
        py-16
        text-white
        scroll-mt-16
      "
            style={{
                backgroundImage: `url("${basePath}/testimonial-bg.jpg")`,
                backgroundAttachment: "fixed",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-60" />

            {/* Main container to center & limit width */}
            <div className="relative max-w-6xl mx-auto px-4 sm:px-8">
                {/* Flex container for 2 testimonials side by side (on md+ screens) */}
                <div className="md:flex md:gap-8">
                    <blockquote className="flex-1 max-w-2xl mx-auto bg-black/40 p-4 rounded-md mb-8 italic text-center">
                        &ldquo;Since 2019, my research in artificial intelligence applied to
                        various fields such as prediction, generation, image processing, and
                        gaming has been a journey rich in learning experiences. Thanks to this
                        background, I decided to develop a dynamic investment solution for the
                        financial markets. This project utilizes advanced technologies and
                        sophisticated algorithms to forecast market trends. The main challenge
                        lies in the high volatility and chaotic behavior of the markets,
                        making predictions extremely complex. To overcome these hurdles, I
                        conducted in-depth research on various types of models, which helped
                        strengthen our approach. Recently, I studied different models during
                        my internship, further reinforcing my belief in the project&rsquo;s
                        feasibility. We opted for a Mamba model as our first prototype,
                        integrating external data as a solid foundation. This approach enables
                        the development of more effective strategies by incorporating multiple
                        agents and leveraging reinforcement techniques, ensuring the
                        model&rsquo;s evolution and adaptability over time.&rdquo;
                        <br />
                        <br />
                        &mdash; Jacques Marques, team member
                    </blockquote>

                    <blockquote className="flex-1 max-w-2xl mx-auto bg-black/40 p-4 rounded-md mb-8 italic text-center">
                        &ldquo;What makes Athena unique compared to other players in the
                        market is its willingness to easily cater to various audiences through
                        different subscription plans. This diversity, combined with increased
                        innovation and a strong desire to employ cutting-edge technologies and
                        strategies like precise news monitoring, makes me see this project as
                        very promising indeed.&rdquo;
                        <br />
                        <br />
                        &mdash; Julien Moreau, Entrepreneur and Angel Investor
                    </blockquote>
                </div>
            </div>
        </section>
    );
}
