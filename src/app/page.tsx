import Herosection from "@/components/Herosection";
import Image from "next/image";
import { Spotlight } from "../components/ui/Spotlight";
import Cards from "@/components/Cards";
import { StickyScrollRevealDemo } from "@/components/InfomationFrame";
import { InfiniteMovingCardsDemo } from "@/components/MarqueeReviews";
import { AnimatedTooltipPreview } from "@/components/tools";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main className=" min-h-screen bg-black/[.96] antialiased bg-grid-white/[0.02]">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="purple"
      />
      <Herosection />
      <Cards />
      <StickyScrollRevealDemo />
      <InfiniteMovingCardsDemo />
      <AnimatedTooltipPreview />
      <Footer />
    </main>
  );
}
