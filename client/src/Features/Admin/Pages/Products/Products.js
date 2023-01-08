import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import {
  Paper,
  Box,
  Container,
  Divider,
  TableBody,
  TableCell,
  Button,
  TableRow,
  Typography,
  Toolbar,
} from "@material-ui/core";
import Plus from "../../icons/plus";
import { styled } from '@mui/system';
import useTable from '../../Components/Table/useTable';
import Controls from "../../Components/controls/Controls";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import Popup from "../../Components/controls/Popup";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts, deleteProduct } from "../../../../Redux/Action/action"
import ProductForm from "../../Components/Form/ProductForm";
import ModalEditProduct from "../../Components/Form/ModalEditProduct";
import { CSVLink } from 'react-csv';
import {
  OutlinedInput,
  FormControl,
  InputLabel,
} from "@mui/material";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import ConfirmForm from "../../Components/Form/ConfirmForm";

const StyledTableRow = styled(TableRow)(() => ({
  ':hover':{
      backgroundColor: '#00800075',
      cursor:'pointer'
  },
  'div':{
    whiteSpace: 'nowrap',
    width: '200px',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  'div:hover':{
    overflow: 'visible',
    whiteSpace: 'normal',
    textAlign: 'justify',
  }
}));

const headCells = [
  { id: 's_name', label: 'NAME'},
  { id: 's_amount', label: 'AMOUNT'},
  { id: 's_price', label: 'PRICE'},
  { id: 's_status', label: 'STATUS'},
  { id: 'actions', label: 'ACTIONS', disableSorting: true},
];

export const Products = () => {
  const dispatch = useDispatch();
  const [editData, setEditData] = useState('')
  const listProducts = useSelector((state) => state.product.listProducts.books);
  useEffect(() => {
    dispatch(fetchAllProducts())
  }, [])

  const [filterFn, setFilterFn] = useState({ fn: Products => { return Products; } })
  const { 
    tblContainer, 
    tblHead,
    tblPagination,
    daTaAfterPagingAndSorting
  } =  useTable(listProducts, headCells, filterFn);
  const handleSearch = e => {
    let target = e.target;
    setFilterFn({
        fn: Products => {
            if (target.value === "")
                return Products;
            else
                return Products.filter(x => x.s_name.toLowerCase().includes(target.value))
        }
    })
  }

  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const handleClose = () => {
    setOpen(false);
  }
  const handleClickOpenEdit = () =>{
    setOpenEdit(true)
  }
  const handleClickOpenDelete = () => {
    setOpenDelete(true)
  }
  const handleClickCloseDelete = () =>{
    setOpenDelete(false);
  }
  const handleClickCloseEdit = () =>{
    setOpenEdit(false);
  }
  const handleEditProduct = (Product) =>{
    setOpenEdit(true)
    setEditData(null)
    setEditData(Product)
  }
  const handleDeleteProduct = (Product) => {
    setOpenDelete(true)
    setEditData(null)
    setEditData(Product)
  }
  const handleDelete = () =>{
    dispatch(deleteProduct(editData.id))
    setTimeout(function(){
          NotificationManager.success('Delete Success', '', 2000);
    }, 1000);
    handleClickCloseDelete()
  }
  return (
    <>
      <Helmet>
        <title>Products | Ca Chep Admin</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: "background.default",
          pb: 3,
          pt: 8,
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
              mb: 3,
            }}
          >
            <Typography color="textPrimary" variant="h4">
              Products
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <CSVLink 
              data={listProducts} 
            > 
              <Button color="success" size="large" variant="contained">
                Export 
              </Button>
            </CSVLink>
          </Box>
          <Paper>
          <Divider style={{color: '#9b9595'}} />
          <Toolbar>
              <FormControl
                sx={{
                  width: '85%',
                  marginTop: '12px',
                  marginBottom: '12px'
                }}
              >
                  <InputLabel htmlFor="outlined-adornment-password">
                    Search Products
                  </InputLabel>
                  <OutlinedInput
                  type="text"
                  label="Search Products"
                  onChange={handleSearch}
                  />
              </FormControl>
              <Controls.Button 
                text="Add New"
                variant="outlined"
                startIcon={<Plus />}
                sx={{
                  color: 'black',
                  backgroundColor: '#59ac59',
                  lineHeight: '56px',
                  marginLeft: '32px'
                }}
                onClick={() => { setOpen(true)}}
              />
            </Toolbar>
            <tblContainer>
              { tblHead() }
              <TableBody>
                {
                  daTaAfterPagingAndSorting()?.map(Product => (
                      <StyledTableRow key={Product.id}>
                        <TableCell >
                          <div>{Product.s_name}</div>
                        </TableCell>
                        <TableCell >{Product.s_amount}</TableCell>
                        <TableCell >{Product.s_price} VNĐ</TableCell>
                        <TableCell >
                          {
                            Product.s_status === 1 ? (
                              <span style={{color: 'green', fontWeight: '600'}}>Published</span>
                            ) : (
                              <span style={{color: 'blue', fontWeight: '600'}}>Draft</span>
                            )
                          }
                        </TableCell>
                        <TableCell>
                          <Controls.ActionButton
                            onClick = {() => handleEditProduct(Product)}
                          >
                            <EditOutlinedIcon fontSize="small" color="success"/>
                          </Controls.ActionButton>
                          <Controls.ActionButton
                            onClick={() => {handleDeleteProduct(Product)}}
                          >
                            <DeleteOutlinedIcon fontSize="small" color="error"/>
                          </Controls.ActionButton>
                        </TableCell>
                      </StyledTableRow>
                    ))
                }
              </TableBody>
            </tblContainer>
            <Divider style={{color: '#9b9595'}} />
            { tblPagination() }
          </Paper>
          <Popup
            open={open}
            setOpen={setOpen}
          >
              <ProductForm 
                title="Add New Product" 
                handleClose={handleClose}
              />
          </Popup>
          {openEdit && 
            <Popup
              open={openEdit}
              setOpen={handleClickOpenEdit}
            >
              <ModalEditProduct
                Data={editData}
                title="Edit Product" 
                handleClose={handleClickCloseEdit}
              />
            </Popup>
          }
          {openDelete && 
            <Popup
              open={openDelete}
              setOpen={handleClickOpenDelete}
            >
              <ConfirmForm
                title="Delete Product" 
                handleDelete={handleDelete}
                handleClose={handleClickCloseDelete}
              />
            </Popup>
          }
        </Container>
        <NotificationContainer />
      </Box>
    </>
  );
};
