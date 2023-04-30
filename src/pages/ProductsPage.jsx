import Products from "../components/Products";
import { orders, products } from "../data";

export const ProductsPage = () => {
  return (
    <Products
     orders={orders}
     products={products}
     />
  );
};