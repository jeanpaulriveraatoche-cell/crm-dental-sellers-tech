export default function TratamientosPage() {

  const tratamientos = [
    {
      paciente:"María López",
      procedimiento:"Implante dental",
      doctor:"Dr. Guardia",
      sede:"Clínica Principal",
      avance:"75%",
      estado:"En proceso",
      monto:"S/ 3500"
    },
    {
      paciente:"Carlos Ramírez",
      procedimiento:"Ortodoncia",
      doctor:"Dra. Pérez",
      sede:"Sucursal Norte",
      avance:"40%",
      estado:"Activo",
      monto:"S/ 2800"
    },
    {
      paciente:"Ana Torres",
      procedimiento:"Rehabilitación oral",
      doctor:"Dr. Guardia",
      sede:"Clínica Principal",
      avance:"100%",
      estado:"Finalizado",
      monto:"S/ 4200"
    }
  ];


  return (

    <div className="p-8">


      <div className="flex justify-between items-center">


        <div>

          <h1 className="text-3xl font-bold">
            Gestión de Tratamientos
          </h1>

          <p className="text-gray-500 mt-2">
            Seguimiento clínico y financiero de tratamientos
          </p>

        </div>


        <button
        className="
        bg-blue-600
        text-white
        px-5
        py-3
        rounded-lg">

          + Nuevo Tratamiento

        </button>


      </div>



      <div className="
      bg-white
      rounded-xl
      shadow
      mt-8
      overflow-hidden">


        <table className="w-full">


          <thead className="bg-gray-100">

            <tr>

              <th className="p-4 text-left">
                Paciente
              </th>

              <th className="p-4 text-left">
                Procedimiento
              </th>

              <th className="p-4 text-left">
                Odontólogo
              </th>

              <th className="p-4 text-left">
                Avance
              </th>

              <th className="p-4 text-left">
                Estado
              </th>

              <th className="p-4 text-left">
                Monto
              </th>

            </tr>

          </thead>



          <tbody>


          {tratamientos.map((t,index)=>(


            <tr
            key={index}
            className="border-t">


              <td className="p-4 font-semibold">
                {t.paciente}
              </td>


              <td className="p-4">
                {t.procedimiento}
              </td>


              <td className="p-4">
                {t.doctor}
              </td>


              <td className="p-4">

                <div className="w-32 bg-gray-200 rounded-full h-2">

                  <div
                  className="bg-blue-600 h-2 rounded-full"
                  style={{
                    width:t.avance
                  }}>
                  </div>

                </div>

                <span className="text-sm">
                  {t.avance}
                </span>

              </td>


              <td className="p-4">

                <span className="
                bg-blue-100
                text-blue-700
                px-3
                py-1
                rounded-full">

                  {t.estado}

                </span>

              </td>


              <td className="p-4 font-bold">
                {t.monto}
              </td>


            </tr>


          ))}


          </tbody>


        </table>


      </div>


    </div>

  );

}