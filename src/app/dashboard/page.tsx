// "use client";

// import { useAuth } from "@/contexts/AuthContext";
// import { usePrivate } from "@/hooks/usePrivate";
// import axios from "axios";
// import { useEffect, useState } from "react";

// export default function Dashboard() {
//   usePrivate();
//   const { user,token } = useAuth();
// const [usersOrders,setUsersOrders]=useState([]);
// useEffect(()=>{
//   token && axios
//   .get(`${process.env.NEXT_PUBLIC_API_URL}/users/orders`,{
//     headers: {
//       authorization: token,
//   },
// })
//   .then((response)=>{
//     setUsersOrders(response.data);
//   })
//   .catch((error)=>{
//     console.log(error);
//   });
// },[token]);

//   return (
//     <div className="bg-gray-100 min-h-screen pt-20 p-6">
//       <div className="bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto">
//         <h1 className="text-3xl font-semibold text-gray-800 mb-6">Dashboard de Usuario</h1>
//         <p>Nombre: {user?.name}</p>
//         <p>Email: {user?.email}</p>
//         <p>Dirección: {user?.address}</p>
//         <p>Teléfono: {user?.phone}</p>

//         <div className="text-lg text-gray-600 mb-4">
//           {usersOrders.length ? (
//             <div>
//               {usersOrders.map((order) => {
//                 return (
               
//                   <div>{order.id}</div>
//                 );
//               })}
//             </div>
//           ) : (
//             <div>No tienes pedidos</div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";

import { useAuth } from "@/contexts/AuthContext";
import { usePrivate } from "@/hooks/usePrivate";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Dashboard() {
  usePrivate();
  const { user, token } = useAuth();
  const [userOrders, setUserOrders] = useState([]);

  useEffect(() => {
    if (token) {
      axios
        .get(`${process.env.NEXT_PUBLIC_API_URL}/users/orders`, {
          headers: {
            Authorization: token,
          },
        })
        .then((response) => {
          setUserOrders(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [token]);

  return (
    <div className="bg-gray-100 min-h-screen pt-20 p-6">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">
          Dashboard de Usuario
        </h1>
        <p>Nombre: {user?.name}</p>
        <p>Email: {user?.email}</p>
        <p>Dirección: {user?.address}</p>
        <p>Teléfono: {user?.phone}</p>

        <div className="text-lg text-gray-600 mb-4">
          {userOrders.length ? (
            userOrders.map((order) => (
              <div
                key={order.id}
                className="border-b py-2"
              >
                <p>Orden ID: {order.id}</p>
              </div>
            ))
          ) : (
            <p>No tienes pedidos</p>
          )}
        </div>
      </div>
    </div>
  );
}
