import fotos from "../data/galeria.json";

export default function GaleriaCarousel() {
  const duplicated = [...fotos, ...fotos];

  return (
    <section className="bg-noche-claro py-10 overflow-hidden">
      {/**
       * <div className="mx-auto mb-6 px-4 max-w-6xl">
        <h2 className="flex items-center gap-2 font-bold text-white text-xl sm:text-2xl">
          <span className="inline-block bg-fuego rounded-full w-1 h-6" />
          Galería del Mes
        </h2>
        <p className="mt-1 text-white/50 text-sm">
          Lo que Dios está haciendo en nuestra juventud
        </p>
      </div>
       */}

      <div className="relative">
        <div className="flex gap-4 animate-[scroll_30s_linear_infinite] hover:[animation-play-state:paused]">
          {duplicated.map((foto, i) => (
            <div
              key={`${foto.id}-${i}`}
              className="flex-shrink-0 shadow-black/30 shadow-lg border border-white/10 rounded-xl w-[260px] h-[180px] overflow-hidden"
            >
              <img
                src={foto.src}
                alt={foto.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <div className="top-0 bottom-0 left-0 z-10 absolute bg-gradient-to-r from-noche-claro to-transparent w-12 pointer-events-none" />
        <div className="top-0 right-0 bottom-0 z-10 absolute bg-gradient-to-l from-noche-claro to-transparent w-12 pointer-events-none" />
      </div>
    </section>
  );
}
