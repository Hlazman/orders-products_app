import { useState } from "react";
import Orders from "../components/Orders";
import { orders, products } from "../data";

export const OrdersPage = () => {
  const [currentOrders, setcurrentOrders] = useState(orders);

  const handleDeleteOrder = (orderId) => {
    const updatedOrders = currentOrders.filter(order => order.id !== orderId);
    setcurrentOrders(updatedOrders);
  }

  return (
    <Orders
     orders={currentOrders}
     products={products}
     setOrders={handleDeleteOrder}
     />
  );
};