import React from "react";

import Card from "../cardProduct/cardProduct";
import Link from "next/link";

import { IProduct } from "@/interfaces/product";

const ListaProductos= ({fetchProducts}:{fetchProducts:IProduct[]} ) => {

  
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {fetchProducts.map(({ id, name, price, description, image, stock }) => {
          return (
            <Link key={id} href={`product/${id}`}>
              <Card
              id={id}
                name={name}
                price={price}
                description={description}
                image={image}
                stock={stock}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ListaProductos;
