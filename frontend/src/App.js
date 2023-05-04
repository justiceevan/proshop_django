import React from "react";
import { Container } from "react-bootstrap";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useTheme, useMediaQuery } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import Header from "./components/Header";
import BottomBar from "./components/BottomBar";
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
import SearchPage from "./pages/SearchPage";

// TODO: Add a default theme for the app

const createdTheme = createTheme({
  palette: {
    // primary: {
    //   main: grey[400],
    // },
  },
});

function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <ThemeProvider theme={createdTheme}>
      <div style={{ backgroundColor: "#f8f8f8", minHeight: "100vh" }}>
        <Router>
          <Header />

          <ToastContainer theme="colored" autoClose={2000} />
          <main
            className={isMobile ? "my-2" : "py-3"}
            style={
              isMobile ? { paddingTop: "4rem", paddingBottom: "4rem" } : {}
            }
          >
            <Container>
              <Routes>
                <Route path="/" element={<HomePage />} exact />
                <Route path="/search" element={<SearchPage />} />
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
                <Route
                  path="/admin/products/:id"
                  element={<ProductEditPage />}
                />
                <Route path="/admin/orders" element={<OrderListPage />} />
              </Routes>
            </Container>
          </main>

          {isMobile ? <BottomBar /> : <Footer />}
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
