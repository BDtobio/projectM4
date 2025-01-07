/* eslint-disable @typescript-eslint/no-unused-vars */

// import Link from "next/link";
// import { CardProps } from "../../interfaces/CardProp";
// import Image from "next/image";

// const Card: React.FC<CardProps> = ({ id, name, price, description, image }) => {
//   const product = { id, name, price, description, image };

//   return (
//     <div className="border rounded-lg shadow-lg overflow-hidden w-80">
    
//       <div className="relative w-full h-64">
//         <Image
//           src={image}
//           alt={name}
//           layout="fill"
//           objectFit="contain"
//           className="rounded-t-lg"
//         />
//       </div>

  
//       <div className="p-4">
//         <h3 className="text-lg font-bold">{name}</h3>
//         <p className="text-gray-500 text-sm mb-2 line-clamp-2">{description}</p>
//         <div className="flex justify-between items-center">
//           <span className="text-xl font-semibold">${price}</span>
//           <Link
//             href={`/product/${id}`}
//             className="text-blue-500 font-medium hover:underline"
//           >
//             Ver más
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card;
import { CardProps } from "../../interfaces/CardProp";
import Image from "next/image";

const Card: React.FC<CardProps> = ({ id, name, price, description, image }) => {
  return (
    <div className="border rounded-lg shadow-lg overflow-hidden w-80">
      <div className="relative w-full h-64">
        <Image
          src={image}
          alt={name}
          layout="fill"
          objectFit="contain"
          className="rounded-t-lg"
        />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="text-gray-500 text-sm mb-2 line-clamp-2">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-xl font-semibold">${price}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
