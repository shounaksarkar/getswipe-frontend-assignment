import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table, Button, Modal, Form } from 'react-bootstrap';
import { selectProductList, addProduct, updateProduct, deleteProduct } from '../redux/productsSlice';
import generateRandomId from '../utils/generateRandomId';

const ProductsTab = () => {
  const products = useSelector(selectProductList);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);

  const handleShowModal = (product = null) => {
    setCurrentProduct(product);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentProduct(null);
  };

  const handleSaveProduct = (productData) => {
    if (currentProduct) {
      dispatch(updateProduct({ ...currentProduct, ...productData }));
    } else {
      dispatch(addProduct({ ...productData, id: generateRandomId() }));
    }
    handleCloseModal();
  };

  const handleDeleteProduct = (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      dispatch(deleteProduct(id));
    }
  };

  return (
    <div>
      <Button onClick={() => handleShowModal()}>Add New Product</Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
              <td>
                <Button variant="info" onClick={() => handleShowModal(product)}>Edit</Button>
                <Button variant="danger" onClick={() => handleDeleteProduct(product.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <ProductModal
        show={showModal}
        handleClose={handleCloseModal}
        handleSave={handleSaveProduct}
        product={currentProduct}
      />
    </div>
  );
};

const ProductModal = ({ show, handleClose, handleSave, product }) => {
  const [formData, setFormData] = useState(product || { name: '', description: '', price: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSave(formData);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{product ? 'Edit Product' : 'Add New Product'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Save Product
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ProductsTab;