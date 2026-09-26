import { getDashboardData } from "@/lib/dashboard";


export default async function Dashboard() {

  const data = await getDashboardData();


  const totalPatients = data.pacientes || 0;
  const totalTreatments = data.tratamientos || 0;
  const totalIncome = data.ingresos || 0;

  const appointments = data.citas || [];


  return (

    <div className="p-6 space-y-8">


      {/* CABECERA */}

      <div className="flex justify-between items-center">

        <div>

          <h1 className="
            text-4xl
            font-bold
            text-slate-900
          ">
            CRM Dental SELLERS TECH
          </h1>


          <p className="text-slate-500 mt-1">
            Gestión inteligente para clínicas odontológicas
          </p>

        </div>


        <button className="
          bg-blue-600
          text-white
          px-5
          py-3
          rounded-xl
          shadow
          hover:bg-blue-700
        ">
          + Nueva cita
        </button>


      </div>



      {/* TARJETAS KPI */}

      <div className="
        grid
        grid-cols-1
        md:grid-cols-4
        gap-6
      ">


        <Card
          title="Pacientes"
          value={totalPatients}
        />


        <Card
          title="Tratamientos"
          value={totalTreatments}
        />


        <Card
          title="Citas"
          value={appointments.length}
        />


        <Card
          title="Ingresos"
          value={`S/ ${totalIncome}`}
        />


      </div>




      {/* PROXIMAS CITAS */}

      <div className="
        bg-white
        rounded-2xl
        border
        p-6
      ">


        <h2 className="
          text-xl
          font-bold
          mb-5
        ">
          📅 Próximas citas
        </h2>



        <div className="space-y-4">


          {
            appointments.length === 0 ? (

              <p className="text-slate-500">
                No hay citas registradas
              </p>

            ) : (

              appointments.map((item:any)=>(


                <div
                  key={item.id}
                  className="
                    flex
                    justify-between
                    border-b
                    pb-3
                  "
                >


                  <div>


                    <p className="font-bold">
                      {
                        item.appointment_date
                        ? new Date(item.appointment_date).toLocaleString()
                        : "Fecha pendiente"
                      }
                    </p>


                    <p>
                      {item.patient_name || "Paciente"}
                    </p>


                    <p className="
                      text-sm
                      text-slate-500
                    ">
                      {item.reason || "Consulta dental"}
                    </p>


                  </div>



                  <span className="
                    bg-blue-100
                    text-blue-700
                    px-3
                    py-1
                    rounded-full
                    text-xs
                    h-fit
                  ">
                    Pendiente
                  </span>



                </div>


              ))

            )
          }


        </div>


      </div>





      {/* ESTADO CLINICO */}


      <div className="
        bg-white
        rounded-2xl
        border
        p-6
      ">


        <h2 className="
          text-xl
          font-bold
          mb-5
        ">
          🦷 Estado clínico
        </h2>




        <div className="
          grid
          md:grid-cols-3
          gap-4
        ">


          <Status
            title="Tratamientos activos"
            number={totalTreatments}
          />


          <Status
            title="Pacientes registrados"
            number={totalPatients}
          />


          <Status
            title="Citas pendientes"
            number={appointments.length}
          />


        </div>



      </div>



    </div>


  );

}





function Card(
{
 title,
 value
}:{
 title:string;
 value:any;
}

){


return (

<div className="
 bg-white
 rounded-2xl
 p-6
 border
 shadow-sm
">


<p className="text-slate-500">
{title}
</p>


<h2 className="
 text-3xl
 font-bold
 text-blue-600
 mt-2
">
{value}
</h2>


</div>

);


}





function Status(
{
title,
number
}:{
title:string;
number:any;
}

){


return (

<div className="
 bg-slate-50
 rounded-xl
 p-5
">


<p className="text-slate-600">
{title}
</p>


<p className="
 text-3xl
 font-bold
 mt-2
">
{number}
</p>


</div>

);


}