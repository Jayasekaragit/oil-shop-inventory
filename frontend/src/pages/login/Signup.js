import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css'; // Import the CSS file
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    password: '',
    role: '',
    telNo: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/adduser', formData);
      console.log(res);
      if (res.status === 200) {
        navigate("/login");
      } else {
        console.log('Server responded with status:', res.status);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Row>
      <h2 className='align-items-center justify-content-center d-flex'>Sign up</h2>
      <Container className=" align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
        <Col xs={4}></Col>
        <Col xs={4} className='glass-form d-flex'>
          <Form onSubmit={handleSubmit}>
            <Container>
              <Form.Group className="mb-3">
                <Form.Label>User Name</Form.Label>
                <Form.Control type="text" name="userName" value={formData.userName} onChange={handleChange} required />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" value={formData.password} onChange={handleChange} required />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Role</Form.Label>
                <Form.Control type="text" name="role" value={formData.role} onChange={handleChange} required />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Telephone Number</Form.Label>
                <Form.Control type="tel" name="telNo" value={formData.telNo} onChange={handleChange} required />
              </Form.Group>

              <Button variant="primary" type="submit">
                Sign Up
              </Button>
            </Container>
          </Form>
        </Col>
        <Col xs={4}></Col>
      </Container>
    </Row>
  );
};

export default SignUp;
