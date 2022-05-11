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
import Add from '../../Components/Form/Add';
import { userInputs } from "../../../../Database/formSource"
import useTable from '../../Components/Table/useTable';
import Controls from "../../Components/controls/Controls";
import { Search } from "@material-ui/icons";

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
];

export const Authors = () => {

  const [listUsers, setListUsers] = useState(rows);
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
            if (target.value == "")
                return Users;
            else
                return Users.filter(x => x.name.toLowerCase().includes(target.value))
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
            <Button color="success" size="large" variant="contained" onClick={handleClickOpen}>
              <Plus 
                sx={{
                  marginRight: 2
                }}
              />
              Add
            </Button>
            <Add inputs={userInputs} title="Add New Author" handleClose={handleClose} open={open}/>
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
                      width: '100%',
                      marginTop: '12px',
                      marginBottom: '12px'
                    }}
                    onChange={handleSearch}
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
                      </StyledTableRow>
                    ))
                }
              </TableBody>
            </tblContainer>
            <Divider style={{color: '#9b9595'}} />
            { tblPagination() }
          </Paper>
        </Container>
      </Box>
    </>
  );
};
