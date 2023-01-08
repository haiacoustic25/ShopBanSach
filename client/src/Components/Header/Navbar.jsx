import React, { useEffect, useState } from "react";
import { Button, Form, InputGroup, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../Assets/Img/logo.png";
import emptyCart from "../../Assets/Img/empty-cart.png";
import Cart from "./Cart";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchAllCartReduct,
  fetchSearchProductRedux,
} from "../../Redux/Action/action";
const Navbar = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const onChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    if (user?.username) {
      dispatch(fetchAllCartReduct(user?.username));
    }
  }, []);

  useEffect(() => {
    if (search !== "") {
      dispatch(fetchSearchProductRedux({ name: search }));
    }
  }, [search]);
  const isAuth = useSelector((state) => state.user.isAuth);
  const user = useSelector((state) => state.user?.user?.user);
  const listProducts = useSelector((state) => state.cart.listProducts);
  const listProductsSearch = useSelector(
    (state) => state.product.listProductsSearch
  );
  const handleSearch = (e) => {
    e.preventDefault();
  };
  const renderSearch = () => {
    if (listProductsSearch.length > 0)
      return listProductsSearch.map((product, index) => (
        <li key={index}>
          <Link to={`/${product.id}`}>{product.s_name}</Link>
        </li>
      ));
    return <div className="mt-2 mb-2">Không có sản phẩm phù hợp</div>;
  };
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
              name="name"
              value={search}
              onChange={onChange}
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
          {search !== "" && (
            <ul className="navbar__search--result">{renderSearch()}</ul>
          )}
        </div>
        <div className="col-sm-3 pb-3 d-flex justify-content-end ">
          <div className="navbar__cart">
            <div>
              Giỏ Hàng Của Bạn
              <i className="fas fa-shopping-cart">
                {isAuth && (
                  <div className="navbar__cart--count">
                    {listProducts?.gh?.length}
                  </div>
                )}
              </i>
            </div>
            <div className="cart">
              {!isAuth || listProducts?.books?.length === 0 ? (
                <div className="cart__img">
                  <img src={emptyCart} alt="" />
                </div>
              ) : (
                <>
                  {listProducts?.books?.map((book, index) => (
                    <Cart products={book} key={index} />
                  ))}
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
