import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const OrderRemove = ({ order, currentOrders, setCurrentOrders }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleDeleteOrder = () => {
    if (selectedOrder) {
      const newOrders = currentOrders.filter((order) => order.id !== selectedOrder.id);
      setCurrentOrders(newOrders)
    }
    setIsModalOpen(false);
  };

  const handleOpenModal = (order) => {
    setSelectedOrder(order);
    setIsModalOpen(true);
  };

  return (
    <>
      <Button variant="danger" onClick={() => handleOpenModal(order)}>
        Delete
      </Button>
      {isModalOpen && (
        <Modal show={isModalOpen} onHide={() => setIsModalOpen(false)}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedOrder.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Do you wish to delete {order.title}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button variant="danger" onClick={handleDeleteOrder}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
}


export default OrderRemove;