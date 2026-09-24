export default function Dashboard() {

const cards = [
  {
    title:"Pacientes",
    value:"1,250",
    description:"Pacientes registrados"
  },
  {
    title:"Citas Hoy",
    value:"35",
    description:"Agenda del día"
  },
  {
    title:"Tratamientos",
    value:"420",
    description:"Seguimientos activos"
  },
  {
    title:"Ingresos",
    value:"S/ 25,800",
    description:"Facturación mensual"
  }
]

return (
<main className="min-h-screen bg-gray-100 p-8">

<h1 className="text-4xl font-bold text-gray-800">
CRM Dental Multi-Sede
</h1>

<p className="mt-2 text-gray-600">
Panel administrativo profesional
</p>


<div className="grid md:grid-cols-4 gap-6 mt-10">

{
cards.map((card)=>(

<div
key={card.title}
className="bg-white rounded-2xl shadow p-6"
>

<h2 className="text-lg font-semibold">
{card.title}
</h2>

<p className="text-3xl font-bold text-blue-600 mt-3">
{card.value}
</p>

<p className="text-gray-500 mt-2">
{card.description}
</p>


</div>

))
}

</div>


<div className="mt-10 bg-white rounded-2xl shadow p-6">

<h2 className="text-xl font-bold">
Accesos rápidos
</h2>


<div className="grid md:grid-cols-4 gap-4 mt-5">

<button className="bg-blue-600 text-white p-4 rounded-xl">
+ Nuevo Paciente
</button>

<button className="bg-blue-600 text-white p-4 rounded-xl">
+ Nueva Cita
</button>

<button className="bg-blue-600 text-white p-4 rounded-xl">
+ Tratamiento
</button>

<button className="bg-blue-600 text-white p-4 rounded-xl">
+ Registrar Pago
</button>


</div>

</div>


</main>
)

}