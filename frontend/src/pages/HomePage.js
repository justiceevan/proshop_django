import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Stack, Box, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Product from "../components/Product";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Pagination from "../components/Pagination";
import ProductCarousel from "../components/ProductCarousel";
import { paginate } from "../utils/paginate";
import { loadProducts } from "../store/products";

const HomePage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  // const pageSize = 4;
  // const [currentPage, setCurrentPage] = useState(1);

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

  // const handlePageChange = (page) => {
  //   setCurrentPage(page);
  // };

  // const pagedProducts = paginate(products, currentPage, pageSize);

  return (
    <div>
      {!searchQuery && <ProductCarousel />}

      <h1>Latest Products</h1>

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div>
          {/* <Row>
            {products.map((product) => (
              <Col key={product._id} xs={6} md={4} lg={3} xl={2}>
                <Product product={product} />
              </Col>
            ))}
          </Row> */}

          <Grid
            container
            spacing={1}
            sx={{
              bgcolor: "white",
              paddingBottom: 1,
              paddingRight: 1,
              borderRadius: "5px",
            }}
          >
            {products.map((product) => (
              <Grid key={product._id} item xs={6} sm={4} md={3} lg={2}>
                <Product product={product} />
              </Grid>
            ))}
          </Grid>

          {/* material ui implementation of the above commented snippet that is, display 2 items in a row for xs, 3 items in a row for md, 4 items in a row for lg, 5 items in a row for xl */}

          {/* <div style={{ display: "flex", justifyContent: "center" }}>
            <Pagination
              itemsCount={products.length}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          </div> */}
        </div>
      )}
    </div>
  );
};

export default HomePage;
