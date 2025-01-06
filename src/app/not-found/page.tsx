

'use client'; 

export default function NotFound() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-600">404</h1>
        <p className="mt-4 text-lg text-gray-600">Página no encontrada</p>
      </div>
    </div>
  );
}
