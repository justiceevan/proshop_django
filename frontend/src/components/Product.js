import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Stack,
  Button,
  Rating,
  useTheme,
  useMediaQuery,
  CircularProgress,
} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { toast } from "react-toastify";

import { addItemToCart, removeCartItem } from "../store/cart";

const Product = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const theme = useTheme();
  const isNotPc = useMediaQuery(theme.breakpoints.down("lg"));

  const { cartItems } = useSelector((state) => state.cart);

  const [quantityLoading, setQuantityLoading] = useState(false);

  const prodInCart = cartItems.find((item) => item.productId === product._id);
  const productStock = product.countInStock;

  const handleCardClick = () => {
    navigate(`/product/${product._id}`);
  };

  const handleAddToCart = (event) => {
    event.stopPropagation();

    setQuantityLoading(true);
    setTimeout(() => {
      setQuantityLoading(false);
    }, 600);

    const quantity = 1;
    if (quantity > productStock) {
      toast.info("Product out of stock");
      return;
    }
    dispatch(addItemToCart(product._id, quantity));
    toast.success("Item added to cart");
  };

  const handleIncrement = (event) => {
    event.stopPropagation();

    setQuantityLoading(true);
    setTimeout(() => {
      setQuantityLoading(false);
    }, 800);

    const quantity = prodInCart.quantity + 1;
    if (quantity > productStock) {
      toast.info("Product out of stock");
      return;
    }
    dispatch(addItemToCart(product._id, quantity));
    toast.success("Item added to cart");
  };

  const handleDecrement = (event) => {
    event.stopPropagation();

    setQuantityLoading(true);
    setTimeout(() => {
      setQuantityLoading(false);
    }, 800);

    const quantity = prodInCart.quantity - 1;
    if (quantity === 0) {
      dispatch(removeCartItem(product._id));
      toast.success("Product removed from cart");
    } else {
      dispatch(addItemToCart(product._id, quantity));
      toast.success("Item quantity updated");
    }
  };

  return (
    <Box
      sx={{
        margin: 0,
        cursor: "pointer",
        "&:hover": {
          boxShadow: 3,
          transform: "scale(1.02)",
          "& .MuiButton-root": {
            visibility: "visible",
          },
        },
      }}
      onClick={handleCardClick}
    >
      <Card sx={{ margin: 0, height: "348px" }}>
        <CardMedia
          component="img"
          height="180px"
          image={product.image}
          alt={product.name}
        />

        <CardContent>
          <Typography
            gutterBottom
            variant="subtitle2"
            sx={{
              fontWeight: 550,
              fontSize: 12,
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: "1.2rem",
              height: "2.4rem",
            }}
            component="div"
          >
            {product.name}
          </Typography>

          <Stack spacing={0.5} my={1} direction="row">
            <Rating
              value={Number(product.rating)}
              size="small"
              precision={0.5}
              readOnly
              sx={{ "& .MuiRating-icon": { fontSize: "0.8rem" } }}
            />
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ fontSize: 11 }}
            >
              ({product.numReviews})
            </Typography>
          </Stack>

          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ fontSize: 18, fontWeight: 550 }}
            component="h6"
          >
            ${product.price}
          </Typography>

          {prodInCart ? (
            <Box sx={{ marginTop: 1, display: "flex", alignItems: "center" }}>
              <Button
                variant="contained"
                color="inherit"
                sx={{ flex: "0 0 10%", minWidth: "30px" }}
                onClick={handleDecrement}
                disabled={quantityLoading}
              >
                <RemoveIcon fontSize="small" />
              </Button>
              <Typography
                variant="body2"
                align="center"
                sx={{ flex: "1 1 80%" }}
              >
                {quantityLoading ? (
                  <CircularProgress size={20} color="inherit" />
                ) : (
                  prodInCart.quantity
                )}
              </Typography>
              <Button
                variant="contained"
                color="inherit"
                sx={{ flex: "0 0 10%", minWidth: "30px" }}
                onClick={handleIncrement}
                disabled={quantityLoading}
              >
                <AddIcon fontSize="small" />
              </Button>
            </Box>
          ) : quantityLoading ? (
            <Box
              sx={{
                marginTop: 1,
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
              }}
            >
              <CircularProgress size={20} color="inherit" />
            </Box>
          ) : (
            <Button
              variant="contained"
              size="small"
              color="inherit"
              sx={{
                width: "100%",
                fontSize: 12,
                fontWeight: 550,
                marginTop: 1,
                visibility: isNotPc ? "visible" : "hidden",
              }}
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>
          )}
        </CardContent>
      </Card>
    </Box>
  );
  // return (
  //   <Card className="my-3 p-3 rounded">
  //     <Link to={`/product/${product._id}`}>
  //       <Card.Img src={product.image} alt={product.name} />
  //     </Link>
  //     <Card.Body>
  //       <Link to={`/product/${product._id}`}>
  //         <Card.Title as="div">
  //           <strong>{product.name}</strong>
  //         </Card.Title>
  //       </Link>
  //       <Card.Text as="div">
  //         <div className="my-3">
  //           <Rating
  //             value={product.rating}
  //             text={`${product.numReviews} reviews`}
  //             color="#ffc107"
  //           />
  //         </div>
  //       </Card.Text>
  //       <Card.Text as="h3">${product.price}</Card.Text>
  //     </Card.Body>
  //   </Card>
  // );
};

export default Product;
