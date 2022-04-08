import React from "react"

import "./AdminPage.scss"
import Sidebar from './Components/Sidebar/Sidebar'

const AdminPage = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        Container
      </div>
    </div>
  )
};

export default AdminPage
