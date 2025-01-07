
import ListaProductos from "@/components/ListaProductos/ListaProductos";
import { getProducts } from "@/helpers/getProducts";

import { IProduct } from "@/interfaces/product";

export default async function Home() {
  
  const fetchProducts:IProduct[]=await getProducts()
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="text-center">
        
        <div className="bg-gray-100 min-h-screen mt-20">
      
      <main>
        < ListaProductos 
        fetchProducts={fetchProducts}/>

      </main>
    </div>
      </div>
    </div>
  );
}
