import React from 'react'
import './Slidebar.scss'

import { Link } from "react-router-dom"
import DashboardIcon from '@mui/icons-material/Dashboard'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import InventoryIcon from '@mui/icons-material/Inventory';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/admin" style={{ textDecoration: "none"}}>
          <span className="logo">Admin</span>
        </Link>
      </div>
      <div className="center">
        <ul>
          <Link to="/admin" style={{ textDecoration: "none"}}>
            <li>
                <DashboardIcon className="icon"/>
                <span>Dashboard</span>
            </li>
          </Link>
          <Link to="/admin/users" style={{ textDecoration: "none"}}>
            <li>
              <PersonOutlineOutlinedIcon className="icon"/>
              <span>Users</span>
            </li>
          </Link>
          <Link to="/admin/products" style={{ textDecoration: "none"}}>
          <li>
            <InventoryIcon className="icon"/>
            <span>Products</span>
          </li>
          </Link>
          <li>
            <LocalGroceryStoreIcon className="icon"/>
            <span>Orders</span>
          </li>
          <li>
            <LogoutIcon className="icon"/>
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="Bottom">
        <div className='title'>Theme</div>
        <div className="Option">
          <div className="colorOption"></div>
          <div className="colorOption"></div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar;
