import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutRedux } from "../../Redux/Action/action";
const TopBar = () => {
  const isAuth = useSelector((state) => state.user.isAuth);
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    setTimeout(() => {
      dispatch(logoutRedux());
      navigate("/");
    }, 500);
  };
  return (
    <div className="topbar">
      <div className="body">
        <div className="row">
          <div className=" col-sm-8 ">
            <ul className="topbar__left p-0">
              <li>
                <Link to="" className="topbar__right--link">
                  Hệ Thống Cửa Hàng
                </Link>
              </li>
              <li>
                <Link to="" className="topbar__right--link">
                  Liên Hệ Hỗ Trợ
                </Link>
              </li>
              <li>
                <Link to="" className="topbar__right--link">
                  Tin Tuyển Dụng
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-sm-4 ">
            {!isAuth ? (
              <ul className="topbar__right">
                <li>
                  <Link to="/dang-nhap" className="topbar__right--link">
                    Đăng Nhập
                  </Link>
                </li>
                <li>
                  <Link to="/dang-ky" className="topbar__right--link">
                    Đăng Ký
                  </Link>
                </li>
              </ul>
            ) : (
              <ul className="topbar__right">
                <li>
                  <Link
                    to={`/account/${user.user?.id}`}
                    className="topbar__right--link"
                  >
                    Chào, {user.user?.name}
                  </Link>
                </li>
                <li onClick={handleLogout}>Đăng xuất</li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
