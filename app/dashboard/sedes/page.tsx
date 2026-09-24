export default function SedesPage() {
  const sedes = [
    {
      nombre: "Clínica Principal",
      direccion: "Lima",
      estado: "Activo",
      pacientes: 850,
    },
    {
      nombre: "Sucursal Norte",
      direccion: "Comas",
      estado: "Activo",
      pacientes: 400,
    },
  ];

  return (
    <div className="p-8">

      <h1 className="text-3xl font-bold">
        Gestión de Sedes
      </h1>

      <p className="text-gray-500 mt-2">
        Administración multi-sede del CRM Dental
      </p>


      <div className="grid md:grid-cols-2 gap-6 mt-8">

        {sedes.map((sede,index)=>(

          <div
          key={index}
          className="bg-white rounded-xl shadow p-6">

            <h2 className="text-xl font-bold">
              {sede.nombre}
            </h2>

            <p className="mt-3">
              📍 {sede.direccion}
            </p>

            <p>
              👥 {sede.pacientes} pacientes
            </p>

            <span className="inline-block mt-4 bg-green-100 text-green-700 px-3 py-1 rounded-full">
              {sede.estado}
            </span>

          </div>

        ))}

      </div>


      <button className="
      mt-8
      bg-blue-600
      text-white
      px-6
      py-3
      rounded-lg">

        + Nueva Sede

      </button>


    </div>
  );
}