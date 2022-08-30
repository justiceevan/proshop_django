import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Link,
  useParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Button,
  Form,
  Card,
} from "react-bootstrap";
import Message from "../components/Message";
import { addItemToCart, removeCartItem } from "../store/cart";

const CartPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const { id: productId } = useParams();
  const quantity = Number(searchParams.get("qty"));

  const cartSlice = useSelector((state) => state.cart);
  const { cartItems } = cartSlice;

  useEffect(() => {
    if (productId) dispatch(addItemToCart(productId, quantity));
  }, [dispatch, productId, quantity]);

  const handleRemoveCartItem = (id) => {
    dispatch(removeCartItem(id));
  };

  const handleToCheckout = () => {
    navigate("/login?redirect=shipping");
  };

  return (
    <Row>
      <h1>Shopping Cart</h1>
      <Col md={8}>
        {cartItems.length === 0 ? (
          <Message variant="info">
            Your cart is empty <Link to="/">Go Back</Link>
          </Message>
        ) : (
          <ListGroup variant="flush">
            {cartItems.map((item) => (
              <ListGroup.Item key={item.productId}>
                <Row>
                  <Col md={2}>
                    <Image src={item.image} alt={item.name} fluid rounded />
                  </Col>

                  <Col md={3}>
                    <Link to={`/product/${item.productId}`}>{item.name}</Link>
                  </Col>

                  <Col md={2}>${item.price}</Col>

                  <Col md={3}>
                    <Form.Select
                      size="sm"
                      value={item.quantity}
                      onChange={(e) =>
                        dispatch(
                          addItemToCart(item.productId, Number(e.target.value))
                        )
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((count) => (
                        <option key={count} value={count + 1}>
                          {count + 1}
                        </option>
                      ))}
                    </Form.Select>
                  </Col>

                  <Col md={1}>
                    <Button
                      className="btn btn-light"
                      onClick={() => handleRemoveCartItem(item.productId)}
                    >
                      <i className="fa fa-trash"></i>
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>

      <Col md={4}>
        <Card>
          <ListGroup>
            <ListGroup.Item>
              <h2>
                SubTotal (
                {cartItems.reduce((acc, item) => acc + item.quantity, 0)}) Items
              </h2>
              $
              {cartItems
                .reduce((acc, item) => acc + item.price * item.quantity, 0)
                .toFixed(2)}
            </ListGroup.Item>

            <ListGroup.Item>
              <Button
                type="button"
                disabled={cartItems.length === 0}
                className="btn w-100"
                onClick={handleToCheckout}
              >
                Proceed To CheckOut
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  );
};

export default CartPage;
