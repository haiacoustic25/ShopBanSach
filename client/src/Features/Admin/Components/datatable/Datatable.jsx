import "./Datatable.scss"
import { DataGrid } from '@mui/x-data-grid';
import { Link } from "react-router-dom"

function Datatable({ userColumns, userRows, title, type, action }) {

    const actionColum = [
        {field: "action", headerName:"Action", width: 230, renderCell: () =>{
            return(
                <div className="cellAction">
                  <Link to={`/admin/${type}/test`} style={{ textDecoration: "none"}}>
                    <div className="viewButton">{action}</div>
                  </Link>
                    <div className="deleteButton">Delete</div>
                </div>
            )
        }}
    ]

  return (
    <div className="datatable">
      <div className="datatableTitle">
        {title}
        <Link to={`/admin/${type}/new`} className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColum)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  )
}

export default Datatable
