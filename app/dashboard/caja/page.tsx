export default function CajaPage() {


const movimientos = [

{
paciente:"María López",
concepto:"Implante dental",
metodo:"Tarjeta",
monto:"S/ 1500",
estado:"Pagado"
},

{
paciente:"Carlos Ramírez",
concepto:"Ortodoncia",
metodo:"Transferencia",
monto:"S/ 800",
estado:"Pendiente"
},

{
paciente:"Ana Torres",
concepto:"Rehabilitación oral",
metodo:"Efectivo",
monto:"S/ 2200",
estado:"Pagado"
}

];


return (

<div className="p-8">


<div className="flex justify-between items-center">


<div>

<h1 className="text-3xl font-bold">
Caja y Finanzas
</h1>

<p className="text-gray-500 mt-2">
Control económico del centro odontológico
</p>

</div>


<button
className="
bg-blue-600
text-white
px-5
py-3
rounded-lg">

+ Registrar Pago

</button>


</div>



<div className="grid md:grid-cols-3 gap-6 mt-8">


<div className="bg-white rounded-xl shadow p-6">

<p className="text-gray-500">
Ingresos del mes
</p>

<h2 className="text-3xl font-bold text-green-600">
S/ 45,800
</h2>

</div>



<div className="bg-white rounded-xl shadow p-6">

<p className="text-gray-500">
Pagos pendientes
</p>

<h2 className="text-3xl font-bold text-red-500">
S/ 8,500
</h2>

</div>



<div className="bg-white rounded-xl shadow p-6">

<p className="text-gray-500">
Tratamientos activos
</p>

<h2 className="text-3xl font-bold text-blue-600">
420
</h2>

</div>


</div>




<div className="bg-white rounded-xl shadow mt-8 overflow-hidden">


<table className="w-full">


<thead className="bg-gray-100">


<tr>

<th className="p-4 text-left">
Paciente
</th>

<th className="p-4 text-left">
Concepto
</th>

<th className="p-4 text-left">
Método
</th>

<th className="p-4 text-left">
Monto
</th>

<th className="p-4 text-left">
Estado
</th>


</tr>


</thead>



<tbody>


{
movimientos.map((m,index)=>(


<tr
key={index}
className="border-t">


<td className="p-4 font-semibold">
{m.paciente}
</td>


<td className="p-4">
{m.concepto}
</td>


<td className="p-4">
{m.metodo}
</td>


<td className="p-4 font-bold">
{m.monto}
</td>


<td className="p-4">

<span className="
bg-green-100
text-green-700
px-3
py-1
rounded-full">

{m.estado}

</span>

</td>


</tr>


))
}


</tbody>


</table>


</div>



</div>

)

}