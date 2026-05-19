import libros from "../data/libros.json";

export default function Biblioteca() {
  const categorias = [...new Set(libros.map((l) => l.categoria))];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Biblioteca</h1>

      {categorias.map((cat) => {
        const librosPorCategoria = libros.filter((l) => l.categoria === cat);
        return (
          <div key={cat} className="mb-8">
            <h2 className="text-lg font-semibold text-indigo-700 mb-3 border-b border-indigo-200 pb-1">
              {cat}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {librosPorCategoria.map((libro) => (
                <div
                  key={libro.id}
                  className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm flex justify-between items-start"
                >
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      {libro.titulo}
                    </h3>
                    <p className="text-sm text-gray-500">{libro.autor}</p>
                  </div>
                  <span
                    className={`text-xs font-medium px-2 py-1 rounded-full ${
                      libro.disponible
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {libro.disponible ? "Disponible" : "Prestado"}
                  </span>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
