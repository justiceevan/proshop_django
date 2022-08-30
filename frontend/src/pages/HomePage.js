import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
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

  const pageSize = 4;
  const [currentPage, setCurrentPage] = useState(1);

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

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const pagedProducts = paginate(products, currentPage, pageSize);

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
          <Row>
            {pagedProducts.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <Pagination
              itemsCount={products.length}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
