"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function NewPatientPage() {

  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    full_name: "",
    document: "",
  });


  const guardarPaciente = async () => {

    if (!form.full_name) {
      alert("Ingrese el nombre del paciente");
      return;
    }


    setLoading(true);


    const { data, error } = await supabase
      .from("patients")
      .insert([
        {
          organization_id: "d7edf338-7531-445b-ab97-2a5e6cb8e906",
          full_name: form.full_name,
          document: form.document,
        }
      ])
      .select();


    if (error) {

      console.error("ERROR SUPABASE:", error);

      alert(
        "Error guardando paciente: " + error.message
      );

      setLoading(false);
      return;
    }


    console.log("Paciente creado:", data);


    alert("Paciente registrado correctamente");


    router.push("/dashboard/pacientes");


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

            className="w-full border rounded-lg p-3"

            value={form.full_name}

            onChange={(e)=>
              setForm({
                ...form,
                full_name:e.target.value
              })
            }

            placeholder="Ejemplo: Juan Pérez"

          />

        </div>



        <div>

          <label className="block mb-2 font-medium">
            Documento
          </label>

          <input

            className="w-full border rounded-lg p-3"

            value={form.document}

            onChange={(e)=>
              setForm({
                ...form,
                document:e.target.value
              })
            }

            placeholder="DNI"

          />

        </div>



        <button

          onClick={guardarPaciente}

          disabled={loading}

          className="bg-blue-600 text-white px-6 py-3 rounded-xl"

        >

          {
            loading
            ? "Guardando..."
            : "Guardar paciente"
          }


        </button>



      </div>


    </div>

  );

}