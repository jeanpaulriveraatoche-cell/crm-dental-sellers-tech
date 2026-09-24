"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginUser } from "@/lib/auth";

export default function Home() {

  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const [loading, setLoading] = useState(false);


  const handleLogin = async () => {

    setError("");
    setLoading(true);

    try {

      await loginUser(email, password);

      router.push("/dashboard");

    } catch (error:any) {

      console.log(error.message);
      setError(error.message || "Usuario o contraseña incorrectos");

    } finally {

      setLoading(false);

    }

  };


  return (

    <main className="min-h-screen flex items-center justify-center bg-[#F3F2F2]">


      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">


        <div className="text-center mb-8">


          <div className="mx-auto w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
            CRM
          </div>


          <h1 className="text-3xl font-bold mt-5 text-gray-900">
            CRM Dental
          </h1>


          <p className="text-gray-500 mt-2">
            Gestión integral de centros odontológicos
          </p>


        </div>



        <label className="block text-sm mb-2">
          Correo electrónico
        </label>


        <input

          type="email"

          value={email}

          onChange={(e)=>setEmail(e.target.value)}

          placeholder="usuario@clinica.com"

          className="w-full border rounded-lg px-4 py-3 mb-5"

        />



        <label className="block text-sm mb-2">
          Contraseña
        </label>


        <input

          type="password"

          value={password}

          onChange={(e)=>setPassword(e.target.value)}

          placeholder="********"

          className="w-full border rounded-lg px-4 py-3"

        />



        <button

          onClick={handleLogin}

          disabled={loading}

          className="w-full mt-6 bg-[#2A75BA] text-white py-3 rounded-lg font-semibold"

        >

          {loading ? "Ingresando..." : "Ingresar"}

        </button>



        {
          error && (

            <p className="text-red-500 text-center mt-4">

              {error}

            </p>

          )
        }



      </div>


    </main>

  );

}