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
            scroll-mt-16"
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
                        &ldquo;Depuis 2019, mes recherches en intelligence artificielle appliqu&eacute;es &agrave;
                        divers domaines comme la pr&eacute;diction, la g&eacute;n&eacute;ration, l&apos;image et les
                        jeux ont &eacute;t&eacute; une aventure riche en apprentissages. Gr&acirc;ce &agrave; cette
                        exp&eacute;rience, j&apos;ai d&eacute;cid&eacute; de d&eacute;velopper une solution d&apos;investissement
                        dynamique pour les march&eacute;s financiers. Ce projet utilise des
                        technologies avanc&eacute;es et des algorithmes sophistiqu&eacute;s pour pr&eacute;dire les
                        tendances du march&eacute;. Le principal d&eacute;fi r&eacute;side dans la grande
                        volatilit&eacute; et les comportements chaotiques des march&eacute;s, ce qui rend
                        les pr&eacute;visions extr&ecirc;mement complexes. Pour surmonter ces d&eacute;fis, j&rsquo;ai
                        men&eacute; des recherches approfondies sur diff&eacute;rents types de mod&egrave;les, ce
                        qui a permis de consolider notre approche. R&eacute;cemment, j&apos;ai &eacute;tudi&eacute;
                        divers mod&egrave;les dans le cadre de mon stage, ce qui a renforc&eacute; ma
                        conviction quant &agrave; la faisabilit&eacute; de ce projet. Nous avons opt&eacute; pour
                        un mod&egrave;le Mamba comme premier prototype, int&eacute;grant des informations
                        externes pour une base solide. Cette approche permet de d&eacute;velopper des
                        strat&eacute;gies plus efficaces gr&acirc;ce &agrave; l&apos;int&eacute;gration d&apos;agents multiples et
                        &agrave; l&apos;application de techniques de renforcement, ce qui assure
                        l&apos;&eacute;volution et l&apos;adaptabilit&eacute; du mod&egrave;le au fil du temps.&rdquo;
                        <br />
                        <br />
                        &mdash; Jacques Marques, membre de l&rsquo;&eacute;quipe
                    </blockquote>

                    <blockquote className="flex-1 max-w-2xl mx-auto bg-black/40 p-4 rounded-md mb-8 italic text-center">
                        &ldquo;Ce qui rend Athena unique par rapport &agrave; d&apos;autres acteurs du march&eacute;,
                        c&apos;est sa volont&eacute; de viser des publics vari&eacute;s facilement gr&acirc;ce &agrave; ces diff&eacute;rents
                        abonnements. Cette diversit&eacute; coupl&eacute;e &agrave; une innovation accrue, et cette volont&eacute;
                        de vouloir utiliser des technologies et des strat&eacute;gies novatrices comme un suivi
                        pr&eacute;cis de l&apos;actualit&eacute;, tout cela fait de ce projet un projet prometteur &agrave; mes yeux.&rdquo;
                        <br />
                        <br />
                        &mdash; Julien Moreau, Entrepreneur et Investisseur Angel
                    </blockquote>
                </div>
            </div>
        </section>
    );
}
