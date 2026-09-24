export default function Home() {

  return (

    <main className="min-h-screen flex items-center justify-center bg-[#F3F2F2]">

      <section className="bg-white w-full max-w-md rounded-2xl shadow-xl p-8">

        <h1 className="text-3xl font-bold text-center text-[#1E2A3A]">
          CRM Odontológico
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Gestión inteligente para centros odontológicos
        </p>


        <div className="mt-8">

          <label className="text-sm text-gray-700">
            Correo electrónico
          </label>

          <input
            type="email"
            placeholder="correo@clinica.com"
            className="w-full border rounded-lg p-3 mt-2"
          />


          <label className="text-sm text-gray-700 block mt-5">
            Contraseña
          </label>

          <input
            type="password"
            placeholder="********"
            className="w-full border rounded-lg p-3 mt-2"
          />


          <button
            className="w-full mt-6 bg-[#2A75BA] text-white py-3 rounded-lg hover:bg-[#4EA9FF]"
          >
            Ingresar
          </button>

        </div>


      </section>

    </main>

  );
}