export default function HistoriaClinicaPage() {


const historias = [

{
paciente:"María López",
edad:"32 años",
motivo:"Dolor en pieza 46",
diagnostico:"Caries profunda",
odontologo:"Dr. Guardia",
estado:"En tratamiento"
},

{
paciente:"Carlos Ramírez",
edad:"45 años",
motivo:"Evaluación general",
diagnostico:"Maloclusión dental",
odontologo:"Dra. Pérez",
estado:"Pendiente"
}

];


return (

<div className="p-8">


<div className="flex justify-between items-center">


<div>

<h1 className="text-3xl font-bold">
Historia Clínica Odontológica
</h1>

<p className="text-gray-500 mt-2">
Registro clínico completo del paciente
</p>

</div>


<button
className="
bg-blue-600
text-white
px-5
py-3
rounded-lg">

+ Nueva Historia Clínica

</button>


</div>



<div className="grid md:grid-cols-2 gap-6 mt-8">


{
historias.map((h,index)=>(


<div
key={index}
className="
bg-white
rounded-xl
shadow
p-6">


<h2 className="text-xl font-bold">
{h.paciente}
</h2>


<div className="mt-4 space-y-2">


<p>
🎂 Edad: {h.edad}
</p>


<p>
📝 Motivo consulta:
<br/>
{h.motivo}
</p>


<p>
🦷 Diagnóstico:
<br/>
{h.diagnostico}
</p>


<p>
👨‍⚕️ Odontólogo:
<br/>
{h.odontologo}
</p>


<span className="
inline-block
mt-3
bg-blue-100
text-blue-700
px-3
py-1
rounded-full">

{h.estado}

</span>


</div>


<button
className="
mt-5
border
px-4
py-2
rounded-lg">

Ver Historia Completa

</button>


</div>


))
}


</div>


</div>

)

}