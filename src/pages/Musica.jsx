import musica from "../data/musica.json";

export default function Musica() {
  if (!musica || musica.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[70vh] px-4">
        <div className="bg-gradient-to-br from-amber-400 via-orange-500 to-red-500 rounded-2xl shadow-2xl p-12 text-center max-w-lg w-full transform transition-transform">
          <div className="text-6xl mb-6">🎵</div>
          <h2 className="text-3xl font-extrabold text-white mb-3 drop-shadow-lg">
            Próximamente
          </h2>
          <p className="text-xl font-bold text-white/90 drop-shadow">
            Clases Grabadas
          </p>
          <div className="mt-8 w-16 h-1 bg-white/60 mx-auto rounded-full" />
          <p className="mt-6 text-white/80 text-sm">
            Estamos preparando contenido musical para ti. Vuelve pronto.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Música</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {musica.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="font-semibold text-gray-800 mb-2">{item.titulo}</h3>
            <p className="text-sm text-gray-500">{item.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
