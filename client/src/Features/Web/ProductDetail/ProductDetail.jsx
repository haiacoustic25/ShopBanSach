import React, { useEffect, useState } from "react";
import Footer from "../../../Components/Footer/Footer";
import Header from "../../../Components/Header/Header";
import { Link, useNavigate } from "react-router-dom";
import { Button, Table } from "react-bootstrap";
import "../../../Assets/SCSS/productDetail.scss";
import "react-notifications/lib/notifications.css";
import Loading from "../../../Components/Loading/Loading";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchProductByIdRedux,
  addProductIntoCartRedux,
  fetchCategoryByIdRedux,
  fetchAuthorByIdRedux,
  moveProducrtIntoPayload,
} from "../../../Redux/Action/action";

const ProductDetail = () => {
  const [descFull, setDescFull] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  const handleReductionQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
    else setQuantity(1);
  };
  const handlerDesc = () => {
    setDescFull(!descFull);
  };

  const [isDisplay, setIsDisplay] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      setIsDisplay(true);
    }, 1000);
  }, [isDisplay]);

  // find product by id
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchProductByIdRedux(id));
  }, [id]);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state?.user?.user?.user);
  const isAuth = useSelector((state) => state?.user?.isAuth);

  const handleAddProduct = () => {
    if (user) {
      dispatch(
        addProductIntoCartRedux(
          { cart_id: user.id, book_id: id, gh_amount: quantity },
          user.username
        )
      );
      NotificationManager.success("Thêm thành công", "", 500);
    } else {
      navigate("/dang-nhap");
    }
  };

  const inforProduct = useSelector((state) => state.product.inforProductById);
  useEffect(() => {
    if (inforProduct.category_id) {
      dispatch(fetchCategoryByIdRedux(inforProduct.category_id));
      dispatch(fetchAuthorByIdRedux(inforProduct.author_id));
    }
  }, [inforProduct, id]);
  const nameCategory = useSelector((state) => state.category.nameCategory);
  const nameAuthor = useSelector((state) => state.author.nameAuthor);

  const oldImg = inforProduct ? (
    `http://localhost:8000/uploads/book/${inforProduct.s_image}`
  ) : (
    <></>
  );

  const handlePayload = () => {
    if (!user) dispatch(moveProducrtIntoPayload(inforProduct));
    else {
      dispatch(
        addProductIntoCartRedux(
          { cart_id: user.id, book_id: id, gh_amount: quantity },
          user.username
        )
      );
    }
  };

  return (
    <div>
      <>
        <Header />
        {!isDisplay ? (
          <Loading />
        ) : (
          <div className="body">
            <div className="row ">
              <div
                className="d-flex my-2"
                style={{
                  fontSize: 14,
                }}
              >
                <Link to="/">TRANG CHỦ</Link>
                <div className="text-uppercase px-2">
                  / {inforProduct.s_name}
                </div>
              </div>
            </div>
            <div className="row my-4">
              <div className="inforProduct__img col-sm-4">
                <img src={oldImg} alt="" />
              </div>
              <div className="col-sm-7 p-0">
                <div className="inforProduct__name row text-uppercase m-0">
                  {inforProduct.s_name}
                </div>
                <div className="row mt-1 mb-3">
                  <div className="inforProduct__note d-flex">
                    <div>
                      Nhà cung cấp: <span>{inforProduct.s_nsx}</span>
                    </div>
                    <div>
                      Loại sách:
                      <span>{nameCategory}</span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="inforProduct__price d-flex">
                    <div className="inforProduct__price--new">
                      {Number(
                        inforProduct.s_price -
                          (inforProduct.s_price * inforProduct.s_discount) / 100
                      ).toLocaleString("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      })}
                    </div>
                    <div className="inforProduct__price--old">
                      {Number(inforProduct.s_price).toLocaleString("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      })}
                    </div>
                    <div className="inforProduct__price--note">
                      (Giảm giá <span>{inforProduct.s_discount}%</span> )
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="inforProduct__promotion my-4">
                    <div className="inforProduct__promotion--title mx-2">
                      Khuyến mãi & Ưu đãi tại
                      <Link to="/" className="text-uppercase mx-2">
                        cachep.vn
                      </Link>
                    </div>
                    <ul>
                      <li>
                        Nhập mã PLANNER2022 giảm 20% cho 50 đơn hàng đầu tiên
                        mua sổ planner Cá Chép 2022
                      </li>
                      <li>
                        Nhập mã FREESHIP giảm 10K phí vận chuyển cho đơn từ 200K
                      </li>
                      <li>Sách Saigon Books Mua 1 Tặng 1</li>
                    </ul>
                  </div>
                </div>
                <div className="row">
                  <div className="inforProduct__quantity">
                    <button onClick={handleReductionQuantity}>-</button>
                    <span>{quantity}</span>
                    <button onClick={handleIncreaseQuantity}>+</button>
                  </div>
                  <div className="inforProduct__btn d-flex px-0">
                    <Button
                      variant="success"
                      className="text-uppercase mr-3"
                      onClick={handleAddProduct}
                      style={{
                        backgroundColor: "#00ab9f",
                      }}
                    >
                      Thêm vào giỏ
                    </Button>
                    <Button
                      variant="success"
                      className="text-uppercase"
                      style={{
                        backgroundColor: "#00ab9f",
                      }}
                      onClick={handlePayload}
                    >
                      <Link
                        to={isAuth ? "/gio-hang" : "/dang-nhap"}
                        style={{ color: "#fff" }}
                      >
                        Mua ngay
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="inforProduct__desc w-75">
              <h3>Thông tin chi tiết</h3>
              <Table striped bordered size="sm">
                <tbody>
                  <tr>
                    <td style={{ width: "250px" }}>
                      <b>Mã hàng</b>
                    </td>
                    <td>{inforProduct.id}</td>
                  </tr>
                  <tr>
                    <td>
                      <b>Nhà xuất bản</b>
                    </td>
                    <td>{inforProduct.s_nsx}</td>
                  </tr>
                  <tr>
                    <td>
                      <b>Tên tác giả</b>
                    </td>
                    <td>{nameAuthor}</td>
                  </tr>
                  <tr>
                    <td>
                      <b>Năm xuất bản</b>
                    </td>
                    <td>Larry the Bird</td>
                  </tr>
                </tbody>
              </Table>
              <div className="inforProduct__desc--text">
                <h4>Mô tả</h4>
                <span
                  className={`inforProduct__desc--text-${
                    descFull ? "collapse" : "full"
                  }`}
                >
                  {inforProduct.s_description}
                </span>
                {descFull ? (
                  <Button
                    variant="success"
                    onClick={handlerDesc}
                    style={{
                      backgroundColor: "#00ab9f",
                    }}
                  >
                    Xem Thêm
                  </Button>
                ) : (
                  <Button
                    variant="success"
                    onClick={handlerDesc}
                    style={{
                      backgroundColor: "#00ab9f",
                    }}
                  >
                    Thu gọn
                  </Button>
                )}
                <NotificationContainer />
              </div>
            </div>
          </div>
        )}

        <Footer />
      </>
    </div>
  );
};

export default ProductDetail;
