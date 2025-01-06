"use client";
import { useAuth } from "@/contexts/AuthContext";

export default function AccountPage() {
  const { user} = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white text-gray-900">
      <header className="p-6 border-b border-gray-300">
        <h1 className="text-3xl font-semibold text-center">Mi Cuenta</h1>
      </header>
      <main className="flex flex-col items-center justify-center px-6 py-12">
       
        <div className="w-full max-w-lg bg-white shadow-md rounded-lg p-8">
          <h2 className="text-2xl font-medium mb-4">Hola, {user?.name || "Usuario"}</h2>
          <p className="text-gray-600 mb-6">
            Correo electrónico: <span className="font-semibold">{user?.email || "correo@ejemplo.com"}</span>
          </p>

        
          <div className="flex justify-between">
           
            <button
              
              className="bg-gray-200 text-gray-900 px-4 py-2 rounded-lg shadow hover:bg-gray-300 transition duration-200"
            >
              Editar perfil
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
