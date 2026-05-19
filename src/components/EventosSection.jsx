import eventos from "../data/eventos.json";
import { Calendar, MapPin, ArrowRight } from "lucide-react";

function formatFecha(iso) {
  return new Date(iso).toLocaleDateString("es-ES", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function formatHora(iso) {
  return new Date(iso).toLocaleTimeString("es-ES", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function EventosSection() {
  const futuros = eventos
    .filter((e) => new Date(e.fecha) > Date.now())
    .sort((a, b) => new Date(a.fecha) - new Date(b.fecha));

  if (futuros.length === 0) return null;

  const masCercano = futuros[0].id;

  return (
    <section className="bg-noche-claro py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Próximos <span className="text-llama">Eventos</span>
          </h2>
          <p className="text-white/50 text-sm mt-2">
            Lo que se viene en el ministerio juvenil
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {futuros.map((evento) => (
            <div
              key={evento.id}
              className={`relative rounded-xl overflow-hidden border transition-all duration-300 hover:-translate-y-1 ${
                evento.id === masCercano
                  ? "bg-gradient-to-b from-fuego/20 to-noche-claro border-fuego/40 shadow-lg shadow-fuego/10"
                  : "bg-noche border-white/5 hover:border-white/15"
              }`}
            >
              {evento.id === masCercano && (
                <span className="absolute top-3 right-3 bg-fuego text-noche text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider">
                  Próximo
                </span>
              )}

              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Calendar
                    className={`w-4 h-4 ${
                      evento.id === masCercano ? "text-fuego" : "text-white/30"
                    }`}
                  />
                  <span className="text-white/50 text-xs">
                    {formatFecha(evento.fecha)} — {formatHora(evento.fecha)}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2">
                  {evento.titulo}
                </h3>

                <p className="text-white/50 text-sm leading-relaxed mb-4 line-clamp-2">
                  {evento.descripcion}
                </p>

                <div className="flex items-center gap-1 text-white/30 text-xs">
                  <MapPin className="w-3 h-3" />
                  <span>{evento.lugar}</span>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5">
                  <span className="inline-flex items-center gap-1 text-fuego text-xs font-semibold hover:gap-2 transition-all cursor-pointer">
                    Más info
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
