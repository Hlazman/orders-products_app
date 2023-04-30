import { useState } from "react";
import { orders, products } from "../data";
import CreateOrder from "../components/OrderCreate";

export const CreateOrderPage = () => {
  const [currentOrders, setcurrentOrders] = useState(orders);

  return (
    <>
      <h1 className="m-3"> Create new Order </h1>
      <CreateOrder 
        currentOrders={currentOrders}
        setCurrentOrders={setcurrentOrders}
        currentProducts={products}
      />
    </>
  );
};