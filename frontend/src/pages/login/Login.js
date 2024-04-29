import { useState, React } from "react";
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
import validation from "../../LoginValidation";

const Login = () => {
  const [values, setValues] = useState(
    { 
      email: '',
      password: '' 
    });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleInput = (event) => {
    setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrors({}); // Clear errors before validation
    setErrors(validation(values)); 
    
    // Pass the values to the validation function
    // Esermail validation (using a more robust regex)
    // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // if (!emailRegex.test(values.email)) {
    //   setErrors({ email: "Invalid email format" });
    //   return; // Exit if email is invalid
    // }

    // // Password validation (enforcing complexity and minimum length)
    // const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
    // if (!passwordRegex.test(values.password)) {
    //   setErrors({ password: "Password must be at least 8 characters and include a lowercase letter, uppercase letter, and a number" });
    //   return; // Exit if password is invalid
    // }

    // try {
    //   const response = await axios.post('http://localhost:5000/login', values);
    //   if (response.data === "Success") {
    //     navigate("/cashierdash"); // Navigate to cashier dashboard
    //   } else {
    //     setErrors({ login: "Invalid email or password" }); // Handle login failure
    //   }
    // } catch (error) {
    //   console.error(error); // Handle server errors gracefully
    //   setErrors({ login: "An error occurred. Please try again later." }); // Generic error message for user
    // }
  };

  return (
    <Container fluid> {/* Use Container fluid for full-width layout */}
      <Row>
        <Col xs={4}></Col>
        <h2 className='align-items-center justify-content-center d-flex loginText'>Login</h2>

        <Col xs={12} className="d-flex justify-content-center align-items-center">
          <Card className="glass-form" style={{ width: '400px' } }> {/* Center the form card */}
            <Card.Body>
              {/* <h2 className="loginText">Login</h2> */}
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                  className="border border-primary"
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    value={values.email}
                    onChange={handleInput}
                    isInvalid={errors.email} // Set isInvalid prop for Bootstrap styling
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                  className="border border-primary"
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={values.password}
                    onChange={handleInput}
                    isInvalid={errors.password}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.password}
                  </Form.Control.Feedback>
                </Form.Group>
                <Button variant="primary" type="submit">
                  Log in
                </Button>
                {errors.login && (
                  <div className="alert alert-danger mt-3" role="alert">
                    {errors.login}
                  </div>
                )}
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