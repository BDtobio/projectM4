/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { IProduct } from '@/interfaces/product';
import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface CartContextType {
  items: IProduct[];
  
  addItemToCart: (item: IProduct) => void;
  removeItemFromCart: (productId: number) => void;
  emptyCart: () => void;
  countItems: (id: number) => number;
}

const CartContext = createContext<CartContextType >({
    items: [],
 
    addItemToCart: (item: IProduct) => {},
    removeItemFromCart: (id: number) => {},  
    emptyCart: () => {},
    countItems: (id: number) => 0,
});

export function CartProvider({ children }: { children: ReactNode }) {
    const [items,setItems] = useState<IProduct[]>([]);

    useEffect(() => {

          const savedItems =localStorage.getItem('cartItems');
          if (savedItems)return setItems(JSON.parse(savedItems));
          setItems([]);
        },[]);


 const addItemToCart = (item: IProduct) => {
    setItems([...items, item]);
    localStorage.setItem('cartItems', JSON.stringify([...items, item]));
}

 const removeItemFromCart = (id: number) => {
  const filteredItems = items.filter((item) => item.id !== id);
    setItems(filteredItems);
    localStorage.setItem('cartItems',JSON.stringify(filteredItems));  
};


const emptyCart = () => {
    setItems([]);
    localStorage.removeItem('cartItems');
};



  const countItems = (id: number) => {
    return items.filter(item => item.id === id).length;
  };

  

  return (
    <CartContext.Provider value={{ items, addItemToCart, removeItemFromCart,emptyCart,countItems }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
    const context = useContext(CartContext);
    
    return context;
};