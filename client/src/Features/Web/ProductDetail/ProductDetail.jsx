import React, { useEffect, useState } from "react";
import Footer from "../../../Components/Footer/Footer";
import Header from "../../../Components/Header/Header";
import { Link } from "react-router-dom";
import { Button, Table } from "react-bootstrap";
import img from "../../../Assets/Img/ProductTest.png";
import "../../../Assets/SCSS/productDetail.scss";
import "react-notifications/lib/notifications.css";
import Loading from "../../../Components/Loading/Loading";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
const ProductDetail = () => {
  const [descFull, setDescFull] = useState(true);
  const [quantity, setQuantity] = useState(0);
  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  const handleReductionQuantity = () => {
    if (quantity > 0) setQuantity(quantity - 1);
    else setQuantity(0);
  };
  const handlerDesc = () => {
    setDescFull(!descFull);
  };

  const handleAddProduct = () => {
    NotificationManager.success("Thêm thành công", "", 500);
  };

  const [isDisplay, setIsDisplay] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      setIsDisplay(true);
    }, 1000);
  }, [isDisplay]);
  return (
    <div>
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
                / Storytelling With Data - Kể Chuyện Thông Qua Dữ Liệu
              </div>
            </div>
          </div>
          <div className="row my-4">
            <div className="inforProduct__img col-sm-4">
              <img src={img} alt=""/>
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
                    (Giảm giá <span></span> )
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
                      Nhập mã PLANNER2022 giảm 20% cho 50 đơn hàng đầu tiên mua
                      sổ planner Cá Chép 2022
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
                  >
                    <Link to="/thanh-toan" style={{ color: "#fff" }}>
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
                  <td>Mark</td>
                </tr>
                <tr>
                  <td>
                    <b>Nhà xuất bản</b>
                  </td>
                  <td>Mark</td>
                </tr>
                <tr>
                  <td>
                    <b>Tên tác giả</b>
                  </td>
                  <td>Thornton</td>
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
                Tam Quốc Diễn Nghĩa (Trọn Bộ 3 Tập) - Không kèm hộp. Tam Quốc
                diễn nghĩa của La Quán Trung là một trong những kiệt tác của văn
                học thế giới. Ngay từ khi được dịch sang chữ quốc ngữ vào đầu
                thế kỷ XX, tiểu thuyết này đã được bạn đọc Việt Nam đón nhận
                nồng nhiệt; từ đó đến nay có vô vàn ấn bản Tam Quốc ra đời, mỗi
                ấn bản lại mang một màu sắc khác nhau. Những nội dung đáng chú ý
                của bản in này: - Lời giới thiệu bộ Tam Quốc diễn nghĩa của NXB
                Phổ thông – Bộ Văn hóa, 1959 – 1960 - Lời nói đầu - Bài viết cho
                bản Tam Quốc diễn nghĩa xuất bản năm 1959 của Bộ Biên tập, Nhân
                dân Văn học Xuất bản xã Bắc Kinh, Trung Quốc - Hành trình truyện
                Tam Quốc diễn nghĩa ở Việt Nam, Tác giả: Yên Ba. - Hình một số
                nhân vật chính - Bảng tra cứu các nhân vật trong Tam Quốc diễn
                nghĩa - 120 hồi nội dung chính, cuối mỗi hồi có Lời bàn của Mao
                Tôn Cương - Bảng đối chiếu địa danh xưa và nay (theo bản in của
                NXB Đại học và Trung học chuyên nghiệp, năm 1987) - Niên biểu
                các sự kiện chính trong Tam Quốc diễn nghĩaam Quốc Diễn Nghĩa
                (Trọn Bộ 3 Tập) - Không kèm hộp. Tam Quốc diễn nghĩa của La Quán
                Trung là một trong những kiệt tác của văn học thế giới. Ngay từ
                khi được dịch sang chữ quốc ngữ vào đầu thế kỷ XX, tiểu thuyết
                này đã được bạn đọc Việt Nam đón nhận nồng nhiệt; từ đó đến nay
                có vô vàn ấn bản Tam Quốc ra đời, mỗi ấn bản lại mang một màu
                sắc khác nhau. Những nội dung đáng chú ý của bản in này: - Lời
                giới thiệu bộ Tam Quốc diễn nghĩa của NXB Phổ thông – Bộ Văn
                hóa, 1959 – 1960 - Lời nói đầu - Bài viết cho bản Tam Quốc diễn
                nghĩa xuất bản năm 1959 của Bộ Biên tập, Nhân dân Văn học Xuất
                bản xã Bắc Kinh, Trung Quốc - Hành trình truyện Tam Quốc diễn
                nghĩa ở Việt Nam, Tác giả: Yên Ba. - Hình một số nhân vật chính
                - Bảng tra cứu các nhân vật trong Tam Quốc diễn nghĩa - 120 hồi
                nội dung chính, cuối mỗi hồi có Lời bàn của Mao Tôn Cương - Bảng
                đối chiếu địa danh xưa và nay (theo bản in của NXB Đại học và
                Trung học chuyên nghiệp, năm 1987) - Niên biểu các sự kiện chính
                trong Tam Quốc diễn nghĩa
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
    </div>
  );
};

export default ProductDetail;
