import React from 'react'
import "./Navbar.scss"
import logo from '../../../../Assets/Img/admin-User.png'

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="wrapper">
          <div className="search">
            <input type="text" placeholder='Search...' />
            <SearchOutlinedIcon className="icon"/>
          </div>
          <div className="items">
            <div className="item"> 
              <DarkModeOutlinedIcon className="icon"/>
            </div>
            <div className="item"> 
              <img 
                src={logo}
                alt=''
                className='avatar'
              />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Navbar;