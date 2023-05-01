import Orders from "../components/Orders";
import { useSelector } from 'react-redux';

export const OrdersPage = () => {
  const orders = useSelector(state => state.orders.orders);
  const products = useSelector(state => state.orders.products);
  
  return (
    <Orders
      orders={orders}
      products={products}
    />
  );
};