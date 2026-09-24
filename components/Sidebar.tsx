"use client";

import Link from "next/link";


export default function Sidebar(){

return (

<aside className="
w-64
bg-[#1E2A3A]
text-white
min-h-screen
p-6
">

<h1 className="text-2xl font-bold mb-8">
🦷 CRM Dental
</h1>


<nav className="space-y-4">


<Link href="/dashboard">
📊 Dashboard
</Link>


<Link href="/dashboard/clinics">
🏥 Sedes
</Link>


<Link href="/dashboard/patients">
👥 Pacientes
</Link>


<Link href="/dashboard/appointments">
📅 Agenda
</Link>


<Link href="/dashboard/treatments">
🦷 Tratamientos
</Link>


<Link href="/dashboard/payments">
💰 Caja
</Link>


<Link href="/dashboard/reports">
📈 Reportes
</Link>


</nav>


</aside>

)

}