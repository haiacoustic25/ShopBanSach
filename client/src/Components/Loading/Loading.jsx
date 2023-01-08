import React from "react";
import "../../Assets/SCSS/loading.scss";
const Loading = () => {
  return (
    <div className="loadingPage">
      <div className="spinner">
        <span className="loading spinner-inner-1"></span>
        <span className="loading spinner-inner-2"></span>
        <span className="loading spinner-inner-3"></span>
      </div>
    </div>
  );
};

export default Loading;
