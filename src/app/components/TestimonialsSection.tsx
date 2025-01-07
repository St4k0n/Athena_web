// type Props = {
//     basePath: string;
// };
//
// export default function TestimonialsSection() {
//     return (
//         <section
//             id="testimonials"
//             className="
//         relative
//         w-full
//         min-h-[80vh]
//         py-16
//         bg-fixed
//         bg-cover
//         bg-center
//         bg-no-repeat
//         text-white
//         scroll-mt-16
//         mb-8
//       "
//             style={{
//                 backgroundImage: 'url("/testimonial-bg.jpg")',
//             }}
//         >
//             {/* Optional overlay to darken the background */}
//             <div className="absolute inset-0 bg-black bg-opacity-60" />
//
//             {/* Main container to center & limit width */}
//             <div className="relative max-w-4xl mx-auto px-4 sm:px-8">
//                 <h2 className="text-2xl font-semibold mb-4 text-center pt-16">
//                     Testimonials
//                 </h2>
//
//                 <blockquote className="max-w-2xl mx-auto bg-black/40 p-4 rounded-md mb-8 italic text-center">
//                     “Depuis 2019, mes recherches en intelligence artificielle appliquées à
//                     divers domaines comme la prédiction, la génération, l'image et les
//                     jeux ont été une aventure riche en apprentissages. Grâce à cette
//                     expérience, j'ai décidé de développer une solution d'investissement
//                     dynamique pour les marchés financiers. Ce projet utilise des
//                     technologies avancées et des algorithmes sophistiqués pour prédire les
//                     tendances du marché. Le principal défi réside dans la grande
//                     volatilité et les comportements chaotiques des marchés, ce qui rend
//                     les prévisions extrêmement complexes. Pour surmonter ces défis, j’ai
//                     mené des recherches approfondies sur différents types de modèles, ce
//                     qui a permis de consolider notre approche. Récemment, j'ai étudié
//                     divers modèles dans le cadre de mon stage, ce qui a renforcé ma
//                     conviction quant à la faisabilité de ce projet. Nous avons opté pour
//                     un modèle Mamba comme premier prototype, intégrant des informations
//                     externes pour une base solide. Cette approche permet de développer des
//                     stratégies plus efficaces grâce à l'intégration d'agents multiples et
//                     à l'application de techniques de renforcement, ce qui assure
//                     l'évolution et l'adaptabilité du modèle au fil du temps.”
//                     <br />
//                     <br />
//                     — Jacques Marques, membre de l’équipe
//                 </blockquote>
//             </div>
//         </section>
//     );
// }

export default function TestimonialsSection() {
    return (
        <section
            id="testimonials"
            className="
        relative
        w-full
        min-h-[80vh]
        py-16
        bg-fixed
        bg-cover
        bg-center
        bg-no-repeat
        text-white
        scroll-mt-16
        mb-8
      "
            style={{
                backgroundImage: 'url("/testimonial-bg.jpg")',
            }}
        >
            {/* Overlay for darkening the background */}
            <div className="absolute inset-0 bg-black bg-opacity-60" />

            {/* Main container to center & limit width */}
            <div className="relative max-w-6xl mx-auto px-4 sm:px-8">

                {/* Flex container for 2 testimonials side by side (on md+ screens) */}
                <div className="md:flex md:gap-8">
                    <blockquote className="flex-1 max-w-2xl mx-auto bg-black/40 p-4 rounded-md mb-8 italic text-center">
                        “Depuis 2019, mes recherches en intelligence artificielle appliquées à
                        divers domaines comme la prédiction, la génération, l'image et les
                        jeux ont été une aventure riche en apprentissages. Grâce à cette
                        expérience, j'ai décidé de développer une solution d'investissement
                        dynamique pour les marchés financiers. Ce projet utilise des
                        technologies avancées et des algorithmes sophistiqués pour prédire les
                        tendances du marché. Le principal défi réside dans la grande
                        volatilité et les comportements chaotiques des marchés, ce qui rend
                        les prévisions extrêmement complexes. Pour surmonter ces défis, j’ai
                        mené des recherches approfondies sur différents types de modèles, ce
                        qui a permis de consolider notre approche. Récemment, j'ai étudié
                        divers modèles dans le cadre de mon stage, ce qui a renforcé ma
                        conviction quant à la faisabilité de ce projet. Nous avons opté pour
                        un modèle Mamba comme premier prototype, intégrant des informations
                        externes pour une base solide. Cette approche permet de développer des
                        stratégies plus efficaces grâce à l'intégration d'agents multiples et
                        à l'application de techniques de renforcement, ce qui assure
                        l'évolution et l'adaptabilité du modèle au fil du temps.”
                        <br />
                        <br />
                        — Jacques Marques, membre de l’équipe
                    </blockquote>

                    <blockquote className="flex-1 max-w-2xl mx-auto bg-black/40 p-4 rounded-md mb-8 italic text-center">
                        “Ce qui rend Athena unique par rapport à d'autres acteurs du marché,
                        c'est sa volonté de viser des publics variés facilement grâce à ces différents
                        abonnements. Cette diversité couplée à une innovation accrue, et cette volonté
                        de vouloir utiliser des technologies et des stratégies novatrices comme un suivi
                        précis de l'actualité, tout cela fait de ce projet un projet prometteur à mes yeux.”
                        <br />
                        <br />
                        — Julien Moreau, Entrepreneur et Investisseur Angel
                    </blockquote>
                </div>
            </div>
        </section>
    );
}
