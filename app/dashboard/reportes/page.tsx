export default function Reportes(){

return (

<div className="p-6">

<h1 className="text-3xl font-bold text-slate-900">
📊 Reportes
</h1>

<p className="text-slate-500 mt-2">
Análisis y estadísticas de la clínica dental
</p>


<div className="grid md:grid-cols-3 gap-6 mt-8">


<div className="bg-white p-6 rounded-xl border">
<h2 className="font-bold">
Ingresos
</h2>
<p className="text-3xl text-blue-600 mt-3">
S/ 0
</p>
</div>


<div className="bg-white p-6 rounded-xl border">
<h2 className="font-bold">
Pacientes
</h2>
<p className="text-3xl text-blue-600 mt-3">
0
</p>
</div>


<div className="bg-white p-6 rounded-xl border">
<h2 className="font-bold">
Tratamientos
</h2>
<p className="text-3xl text-blue-600 mt-3">
0
</p>
</div>


</div>


</div>

)

}