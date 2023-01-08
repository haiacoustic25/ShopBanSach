import PropTypes from "prop-types";
import { Fragment } from "react";
import { format } from "date-fns";
import {
  Box,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@material-ui/core";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/system";

const StyledUl = styled("ul")(() => ({
  padding: 0,
}));

export const OrdersTable = ({ orders }) => {
  console.log(orders)
  return (
    <div>
      <Table sx={{ maxWidth: 1000 }}>
        <TableBody>
          {orders?.map((order) => {
            return (
              <Fragment key={order.bill.id}>
                <Accordion >
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <TableRow >
                      <TableCell>
                          {`#${order.bill.id}`}
                      </TableCell>
                      <TableCell style={{ width: 140 }} align="center">
                        <Box>
                          <Typography color="inherit" variant="inherit">
                            {format(
                              new Date(order?.bill.created_at),
                              "dd MMM yyyy"
                            )}
                          </Typography>
                          <Typography color="textSecondary" variant="inherit">
                            {format(new Date(order.bill.created_at), "HH:mm")}
                          </Typography>
                        </Box>
                      </TableCell>
                      <TableCell style={{ width: 160 }} align="center">
                        {order.user.name}
                      </TableCell>
                      <TableCell style={{ width: 140 }} align="right">
                        <Chip
                          label={order?.bill.status}
                          variant="outlined"
                          color={
                            order?.bill.status === "Pending"
                              ? "primary"
                              : order?.bill.status === "Complete"
                              ? "success"
                              : order?.bill.status === "Cancelled"
                              ? "warning"
                              : "error"
                          }
                        />
                      </TableCell>
                    </TableRow>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <TableRow
                        style={{
                          borderTop: "0.5px solid #ccc",
                          backgroundColor: "#F3F4F7",
                        }}
                      >
                        <TableCell
                          style={{ width: 320, fontSize: 12 }}
                          align="left"
                        >
                          NAME
                        </TableCell>
                        <TableCell
                          style={{ width: 100, fontSize: 12 }}
                          align="center"
                        >
                          COST
                        </TableCell>
                        <TableCell
                          style={{ width: 100, fontSize: 12 }}
                          align="center"
                        >
                          QTY
                        </TableCell>
                        <TableCell
                          style={{ width: 100, fontSize: 12 }}
                          align="left"
                        >
                          TOTAL
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell style={{ width: 320 }} align="left">
                          <Box>
                            <Typography color="inherit" variant="inherit">
                              {order.books.map((item) => {
                                return (
                                  <StyledUl key={item.id}>
                                    <li>{item.s_name}</li>
                                  </StyledUl>
                                );
                              })}
                            </Typography>
                          </Box>
                        </TableCell>
                        <TableCell style={{ width: 200 }} align="center">
                          {order.books.map((item) => {
                              return (
                                <StyledUl key={item.id}>
                                  <li>{item.s_price} VNĐ</li>
                                </StyledUl>
                              );
                            })}
                        </TableCell>
                        <TableCell style={{ width: 100 }} align="center">
                          {order.cart.map((item) => {
                            return (
                              <StyledUl key={item.book_id}>
                                <li>{item.book_quantity}</li>
                              </StyledUl>
                            );
                          })}
                        </TableCell>
                        <TableCell style={{ width: 200 }} align="left">
                          {order.books.map((item) => {
                            let total = 0;
                            order.cart.map((items) =>{
                              if(item.id === items.book_id){
                                total = item.s_price * items.book_quantity
                              }
                            })
                            return (
                              <StyledUl key={item.book_id}>
                                <li>{total} VNĐ</li>
                              </StyledUl>
                            );
                          })}
                          {/* {`${bookPrice} VNĐ`} */}
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell style={{ width: 320 }} align="left">
                          {order.books.map((item) => {
                            return (
                              <StyledUl key={item.book_id}>
                                <li>Discount ({item.s_discount}%)</li>
                              </StyledUl>
                            );
                          })}
                        </TableCell>
                        <TableCell
                          style={{ width: 100 }}
                          align="center"
                        ></TableCell>
                        <TableCell
                          style={{ width: 100 }}
                          align="center"
                        ></TableCell>
                        <TableCell style={{ width: 100 }} align="left">
                          {order.books.map((item) => {
                            let total = 0;
                            order.cart.map((items) =>{
                              if(item.id === items.book_id){
                                total = item.s_price * item.s_discount / 100 * items.book_quantity
                              }
                            })
                            return (
                              <StyledUl key={item.book_id}>
                                <li>{total} VNĐ</li>
                              </StyledUl>
                            );
                          })}
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell style={{ width: 320 }} align="left">
                          VAT (100%)
                        </TableCell>
                        <TableCell
                          style={{ width: 100 }}
                          align="center"
                        ></TableCell>
                        <TableCell
                          style={{ width: 100 }}
                          align="center"
                        ></TableCell>
                        <TableCell style={{ width: 100 }} align="left">
                          0 VNĐ
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell
                          style={{ width: 320, fontWeight: 700 }}
                          align="left"
                        >
                          Total
                        </TableCell>
                        <TableCell
                          style={{ width: 100 }}
                          align="center"
                        ></TableCell>
                        <TableCell
                          style={{ width: 100 }}
                          align="center"
                        ></TableCell>
                        <TableCell style={{ width: 100 }} align="left">
                          {`${order?.bill.bill_total} VNĐ`}
                        </TableCell>
                      </TableRow>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Fragment>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

OrdersTable.propTypes = {
  orders: PropTypes.array,
};
