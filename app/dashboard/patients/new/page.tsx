"use client";

import {useState} from "react";
import {supabase} from "@/lib/supabase";
import {useRouter} from "next/navigation";


export default function NewPatient(){

const router=useRouter();

const [name,setName]=useState("");
const [document,setDocument]=useState("");
const [error,setError]=useState("");


async function savePatient(){

setError("");

if(!name){
setError("Ingrese nombre");
return;
}


const {error}=await supabase
.from("patients")
.insert({

organization_id:
"d7efd338-7531-445b-ab97-2a5e6cb8e906",

full_name:name,

document:document

});


if(error){

console.log(error);

setError(error.message);

return;

}


alert("Paciente guardado");

router.push("/dashboard/patients");

}



return(

<div className="p-8">

<h1 className="text-3xl font-bold">
Nuevo Paciente
</h1>


<div className="bg-white p-6 rounded-xl mt-6">


<input
className="border p-3 w-full mb-3"
placeholder="Nombre completo"
value={name}
onChange={e=>setName(e.target.value)}
/>


<input
className="border p-3 w-full mb-3"
placeholder="DNI"
value={document}
onChange={e=>setDocument(e.target.value)}
/>


<button
onClick={savePatient}
className="bg-blue-600 text-white px-6 py-3 rounded"
>
Guardar paciente
</button>


{
error &&
<p className="text-red-600 mt-3">
{error}
</p>
}


</div>


</div>

)

}