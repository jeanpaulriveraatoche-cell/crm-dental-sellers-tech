"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function AppointmentsPage(){

const [appointments,setAppointments]=useState<any[]>([]);
const [date,setDate]=useState("");
const [patient,setPatient]=useState("");
const [status,setStatus]=useState("Pendiente");


const organization_id =
"d7efd338-7531-445b-ab97-2a5e6cb8e906";



async function loadAppointments(){

const {data,error}=await supabase
.from("appointments")
.select("*")
.eq("organization_id",organization_id)
.order("created_at",{ascending:false});


if(!error){
setAppointments(data || []);
}

}



async function saveAppointment(){

if(!patient || !date) return;


await supabase
.from("appointments")
.insert({

organization_id,
patient_id:patient,
appointment_date:date,
status

});


setPatient("");
setDate("");
loadAppointments();

}



useEffect(()=>{

loadAppointments();

},[]);



return(

<div className="p-8">

<h1 className="text-3xl font-bold">
Agenda de Citas
</h1>


<div className="bg-white shadow rounded-xl p-6 mt-6">

<h2 className="font-bold mb-4">
Nueva Cita
</h2>


<input
className="border p-3 rounded w-full mb-3"
placeholder="ID del paciente"
value={patient}
onChange={(e)=>setPatient(e.target.value)}
/>


<input
type="datetime-local"
className="border p-3 rounded w-full mb-3"
value={date}
onChange={(e)=>setDate(e.target.value)}
/>



<select
className="border p-3 rounded w-full mb-3"
value={status}
onChange={(e)=>setStatus(e.target.value)}
>

<option>
Pendiente
</option>

<option>
Confirmada
</option>

<option>
Atendida
</option>

<option>
Cancelada
</option>

</select>



<button
onClick={saveAppointment}
className="bg-blue-600 text-white px-6 py-3 rounded"
>

Registrar cita

</button>


</div>




<div className="bg-white shadow rounded-xl p-6 mt-6">

<h2 className="font-bold mb-4">
Citas registradas
</h2>


{
appointments.map((a)=>(

<div
key={a.id}
className="border-b py-3"
>

Fecha:
{a.appointment_date}

<br/>

Estado:
{a.status}

</div>

))
}


</div>


</div>


)


}