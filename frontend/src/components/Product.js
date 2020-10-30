import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

const Product = (props) => {
  const { product, deleteProduct, isLogged } = props;

  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="h3">${product.price}</Card.Text>

        {isLogged && (
          <>
            <Link to={`/product/update/${product._id}`}>
              <Button variant="success">Edit</Button>
            </Link>
            <Button variant="danger" className="ml-1" onClick={deleteProduct}>
              Delete
            </Button>
          </>
        )}
      </Card.Body>
    </Card>
  );
};

export default Product;
