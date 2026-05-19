import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import slides from "../data/carouselData.json";

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const total = slides.length;

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + total) % total);
  }, [total]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="relative w-full min-h-[100vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.src}
            alt={slide.alt}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-black/50" />

      <div className="absolute inset-0 flex flex-col justify-center items-center px-4 text-center">
        <h1 className="drop-shadow-2xl font-extrabold text-white text-5xl md:text-7xl tracking-tight">
          JUVENTUD GUERRERA
        </h1>
        <p className="drop-shadow-lg mt-4 font-bold text-amber-400 text-2xl md:text-3xl">
          GENERACIÓN DE FUEGO!
        </p>
        <button className="inline-block bg-amber-500 hover:bg-amber-400 shadow-lg mt-10 px-8 py-3 rounded-full font-bold text-gray-900 text-lg hover:scale-105 active:scale-95 transition-all cursor-pointer">
          Únete a nosotros
        </button>
      </div>

      <button
        onClick={prev}
        className="top-1/2 left-4 absolute bg-white/20 hover:bg-white/40 backdrop-blur-sm p-3 rounded-full text-white transition-colors -translate-y-1/2"
        aria-label="Anterior"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={next}
        className="top-1/2 right-4 absolute bg-white/20 hover:bg-white/40 backdrop-blur-sm p-3 rounded-full text-white transition-colors -translate-y-1/2"
        aria-label="Siguiente"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="bottom-6 left-1/2 absolute flex gap-2 -translate-x-1/2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === current ? "w-8 bg-amber-400" : "w-2 bg-white/60"
            }`}
            aria-label={`Ir a slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
