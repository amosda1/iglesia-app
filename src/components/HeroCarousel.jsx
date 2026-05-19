import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Flame } from "lucide-react";
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

  const cascade = [
    { index: current,               z: "z-30", scale: "scale-100",   pos: "top-[5%] left-1/2 -translate-x-1/2",         rot: "rotate-0",   opacity: "opacity-100", delay: "0s"    },
    { index: (current + 1) % total,  z: "z-20", scale: "scale-75",   pos: "top-[55%] left-[66%] -translate-x-1/2",       rot: "rotate-6",   opacity: "opacity-90",  delay: "1.5s"  },
    { index: (current + 2) % total,  z: "z-10", scale: "scale-[0.55]", pos: "top-[55%] left-[34%] -translate-x-1/2",      rot: "-rotate-6",  opacity: "opacity-80",  delay: "3s"    },
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-noche">

      {/* ========== BACKGROUND CAROUSEL (desktop + mobile) ========== */}
      <div className="absolute inset-0 z-0">
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
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        {/* Gradient overlay: dark on left (text), revealing on right (cards) */}
        <div className="absolute inset-0 hidden lg:block bg-gradient-to-r from-noche/85 via-noche/55 to-noche/25" />

        {/* Mobile overlay: uniform dark */}
        <div className="absolute inset-0 lg:hidden bg-noche/70 backdrop-blur-[2px]" />
      </div>

      {/* ========== LEFT: TEXT ========== */}
      <div className="relative z-40 w-full lg:w-[52%] px-6 lg:px-16 py-16 lg:py-0 text-white">
        <div className="max-w-xl mx-auto lg:mx-0">
          <blockquote className="border-l-4 border-fuego pl-5 mb-8">
            <p className="text-white/70 text-base md:text-lg italic leading-relaxed">
              &ldquo;Ninguno tenga en poco tu juventud, sino sé ejemplo de los creyentes en palabra, conducta, amor, espíritu, fe y pureza.&rdquo;
            </p>
            <cite className="block mt-2 text-oro text-sm font-medium not-italic">
              — 1 Timoteo 4:12
            </cite>
          </blockquote>

          <h1 className="text-4xl md:text-6xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight">
            <span className="bg-gradient-to-r from-oro via-fuego to-llama bg-clip-text text-transparent">
              JUVENTUD
            </span>
            <br />
            <span className="text-white">GUERRERA</span>
          </h1>

          <div className="flex items-center gap-3 mt-4">
            <Flame className="w-7 h-7 text-llama drop-shadow-[0_0_8px_rgba(239,68,68,0.7)]" />
            <p className="text-xl md:text-2xl font-bold text-oro tracking-wide">
              GENERACIÓN DE FUEGO!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <button className="inline-flex items-center justify-center gap-2 bg-fuego hover:bg-fuego-hover px-8 py-3.5 rounded-full font-bold text-gray-900 text-base transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-fuego/30 cursor-pointer">
              Únete a nosotros
              <Flame className="w-4 h-4" />
            </button>
          </div>

          <div className="flex items-center gap-4 mt-10">
            <button
              onClick={prev}
              className="p-2.5 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? "w-8 bg-fuego" : "w-2 bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Ir a slide ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-2.5 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Siguiente"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* ========== RIGHT: FLOATING BUBBLES (desktop only) ========== */}
      <div className="relative z-30 hidden lg:flex w-[48%] items-center justify-center h-full">
        <div className="relative w-[420px] h-[620px]">
          {cascade.map(({ index, z, scale, pos, rot, opacity, delay }) => (
            <div
              key={slides[index].id}
              className={`absolute transition-all duration-700 ease-in-out ${z} ${pos}`}
            >
              <div
                className={`transition-all duration-700 ease-in-out ${scale} ${rot} ${opacity} animate-[float_4s_ease-in-out_infinite]`}
                style={{ animationDelay: delay }}
              >
                <div className="w-[320px] h-[340px] rounded-[40%_60%_55%_45%/45%_50%_60%_55%] overflow-hidden shadow-2xl shadow-black/60 border-2 border-white/15 animate-[blob_8s_ease-in-out_infinite]">
                  <img
                    src={slides[index].src}
                    alt={slides[index].alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
