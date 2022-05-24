import { useState, useEffect  } from "react";
import { Helmet } from "react-helmet";
import {
  Paper,
  Box,
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
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import Popup from "../../Components/controls/Popup";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllAuthors, deleteAuthor } from "../../../../Redux/Action/action"
import AuthorForm from "../../Components/Form/AuthorForm";
import ModalEditAuthor from "../../Components/Form/ModalEditAuthor";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import ConfirmForm from "../../Components/Form/ConfirmForm";

const StyledTableRow = styled(TableRow)(() => ({
  ':hover':{
      backgroundColor: '#008000a6',
      cursor:'pointer',
  },
  'div':{
    whiteSpace: 'nowrap',
    width: '400px',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  'div:hover':{
    overflow: 'visible',
    whiteSpace: 'normal'
  }
}));

const headCells = [
  { id: 'name', label: 'NAME'},
  { id: 'birthday', label: 'BIRTHDAY', disableSorting: true},
  { id: 'description', label: 'DESCRIPTION', disableSorting: true},
  { id: 'actions', label: 'ACTIONS', disableSorting: true},
];

export const Authors = () => {
  const dispatch = useDispatch();
  const listAuthors = useSelector((state) => state.author.listAuthors.authors);
  const [editData, setEditData] = useState('')
  useEffect(() => {
    dispatch(fetchAllAuthors())
  }, [])

  const [filterFn, setFilterFn] = useState({ fn: Authors => { return Authors; } })
  const { 
    tblContainer, 
    tblHead,
    tblPagination,
    daTaAfterPagingAndSorting
  } =  useTable(listAuthors, headCells, filterFn);
  
  const handleSearch = e => {
    let target = e.target;
    setFilterFn({
        fn: Authors => {
            if (target.value == "")
                return Authors;
            else
                return Authors.filter(x => x.tg_name.toLowerCase().includes(target.value))
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
  const handleClickCloseDelete = () =>{
    setOpenDelete(false);
  }
  const handleClickCloseEdit = () =>{
    setOpenEdit(false);
  }
  const handleEditAuthor = (Author) =>{
    setOpenEdit(true)
    setEditData(null)
    setEditData(Author)
  }
  const handleDeleteAuthor = (Author) => {
    setOpenDelete(true)
    setEditData(null)
    setEditData(Author)
  }
  const handleDelete = () =>{
    dispatch(deleteAuthor(editData.id))
    setTimeout(function(){
          NotificationManager.success('Delete Success', '', 2000);
    }, 1000);
    handleClickCloseDelete()
  }
  return (
    <>
      <Helmet>
        <title>Authors | Ca Chep Admin</title>
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
              Authors
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
          </Box>
          <Paper>
          <Divider style={{color: '#9b9595'}} />
            <Toolbar>
              <Controls.Input
                    label="Search Authors"
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
                  daTaAfterPagingAndSorting()?.map(Author => (
                      <StyledTableRow key={Author.id}>
                        <TableCell>{Author.tg_name}</TableCell>
                        <TableCell>
                            {format(new Date(Author.tg_dob), 'dd/MM/yyyy')}
                        </TableCell>
                        <TableCell>
                          <div >
                            {Author.tg_description}
                          </div>
                        </TableCell>
                        <TableCell>
                          <Controls.ActionButton
                            onClick = {() => handleEditAuthor(Author)}
                          >
                            <EditOutlinedIcon fontSize="small" color="success"/>
                          </Controls.ActionButton>
                          <Controls.ActionButton
                            onClick={() => {handleDeleteAuthor(Author)}}
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
            setOpen={handleClickOpen}
          >
              <AuthorForm
                title="Add New Author" 
                handleClose={handleClose}
              />
          </Popup>
          {openEdit && 
            <Popup
              open={openEdit}
              setOpen={handleClickOpenEdit}
            >
              <ModalEditAuthor 
                Data={editData}
                title="Edit Author" 
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
                title="Delete Author" 
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
