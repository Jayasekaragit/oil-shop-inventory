import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../login/login.css'; // Import the CSS file
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddOil = () => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/addProducts', formData);
      console.log(res);
      if (res.status === 200) {
        navigate("/addProducts");
      } else {
        console.log('Server responded with status:', res.status);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const viewDashboard =(e)=> {
    e.preventDefault();
    navigate("/cashierDash")
  }

  return (
    <Row>
      <h2 className='align-items-center justify-content-center d-flex'>Sign up</h2>
      <Container className=" align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
        <Col xs={4}></Col>
        <Col xs={4} className='glass-form d-flex'>
          <Form onSubmit={handleSubmit}>
            <Container>
              <Form.Group className="mb-3">
                <Form.Label>Oil Name</Form.Label>
                <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Price</Form.Label>
                <Form.Control type="number" name="price" value={formData.price} onChange={handleChange} required />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Barcode</Form.Label>
                <Form.Control type="text" name="barcode" value={formData.barcode} onChange={handleChange} required />
              </Form.Group>

             
              <Button variant="primary" type="submit">
                Add Product
              </Button>
              <Button variant="secondary" onClick={viewDashboard}>
                View Products
              </Button>
            </Container>
          </Form>
        </Col>
        <Col xs={4}></Col>
      </Container>
    </Row>
  );
};

export default AddOil;
