import HeroCarousel from "../components/HeroCarousel";

export default function Home() {
  return (
    <>
      <HeroCarousel />

      {/* === SECCIONES ADICIONALES (próximo paso) === */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-guerra/10 rounded-xl p-8 shadow-sm border border-guerra/20">
            <h2 className="text-xl font-bold text-guerra mb-2">Horarios</h2>
            <p className="text-gray-600">
              Cultos dominicales, estudios bíblicos y actividades durante toda la
              semana.
            </p>
          </div>

          <div className="bg-fuego/10 rounded-xl p-8 shadow-sm border border-fuego/20">
            <h2 className="text-xl font-bold text-fuego-hover mb-2">Sedes</h2>
            <p className="text-gray-600">
              Contamos con múltiples sedes para servir mejor a la comunidad.
            </p>
          </div>

          <div className="bg-oro/15 rounded-xl p-8 shadow-sm border border-oro/30">
            <h2 className="text-xl font-bold text-fuego-hover mb-2">Biblioteca</h2>
            <p className="text-gray-600">
              Accede a nuestra colección de libros cristianos para tu crecimiento
              espiritual.
            </p>
          </div>

          <div className="bg-llama/10 rounded-xl p-8 shadow-sm border border-llama/20">
            <h2 className="text-xl font-bold text-llama mb-2">Música</h2>
            <p className="text-gray-600">
              Clases grabadas, alabanzas y recursos musicales para la iglesia.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
