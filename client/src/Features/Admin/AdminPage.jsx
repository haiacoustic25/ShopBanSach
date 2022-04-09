import React from "react"

import "./AdminPage.scss"
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from './Components/Sidebar/Sidebar'
import Widget from "./Components/Widget/Widget";

const AdminPage = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user"/>
          <Widget type="order"/>
          <Widget type="earning"/>
          <Widget type="balance"/>
        </div>
      </div>
    </div>
  )
};

export default AdminPage
