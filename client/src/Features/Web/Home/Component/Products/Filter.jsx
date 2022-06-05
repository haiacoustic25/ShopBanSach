import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
const Filter = (props) => {
  const {
    categories,
    authors,
    dataFillter,
    onChange,
    handleFillter,
    deleteFillter,
    handleSortASC,
    handleSortDESC,
  } = props;

  return (
    <div className="filter">
      <h2>Lọc sản phẩm</h2>
      <Form noValidate>
        <Row className="mb-3">
          <Form.Group as={Col} md="4">
            <Form.Label>Tác giả</Form.Label>
            <Form.Select
              aria-label="Default select example"
              name="author_id"
              value={dataFillter.author_id}
              onChange={onChange}
            >
              <option value="">Chọn tác giả</option>
              {authors?.map((author, index) => (
                <option className="py-2" value={author.id} key={index}>
                  {author.tg_name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group as={Col} md="2">
            <Form.Label>Giá</Form.Label>
            <Form.Select
              aria-label="Default select example"
              name="price"
              value={dataFillter.price}
              onChange={onChange}
            >
              <option value="">Chọn khoảng giá</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Form.Group>
          <Form.Group as={Col} md="2">
            <Form.Label>Năm xuất Bản</Form.Label>
            <Form.Select
              aria-label="Default select example"
              name="createDate"
              value={dataFillter.createDate}
              onChange={onChange}
            >
              <option value="">Năm xuất bản</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Form.Group>
          <Form.Group as={Col} md="2">
            <Form.Label>Thể loại</Form.Label>
            <Form.Select
              aria-label="Default select example"
              name="category_id"
              value={dataFillter.category_id}
              onChange={onChange}
            >
              <option value="">Thể loại</option>
              {categories?.map((category, index) => (
                <option value={category.id} key={index}>
                  {category.tl_name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group as={Col} md="2">
            <Button type="submit" onClick={handleFillter}>
              Lọc
            </Button>
            <Button onClick={deleteFillter} style={{ marginLeft: "10px" }}>
              Bỏ loc
            </Button>
          </Form.Group>
        </Row>
      </Form>
      <div className="filter__sort d-flex">
        <span>Sắp xếp theo:</span>
        <span onClick={handleSortASC}>
          <i className="fa-solid fa-arrow-up-wide-short"></i>Tăng dần
        </span>
        <span onClick={handleSortDESC}>
          <i className="fa-solid fa-arrow-down-wide-short"></i>Giảm dần
        </span>
      </div>
    </div>
  );
};

export default Filter;
