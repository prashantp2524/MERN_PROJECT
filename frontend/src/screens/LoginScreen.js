import React, { startTransition, useEffect } from "react";
import {Link} from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/shared/Message";
import Loader from "../components/shared/Loader";
import { login } from "../actions/userAction";
import FormContainer from "../components/shared/FormContainer";
import { useState } from "react";

const LoginScreen = ({ location,history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const redirect = location.search ? location.search.split("=")[1] : "/";

  const dispatch = useDispatch();
  const userLogin =useSelector(state=>state.userLogin) 
  const {loading,error,userInfo} = userLogin

  useEffect(()=>{
    if(userInfo){history.push(redirect)}
  }, [history, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault();
    //dispatch
    dispatch(login(email,password))
  };

  return (
    <>
      <FormContainer>
        <h1>SIGN IN</h1>
        {error && <Message variant='danger'>{error}</Message>}
        {loading && <Loader/>}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="passsword"
              placeholder="enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Button type="submit" variant="primary">
            SIGN IN
          </Button>
        </Form>
        <Row>
          <Col>
            New customer ?
            <Link to={redirect ? `register?redirect=${redirect}` : "/register"}>
              Register
            </Link>
          </Col>
        </Row>
      </FormContainer>
    </>
  );
};

export default LoginScreen;
