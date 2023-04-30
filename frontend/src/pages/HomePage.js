import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

import Product from "../components/Product";
import Loader from "../components/Loader";
import Message from "../components/Message";
import HomeHeader from "../components/HomeHeader";

import { loadProducts } from "../store/products";

const HomePage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  const productsSlice = useSelector((state) => state.products);
  const { productsList: products, loading, error } = productsSlice;

  const searchQuery = searchParams.get("q");

  useEffect(() => {
    if (searchQuery) {
      dispatch(loadProducts(searchQuery));
    } else {
      dispatch(loadProducts());
    }
  }, [dispatch, searchQuery]);

  return (
    <div>
      <HomeHeader />

      {loading ? (
        <Loader />
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
              boxShadow: 1,
              marginTop: 2,
            }}
          >
            {products.map((product) => (
              <Grid key={product._id} item xs={6} sm={4} md={3} lg={2}>
                <Product product={product} />
              </Grid>
            ))}
          </Grid>
        </div>
      )}
    </div>
  );
};

export default HomePage;
