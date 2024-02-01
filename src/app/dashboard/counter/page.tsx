


import { CartCounter } from "@/shopping-cart/components";
import { Metadata } from "next";



export const metadata: Metadata = {
 title: 'Counter Page',
 description: 'contador de productos en el carrito',
};

export default function CounterPage() {



  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos en el carrito </span>
      <CartCounter />
    </div>
  );
}