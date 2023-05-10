import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button, Row, Col } from "react-bootstrap";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import FormContainer from "../components/FormContainer";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { login, clearError } from "../store/user";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const params = [...searchParams];

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userSlice = useSelector((state) => state.user);
  const { userInfo, loading, error } = userSlice;

  const redirect = params.length > 0 ? params[0][1] : "";

  useEffect(() => {
    if (userInfo) navigate(`/${redirect}`);
    dispatch(clearError());
  }, [userInfo, dispatch, navigate, redirect]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <FormContainer>
      <h1>Sign In</h1>

      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader />}

      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <br />
        <Button type="submit" variant="primary">
          Sign In
        </Button>
      </Form>

      <Row>
        <Col className="py-3">
          New Customer ?{" "}
          <Link to={redirect ? `/register?redirect=${redirect}` : "/register"}>
            Register
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default LoginPage;
