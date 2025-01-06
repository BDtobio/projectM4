/* eslint-disable @typescript-eslint/no-unused-vars */


import Link from "next/link";
import { CardProps} from "../../interfaces/CardProp"
import Image from "next/image";



const Card: React.FC<CardProps> = ({ id,name, price, description, image }) => {
  const product = { id, name, price, description, image };
    return (
      <div className="border rounded-lg shadow-lg overflow-auto w-80">
         <Image
      src={image} // URL completa de la imagen
      alt={name}  // Texto alternativo
      width={500} // Ancho deseado
      height={192} // Altura deseada
      className="h-48 w-full object-cover"
    />
        <div className="p-4">
          <h3 className="text-lg font-bold">{name}</h3>
          <p className="text-gray-500 text-sm mb-2">{description}</p>
          <div className="flex justify-between items-center">
            <span className="text-xl font-semibold">${price}</span>
            <Link href={`/product/${id}`}>
            
            </Link>

           
          </div>
       

        </div>
      </div>
    );
  };
  
  export default Card;