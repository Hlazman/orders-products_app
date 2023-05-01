import Products from "../components/Products";
import { useSelector } from 'react-redux';

export const ProductsPage = () => {
  
  const orders = useSelector(state => state.orders.orders);
  const products = useSelector(state => state.orders.products);

  return (
    <Products
     orders={orders}
     products={products}
     />
  );
};