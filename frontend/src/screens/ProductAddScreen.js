import React, { useState, useEffect } from "react";
import { Alert, Form, Button, Row, Col } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { addProduct } from "../actions/productActions";
const ProductAddScreeen = ({ match, history }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [qty, setQty] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);

  const { userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    }

    // user, userInfo
  }, [dispatch]);

  const submitHandler = (e) => {
    e.preventDefault();

    //DISPATCH ADD PRODUCT
    dispatch(
      addProduct({
        name,
        description,
        countInStock: qty,
        price,
        image:
          "https://image.freepik.com/free-photo/simple-oval-cardboard-box-with-shadow_23-2148711419.jpg",
      })
    );
  };
  return (
    <div>
      <FormContainer>
        <h1>Add Product</h1>
        <Link to="/" className="btn btn-dark my-3">
          Go Back
        </Link>

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
            Add Product
          </Button>
        </Form>
      </FormContainer>
    </div>
  );
};

export default ProductAddScreeen;
