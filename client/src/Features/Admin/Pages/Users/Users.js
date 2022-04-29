import { useState } from "react";
import { Helmet } from "react-helmet";
import {
  Box,
  Button,
  Container,
  Divider,
  Typography,
} from "@material-ui/core";
import EnhancedTable from '../../Components/Table/users-table'
import Plus from "../../icons/plus";


export const Users = () => {
  const [mode, setMode] = useState("table");
  const [query, setQuery] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);

  const handleModeChange = (event, newMode) => {
    if (newMode) {
      setMode(newMode);
    }
  };

  const handleQueryChange = (newQuery) => {
    setQuery(newQuery);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

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
            <Button color="primary" size="large" variant="contained">
              <Plus 
                sx={{
                  marginRight: 2
                }}
              />
              Add
            </Button>
          </Box>
          <Divider />
          <EnhancedTable />
        </Container>
      </Box>
    </>
  );
};
