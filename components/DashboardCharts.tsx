"use client";

import {
LineChart,
Line,
BarChart,
Bar,
XAxis,
YAxis,
Tooltip,
ResponsiveContainer
} from "recharts";


const pacientes = [
{
mes:"Ene",
cantidad:80
},
{
mes:"Feb",
cantidad:120
},
{
mes:"Mar",
cantidad:180
},
{
mes:"Abr",
cantidad:250
},
{
mes:"May",
cantidad:320
}
];


const ingresos = [
{
mes:"Ene",
total:8500
},
{
mes:"Feb",
total:12000
},
{
mes:"Mar",
total:18000
},
{
mes:"Abr",
total:23000
}
];


export default function DashboardCharts(){

return (

<div className="grid grid-cols-2 gap-6">


<div className="bg-white rounded-2xl p-6 shadow">

<h2 className="font-bold text-xl mb-5">
📈 Nuevos pacientes
</h2>


<ResponsiveContainer width="100%" height={250}>

<LineChart data={pacientes}>

<XAxis
 dataKey="mes"
 stroke="#94a3b8"
/>

<YAxis
 stroke="#94a3b8"
/>

<Tooltip
contentStyle={{
 background:"#ffffff",
 borderRadius:"12px",
 border:"1px solid #e2e8f0",
 boxShadow:"0 10px 30px rgba(0,0,0,0.08)"
}}
/>

<Line
 dataKey="total"
 stroke="#2563eb"
 strokeWidth={4}
 dot={{
   r:5,
   fill:"#2563eb"
 }}
/>

</LineChart>

</ResponsiveContainer>

</div>



<div className="
bg-white
rounded-2xl
p-6
shadow-sm
border
border-slate-200
">

<h2 className="font-bold text-xl mb-5">
💰 Ingresos
</h2>


<ResponsiveContainer width="100%" height={250}>

<BarChart data={ingresos}>

<XAxis dataKey="mes"/>

<YAxis/>

<Tooltip/>

<Bar
  dataKey="total"
  fill="#16a34a"
  radius={[8,8,0,0]}
/>

</BarChart>

</ResponsiveContainer>

</div>



</div>

)

}