import React, { useEffect, useState } from "react";
import { Row, Col, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Product from "../components/Product";
import Loader from "react-loader-spinner";
import { listProducts, productDelete } from "../actions/productActions";

const HomeScreen = ({ history }) => {
  const dispatch = useDispatch();
  const [deleted, setdeleted] = useState(false);
  // const [isAdmin, setIsAdmin] = useState("");
  const productList = useSelector((state) => state.productList);
  const userDetails = useSelector((state) => state.userDetails);
  const productDeleted = useSelector((state) => state.productDeleted);

  const {
    loading: loadingDelete,
    success: successDelete,
    error: errorDelete,
  } = productDeleted;
  const { user } = userDetails;

  const { loading, error, products } = productList;

  const userLogin = useSelector((state) => state.userLogin);

  const { userInfo } = userLogin;

  useEffect(() => {
    dispatch(listProducts());

    if (successDelete) {
      setdeleted(true);
    }
  }, [dispatch, user, userInfo, successDelete, deleted]);

  const deleteHandler = (id) => {
    dispatch(productDelete(id));
  };
  return (
    <>
      <h1>Latest Products</h1>
      {deleted && !loadingDelete && (
        <Alert variant="danger">Product Deleted</Alert>
      )}

      {errorDelete && <Alert variant="danger">{errorDelete}</Alert>}
      {loading ? (
        <Loader
          type="ThreeDots"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000}
        />
      ) : error ? (
        <Alert variant="danger">{error}</Alert>
      ) : (
        <Row>
          {products.map((product) => {
            return (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product
                  product={product}
                  deleteProduct={() => deleteHandler(product._id)}
                  isLogged={userInfo}
                />
              </Col>
            );
          })}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
