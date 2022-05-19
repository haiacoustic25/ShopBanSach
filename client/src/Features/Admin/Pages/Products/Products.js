import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import {
  Paper,
  Box,
  Button,
  Container,
  Divider,
  TableBody,
  TableCell,
  TableRow,
  Typography,
  Toolbar,
  InputAdornment,
} from "@material-ui/core";
import Plus from "../../icons/plus";
import { styled } from '@mui/system';
import useTable from '../../Components/Table/useTable';
import Controls from "../../Components/controls/Controls";
import { Search } from "@material-ui/icons";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import Popup from "../../Components/controls/Popup";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts, deleteProduct } from "../../../../Redux/Action/action"
import ProductForm from "../../Components/Form/ProductForm";

const StyledTableRow = styled(TableRow)(() => ({
  ':hover':{
      backgroundColor: '#008000a6',
      cursor:'pointer'
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
  const listProducts = useSelector((state) => state.product.listProducts.books);
  const [editData, setEditData] = useState('')
  useEffect(() => {
    dispatch(fetchAllProducts())
  }, [])

  const handleDeleteProduct = (Product) => {
    dispatch(deleteProduct(Product.id))
  }
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
            if (target.value == "")
                return Products;
            else
                return Products.filter(x => x.s_name.toLowerCase().includes(target.value))
        }
    })
  }

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleEditProduct = (Product) =>{
    handleClickOpen()
    setEditData(null)
    setEditData(Product)
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
          </Box>
          <Paper>
          <Divider style={{color: '#9b9595'}} />
          <Toolbar>
            <Controls.Input
                  label="Search Products"
                  InputProps = {{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Search />
                      </InputAdornment>
                    )
                  }}
                  sx={{
                    width: '85%',
                    marginTop: '12px',
                    marginBottom: '12px'
                  }}
                  onChange={handleSearch}
              />
              <Controls.Button 
                text="Add New"
                variant="outlined"
                startIcon={<Plus />}
                sx={{
                  marginLeft: 2,
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
                        <TableCell >{Product.s_name}</TableCell>
                        <TableCell >{Product.s_amount}</TableCell>
                        <TableCell >{Product.s_price} VNĐ</TableCell>
                        <TableCell >
                          {
                            Product.s_status === 1 ? (
                              <div style={{color: 'green', fontWeight: '600'}}>Published</div>
                            ) : (
                              <div style={{color: 'blue', fontWeight: '600'}}>Draft</div>
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
        </Container>
      </Box>
    </>
  );
};
