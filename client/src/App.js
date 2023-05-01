import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import TopMenu from './components/TopMenu';
import { NotFoundPage } from './pages/NotFoundPage';
import { ProductsPage } from './pages/ProductsPage';
import { OrdersPage } from './pages/OrdersPage';
import NavigationMenu from './components/NavigationMenu';
import { CreateOrderPage } from './pages/CreateOrderPage';

import { useDispatch } from 'react-redux';
import { addOrders, addProducts } from '../src/features/ordersSlice';
import { useEffect, useCallback, useState } from 'react';


function App() {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  const getOrders = useCallback(() => {
    fetch('http://localhost:5000/api/orders')
      .then(response => response.json())
      .then(data => {
        const allOrders = [...data.orders];
        dispatch(addOrders(allOrders));
      })
      .catch(error => console.error(error));
  }, [dispatch]);

  const getProducts = useCallback(() => {
    fetch('http://localhost:5000/api/products')
      .then(response => response.json())
      .then(data => {
        const allProducts = [...data.products];
        dispatch(addProducts(allProducts));
      })
      .catch(error => console.error(error));
  }, [dispatch]);

  useEffect(() => {
    Promise.all([getOrders(), getProducts()])
      .then(() => setIsLoading(false))
      .catch(error => console.error(error));
  }, [getOrders, getProducts]);

  if (isLoading) { 
    return <div>Loading...</div>;
  }

  return (
    <>
      <TopMenu/>
      
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2 p-0 shadow-lg mt-1">
            <NavigationMenu />
          </div>
        <div className="col-md-10">
          <Routes>
            <Route path="/" element={<OrdersPage />} />
            <Route path="/orders" element={<Navigate to="/" replace />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/create" element={<CreateOrderPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
