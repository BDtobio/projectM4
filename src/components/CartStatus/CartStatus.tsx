"use client";

import { useCart } from "@/contexts/CartContext";

export default function CartStatus() {
    const { items} = useCart();
    return (
        <p>productos en carrito: {items.length}</p>
    );
}