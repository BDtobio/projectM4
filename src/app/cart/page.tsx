
// "use client";
// import React from "react";
// import { useCart } from "@/contexts/CartContext";
// import Swal from "sweetalert2";
// import axios from "axios";
// import { useAuth } from "@/contexts/AuthContext";
// import { useRouter } from "next/router";

// export default function Cart() {
//   const { items, removeItemFromCart, emptyCart} = useCart();
//   const {token,user}=useAuth(); 
// const router=useRouter(); 
 

//   const emptyCartHandler = () => {
//     Swal.fire({
//       title: "¿Estás seguro de vaciar el carrito?",
//       text: "¡No podrás revertir esta acción!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Vaciar carrito",
//       cancelButtonText: "Cancelar",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         emptyCart();
//         Swal.fire(
//           "Carrito vacío",
//           "Todos los productos han sido eliminados.",
//           "success"
//         );
//       } else if (result.isDismissed) {
//         Swal.fire("Cancelado", "¡Tu carrito sigue intacto!", "error");
//       }
//     });
//   };
  
// const CheckoutHandler=()=>{
//   Swal.fire({
//     title: "¿Estás seguro de pagar?",
//     icon: "warning",
//     showCancelButton: true,
//     confirmButtonColor: "#3085d6",
//     cancelButtonColor: "#d33",
//     confirmButtonText: "Pagar",
//   }).then((result) => {
//     axios.post(`${process.env.NEXT_PUBLIC_API_URL}/orders/`,{
// userId:user?.id,
// products:items.map((item)=> item.id),  
//     },{
//       headers: {
//         Authorization: token,
//       },
//     })
//     .then((response) => {
//       console.log(response);
//       emptyCart();
//       router.push("/dashboard");
//     }
//     ).catch((error) => {
//       console.log(error);
//     });
//     if (result.isConfirmed) {
//       Swal.fire("haz Pagado!", "¡Pagado!", "success");
//     } else if (result.isDismissed) {
//       Swal.fire("Haz Cancelado", "¡Cancelado!", "error");
//     }
//   });
// }


  
//   return (
//     <div className="bg-gray-100 min-h-screen pt-20 p-6">
//       <div className="bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto">
//         <h1 className="text-3xl font-semibold text-gray-800 mb-6">Carrito de Compras</h1>
//         {aggregatedItems.length ? (
//           <div>
//             {aggregatedItems.map((item) => (
//               <div
//                 key={item.id}
//                 className="flex justify-between items-center border-b pb-4 mb-4"
//               >
//                 <div>
//                   <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
//                   <p className="text-gray-600">Cantidad: {item.count}</p>
//                 </div>
//                 <div>
//                   <p className="text-gray-600">Precio: ${item.price}</p>
//                 </div>
//                 <div>
//                   <p className="text-gray-600">
//                     Total: ${item.price * item.count}
//                   </p>
//                 </div>
//                 <div className="flex gap-4 items-center">
//                   <button
//                     className="bg-red-500 text-white px-4 py-2 rounded-lg"
//                     onClick={() => removeItemFromCart(item.id)}
//                   >
//                     Remove
//                   </button>
//                   <input
//                     type="number"
//                     className="w-16 text-center border rounded"
//                     value={item.count}
//                     min="1"
//                     onChange={(e) =>
//                       updateItemQuantity(item.id, parseInt(e.target.value))
//                     }
//                   />
//                 </div>
//               </div>
//             ))}
//             <div className="flex justify-between gap-4 mt-4">
//               <button
//                 className="bg-red-600 text-white px-6 py-3 rounded-lg w-1/2"
//                 onClick={emptyCartHandler}
//               >
//                 Clear Cart
//               </button>
//               <button className="bg-green-600 text-white px-6 py-3 rounded-lg w-1/2" onClick={CheckoutHandler}>
//                 Checkout
//               </button>
//             </div>
//           </div>
//         ) : (
//           <h2 className="text-xl text-gray-600 text-center">
//             No hay productos en el carrito
//           </h2>
//         )}
//       </div>
//     </div>
//   );
// }




// ultima funcional
// "use client";
// import React from "react";
// import { useCart } from "@/contexts/CartContext";
// import Swal from "sweetalert2";
// import axios from "axios";
// import { useAuth } from "@/contexts/AuthContext";
//  import { useRouter } from "next/navigation";

// export default function Cart() {
//   const { items, removeItemFromCart, emptyCart } = useCart();
//   const { token, user } = useAuth();
//   const router = useRouter();

//   const emptyCartHandler = () => {
//     Swal.fire({
//       title: "¿Estás seguro de vaciar el carrito?",
//       text: "¡No podrás revertir esta acción!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Vaciar carrito",
//       cancelButtonText: "Cancelar",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         emptyCart();
//         Swal.fire(
//           "Carrito vacío",
//           "Todos los productos han sido eliminados.",
//           "success"
//         );
//       }
//     });
//   };

//   const checkoutHandler = async () => {
//     if (!items.length) {
//       return Swal.fire("Error", "El carrito está vacío", "error");
//     }

//     try {
//       const result = await Swal.fire({
//         title: "¿Estás seguro de pagar?",
//         icon: "warning",
//         showCancelButton: true,
//         confirmButtonColor: "#3085d6",
//         cancelButtonColor: "#d33",
//         confirmButtonText: "Pagar",
//         cancelButtonText: "Cancelar",
//       });

//       if (result.isConfirmed) {
//         const response = await axios.post(
//           `${process.env.NEXT_PUBLIC_API_URL}/orders`,
//           {
//             userId: user?.id,
//             products: items.map((item) => item.id),
//           },
//           {
//             headers: {
//               Authorization: token,
//             },
//           }
//         );
//         console.log(response.data);
//         emptyCart();
//         router.push("/dashboard");
//         Swal.fire("Pagado", "Tu orden se ha procesado correctamente", "success");
//       }
//     } catch (error) {
//       console.error(error);
//       Swal.fire("Error", "Hubo un problema al procesar tu orden", "error");
//     }
//   };

//   return (
//     <div className="bg-gray-100 min-h-screen pt-20 p-6">
//       <div className="bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto">
//         <h1 className="text-3xl font-semibold text-gray-800 mb-6">
//           Carrito de Compras
//         </h1>
//         {items.length ? (
//           <div>
//             {items.map((item) => (
//               <div
//                 key={item.id}
//                 className="flex justify-between items-center border-b pb-4 mb-4"
//               >
//                 <div>
//                   <h3 className="text-lg font-semibold text-gray-800">
//                     {item.name}
//                   </h3>
//                 </div>
//                 <p className="text-gray-600">Precio: ${item.price}</p>
//                 <button
//                   className="bg-red-500 text-white px-4 py-2 rounded-lg"
//                   onClick={() => removeItemFromCart(item.id)}
//                 >
//                   Eliminar
//                 </button>
//               </div>
//             ))}
//             <div className="flex justify-between gap-4 mt-4">
//               <button
//                 className="bg-red-600 text-white px-6 py-3 rounded-lg w-1/2"
//                 onClick={emptyCartHandler}
//               >
//                 Vaciar Carrito
//               </button>
//               <button
//                 className="bg-green-600 text-white px-6 py-3 rounded-lg w-1/2"
//                 onClick={checkoutHandler}
//               >
//                 Pagar
//               </button>
//             </div>
//           </div>
//         ) : (
//           <h2 className="text-xl text-gray-600 text-center">
//             No hay productos en el carrito
//           </h2>
//         )}
//       </div>
//     </div>
//   );
// }
"use client";
import React, { useEffect, useState } from "react";
import { useCart } from "@/contexts/CartContext";
import Swal from "sweetalert2";
import axios from "axios";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";

export default function Cart() {
  const { items, removeItemFromCart, emptyCart } = useCart();
  const { token, user } = useAuth();
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(!!token); // Controla si está logueado

  useEffect(() => {
    setIsAuthenticated(!!token); // Actualiza el estado cuando cambie el token
  }, [token]);

  const emptyCartHandler = () => {
    Swal.fire({
      title: "¿Estás seguro de vaciar el carrito?",
      text: "¡No podrás revertir esta acción!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Vaciar carrito",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        emptyCart();
        Swal.fire(
          "Carrito vacío",
          "Todos los productos han sido eliminados.",
          "success"
        );
      }
    });
  };

  const checkoutHandler = async () => {
    if (!items.length) {
      return Swal.fire("Error", "El carrito está vacío", "error");
    }

    if (!token) {
      Swal.fire({
        title: "Inicia sesión",
        text: "Debes estar logueado para realizar el pago.",
        icon: "info",
        confirmButtonText: "Ir a iniciar sesión",
      }).then(() => {
        router.push("/login");
      });
      return;
    }

    try {
      const result = await Swal.fire({
        title: "¿Estás seguro de pagar?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Pagar",
        cancelButtonText: "Cancelar",
      });

      if (result.isConfirmed) {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/orders`,
          {
            userId: user?.id,
            products: items.map((item) => item.id),
          },
          {
            headers: {
              Authorization: token,
            },
          }
        );
        console.log(response.data);
        emptyCart();
        router.push("/dashboard");
        Swal.fire("Pagado", "Tu orden se ha procesado correctamente", "success");
      }
    } catch (error) {
      console.error(error);
      Swal.fire("Error", "Hubo un problema al procesar tu orden", "error");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen pt-20 p-6">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">
          Carrito de Compras
        </h1>
        {items.length ? (
          <div>
            {items.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b pb-4 mb-4"
              >
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {item.name}
                  </h3>
                </div>
                <p className="text-gray-600">Precio: ${item.price}</p>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded-lg"
                  onClick={() => removeItemFromCart(item.id)}
                >
                  Eliminar
                </button>
              </div>
            ))}
            <div className="flex justify-between gap-4 mt-4">
              <button
                className="bg-red-600 text-white px-6 py-3 rounded-lg w-1/2"
                onClick={emptyCartHandler}
              >
                Vaciar Carrito
              </button>
              <button
  className={`px-6 py-3 rounded-lg w-1/2 ${
    isAuthenticated
      ? "bg-green-600 text-white"
      : "bg-gray-400 text-gray-700 cursor-not-allowed"
  }`}
  onClick={checkoutHandler}
  disabled={!isAuthenticated}
>
  Pagar
</button>

            </div>
          </div>
        ) : (
          <h2 className="text-xl text-gray-600 text-center">
            No hay productos en el carrito
          </h2>
        )}
      </div>
    </div>
  );
}
