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
        <span className="logo">Admin</span>
      </div>
      <div className="center">
        <ul>
          <Link to="/admin">
            <li>
                <DashboardIcon className="icon"/>
                <span>Dashboard</span>
            </li>
          </Link>
          <Link to="/admin/users">
            <li>
              <PersonOutlineOutlinedIcon className="icon"/>
              <span>Users</span>
            </li>
          </Link>
          <li>
            <InventoryIcon className="icon"/>
            <span>Products</span>
          </li>
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
      <div className="bottom">
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
