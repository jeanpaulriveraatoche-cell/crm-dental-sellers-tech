export default function AgendaPage() {

  const citas = [
    {
      hora:"09:00 AM",
      paciente:"María López",
      doctor:"Dr. Guardia",
      tratamiento:"Limpieza dental",
      estado:"Confirmada"
    },
    {
      hora:"10:30 AM",
      paciente:"Carlos Ramírez",
      doctor:"Dra. Pérez",
      tratamiento:"Ortodoncia",
      estado:"Pendiente"
    },
    {
      hora:"02:00 PM",
      paciente:"Ana Torres",
      doctor:"Dr. Guardia",
      tratamiento:"Implante dental",
      estado:"Atendida"
    }
  ];


  return (

    <div className="p-8">


      <div className="flex justify-between items-center">


        <div>

          <h1 className="text-3xl font-bold">
            Agenda Odontológica
          </h1>

          <p className="text-gray-500 mt-2">
            Control de citas por sede y especialista
          </p>

        </div>


        <button
        className="
        bg-blue-600
        text-white
        px-5
        py-3
        rounded-lg">

          + Nueva Cita

        </button>


      </div>




      <div className="
      bg-white
      rounded-xl
      shadow
      mt-8">


        <div className="
        grid
        grid-cols-5
        bg-gray-100
        p-4
        font-bold">

          <div>Hora</div>
          <div>Paciente</div>
          <div>Odontólogo</div>
          <div>Tratamiento</div>
          <div>Estado</div>


        </div>




        {citas.map((cita,index)=>(


          <div
          key={index}
          className="
          grid
          grid-cols-5
          p-4
          border-t
          items-center">


            <div>
              {cita.hora}
            </div>


            <div className="font-semibold">
              {cita.paciente}
            </div>


            <div>
              {cita.doctor}
            </div>


            <div>
              {cita.tratamiento}
            </div>


            <div>

              <span className="
              bg-green-100
              text-green-700
              px-3
              py-1
              rounded-full">

              {cita.estado}

              </span>

            </div>


          </div>


        ))}



      </div>


    </div>

  );

}