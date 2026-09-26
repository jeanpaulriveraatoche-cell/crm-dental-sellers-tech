"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  Users,
  CalendarDays,
  Smile,
  Stethoscope,
  Building2,
  Wallet,
  BarChart3,
  Settings
} from "lucide-react";

export default function Sidebar(){

const menu=[
{
title:"PRINCIPAL",
items:[
{
name:"Dashboard",
url:"/dashboard",
icon:LayoutDashboard
}
]
},
{
title:"GESTIÓN CLÍNICA",
items:[
{
name:"Pacientes",
url:"/dashboard/patients",
icon:Users
},
{
name:"Agenda",
url:"/dashboard/appointments",
icon:CalendarDays
},
{
name:"Odontograma",
url:"/dashboard/odontograma",
icon:Smile
},
{
name:"Tratamientos",
url:"/dashboard/tratamientos",
icon:Stethoscope
}
]
},
{
title:"ADMINISTRACIÓN",
items:[
{
name:"Sedes",
url:"/dashboard/sedes",
icon:Building2
},
{
name:"Caja",
url:"/dashboard/caja",
icon:Wallet
}
]
},
{
title:"ANÁLISIS",
items:[
{
name:"Reportes",
url:"/dashboard/reportes",
icon:BarChart3
}
]
},
{
title:"CONFIGURACIÓN",
items:[
{
name:"Ajustes",
url:"#",
icon:Settings
}
]
}

];


return (

<aside className="
w-56
min-h-screen
bg-slate-950
text-white
p-5
">

<div className="
text-2xl
font-bold
mb-8
flex
items-center
gap-2
">

🦷 CRM Dental

</div>


<div className="
text-xs
text-slate-400
mb-6
">

SELLERS TECH

</div>


<nav className="space-y-7">

{
menu.map((section)=>(
<div key={section.title}>

<p className="
text-xs
uppercase
text-slate-500
mb-3
">
{section.title}
</p>


<div className="space-y-1">

{
section.items.map((item)=>{

const Icon=item.icon;

return(

<Link
key={item.name}
href={item.url}
className="
flex
items-center
gap-3
px-3
py-2
rounded-lg
text-slate-300
hover:bg-blue-600
hover:text-white
transition
"
>

<Icon size={18}/>

<span>
{item.name}
</span>

</Link>

)

})

}

</div>


</div>

))

}

</nav>


</aside>

)

}