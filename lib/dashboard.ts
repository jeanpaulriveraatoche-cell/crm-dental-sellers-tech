import { supabase } from "./supabase";


export async function getDashboardData(){


  const hoy = new Date()
    .toISOString()
    .split("T")[0];



  // =========================
  // PACIENTES
  // =========================

  const { count: pacientes } = await supabase
    .from("patients")
    .select("*", {
      count: "exact",
      head: true
    });



  // =========================
  // CITAS HOY
  // =========================

  const { data: citas } = await supabase
  .from("appointments")
  .select("*")
  .gte(
    "appointment_date",
    hoy + "T00:00:00"
  )
  .lte(
    "appointment_date",
    hoy + "T23:59:59"
  )
  .order(
    "appointment_date",
    {
      ascending:true
    }
  )
  .limit(5);



  // =========================
  // TRATAMIENTOS
  // =========================

  const { count: tratamientos } = await supabase
    .from("treatments")
    .select("*",{
      count:"exact",
      head:true
    });



  // =========================
  // INGRESOS
  // =========================

  const { data: pagos } = await supabase
    .from("payments")
    .select("amount");



  const ingresos =
    pagos?.reduce(
      (total,p)=>
        total + Number(p.amount || 0),
      0
    ) || 0;




  // =========================
  // ACTIVIDAD RECIENTE
  // =========================

  const { data: recientes } = await supabase
    .from("patients")
    .select("full_name")
    .order(
      "id",
      {
        ascending:false
      }
    )
    .limit(5);





  return {


    pacientes: pacientes ?? 0,


    citas: citas ?? [],


    tratamientos: tratamientos ?? 0,


    ingresos,


    recientes: recientes ?? []


  };


}