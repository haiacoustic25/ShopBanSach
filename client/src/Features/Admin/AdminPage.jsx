import React from "react"

import "./AdminPage.scss"
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from './Components/Sidebar/Sidebar'

const AdminPage = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        Container
      </div>
    </div>
  )
};

export default AdminPage
