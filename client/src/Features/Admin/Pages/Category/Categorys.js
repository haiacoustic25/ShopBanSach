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
  InputAdornment,
} from "@material-ui/core";
import Modal from '@mui/material/Modal';
import { format } from 'date-fns';
import Plus from "../../icons/plus";
import { styled } from '@mui/system';
import useTable from '../../Components/Table/useTable';
import Controls from "../../Components/controls/Controls";
import { Search } from "@material-ui/icons";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import Popup from "../../Components/controls/Popup";
import CategoryForm from "../../Components/Form/CategoryForm";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCategorys, deleteCategory } from "../../../../Redux/Action/action"

const StyledTableRow = styled(TableRow)(() => ({
  ':hover':{
      backgroundColor: '#008000a6',
      cursor:'pointer'
  }
}));

const headCells = [
  { id: 'name', label: 'CATEGORY'},
  { id: 'updated', label: 'UPDATED', disableSorting: true},
  { id: 'actions', label: 'ACTIONS', disableSorting: true},
];

export const Categorys = () => {

  const dispatch = useDispatch();
  const listCategorys = useSelector((state) => state?.category.listCategorys.categories);
  useEffect(() => {
    dispatch(fetchAllCategorys())
  }, [])

  const handleDeleteCategory = (Category) => {
    dispatch(deleteCategory(Category.id))
  }


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
            if (target.value == "")
                return Categorys;
            else
                return Categorys.filter(x => x.tl_name.toLowerCase().includes(target.value))
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
          </Box>
          <Paper>
          <Divider style={{color: '#9b9595'}} />
            <Toolbar>
              <Controls.Input
                    label="Search Categorys"
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
        </Container>
      </Box>
    </>
  );
};
