import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import TopMenu from './components/TopMenu';
import { NotFoundPage } from './pages/NotFoundPage';
import { ProductsPage } from './pages/ProductsPage';
import { OrdersPage } from './pages/OrdersPage';
import NavigationMenu from './components/NavigationMenu';
import { CreateOrderPage } from './pages/CreateOrderPage';

function App() {
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
