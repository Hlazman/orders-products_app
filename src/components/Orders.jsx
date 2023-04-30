import { useState } from 'react';
import OrderRemove from './OrderRemove';
import { Container, Table } from 'react-bootstrap';
import { orders as orderData, products } from '../data';
import OrderDetails from './OrderDetails';

const Orders = () => {
  const [currentOrders, setCurrentOrders] = useState(orderData);

  const getOrderProducts = (order) => {
    return products.filter(product => product.order === order.id);
  }

  const getTotalPrice = (orderProducts) => {
    const totalUSD = orderProducts.reduce((acc, curr) => acc + curr.price.find(p => p.symbol === 'USD').value, 0);
    const totalUAH = orderProducts.reduce((acc, curr) => acc + curr.price.find(p => p.symbol === 'UAH').value, 0);
    return {totalUSD, totalUAH};
  }

  return (
    <Container>
      <h1 className="text-center m-3">Orders</h1>
      <Table striped>
        <thead>
          <tr>
            <th>Title</th>
            <th>Product count</th>
            <th>Date</th>
            <th>description</th>
            <th>Price (USD)</th>
            <th>Price (UAH)</th>
          </tr>
        </thead>
        <tbody>
          {currentOrders.map(order => (
            <tr key={order.id}>
              <td>{order.title}</td>
              <td>{getOrderProducts(order).length}</td>
              <td>{order.date}</td>
              <td>{order.description}</td>
              <td>{getTotalPrice(getOrderProducts(order)).totalUSD}</td>
              <td>{getTotalPrice(getOrderProducts(order)).totalUAH}</td>
              <td>
                {<OrderDetails 
                  key={order.id} 
                  order={order} 
                  products={products} 
                 />}
                </td>
              <td>
                {<OrderRemove 
                  key={order.id} 
                  order={order} 
                  currentOrders={currentOrders} 
                  setCurrentOrders={setCurrentOrders}
                />}
                </td>
            </tr>
          ))}
        </tbody>
      </Table>

    </Container>
  )
};

export default Orders;
