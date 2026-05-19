import HeroCarousel from "../components/HeroCarousel";
import GaleriaCarousel from "../components/GaleriaCarousel";
import CronogramaSection from "../components/CronogramaSection";
import EventosSection from "../components/EventosSection";

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <GaleriaCarousel />
      <CronogramaSection />
      <EventosSection />
    </>
  );
}
