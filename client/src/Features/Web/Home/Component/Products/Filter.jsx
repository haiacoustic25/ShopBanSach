import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
const Filter = () => {
  return (
    <div className="filter">
      <h2>Lọc sản phẩm</h2>
      <Form noValidate>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Tác giả</Form.Label>
            <Form.Control required type="text" placeholder="Tên tác giả" />
          </Form.Group>
          <Form.Group as={Col} md="2" controlId="validationCustom01">
            <Form.Label>Giá</Form.Label>
            <Form.Select aria-label="Default select example">
              <option>Chọn khoảng giá</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Form.Group>
          <Form.Group as={Col} md="2" controlId="validationCustom02">
            <Form.Label>Năm xuất Bản</Form.Label>
            <Form.Select aria-label="Default select example">
              <option>Năm xuất bản</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Form.Group>
          <Form.Group as={Col} md="2" controlId="validationCustomUsername">
            <Form.Label>Thể loại</Form.Label>
            <Form.Select aria-label="Default select example">
              <option>Thể loại</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Form.Group>
          <Form.Group as={Col} md="2" controlId="validationCustomUsername">
            <Button type="submit">Lọc</Button>
          </Form.Group>
        </Row>
      </Form>
      <div className="filter__sort d-flex">
        <span>Sắp xếp theo:</span>
        <span>
          <i className="fa-solid fa-arrow-up-wide-short"></i>Tăng dần
        </span>
        <span>
          <i className="fa-solid fa-arrow-down-wide-short"></i>Giảm dần
        </span>
      </div>
    </div>
  );
};

export default Filter;
