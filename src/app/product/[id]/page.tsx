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

  const { name, price} = product;

  
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-md max-w-lg w-full">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">
          Detalles del Producto
        </h1>
        <p className="text-lg text-gray-600 mb-2">
          <strong>Nombre:</strong> {name}
        </p>
        <p className="text-lg text-gray-600 mb-4">
          <strong>Precio:</strong> ${price.toFixed(2)}
        </p>
        <AddProduct product={product} />
      </div>
    </div>
  );
}
