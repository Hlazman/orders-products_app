import CreateOrder from "../components/OrderCreate";
import { useSelector } from 'react-redux';

export const CreateOrderPage = () => {

  const orders = useSelector(state => state.orders.orders);
  const products = useSelector(state => state.orders.products);

  return (
    <>
      <h1 className="m-3"> Create new Order </h1>
      <CreateOrder 
        currentOrders={orders}
        currentProducts={products}
      />
    </>
  );
};