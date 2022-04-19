import "./Users.scss"

import Sidebar from "../../Components/Sidebar/Sidebar"
import Navbar from "../../Components/Navbar/Navbar"
import Datatable from "../../Components/datatable/Datatable"
import { userColumns, userRows } from "../../../../Database/User" 


function Users() {
  return (
    <div className="list">
        <Sidebar />
        <div className="listContainer">
            <Navbar />
            <Datatable 
              userColumns={userColumns} 
              userRows={userRows} 
              title="Add New User" 
              type="users"
              action="View"
            />
        </div>
    </div>
  )
}

export default Users