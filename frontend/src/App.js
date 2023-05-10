import React from "react";
import { Container } from "react-bootstrap";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import ShippingPage from "./pages/ShippingPage";
import PaymentPage from "./pages/PaymentPage";
import PlaceorderPage from "./pages/PlaceorderPage";
import OrderPage from "./pages/OrderPage";
import UserListPage from "./pages/UserListPage";
import ProductListPage from "./pages/ProductListPage";
import UserEditPage from "./pages/UserEditPage";
import ProductEditPage from "./pages/ProductEditPage";
import OrderListPage from "./pages/OrderListPage";

function App() {
  return (
    <Router>
      <Header />
      <ToastContainer />
      <main className="my-3">
        <Container>
          <Routes>
            <Route path="/" element={<HomePage />} exact />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/cart/:id" element={<CartPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/shipping" element={<ShippingPage />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/placeorder" element={<PlaceorderPage />} />
            <Route path="/order/:id" element={<OrderPage />} />
            <Route path="/admin/users" element={<UserListPage />} />
            <Route path="/admin/users/:id" element={<UserEditPage />} />
            <Route path="/admin/products" element={<ProductListPage />} />
            <Route path="/admin/products/:id" element={<ProductEditPage />} />
            <Route path="/admin/orders" element={<OrderListPage />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
