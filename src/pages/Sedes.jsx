import cronograma from "../data/cronograma.json";

export default function Sedes() {
  const sedes = [...new Set(cronograma.map((item) => item.sede))];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Nuestras Sedes</h1>

      {sedes.map((sede) => {
        const actividades = cronograma.filter((item) => item.sede === sede);
        return (
          <div
            key={sede}
            className="mb-10 bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
          >
            <div className="bg-indigo-600 text-white px-6 py-4">
              <h2 className="text-xl font-bold">Sede {sede}</h2>
            </div>
            <div className="p-6">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gray-200 text-sm text-gray-500 uppercase">
                    <th className="py-2 pr-4">Día</th>
                    <th className="py-2 pr-4">Hora</th>
                    <th className="py-2 pr-4">Actividad</th>
                    <th className="py-2">Encargado</th>
                  </tr>
                </thead>
                <tbody>
                  {actividades.map((act) => (
                    <tr key={act.id} className="border-b border-gray-100">
                      <td className="py-3 pr-4 font-medium text-gray-800">
                        {act.dia}
                      </td>
                      <td className="py-3 pr-4 text-gray-600">{act.hora}</td>
                      <td className="py-3 pr-4 text-gray-800">
                        {act.actividad}
                      </td>
                      <td className="py-3 text-gray-600">{act.encargado}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      })}
    </div>
  );
}
