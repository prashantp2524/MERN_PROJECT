import React, { useEffect } from "react";
import { listProducts } from "../actions/productActions";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import ProductScreen from "./ProductScreen";
import Loader from "../components/shared/Loader";
import Message from "../components/shared/Message";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error,products } = productList;
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  
  return (
    <>
      {loading ? (
        <Loader/>
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} md={3}>
              <ProductScreen product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
