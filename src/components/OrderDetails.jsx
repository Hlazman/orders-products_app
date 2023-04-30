import { useState } from 'react';
import { Card, ListGroup, ListGroupItem, Modal, Button } from 'react-bootstrap';

const OrderDetails = ({ order, products }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const orderProducts = products.filter(product => product.order === order.id);

  const handleOpenModal = (order) => {
    setSelectedOrder(order);
    setIsModalOpen(true);
  };
  
  return (
    <>
      <Button variant="info" onClick={() => handleOpenModal(order)}>
        Info
      </Button>
        {isModalOpen && (
          <Modal show={isModalOpen} onHide={() => setIsModalOpen(false)}>
            <Modal.Header closeButton>
              <Modal.Title>{selectedOrder.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {orderProducts.map(product => (
                <Card key={product.id} className='mb-3'>
                  <Card.Body>
                    <Card.Title className='text-center mb-2' >{product.title}</Card.Title>
                    <Card.Text>
                      <span className='fw-bold'>Specification: </span>
                      {product.specification}
                    </Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem> 
                      <span className='fw-bold'>Guarantee start: </span> 
                      {product.guarantee.start}
                    </ListGroupItem>
                    <ListGroupItem> 
                      <span className='fw-bold'>Guarantee end: </span> 
                      {product.guarantee.end}
                    </ListGroupItem>
                    <ListGroupItem> 
                      <span className='fw-bold'>Price UAH: </span> 
                      {product.price.find(p => p.isDefault).value}
                    </ListGroupItem>
                    <ListGroupItem> 
                      <span className='fw-bold'>Price USD: </span> 
                      {product.price.find(p => !p.isDefault).value}
                    </ListGroupItem>
                  </ListGroup>
                </Card>
              ))}
            </Modal.Body>
          </Modal>
      )}
    </>
  )  
};

export default OrderDetails;
