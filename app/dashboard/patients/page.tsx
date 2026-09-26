"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function PatientsPage() {

  const [patients,setPatients]=useState<any[]>([]);
  const [name,setName]=useState("");
  const [document,setDocument]=useState("");

  const organization_id =
  "d7edf338-7531-445b-ab97-2a5e6cb8e906";


  async function loadPatients(){

    const {data,error}=await supabase
    .from("patients")
    .select("*")
    .eq("organization_id",organization_id);


    if(!error){
      setPatients(data || []);
    }

  }


  async function savePatient(){

    if(!name) return;


    async function savePatient(){

      if(!name) return;


      const {data,error}=await supabase
      .from("patients")
      .insert({

        organization_id,
        full_name:name,
        document:document

      });


      if(error){

        console.log("ERROR GUARDANDO PACIENTE:", error);
        alert(error.message);
        return;

      }


      alert("Paciente guardado correctamente");


      setName("");
      setDocument("");

      loadPatients();

    }


    setName("");
    setDocument("");

    loadPatients();

  }



  useEffect(()=>{

    loadPatients();

  },[]);



return (

<div className="p-8">

<h1 className="text-3xl font-bold">
Pacientes
</h1>


<div className="bg-white rounded-xl p-6 mt-6 shadow">


<h2 className="font-bold mb-4">
Nuevo Paciente
</h2>


<input
className="border p-3 rounded w-full mb-3"
placeholder="Nombre completo"
value={name}
onChange={e=>setName(e.target.value)}
/>


<input
className="border p-3 rounded w-full mb-3"
placeholder="Documento DNI"
value={document}
onChange={e=>setDocument(e.target.value)}
/>


<button
onClick={savePatient}
className="bg-blue-600 text-white px-6 py-3 rounded"
>
Guardar paciente
</button>


</div>



<div className="bg-white rounded-xl p-6 mt-6 shadow">

<h2 className="font-bold mb-4">
Listado de pacientes
</h2>


{
patients.map((p)=>(

<div
key={p.id}
className="border-b py-3"
>

<b>{p.full_name}</b>

<br/>

<span>
DNI: {p.document}
</span>

</div>


))
}


</div>


</div>

)

}