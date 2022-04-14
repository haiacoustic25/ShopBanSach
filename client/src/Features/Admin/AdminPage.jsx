import React from "react"

import "./AdminPage.scss"
import Chart from "./Components/Charts/Chart";
import Featured from "./Components/Featured/Featured";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from './Components/Sidebar/Sidebar'
import Widget from "./Components/Widget/Widget";
import Tables from "./Components/Table/Tables";

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
        <div className="charts">
          <Featured />
          <Chart />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Tables />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
