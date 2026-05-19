import cronograma from "../data/cronograma.json";

export default function Evangelismo() {
  const actividadesEvangelismo = cronograma.filter(
    (item) => item.actividad.toLowerCase() === "evangelismo"
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Evangelismo</h1>
      <p className="text-gray-600 mb-10 text-lg">
        Llevando el mensaje de Cristo a todas las naciones. Únete a nuestras
        actividades de evangelismo y sé parte de la gran comisión.
      </p>

      {actividadesEvangelismo.length > 0 && (
        <div className="mb-12">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Próximas Actividades
          </h2>
          {actividadesEvangelismo.map((act) => (
            <div
              key={act.id}
              className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm mb-3"
            >
              <div className="flex flex-wrap gap-4 text-sm">
                <span className="font-semibold text-indigo-600">{act.dia}</span>
                <span className="text-gray-500">{act.hora}</span>
                <span className="text-gray-500">{act.sede}</span>
                <span className="text-gray-700">Encargado: {act.encargado}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-6">
          <h3 className="font-bold text-indigo-800 mb-2">Gran Comisión</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            &quot;Por tanto, id, y haced discípulos a todas las naciones,
            bautizándolos en el nombre del Padre, y del Hijo, y del Espíritu
            Santo; enseñándoles que guarden todas las cosas que os he mandado.&quot;
            <br />
            <span className="font-semibold">— Mateo 28:19-20</span>
          </p>
        </div>
        <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-6">
          <h3 className="font-bold text-emerald-800 mb-2">
            ¿Cómo Participar?
          </h3>
          <ul className="text-gray-700 text-sm space-y-2">
            <li>Asiste a los entrenamientos sabatinos</li>
            <li>Únete a un grupo de evangelismo</li>
            <li>Comparte tu testimonio</li>
            <li>Ora por los nuevos creyentes</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
