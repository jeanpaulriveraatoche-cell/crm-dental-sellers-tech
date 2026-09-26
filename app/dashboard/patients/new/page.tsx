"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";


export default function NewPatient(){

  const router = useRouter();


  const [form,setForm] = useState({
    full_name:"",
    document:""
  });


  const [loading,setLoading] = useState(false);



  const handleChange = (
    e:React.ChangeEvent<HTMLInputElement>
  )=>{

    setForm({
      ...form,
      [e.target.name]: e.target.value
    });

  };



  const guardarPaciente = async()=>{

    try{

      setLoading(true);



      const {
        error
      } = await supabase
      .from("patients")
      .insert([
        {
          organization_id:
          "21665723-b62f-4f20-82a2-b6b8e580c3e0",

          full_name:
          form.full_name,

          document:
          form.document
        }
      ]);



      if(error){

        console.log(
          "ERROR SUPABASE:",
          error
        );

        alert(error.message);

        return;
      }



      alert(
        "Paciente registrado correctamente"
      );


      router.push(
        "/dashboard/pacientes"
      );


    }catch(err:any){

      console.log(err);

      alert(
        err.message
      );

    }finally{

      setLoading(false);

    }

  };



return (

<div className="p-6">


<h1 className="text-3xl font-bold mb-6">
Nuevo Paciente
</h1>



<div className="bg-white border rounded-xl p-6 max-w-xl space-y-5">



<div>

<label className="block mb-2 font-medium">
Nombre completo
</label>


<input

name="full_name"

value={form.full_name}

onChange={handleChange}

className="
w-full
border
rounded-lg
p-3
"

placeholder="Ejemplo: Juan Pérez"

/>

</div>




<div>

<label className="block mb-2 font-medium">
Documento
</label>


<input

name="document"

value={form.document}

onChange={handleChange}

className="
w-full
border
rounded-lg
p-3
"

placeholder="DNI"

/>

</div>





<button

onClick={guardarPaciente}

disabled={loading}

className="
bg-blue-600
text-white
px-6
py-3
rounded-xl
"

>


{
loading
?
"Guardando..."
:
"Guardar paciente"
}


</button>



</div>


</div>


);

}