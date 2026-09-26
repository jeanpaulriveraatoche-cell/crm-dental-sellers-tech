"use client";

import {
createContext,
useContext,
useEffect,
useState
} from "react";

import { supabase } from "@/lib/supabase";


const AuthContext = createContext<any>(null);


export function AuthProvider({
children
}:{
children:React.ReactNode
}){


const [profile,setProfile]=useState<any>(null);
const [loading,setLoading]=useState(true);



useEffect(()=>{

getProfile();

},[]);



async function getProfile(){


const {
data:{
user
}
}=await supabase.auth.getUser();



if(!user){

setLoading(false);
return;

}



const {data,error}=await supabase

.from("organization_users")

.select(`
role,
organization_id,
branch_id,
organizations(
name
),
branches(
name
)
`)

.eq(
"user_id",
user.id
)

.single();



if(error){

console.log(error);

}



setProfile({

email:user.email,

...data

});


setLoading(false);


}



return (

<AuthContext.Provider

value={{
profile,
loading
}}

>

{children}

</AuthContext.Provider>


)

}



export function useAuth(){

return useContext(AuthContext);

}