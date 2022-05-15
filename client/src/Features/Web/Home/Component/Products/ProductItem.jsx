import React from "react";
import productTest from "../../../../../Assets/Img/ProductTest.png";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
const ProductItem = (props) => {
  const { product } = props;
  return (
    <Link to={`/${product.id}`} className="col-sm-3">
      <Card className="product">
        <div className="product__img">
          <Card.Img
            className="product__img--animation"
            variant="top"
            src={
              require(`../../../../../Assets/Img/${product.s_image}`).default
            }
          />
        </div>
        <Card.Body className="py-0">
          <Card.Text className="product__name text-center">
            {product.s_name}
          </Card.Text>
          <Card.Text className="d-flex justify-content-between">
            <div className="product__price--new">
              {Number(product.s_price).toLocaleString("vi-VN", {
                style: "currency",
                currency: "VND",
              })}{" "}
            </div>
            <div className="product__price--old">
              {Number(product.s_price).toLocaleString("vi-VN", {
                style: "currency",
                currency: "VND",
              })}{" "}
            </div>
          </Card.Text>
          <div className="product__discout">-{product.s_discount}%</div>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default ProductItem;
