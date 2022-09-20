import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import Footer from "./components/footer";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import ProductDetails from "./screens/ProductDetails";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from './screens/OrderScreen'

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Container className="mt-3">
          <Route exact path="/order/:id" component={OrderScreen} />
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/login" component={LoginScreen} />
          <Route exact path="/payment" component={PaymentScreen} />
          <Route exact path="/placeorder" component={PlaceOrderScreen} />
          <Route exact path="/shipping" component={ShippingScreen} />
          <Route exact path="/profile" component={ProfileScreen} />
          <Route exact path="/register" component={RegisterScreen} />
          <Route exact path="/product/:id" component={ProductDetails} />
          <Route exact path="/cart/:id?" component={CartScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
