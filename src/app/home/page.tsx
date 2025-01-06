
import ListaProductos from "@/components/ListaProductos/ListaProductos";
import { getProducts } from "@/helpers/getProducts";

import { IProduct } from "@/interfaces/product";

export default async function Home() {
  
  const fetchProducts:IProduct[]=await getProducts()
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="text-center">
        
        <div className="bg-gray-100 min-h-screen">
      <header className="bg-white shadow p-4">
        <h1 className="text-2xl font-bold text-center">Apple Store</h1>
      </header>
      <main>
        < ListaProductos 
        fetchProducts={fetchProducts}/>

      </main>
    </div>
      </div>
    </div>
  );
}
