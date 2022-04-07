import React from "react";

import "./AdminPage.scss"
import Sidebar from './Sidebar/Sidebar'


const AdminPage = () => {
  return (
    <div className="home">
      <div className="title">
        <Sidebar />
      </div>
    </div>
  )
};

export default AdminPage;
