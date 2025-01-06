// components/AddProduct.tsx
"use client";

import { useCart } from "@/contexts/CartContext";
import { IProduct } from "@/interfaces/product";
import { useEffect, useState } from "react";

export default function AddProduct({ product }: { product: IProduct }) {
  const { addItemToCart,items, countItems } = useCart();
  const [disabled, setDisabled] = useState(false);

  const handleAddToCart = () => {
    addItemToCart(product);
  };

  useEffect(() => {
    // if (countItems(product.id) >= product.stock) {
    //   setDisabled(true);
    // }
    if (countItems(product.id) >= 1) {
      setDisabled(true);
    }
  }, [countItems, items, product.id, product.stock]);
  
  return (
    
    <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500" onClick={handleAddToCart} disabled={disabled}>
    Add Product To Cart
      </button>
      
  );
}
