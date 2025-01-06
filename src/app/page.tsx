
// import Link from "next/link";

// export default function Landing() {
//   return (
//     <div
//       className="h-screen bg-cover bg-center flex flex-col items-center justify-center text-white"
//       style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2016/10/11/09/26/office-1730939_1280.jpg')" }}
//     >
      
      
//       <Link href="/home">
//         <button className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 transition duration-300">
//           Ir a la Tienda
//         </button>
//       </Link>
//     </div>
//   );
// }
import Link from "next/link";

export default function Landing() {
  return (
    <div
      className="h-screen bg-cover bg-center flex flex-col items-center justify-center text-white"
      style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2016/10/11/09/26/office-1730939_1280.jpg')" }}
    >
      <h1 className="text-5xl font-semibold mb-8 text-gray-800 drop-shadow-lg">
      Welcome to the Store
            </h1>

      <Link href="/home">
        <button
          className="px-8 py-3 bg-gray-900 text-white font-medium rounded-full shadow-md 
          transform transition-all duration-300 ease-in-out 
          hover:scale-105 hover:bg-gray-700 hover:shadow-xl hover:text-gray-200
          relative overflow-hidden group"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
          <span className="relative z-10">Go to the Store</span>
        </button>
      </Link>
    </div>
  );
}
