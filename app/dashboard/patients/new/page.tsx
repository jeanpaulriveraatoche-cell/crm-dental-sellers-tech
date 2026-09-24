"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";


export default function NewPatient(){

const router = useRouter();


const [clinics,setClinics]=useState<any[]>([]);


const [form,setForm]=useState({

first_name:"",
last_name:"",
dni:"",
phone:"",
email:"",
birth_date:"",
gender:"",
clinic_id:"",
medical_history:"",
allergies:""

});


useEffect(()=>{

loadClinics();

},[]);



async function loadClinics(){

const {data}=await supabase
.from("clinics")
.select("*");


setClinics(data || []);

}



function handleChange(e:any){

setForm({

...form,

[e.target.name]:e.target.value

});

}



async function savePatient(){


const {error}=await supabase
.from("patients")
.insert([{

...form,

organization_id:
"21665723-b62f-4f20-82a2-b6b8e580c3e0"

}]);



if(error){

alert(error.message);

return;

}


alert("Paciente registrado correctamente");


router.push("/dashboard/patients");


}



return(

<div className="p-8">


<h1 className="text-3xl font-bold mb-6">
Nuevo Paciente
</h1>



<div className="bg-white rounded-xl shadow p-6 grid gap-4 max-w-3xl">


<input
name="first_name"
placeholder="Nombres"
className="border p-3 rounded"
onChange={handleChange}
/>


<input
name="last_name"
placeholder="Apellidos"
className="border p-3 rounded"
onChange={handleChange}
/>


<input
name="dni"
placeholder="DNI"
className="border p-3 rounded"
onChange={handleChange}
/>


<input
name="phone"
placeholder="Teléfono"
className="border p-3 rounded"
onChange={handleChange}
/>


<input
name="email"
placeholder="Correo"
className="border p-3 rounded"
onChange={handleChange}
/>



<select
name="clinic_id"
className="border p-3 rounded"
onChange={handleChange}
>


<option>
Seleccione sede
</option>


{
clinics.map(c=>(

<option key={c.id} value={c.id}>

{c.name}

</option>

))
}


</select>



<textarea
name="medical_history"
placeholder="Historia médica"
className="border p-3 rounded"
onChange={handleChange}
/>



<textarea
name="allergies"
placeholder="Alergias"
className="border p-3 rounded"
onChange={handleChange}
/>



<button

onClick={savePatient}

className="bg-blue-600 text-white p-3 rounded-lg"

>

Guardar Paciente

</button>


</div>


</div>


)

}