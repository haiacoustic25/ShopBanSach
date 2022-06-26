import { useState, useEffect  } from "react";
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
} from "@material-ui/core";
import { format } from 'date-fns';
import Plus from "../../icons/plus";
import { styled } from '@mui/system';
import useTable from '../../Components/Table/useTable';
import Controls from "../../Components/controls/Controls";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import Popup from "../../Components/controls/Popup";
import CategoryForm from "../../Components/Form/CategoryForm";
import ModalEditCategory from "../../Components/Form/ModalEditCategory";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCategorys, deleteCategory } from "../../../../Redux/Action/action"
import ConfirmForm from "../../Components/Form/ConfirmForm";
import {
  OutlinedInput,
  FormControl,
  InputLabel,
} from "@mui/material";
import { CSVLink } from 'react-csv';
import {
    NotificationContainer,
    NotificationManager,
} from "react-notifications";

const StyledTableRow = styled(TableRow)(() => ({
  ':hover':{
      backgroundColor: '#00800075',
      cursor:'pointer'
  }
}));

const headCells = [
  { id: 'name', label: 'CATEGORY', disableSorting: true},
  { id: 'updated', label: 'UPDATED', disableSorting: true},
  { id: 'actions', label: 'ACTIONS', disableSorting: true},
];

export const Categorys = () => {

  const dispatch = useDispatch();
  const [editData, setEditData] = useState('')
  const listCategorys = useSelector((state) => state.category.listCategorys.categories);
  useEffect(() => {
    dispatch(fetchAllCategorys())
  }, [])

  
  const [filterFn, setFilterFn] = useState({ fn: Categorys => { return Categorys; } })
  const { 
    tblContainer, 
    tblHead,
    tblPagination,
    daTaAfterPagingAndSorting
  } =  useTable(listCategorys, headCells, filterFn);
  
  const handleSearch = e => {
    let target = e.target;
    setFilterFn({
      fn: Categorys => {
        if (target.value === "")
        return Categorys;
        else
        return Categorys.filter(x => x.tl_name.toLowerCase().includes(target.value))
      }
    })
  }

  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpenEdit = () =>{
    setOpenEdit(true)
  }
  const handleClickOpenDelete = () => {
    setOpenDelete(true)
  }
  const handleClickCloseEdit = () =>{
    setOpenEdit(false);
  }
  const handleClickCloseDelete = () =>{
    setOpenDelete(false);
  }
  const handleEditCategory = (Category) =>{
    setOpenEdit(true)
    setEditData(null)
    setEditData(Category)
  }
  const handleDeleteCategory = (Category) => {
    setOpenDelete(true)
    setEditData(null)
    setEditData(Category)
  }
  const handleDelete = () =>{
    dispatch(deleteCategory(editData.id))
    setTimeout(function(){
          NotificationManager.success('Delete Success', '', 2000);
    }, 1000);
    handleClickCloseDelete()
  }
  return (
    <>
      <Helmet>
        <title>Categorys | Ca Chep Admin</title>
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
              Categorys
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <CSVLink 
              data={listCategorys} 
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
                    Search Category
                  </InputLabel>
                  <OutlinedInput
                  type="text"
                  label="Search Category"
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
                onClick={handleClickOpen}
              />
            </Toolbar>
            <tblContainer>
              { tblHead() }
              <TableBody>
                {
                  daTaAfterPagingAndSorting()?.map(Category => (
                      <StyledTableRow key={Category.id}>
                        <TableCell>{Category.tl_name}</TableCell>
                        <TableCell>
                            {format(new Date(Category.updated_at), 'dd/MM/yyyy')}
                        </TableCell>
                        <TableCell>
                          <Controls.ActionButton
                              onClick = {() => handleEditCategory(Category)}
                          >
                            <EditOutlinedIcon fontSize="small" color="success"/>
                          </Controls.ActionButton>
                          <Controls.ActionButton
                            onClick={() => {handleDeleteCategory(Category)}}
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
              <CategoryForm 
                title="Add New Category" 
                handleClose={handleClose}
              />
          </Popup>
          {openEdit && 
            <Popup
              open={openEdit}
              setOpen={handleClickOpenEdit}
            >
              <ModalEditCategory
                Data={editData}
                title="Edit Category" 
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
                title="Delete Category" 
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
