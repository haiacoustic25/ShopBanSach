import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import {
  Paper,
  Box,
  Container,
  Divider,
  TableBody,
  TableCell,
  TableRow,
  Button,
  Typography,
  Toolbar,
} from "@material-ui/core";
import Plus from "../../icons/plus";
import { styled } from '@mui/system';
import useTable from '../../Components/Table/useTable';
import Controls from "../../Components/controls/Controls";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import Popup from "../../Components/controls/Popup";
import UserForm from "../../Components/Form/UserForm";
import ModalEditUser from "../../Components/Form/ModalEditUser";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUsers } from "../../../../Redux/Action/action"
import { CSVLink } from 'react-csv';
import {
  NotificationContainer,
} from "react-notifications";
import {
  OutlinedInput,
  FormControl,
  InputLabel,
} from "@mui/material";

const StyledTableRow = styled(TableRow)(() => ({
  ':hover':{
      backgroundColor: '#00800075',
      cursor:'pointer'
  }
}));

const headCells = [
  { id: 'name', label: 'NAME'},
  { id: 'email', label: 'EMAIL'},
  { id: 'phone', label: 'PHONE'},
  { id: 'isAdmin', label: 'ROLE'},
  { id: 'actions', label: 'ACTIONS', disableSorting: true},
];

export const Users = () => {
  const dispatch = useDispatch();
  const listUsers = useSelector((state) => state.user.listUsers.users);
  useEffect(() => {
    dispatch(fetchAllUsers())
  }, [])
  const [editData, setEditData] = useState('')
  const [filterFn, setFilterFn] = useState({ fn: Users => { return Users; } })
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
            if (target.value === "")
                return Users;
            else
                return Users.filter(x => x.name.toLowerCase().includes(target.value))
        }
    })
  }

  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpenEdit = () =>{
    setOpenEdit(true)
  }
  const handleClickCloseEdit = () =>{
    setOpenEdit(false);
  }
  const handleEditUser = (User) =>{
    setOpenEdit(true)
    setEditData(null)
    setEditData(User)
  }

  return (
    <>
      <Helmet>
        <title>Users | Ca Chep Admin</title>
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
              Users
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <CSVLink 
              data={listUsers} 
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
                    Search Users
                    </InputLabel>
                    <OutlinedInput
                    type="text"
                    label="Search Users"
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
                onClick={() => { setOpen(true); }}
              />
            </Toolbar>
            <tblContainer>
              { tblHead() }
              <TableBody>
                {
                  daTaAfterPagingAndSorting()?.map(User => (
                      <StyledTableRow key={User.id}>
                        <TableCell >{User.name}</TableCell>
                        <TableCell >{User.email}</TableCell>
                        <TableCell >{User.phone}</TableCell>
                        <TableCell >
                            {User.isAdmin === 1 ? 'Admin' : 'User'}
                        </TableCell>
                        <TableCell>
                          <Controls.ActionButton
                            onClick={() => handleEditUser(User)}
                          >
                            <EditOutlinedIcon fontSize="small" color="success"/>
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
              <UserForm 
                title="Add New User" 
                handleClose={handleClose}
              />
          </Popup>
          {openEdit && 
            <Popup
              open={openEdit}
              setOpen={handleClickOpenEdit}
            >
              <ModalEditUser
                Data={editData}
                title="Edit User" 
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
