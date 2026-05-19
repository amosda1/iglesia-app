import cronograma from "../data/cronograma.json";
import { CalendarDays, Clock, MapPin, User } from "lucide-react";

const DIAS = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

export default function CronogramaSection() {
  const porDia = DIAS.map((dia) => ({
    dia,
    actividades: cronograma.filter((a) => a.dia === dia),
  }));

  return (
    <section className="bg-noche py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Cronograma <span className="text-fuego">Semanal</span>
          </h2>
          <p className="text-white/50 text-sm mt-2">
            Nuestras actividades fijas de cada semana
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3">
          {porDia.map(({ dia, actividades }) => (
            <div
              key={dia}
              className="bg-noche-claro border border-white/5 rounded-xl p-4 hover:border-fuego/30 transition-colors"
            >
              <h3 className="text-sm font-bold text-oro text-center mb-3 pb-2 border-b border-white/10">
                {dia}
              </h3>

              {actividades.length === 0 ? (
                <p className="text-white/25 text-xs text-center italic py-2">
                  Sin actividades
                </p>
              ) : (
                <ul className="space-y-3">
                  {actividades.map((act) => (
                    <li key={act.id} className="text-xs space-y-1">
                      <p className="text-white font-semibold">{act.actividad}</p>
                      <div className="flex items-center gap-1 text-white/40">
                        <Clock className="w-3 h-3" />
                        <span>{act.hora}</span>
                      </div>
                      <div className="flex items-center gap-1 text-white/40">
                        <MapPin className="w-3 h-3" />
                        <span>{act.sede}</span>
                      </div>
                      <div className="flex items-center gap-1 text-white/40">
                        <User className="w-3 h-3" />
                        <span>{act.encargado}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
