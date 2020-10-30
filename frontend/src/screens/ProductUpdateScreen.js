import React, { useState, useEffect } from "react";
import { Alert, Form, Button, Row, Col } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { listProductDetails, updateProduct } from "../actions/productActions";
const ProductUpdateScreen = ({ match, history }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [qty, setQty] = useState("");

  const [productSuccessUpdate, setProductSuccessUpdate] = useState(false);
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);

  const productUpdated = useSelector((state) => state.productUpdated);

  const { loading, product, error } = productDetails;

  const {
    loading: successProductLoading,
    success: successProductSuccess,
    error: successProductError,
  } = productUpdated;

  const userLogin = useSelector((state) => state.userLogin);

  const { userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    } else {
      if (!product.name) {
        dispatch(listProductDetails(match.params.id));
      } else {
        setName(product.name);
        setImage(product.image);
        setDescription(product.description);
        setPrice(product.price);
        setQty(product.countInStock);
      }
    }

    if (successProductSuccess) {
      setProductSuccessUpdate(true);
    }

    // user, userInfo
  }, [dispatch, product]);

  const submitHandler = (e) => {
    e.preventDefault();

    //DISPATCH UPDATE PRODUCT
    dispatch(
      updateProduct({
        id: match.params.id,
        name,
        description,
        countInStock: qty,
        price,
        image,
      })
    );
  };
  return (
    <div>
      <FormContainer>
        <h1>Update Product</h1>
        <Link to="/" className="btn btn-dark my-3">
          Go Back
        </Link>
        {successProductSuccess && <Alert variant="success">Updated</Alert>}

        <Form onSubmit={submitHandler}>
          <Form.Group controlId="name">
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Product Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="image">
            <Form.Label>Product Image</Form.Label>
            <Form.Control
              type="text"
              placeholder="Product Name"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="description">
            <Form.Label>Product Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Product Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="price">
            <Form.Label>Product Price</Form.Label>
            <Form.Control
              type="text"
              placeholder="Product Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="qty">
            <Form.Label>Product Quantity</Form.Label>
            <Form.Control
              type="text"
              placeholder="Product Quantity"
              value={qty}
              onChange={(e) => setQty(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Button type="submit" variant="primary">
            Update Product
          </Button>
        </Form>
      </FormContainer>
    </div>
  );
};

export default ProductUpdateScreen;
