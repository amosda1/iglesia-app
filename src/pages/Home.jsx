import HeroCarousel from "../components/HeroCarousel";

export default function Home() {
  return (
    <>
      <HeroCarousel />

      {/* === SECCIONES ADICIONALES (próximo paso) === */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-indigo-50 rounded-xl p-8 shadow-sm border border-indigo-100">
            <h2 className="text-xl font-bold text-indigo-800 mb-2">Horarios</h2>
            <p className="text-gray-600">
              Cultos dominicales, estudios bíblicos y actividades durante toda la
              semana.
            </p>
          </div>
          
          <div className="bg-emerald-50 rounded-xl p-8 shadow-sm border border-emerald-100">
            <h2 className="text-xl font-bold text-emerald-800 mb-2">Sedes</h2>
            <p className="text-gray-600">
              Contamos con múltiples sedes para servir mejor a la comunidad.
            </p>
          
          </div>

          <div className="bg-amber-50 rounded-xl p-8 shadow-sm border border-amber-100">
            <h2 className="text-xl font-bold text-amber-800 mb-2">Biblioteca</h2>
            <p className="text-gray-600">
              Accede a nuestra colección de libros cristianos para tu crecimiento
              espiritual.
            </p>
          </div>

          <div className="bg-rose-50 rounded-xl p-8 shadow-sm border border-rose-100">
            <h2 className="text-xl font-bold text-rose-800 mb-2">Música</h2>
            <p className="text-gray-600">
              Clases grabadas, alabanzas y recursos musicales para la iglesia.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
