import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllProducts } from "../../Redux/Action/action";
const Menu = () => {
  const categories = useSelector(
    (state) => state?.category?.listCategorys?.categories
  );
  const dispatch = useDispatch();
  const handleClick = (id) => {
    window.scrollTo(0, 800);
    dispatch(fetchAllProducts({ category_id: id }));
  };
  return (
    <div className="body">
      <div className="row menu">
        <div className="d-flex col-sm-2 align-items-center">
          <div className="menu__list--item">
            <div className="menu__dropdown d-flex align-items-center">
              <i className="fas fa-bars"></i>
              <div>DANH MỤC SẢN PHẨM</div>
            </div>
            <div className="dropdown-content">
              {categories &&
                categories.map((category, index) => (
                  <Link
                    to=""
                    key={index}
                    onClick={() => handleClick(category.id)}
                  >
                    {category.tl_name}
                  </Link>
                ))}
            </div>
          </div>
        </div>
        <div className="list d-flex col-sm-10">
          {categories &&
            categories.slice(0, 3).map((category, index) => (
              <div
                className="list-item"
                key={index}
                onClick={() => handleClick(category.id)}
              >
                {category.tl_name}
              </div>
            ))}
          <div className="list-item">Gợi Ý Cho Bạn</div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
