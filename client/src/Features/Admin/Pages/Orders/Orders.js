import { useState  } from "react";
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
import { format } from 'date-fns';
import Plus from "../../icons/plus";
import { styled } from '@mui/system';
import useTable from '../../Components/Table/useTable';
import Controls from "../../Components/controls/Controls";
import { Search } from "@material-ui/icons";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import OrderForm from "../../Components/Form/OrderForm";
import { useDispatch, useSelector } from "react-redux";
import Popup from "../../Components/controls/Popup";
import ModalEditOrder from "../../Components/Form/ModalEditOrder";
import { fetchAllProducts, deleteProduct } from "../../../../Redux/Action/action"
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

const StyledTableRow = styled(TableRow)(() => ({
  ':hover':{
      backgroundColor: '#008000a6',
      cursor:'pointer'
  }
}));

function createData(id, name, phone, email, created, img) {
  return {
    name,
    phone,
    email,
    created,
    img
  };
}

const rows = [
  createData(1, 'Cupcake', '814-804-8230', 'wengallg@state.tx.us', new Date('2021-09-09T10:10:45.475Z'),'../../../../Assets/Img/ProductTest.png'),
  createData(2, 'Donut', '299-669-8130', 'scattowe@senate.gov', new Date('2021-09-09T10:10:45.475Z')),
  createData(3, 'Eclair', '440-345-1150', 'sodocherty4@army.mil', new Date('2021-09-09T10:10:45.475Z')),
  createData(4, 'Frozen yoghurt', '299-669-8130', 'scattowe@senate.gov', new Date('2021-09-09T10:10:45.475Z')),
  createData(5, 'Gingerbread', '299-669-8130', 'scattowe@senate.gov', new Date('2021-09-09T10:10:45.475Z')),
  createData(6, 'Honeycomb', '299-669-8130', 'scattowe@senate.gov', new Date('2021-09-09T10:10:45.475Z')),
  createData(7, 'Ice cream sandwich', '299-669-8130', 'scattowe@senate.gov', new Date('2021-09-09T10:10:45.475Z')),
  createData(8, 'Jelly Bean', '299-669-8130', 'scattowe@senate.gov', new Date('2021-09-09T10:10:45.475Z')),
  createData(9, 'KitKat', '299-669-8130', 'scattowe@senate.gov', new Date('2021-09-09T10:10:45.475Z')),
];

const headCells = [
  { id: 'name', label: 'NAME'},
  { id: 'phone', label: 'PHONE'},
  { id: 'email', label: 'EMAIL'},
  { id: 'created', label: 'CREATED', disableSorting: true},
  { id: 'actions', label: 'ACTIONS', disableSorting: true},
];

export const Orders = () => {
  const dispatch = useDispatch();
  const [listUsers, setListUsers] = useState(rows);
  const [filterFn, setFilterFn] = useState({ fn: Users => { return Users; } })
  const [editData, setEditData] = useState('')
  const { 
    tblContainer, 
    tblHead,
    tblPagination,
    daTaAfterPagingAndSorting
  } =  useTable(listUsers, headCells, filterFn);
  const handleSearch = e => {
    let target = e.target;
    setFilterFn({
        fn: Users => {
            if (target.value == "")
                return Users;
            else
                return Users.filter(x => x.name.toLowerCase().includes(target.value))
        }
    })
  }
  const handleDeleteOrder = (User) => {
    dispatch(deleteProduct(User.id))
    setTimeout(function(){
      NotificationManager.success('Delete Success', '', 2000);
    }, 1000);
  }

  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpenEdit = () =>{
    setOpenEdit(true)
  }
  const handleClickCloseEdit = () =>{
    setOpenEdit(false);
  }
  const handleEditOrder = (User) =>{
    setOpenEdit(true)
    setEditData(null)
    setEditData(User)
  }
  return (
    <>
      <Helmet>
        <title>Orders | Ca Chep Admin</title>
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
              Orders
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            </Box>
          <Paper>
          <Divider style={{color: '#9b9595'}} />
            <Toolbar>
              <Controls.Input
                    label="Search Orders"
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
                  daTaAfterPagingAndSorting().map(User => (
                      <StyledTableRow key={User.id}>
                        <TableCell width={400} align="left">{User.name}</TableCell>
                        <TableCell width={400}>{User.phone}</TableCell>
                        <TableCell width={400}>{User.email}</TableCell>
                        <TableCell width={400}>
                            {format(new Date(User.created), 'dd/MM/yyyy HH:mm')}
                        </TableCell>
                        <TableCell>
                          <Controls.ActionButton
                            onClick = {() => handleEditOrder(User)}
                          >
                            <EditOutlinedIcon fontSize="small" color="success"/>
                          </Controls.ActionButton>
                          <Controls.ActionButton
                            onClick={() => {handleDeleteOrder(User)}}
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
              <OrderForm 
                title="Add New Order" 
                handleClose={handleClose}
              />
          </Popup>
          {openEdit && 
            <Popup
              open={openEdit}
              setOpen={handleClickOpenEdit}
            >
              <ModalEditOrder
                Data={editData}
                title="Edit Order" 
                handleClose={handleClickCloseEdit}
              />
            </Popup>
          }
        </Container>
        <NotificationContainer />
      </Box>
    </>
  );
};
