import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Box, Button, Skeleton } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Product from "../components/Product";
import Message from "../components/Message";
import HomePageHeader from "../components/HomePageHeader";

import { loadProducts } from "../store/products";

const HomePage = () => {
  const dispatch = useDispatch();

  const [productsToShow, setProductsToShow] = useState(24);
  const productsSlice = useSelector((state) => state.products);
  const { productsList: products, loading, error } = productsSlice;

  useEffect(() => {
    dispatch(loadProducts());
  }, [dispatch]);

  const handleLoadMoreClick = () => {
    setProductsToShow(productsToShow + 24);
  };

  return (
    <div>
      <HomePageHeader loading={loading} />

      {loading ? (
        <Grid
          container
          spacing={1}
          sx={{
            bgcolor: "white",
            paddingBottom: 1,
            paddingRight: 1,
            borderRadius: "5px",
            boxShadow: 3,
            marginTop: 2,
          }}
        >
          {[...Array(24)].map((_, index) => (
            <Grid key={index} item xs={6} sm={4} md={3} lg={2}>
              <Skeleton
                variant="rounded"
                animation="wave"
                height="355px"
                sx={{
                  cursor: "pointer",
                  "&:hover": {
                    transform: "scale(1.02)",
                  },
                }}
              />
            </Grid>
          ))}
        </Grid>
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div>
          <Grid
            container
            spacing={1}
            sx={{
              bgcolor: "white",
              paddingBottom: 1,
              paddingRight: 1,
              borderRadius: "5px",
              boxShadow: 3,
              marginTop: 2,
            }}
          >
            {products.slice(0, productsToShow).map((product) => (
              <Grid key={product._id} item xs={6} sm={4} md={3} lg={2}>
                <Product product={product} />
              </Grid>
            ))}
          </Grid>

          {productsToShow < products.length && (
            <Box mt={2} display="flex" justifyContent="center">
              {loading ? (
                <Grid container spacing={1}>
                  {[...Array(24)].map((_, index) => (
                    <Grid key={index} item xs={6} sm={4} md={3} lg={2}>
                      <Skeleton
                        variant="rounded"
                        animation="wave"
                        height="355px"
                        sx={{
                          cursor: "pointer",
                        }}
                      />
                    </Grid>
                  ))}
                </Grid>
              ) : (
                <Button
                  color="inherit"
                  onClick={handleLoadMoreClick}
                  variant="contained"
                  endIcon={<ExpandMoreIcon />}
                >
                  Show More
                </Button>
              )}
            </Box>
          )}
        </div>
      )}
    </div>
  );
};

export default HomePage;
