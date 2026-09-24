"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";


export default function PacientesPage(){


const [pacientes,setPacientes]=useState<any[]>([]);


useEffect(()=>{

cargarPacientes();

},[]);



async function cargarPacientes(){

const {data,error}=await supabase
.from("patients")
.select("*");


if(error){

console.log(error);

}else{

setPacientes(data || []);

}

}



return (

<div className="p-8">


<h1 className="text-3xl font-bold">
Gestión de Pacientes
</h1>


<div className="
bg-white
rounded-xl
shadow
mt-8">


<table className="w-full">


<thead className="bg-gray-100">

<tr>

<th className="p-4">
Nombre
</th>

<th className="p-4">
DNI
</th>

<th className="p-4">
Teléfono
</th>

</tr>

</thead>


<tbody>


{
pacientes.map((p)=>(


<tr key={p.id}
className="border-t">


<td className="p-4">
{p.first_name} {p.last_name}
</td>


<td className="p-4">
{p.dni}
</td>


<td className="p-4">
{p.phone}
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