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
  Typography,
  Toolbar,
} from "@material-ui/core";
import { styled } from "@mui/system";
import useTable from "../../Components/Table/useTable";
import Controls from "../../Components/controls/Controls";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import Popup from "../../Components/controls/Popup";
import ModalEditOrder from "../../Components/Form/ModalEditOrder";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllOrders } from "../../../../Redux/Action/action";
import { NotificationContainer } from "react-notifications";
import { OutlinedInput, FormControl, InputLabel } from "@mui/material";

const StyledTableRow = styled(TableRow)(() => ({
  ":hover": {
    backgroundColor: "#00800075",
    cursor: "pointer",
  },
}));

const StyledUl = styled("ul")(() => ({
  padding: 0,
}));

const headCells = [
  { id: "id", label: "ID", disableSorting: true },
  { id: "name", label: "NAME", disableSorting: true },
  { id: "phone", label: "PHONE", disableSorting: true },
  { id: "book", label: "BOOK", disableSorting: true },
  { id: "quantily", label: "QTY", disableSorting: true },
  { id: "total", label: "TOTAL", disableSorting: true },
  { id: "status", label: "STATUS", disableSorting: true },
  { id: "actions", label: "ACTIONS", disableSorting: true },
];

export const Orders = () => {
  const dispatch = useDispatch();
  const listOrders = useSelector((state) => state.order.listOrders.bill_view);
  useEffect(() => {
    dispatch(fetchAllOrders());
  }, []);
  console.log(listOrders);
  const [editData, setEditData] = useState("");
  const [filterFn, setFilterFn] = useState({
    fn: (Orders) => {
      return Orders;
    },
  });
  const { tblContainer, tblHead, tblPagination, daTaAfterPagingAndSorting } =
    useTable(listOrders, headCells, filterFn);

  const handleSearch = (e) => {
    let target = e.target;
    setFilterFn({
      fn: (Orders) => {
        if (target.value === "") return Orders;
        else
          return Orders.filter((x) =>
            x.user.name.toLowerCase().includes(target.value)
          );
      },
    });
  };

  const [openEdit, setOpenEdit] = useState(false);
  const handleClickOpenEdit = () => {
    setOpenEdit(true);
  };
  const handleClickCloseEdit = () => {
    setOpenEdit(false);
  };
  const handleEditOrder = (Order) => {
    setOpenEdit(true);
    setEditData(null);
    setEditData(Order);
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
              Orders
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
          </Box>
          <Paper>
            <Divider style={{ color: "#9b9595" }} />
            <Toolbar>
              <FormControl
                sx={{
                  width: "100%",
                  marginTop: "12px",
                  marginBottom: "12px",
                }}
              >
                <InputLabel htmlFor="outlined-adornment-password">
                  Search Orders
                </InputLabel>
                <OutlinedInput
                  type="text"
                  label="Search Users"
                  onChange={handleSearch}
                />
              </FormControl>
            </Toolbar>
            <tblContainer>
              {tblHead()}
              <TableBody>
                {daTaAfterPagingAndSorting()?.map((Order) => (
                  <StyledTableRow key={Order.bill.cart_id}>
                    <TableCell>{Order.bill.id}</TableCell>
                    <TableCell>{Order.user.name}</TableCell>
                    <TableCell>{Order.user.phone}</TableCell>
                    <TableCell>
                      {Order.books.map((item) => {
                        return (
                          <StyledUl key={item.id}>
                            <li>{item.s_name}</li>
                          </StyledUl>
                        );
                      })}
                    </TableCell>
                    <TableCell>
                      {Order.cart.map((item) => {
                        return (
                          <StyledUl key={item.book_id}>
                            <li>{item.book_quantity}</li>
                          </StyledUl>
                        );
                      })}
                    </TableCell>
                    <TableCell>
                      {`${Order.bill.bill_total} VNĐ`}
                    </TableCell>
                    <TableCell>
                      {Order.bill.status === "Pending" ? (
                        <span style={{ color: "blue", fontWeight: "600" }}>
                          Pending
                        </span>
                      ) : Order.bill.status === "Complete" ? (
                        <span style={{ color: "green", fontWeight: "600" }}>
                          Complete
                        </span>
                      ) : Order.bill.status === "Cancelled" ? (
                        <span style={{ color: "orange", fontWeight: "600" }}>
                          Cancelled
                        </span>
                      ) : (
                        <span style={{ color: "red", fontWeight: "600" }}>
                          Processed
                        </span>
                      )}
                    </TableCell>
                    <TableCell>
                      <Controls.ActionButton
                        onClick={() => handleEditOrder(Order)}
                      >
                        <EditOutlinedIcon fontSize="small" color="success" />
                      </Controls.ActionButton>
                    </TableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </tblContainer>
            <Divider style={{ color: "#9b9595" }} />
            {tblPagination()}
          </Paper>
          {openEdit && (
            <Popup open={openEdit} setOpen={handleClickOpenEdit}>
              <ModalEditOrder
                Data={editData}
                title="Edit Order"
                handleClose={handleClickCloseEdit}
              />
            </Popup>
          )}
        </Container>
        <NotificationContainer />
      </Box>
    </>
  );
};
