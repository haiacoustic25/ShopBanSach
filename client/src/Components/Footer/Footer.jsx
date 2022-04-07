import React from "react";
import "../../Assets/SCSS/footer.scss";
import service from "../../Assets/Img/vehicle.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="body">
        <div className="footer__top d-flex justify-content-between">
          <div className="footer__top--item d-flex">
            <img src={service} alt="" />
            <span>Dịch vụ tận tâm</span>
          </div>
          <div className="footer__top--item d-flex">
            <img src={service} alt="" />
            <span>Sản phẩm đa dạng</span>
          </div>
          <div className="footer__top--item d-flex">
            <img src={service} alt="" />
            <span>Vận chuyển chu đáo</span>
          </div>
          <div className="footer__top--item d-flex">
            <img src={service} alt="" />
            <span>Giá cả hợp lý</span>
          </div>
        </div>
        <div className="footer__mid d-flex justify-content-between">
          <div className="footer__mid--item">
            <h4>Liên kết nhanh</h4>
            <span>Sách có chứ ký</span>
            <span>Sách thiếu nhi</span>
            <span>Trinh thám</span>
            <span>Gợi ý cho bạn</span>
          </div>
          <div className="footer__mid--item">
            <h4>Các bộ sưu tập</h4>
            <span>Bút - viết</span>
            <span>Sản phẩm về giấy</span>
            <span>Dụng cụ vẽ</span>
            <span>Văn phòng phẩm khác</span>
          </div>
          <div className="footer__mid--item">
            <h4>Hỗ trợ khách hàng</h4>
            <span>Chính sách bảo mật</span>
            <span>Hướng dẫn mua hàng</span>
            <span>Phương thức thanh toán</span>
            <span>Phương thức vận chuyển</span>
            <span>Chính sách bảo hành</span>
            <span>Chính sách đổi trả</span>
            <span>Tin tuyển dụng</span>
          </div>
          <div className="footer__mid--item">
            <h4>Chăm sóc khách hàng</h4>
            <span>Liên hệ hỗ trợ</span>
            <span>Hệ thống cửa hàng</span>
            <span>Tin tuyển dụng</span>
          </div>
          <div className="footer__mid--item">
            <h4>Đối tác kinh doanh</h4>
            <span>Công ty phát hành sách</span>
            <span>Văn phòng phẩm</span>
          </div>
        </div>
        <div className="footer__bottom">
          <ul className="d-flex">
            <li>Sách Tiếng Việt</li>
            <li>Sách Ngoại Văn</li>
            <li>Văn Phòng Phẩm</li>
            <li>Đồ Chơi</li>
            <li>Đồ trang trí - Lưu niệm</li>
            <li>Nhà Cung Cấp</li>
            <li>Gợi ý quà tặng</li>
            <li>Sách có chữ ký</li>
          </ul>
          <span>Hồ Minh Hải - Đàm Văn Hiếu- Lại Đức Hiển</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
