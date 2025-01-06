import { createContext, useContext, useState, useEffect, ReactNode } from "react";

// Define la estructura de una orden
interface Order {
  id: number;
  name: string;
}

// Define el contexto
interface OrdersContextType {
  orders: Order[];
  removeOrder: (id: number) => void;
}

// Creamos el contexto
const OrdersContext = createContext<OrdersContextType | undefined>(undefined);

// Hook para usar el contexto
export const useOrders = (): OrdersContextType => {
  const context = useContext(OrdersContext);
  if (!context) {
    throw new Error("useOrders debe usarse dentro de un OrdersProvider");
  }
  return context;
};

// Define las props del proveedor
interface OrdersProviderProps {
  children: ReactNode;
}

// Proveedor
export const OrdersProvider: React.FC<OrdersProviderProps> = ({ children }) => {
  const [orders, setOrders] = useState<Order[]>([]);

  // Cargar órdenes desde localStorage
  useEffect(() => {
    const storedOrders = localStorage.getItem("orders");
    if (storedOrders) {
      setOrders(JSON.parse(storedOrders));
    } else {
      setOrders([]);
    }
  }, []);

  // Guardar órdenes en localStorage
  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  // Función para eliminar una orden
  const removeOrder = (id: number) => {
    setOrders((prevOrders) => prevOrders.filter((order) => order.id !== id));
  };

  return (
    <OrdersContext.Provider value={{ orders, removeOrder }}>
      {children}
    </OrdersContext.Provider>
  );
};