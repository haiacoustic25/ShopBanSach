import React from "react";
import productTest from "../../../../../Assets/Img/ProductTest.png";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
const ProductItem = (props) => {
  const { id, name, newPrice, oldPrice, discount } = props;
  return (
    <Link to={`/${id}`} className="col-sm-3">
      <Card className="product">
        <div className="product__img">
          <Card.Img
            className="product__img--animation"
            variant="top"
            src={productTest}
          />
        </div>
        <Card.Body className="py-0">
          <Card.Text className="product__name text-center">{name}</Card.Text>
          <Card.Text className="d-flex justify-content-between">
            <div className="product__prive--new">{newPrice}đ</div>
            <div className="product__prive--old">{oldPrice}đ</div>
          </Card.Text>
          <div className="product__discout">-{discount}%</div>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default ProductItem;
