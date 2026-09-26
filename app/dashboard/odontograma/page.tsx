"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

const dientes = [
  "11","12","13","14","15","16","17","18",
  "21","22","23","24","25","26","27","28",
  "31","32","33","34","35","36","37","38",
  "41","42","43","44","45","46","47","48"
];

const condiciones = [
  {name:"Caries", color:"bg-red-500"},
  {name:"Restauración", color:"bg-blue-500"},
  {name:"Tratamiento realizado", color:"bg-green-600"}
];

export default function OdontogramaPage(){
  const [pieza,setPieza]=useState("");
  const [paciente,setPaciente]=useState("");
  const [pacientes,setPacientes]=useState<any[]>([]);
  const [odontograma,setOdontograma]=useState("");
  const [estados,setEstados]=useState<any[]>([]);
  const [mensaje,setMensaje]=useState("");

  useEffect(()=>{
    cargarPacientes();
  },[]);

  async function cargarPacientes(){
    const {data,error}=await supabase
      .from("patients")
      .select("id,full_name")
      .limit(50);

    if(!error && data) setPacientes(data);
  }

  async function seleccionarPaciente(id:string){
    setPaciente(id);

    let {data:odonto}=await supabase
      .from("odontograms")
      .select("id")
      .eq("patient_id",id)
      .maybeSingle();

    if(!odonto){
      const creado=await supabase
        .from("odontograms")
        .insert({patient_id:id,data:{}})
        .select("id")
        .maybeSingle();
      if(creado.data){
         odonto = creado.data;
      }
    }

    if(odonto){
      setOdontograma(odonto.id);
      cargarEstados(odonto.id);
    }
  }

  async function cargarEstados(id:string){
    const {data}=await supabase
      .from("teeth_conditions")
      .select("*")
      .eq("odontogram_id",id);

    setEstados(data || []);
  }

  async function guardarCondicion(condition:string){

  if(!odontograma || !pieza) return;


  // guardar diagnóstico
  const {error}=await supabase
  .from("teeth_conditions")
  .upsert(
  {
   odontogram_id:odontograma,
   tooth_number:pieza,
   condition:condition,
   surface:"General",
   notes:"Registrado desde CRM Dental SELLERS TECH"
  },
  {
   onConflict:"odontogram_id,tooth_number"
  }
  );


  if(!error){

  await supabase
  .from("odontogram_history")
  .insert({
   odontogram_id:odontograma,
   tooth_number:pieza,
   new_condition:condition,
   clinical_note:"Actualización desde odontograma SELLERS TECH"
  });


  setMensaje("Diagnóstico guardado correctamente");

  cargarEstados(odontograma);

  }

  else{

  console.error(error);

  setMensaje("Error al guardar diagnóstico");

  }

  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Odontograma Digital SELLERS TECH</h1>
      <p className="text-gray-500 mt-2">Registro clínico conectado a Supabase</p>

      <div className="bg-white rounded-xl shadow p-6 mt-6">
        <label className="font-bold">Paciente</label>
        <select className="border p-3 rounded ml-4" value={paciente} onChange={(e)=>seleccionarPaciente(e.target.value)}>
          <option value="">Seleccionar paciente</option>
          {pacientes.map(p=>(<option key={p.id} value={p.id}>{p.full_name}</option>))}
        </select>
      </div>

      <div className="bg-white rounded-xl shadow p-8 mt-8">
        <h2 className="text-xl font-bold mb-6">Dentición permanente</h2>
        <div className="grid grid-cols-8 gap-4">
          {dientes.map(d=>{
            const estado=estados.find(e=>e.tooth_number===d);
            return <button key={d} onClick={()=>setPieza(d)} className={`border rounded-xl p-4 hover:bg-blue-100 ${estado?'bg-red-100':''}`}>
              🦷<br/>{d}<br/>
              <small>{estado?.condition || ''}</small>
            </button>
          })}
        </div>
      </div>

      {pieza && <div className="bg-white rounded-xl shadow p-6 mt-8">
        <h2 className="text-xl font-bold">Pieza seleccionada: {pieza}</h2>
        <div className="grid md:grid-cols-3 gap-4 mt-5">
          {condiciones.map(c=><button key={c.name} onClick={()=>guardarCondicion(c.name)} className={`${c.color} text-white p-3 rounded`}>{c.name}</button>)}
        </div>
        {mensaje && <p className="mt-4 text-green-600">{mensaje}</p>}
      </div>}
    </div>
  )
}
