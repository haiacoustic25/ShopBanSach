import React from "react";
import Footer from "../../../Components/Footer/Footer";
import Header from "../../../Components/Header/Header";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import img from "../../../Assets/Img/ProductTest.png";
import "../../../Assets/SCSS/productDetail.scss";
const ProductDetail = () => {
  return (
    <>
      <Header />
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
              / Storytelling With Data - Kể Chuyện Thông Qua Dữ Liệu
            </div>
          </div>
        </div>
        <div className="row my-4">
          <div className="inforProduct__img col-sm-4">
            <img src={img} alt="" width="300px" height="300px" />
            <div className="inforProduct__discount">-%</div>
          </div>
          <div className="col-sm-7 p-0">
            <div className="inforProduct__name row text-uppercase m-0"></div>
            <div className="row mt-1 mb-3">
              <div className="inforProduct__note d-flex">
                <div>
                  Nhà cung cấp: <span></span>
                </div>
                <div>
                  Loại sách: <span></span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="inforProduct__price d-flex">
                <div className="inforProduct__price--new"></div>
                <div className="inforProduct__price--old"></div>
                <div className="inforProduct__price--note">
                  (Bạn dã tiết kiệm được <span></span> đ)
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
                    Nhập mã PLANNER2022 giảm 20% cho 50 đơn hàng đầu tiên mua sổ
                    planner Cá Chép 2022
                  </li>
                  <li>
                    Nhập mã FREESHIP giảm 10K phí vận chuyển cho đơn từ 200K
                  </li>
                  <li>Sách Saigon Books Mua 1 Tặng 1</li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="inforProduct__btn d-flex px-0">
                <Button variant="primary" className="text-uppercase mr-3">
                  Thêm vào giỏ
                </Button>
                <Button variant="primary" className="text-uppercase">
                  Mua Ngay
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;
