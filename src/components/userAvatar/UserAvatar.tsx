// "use client";
// import { useAuth } from "@/contexts/AuthContext";


// import Link from "next/link";

// export default function UserAvatar() {
//     const { isAuthenticated, logout } = useAuth();


//     return isAuthenticated ? (
//     <div>
//     <Link onClick={() => {
//         logout()}} href="/auth/login">
//            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200">
//                 Logout
//                 </button>
//     </Link>
//     </div>) :
//     (
//     <div>
//         <Link href={"/auth/register"}>
//         <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200">
//                   Register
//                 </button>
//                 </Link>
        
//                 <Link href={"/auth/login"}>
//         <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200">
//                  Login
//                 </button>
//                 </Link>
//     </div>
//     )

// }
"use client";
import { useAuth } from "@/contexts/AuthContext";
import Image from "next/image";
import Link from "next/link";

export default function UserAvatar() {
  const { isAuthenticated, logout, user } = useAuth(); 

  return isAuthenticated ? (
    <div className="flex items-center gap-4">
     
     
      <button
        onClick={logout}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
      >
        Logout
      </button>
      <Link href="/account">
        <div className="flex items-center cursor-pointer">
        
        <Image
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyzK2fuK3gDNJMRMKGHwHXfyqd6X1pL4lAxg&s"
    alt="User Avatar"
    width={45} 
    height={45}
    className="rounded-full object-cover"
  />
      
          <span className="ml-2 text-sm text-gray-700">{user?.name || "Mi Account"}</span>
        </div>
      </Link>
    </div>
  ) : (
    <div className="flex items-center gap-4">
     
      <Link href="/auth/register">
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200">
          Register
        </button>
      </Link>
      <Link href="/auth/login">
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200">
          Login
        </button>
      </Link>
    </div>
  );
}
