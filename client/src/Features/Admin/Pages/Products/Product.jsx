import './product.scss'

import Sidebar from "../../Components/Sidebar/Sidebar"
import Navbar from "../../Components/Navbar/Navbar"
import Datatable from "../../Components/datatable/Datatable"
import { productColumns, productRows } from "../../../../Database/User" 


function Product() {
  return (
    <div className='product'>
        <Sidebar />
        <div className="productContainer">
            <Navbar />
            <Datatable 
              userColumns={productColumns} 
              userRows={productRows} 
              title="Add New Product" 
              type="products"
              action="Edit"
            />
        </div>
    </div>
  )
}

export default Product