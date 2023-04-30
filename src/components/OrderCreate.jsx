import { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addOrder, addProduct } from '../features/ordersSlice';

const CreateOrder = ({ currentOrders, currentProducts }) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [selectedProduct, setSelectedProduct] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const dispatch = useDispatch();

  const handleReset = () => {
    setTitle('');
    setDate('');
    setDescription('');
    setSelectedProduct('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isFormValid()) {
      const filteredProduct = currentProducts.filter(product => product.title === selectedProduct);
      const updatedProduct = {
          ...filteredProduct[0],
          id: currentProducts.length + 1,
          order: currentOrders.length + 1
        };
        
      dispatch(addProduct(updatedProduct));
      
      const newOrder = {
        id: currentOrders.length + 1,
        title,
        date: date.toLocaleString().replace(/T/, ' '),
        description,
        products: updatedProduct,
      };
      dispatch(addOrder(newOrder));
      handleReset()
      setShowAlert(false);
      setShowSuccessAlert(true);
    } else {
      setShowAlert(true);
    }
  };

  const isFormValid = () => {
    return title.trim() !== '' && date.trim() !== '' && description.trim() !== '' && selectedProduct.trim() !== '';
  };

  return (
    <div>
      {showAlert &&
      <Alert variant="danger" onClose={() => setShowAlert(false)} dismissible>
        Please fill in all the fields to create an order.
      </Alert>
      }
      {showSuccessAlert &&
      <Alert variant="success" onClose={() => setShowSuccessAlert(false)} dismissible>
        Order created successfully.
      </Alert>
      }
      <Form onSubmit={handleSubmit} onReset={handleReset}>
        <Form.Group controlId="formTitle" className='mb-3'>
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Enter title" value={title} onChange={(e) => setTitle(e.target.value)} className={title.trim() === '' && showAlert ? 'is-invalid' : ''} />
        {title.trim() === '' && showAlert && <div className="invalid-feedback">Please enter a title.</div>}
      </Form.Group>

      <Form.Group controlId="formDate" className='mb-3'>
        <Form.Label>Date</Form.Label>
        <Form.Control type="datetime-local" value={date} onChange={(e) => setDate(e.target.value)} className={date.trim() === '' && showAlert ? 'is-invalid' : ''} />
        {date.trim() === '' && showAlert && <div className="invalid-feedback">Please select a date.</div>}
      </Form.Group>

      <Form.Group controlId="formDescription" className='mb-3'>
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows={3} value={description} onChange={(e) => setDescription(e.target.value)} className={description.trim() === '' && showAlert ? 'is-invalid' : ''} />
        {description.trim() === '' && showAlert && <div className="invalid-feedback">Please enter a description.</div>}
      </Form.Group>

      <Form.Group controlId="formProduct" className='mb-3'>
        <Form.Label>Select Product</Form.Label>
        <Form.Control as="select" value={selectedProduct} onChange={(e) => setSelectedProduct(e.target.value)} className={selectedProduct.trim() === '' && showAlert ? 'is-invalid' : ''}>
          <option value="">Select a product</option>
          {currentProducts.map(product => (
            <option key={product.id} value={product.title}>{product.title} (Order: {product.order}) </option>
          ))}
        </Form.Control>
        {selectedProduct.trim() === '' && showAlert && <div className="invalid-feedback">Please select a product.</div>}
      </Form.Group>

      <Button className='me-2' variant="primary" type="submit">
        Create Order
      </Button>

      <Button variant="secondary" type="reset" className="me-2">
        Reset
      </Button>

    </Form>
  </div>
  );
};

export default CreateOrder;
