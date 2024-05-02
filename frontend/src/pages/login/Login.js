import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './login.css'; // Import your custom CSS file

const Login = () => {
  const [values, setValues] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleInput = (event) => {
    setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', values);
      if (response.data === "Success") {
        navigate("/cashierdash"); // Navigate to cashier dashboard
      } else {
        console.error('Invalid email or password'); // Simple error logging
      }
    } catch (error) {
      console.error('An error occurred. Please try again later.'); // Handle server errors gracefully
    }
  };

  return (
    <Container fluid> {/* Use Container fluid for full-width layout */}
      <Row>
        <Col xs={4}></Col>
        <h2 className='align-items-center justify-content-center d-flex loginText'>Login</h2>
        <Col xs={12} className="d-flex justify-content-center align-items-center">
          <Card className="glass-form" style={{ width: '400px' }}>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    value={values.email}
                    onChange={handleInput}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={values.password}
                    onChange={handleInput}
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Log in
                </Button>
              </Form>
              <Link to="/signup" className="mt-3">
                Create Account
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={4}></Col>
      </Row>
    </Container>
  );
};

export default Login;
