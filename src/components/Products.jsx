import React, { useState } from 'react';
import { Container, Row, Col, Form, Table } from 'react-bootstrap';

const Products = ({ orders, products }) => {
  const [selectedType, setSelectedType] = useState('All');

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  const filteredProducts = selectedType === 'All' ? products : products.filter(product => product.type === selectedType);

  return (
    <Container>
      <h1 className="text-center m-3">Products</h1>
      <Row className="mb-3 align-items-center">
        <Col md={2}>
          <Form.Label htmlFor="type-select">Filter by type:</Form.Label>
        </Col>
        <Col md={3}>
          <Form.Select id="type-select" value={selectedType} onChange={handleTypeChange}>
            <option value="All">All</option>
            <option value="Monitors">Monitors</option>
            <option value="laptops">laptops</option>
            <option value="Keyboards">Keyboards</option>
            <option value="Mouses">Mouses</option>
            <option value="Accessories">Accessories</option>
          </Form.Select>
        </Col>
      </Row>

      <Table striped>
        <thead>
          <tr>
            <th>Title</th>
            <th>Type</th>
            <th>Guarantee Start</th>
            <th>Guarantee End</th>
            <th>Price (USD)</th>
            <th>Price (UAH)</th>
            <th>Order Title</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map(product => (
            <tr key={product.id}>
              <td>{product.title}</td>
              <td>{product.type}</td>
              <td>{product.guarantee.start}</td>
              <td>{product.guarantee.end}</td>
              <td>{product.price.find(p => p.symbol === 'USD').value}</td>
              <td>{product.price.find(p => p.symbol === 'UAH').value}</td>
              <td>{orders.find(order => order.id === product.order).title}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Products;
