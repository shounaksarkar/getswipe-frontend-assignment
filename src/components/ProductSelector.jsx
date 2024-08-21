import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { selectProductList } from '../redux/productsSlice';

const ProductSelector = ({ show, onHide, onSelect }) => {
  const [searchId, setSearchId] = useState('');
  const [error, setError] = useState('');
  const products = useSelector(selectProductList);

  const handleSearch = () => {
    const product = products.find(p => p.id.toString() === searchId);
    if (product) {
      onSelect(product);
      setError('');
    } else {
      setError('Product not found');
    }
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Select Product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group>
          <Form.Label>Product ID</Form.Label>
          <Form.Control
            type="text"
            value={searchId}
            onChange={(e) => setSearchId(e.target.value)}
            placeholder="Enter product ID"
          />
        </Form.Group>
        {error && <p className="text-danger">{error}</p>}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>Close</Button>
        <Button variant="primary" onClick={handleSearch}>Search</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProductSelector;