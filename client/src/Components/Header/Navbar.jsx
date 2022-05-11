import React, { useEffect, useState } from "react";
import { Button, Form, InputGroup, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../Assets/Img/logo.png";
import emptyCart from "../../Assets/Img/empty-cart.png";
import products from "../../Assets/Img/ProductTest.png";
import Cart from "./Cart";
import { useSelector } from "react-redux";
const Navbar = () => {
  const [search, setSearch] = useState({ search: "" });

  const handleEnterSearch = (e) => {
    console.log(e.target.value);
    setSearch({ ...search, [e.target.name]: e.target.value });
  };
  const isAuth = useSelector((state) => state.user.isAuth);
  const user = useSelector((state) => state.user?.user);
  useEffect(() => {
    // console.log(isAuth);
    // console.log(user);
  }, [user]);
  const handleSearch = () => {};
  return (
    <div className="body">
      <div className="row py-3">
        <div className="col-sm-2">
          <Link to="/">
            <img src={logo} alt="" width="218px" />
          </Link>
        </div>
        <div className="navbar__search col-sm-7 py-2">
          <Form onSubmit={handleSearch}>
            <InputGroup
              className="mb-3 navbar__search"
              onChange={handleEnterSearch}
              name="search"
              value={search}
            >
              <FormControl placeholder="Bạn Muốn Mua Gì?" />
              <Button
                variant="outline-secondary"
                id="button-addon2"
                className="navbar__search--btn"
                type="submit"
              >
                TÌM KIẾM
              </Button>
            </InputGroup>
          </Form>
        </div>
        <div className="col-sm-3 pb-3 d-flex justify-content-end ">
          <div className="navbar__cart">
            <div>
              Giỏ Hàng Của Bạn
              <i className="fas fa-shopping-cart">
                {isAuth && <div className="navbar__cart--count">0</div>}
              </i>
            </div>
            <div className="cart">
              {!isAuth ? (
                <div className="cart__img">
                  <img src={emptyCart} alt="" />
                </div>
              ) : (
                <>
                  <Cart products={products} />
                  <Cart products={products} />
                </>
              )}
              <div className="cart__all">
                <Link to={!isAuth ? "/dang-nhap" : "/gio-hang"}>
                  Xem tất cả{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
