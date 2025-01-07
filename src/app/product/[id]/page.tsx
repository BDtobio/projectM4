/* eslint-disable @next/next/no-img-element */

import AddProduct from "@/components/addProduct/AddProduct";
import { getProductById } from "@/helpers/getProductById";


export default async function ProductDetail({ params }: { params: { id: string } }) {
  const { id } = params;
  const productId = Number(id);

  if (isNaN(productId)) {
    return (
      <div className="text-center text-gray-600 text-xl mt-4">
        Producto no encontrado.
      </div>
    );
  }

  const product = await getProductById(productId);

  if (!product) {
    return (
      <div className="text-center text-gray-600 text-xl mt-4">
        Producto no encontrado.
      </div>
    );
  }

  const { name, price, image,description } = product;

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center py-12 px-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl w-full flex flex-col lg:flex-row mt-20 flex-wrap">
   
        <div className="relative w-full lg:w-1/2">
          <div className="relative w-full h-64 md:h-80 lg:h-auto">
            <img
  src={image}
  alt={`Imagen de ${name}`}
  className="rounded-l-lg w-full h-full object-contain"
/>
            {/* <Image
              src={image}
              alt={`Imagen de ${name}`}
              layout="fill"
              objectFit="contain"
              className="rounded-l-lg"
            /> */}
          </div>
        </div>

      
        <div className="p-6 lg:p-10 flex flex-col justify-between lg:w-1/2 flex-wrap">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{name}</h1>
          <p className="text-gray-600 text-lg mb-6 leading-relaxed">
            {description}
          </p>
          <p className="text-2xl font-semibold text-blue-600 mb-6">
            ${price.toFixed(2)}
          </p>
          <AddProduct product={product} />
        </div>
      </div>

    
      <div className="mt-10">
        <a
          href="/home"
          className="px-6 py-3 bg-gray-800 text-white text-lg font-semibold rounded-lg shadow hover:bg-gray-700 transition"
        >
          Volver
        </a>
      </div>
    </div>
  );
}
