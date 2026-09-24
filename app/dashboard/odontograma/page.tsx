"use client";

import {useState} from "react";


export default function OdontogramaPage(){


const [pieza,setPieza]=useState("");

const dientes = [

"11","12","13","14","15","16","17","18",
"21","22","23","24","25","26","27","28",
"31","32","33","34","35","36","37","38",
"41","42","43","44","45","46","47","48"

];


return (

<div className="p-8">


<h1 className="text-3xl font-bold">
Odontograma Digital
</h1>


<p className="text-gray-500 mt-2">
Registro gráfico del estado dental del paciente
</p>



<div className="
bg-white
rounded-xl
shadow
p-8
mt-8">


<h2 className="text-xl font-bold mb-6">
Dentición permanente
</h2>



<div className="
grid
grid-cols-8
gap-4">


{
dientes.map((d)=>(


<button

key={d}

onClick={()=>setPieza(d)}

className="
border
rounded-xl
p-4
hover:bg-blue-100
transition">

🦷
<br/>

{d}


</button>


))
}


</div>



</div>




{
pieza && (

<div className="
bg-white
rounded-xl
shadow
p-6
mt-8">


<h2 className="text-xl font-bold">

Pieza seleccionada: {pieza}

</h2>


<div className="grid md:grid-cols-3 gap-4 mt-5">


<button className="
bg-red-500
text-white
p-3
rounded">

Caries

</button>


<button className="
bg-blue-500
text-white
p-3
rounded">

Restauración

</button>


<button className="
bg-green-600
text-white
p-3
rounded">

Tratamiento realizado

</button>


</div>



</div>


)

}



</div>

)

}