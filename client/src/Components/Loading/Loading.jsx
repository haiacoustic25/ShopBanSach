import React from "react";
import "../../Assets/SCSS/loading.scss";
const Loading = () => {
  return (
    <div className="loadingPage">
      <div class="spinner">
        <span class="loading spinner-inner-1"></span>
        <span class="loading spinner-inner-2"></span>
        <span class="loading spinner-inner-3"></span>
      </div>
    </div>
  );
};

export default Loading;
