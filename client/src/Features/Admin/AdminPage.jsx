import React from "react";
import { BrowserRouter, Route } from 'react-router-dom'

import Sidebar from './Sidebar/Sidebar'
import Switch from './Switch'

document.title = "Admin";

const AdminPage = () => {
  return (
    <BrowserRouter>
      <Route render={(props) => (
        <div className="layout">
          <Sidebar {...props}/>
          <div className="layout_content">
            <div className="layout_content-main">
              <Switch />
            </div>
          </div>
        </div>
      )}/>
    </BrowserRouter>
  );
};

export default AdminPage;
