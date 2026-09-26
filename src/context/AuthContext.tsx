"use client";

import {
createContext,
useContext,
useEffect,
useState
} from "react";

import {supabase} from "@/lib/supabase";


const AuthContext = createContext<any>(null);


export function AuthProvider({
children
}:{
children:React.ReactNode
}){


const [profile,setProfile]=useState<any>(null);

const [loading,setLoading]=useState(true);



useEffect(()=>{

loadProfile();

},[]);



async function loadProfile(){

const {
data:{
user
}
}=await supabase.auth.getUser();



if(!user){

setLoading(false);
return;

}



const {data}=await supabase

.from("organization_users")

.select(`
role,
branch_id,
organization_id,
branches(
name
),
organizations(
name
)
`)

.eq(
"user_id",
user.id
)

.single();



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