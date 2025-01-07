import HeroHeader from "./components/HeroHeader";
import OverviewSection from "./components/OverviewSection";
import TeamSection from "./components/TeamSection";
import TimelineSection from "./components/TimelineSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ExtraImagesSection from "./components/ExtraImagesSection";
import ContactSection from "./components/ContactSection";
import NextStepsSection from "./components/NextStepsSection";
import MyFooter from "./components/MyFooter";
import Navbar from "./components/Navbar";

export default function Home() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
      <>
          <Navbar />
          <HeroHeader basePath={basePath} />

        <main className="bg-neutral-900 text-white pt-[80px]">
          <OverviewSection />
          <TeamSection basePath={basePath} />
          <TimelineSection />
          <TestimonialsSection basePath={basePath} />
          <ExtraImagesSection basePath={basePath} />
          <ContactSection basePath={basePath} />
          <NextStepsSection />
        </main>

        <MyFooter basePath={basePath} />
      </>
  );
}

