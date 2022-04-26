import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import { format } from 'date-fns';
import {
  Box,
  Chip,
  Link,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography
} from '@material-ui/core';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const statusVariants = [
  {
    label: 'Placed',
    value: 'placed',
    color: 'primary'
  },
  {
    label: 'Processed',
    value: 'processed',
    color: 'error'
  },
  {
    label: 'Delivered',
    value: 'delivered',
    color: 'warning'
  },
  {
    label: 'Complete',
    value: 'complete',
    color: 'success'
  }
];

export const OrdersTable = ({orders}) => {
  return (
    <div>
      <Table sx={{ maxWidth: 1000 }}>
        <TableBody>
          {orders.map((order) => {
            const statusVariant = statusVariants.find(
              (variant) => variant.value === order.status
            );
            return (
              <>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                  >
                     <TableRow key={order.id}>
                      <TableCell >
                        <Link
                          color="inherit"
                          component={RouterLink}
                          to="#"
                          underline="none"
                          variant="subtitle2"
                        >
                          {`#${order.id}`}
                        </Link>
                      </TableCell>
                      <TableCell style={{ width: 140 }} align="center">
                        <Box>
                          <Typography
                            color="inherit"
                            variant="inherit"
                          >
                            {format(new Date(order.createdAt), 'dd MMM yyyy')}
                          </Typography>
                          <Typography
                            color="textSecondary"
                            variant="inherit"
                          >
                            {format(new Date(order.createdAt), 'HH:mm')}
                          </Typography>
                        </Box>
                      </TableCell>
                      <TableCell style={{ width: 160 }} align="center">
                        {`${order.customer.firstName} ${order.customer.lastName}`}
                      </TableCell>
                      <TableCell style={{ width: 140 }} align="right">
                        <Chip
                          label={statusVariant.label}
                          variant="outlined"
                          color={statusVariant.color}
                        />
                      </TableCell>
                    </TableRow>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <TableRow style={{borderBottom: "0.5px solid", borderTop: "0.5px solid", backgroundColor: "#ccc"}}>
                        <TableCell style={{ width: 320, fontSize: 12 }} align="left">
                          NAME
                        </TableCell>
                        <TableCell style={{ width: 100, fontSize: 12 }} align="center">
                          COST
                        </TableCell>
                        <TableCell style={{ width: 100, fontSize: 12 }} align="center">
                          QTY
                        </TableCell>
                        <TableCell style={{ width: 100, fontSize: 12 }} align="left">
                          TOTAL
                        </TableCell>
                      </TableRow>
                      <TableRow >
                        <TableCell style={{ width: 320 }} align="left">
                        <Box>
                          <Typography
                            color="inherit"
                            variant="inherit"
                          >
                            {`${order.lineItems.name}`}
                          </Typography>
                          <Typography
                            color="textSecondary"
                            variant="inherit"
                          >
                            {`SKU: ${order.lineItems.sku}`}
                          </Typography>
                        </Box>
                        </TableCell>
                        <TableCell style={{ width: 100 }} align="center">
                          {`$${order.lineItems.subtotalAmount}`}
                        </TableCell>
                        <TableCell style={{ width: 100 }} align="center">
                          {order.lineItems.quantity}
                        </TableCell>
                        <TableCell style={{ width: 100 }} align="left">
                          {`$${order.lineItems.totalAmount}`}
                        </TableCell>
                      </TableRow>
                      <TableRow >
                        <TableCell style={{ width: 320 }} align="left">
                          {`Discount (${order.discountAmount}%)`}
                        </TableCell>
                        <TableCell style={{ width: 100 }} align="center">
                        </TableCell>
                        <TableCell style={{ width: 100 }} align="center">
                        </TableCell>
                        <TableCell style={{ width: 100 }} align="left">
                        {`$${order.lineItems.discountAmount}`}
                        </TableCell>
                      </TableRow>
                      <TableRow >
                        <TableCell style={{ width: 320 }} align="left">
                          VAT (25%)
                        </TableCell>
                        <TableCell style={{ width: 100 }} align="center">
                        </TableCell>
                        <TableCell style={{ width: 100 }} align="center">
                        </TableCell>
                        <TableCell style={{ width: 100 }} align="left">
                        {`$${order.lineItems.taxAmount}`}
                        </TableCell>
                      </TableRow>
                      <TableRow >
                        <TableCell style={{ width: 320, fontWeight: 700 }} align="left">
                          Total
                        </TableCell>
                        <TableCell style={{ width: 100 }} align="center">
                        </TableCell>
                        <TableCell style={{ width: 100 }} align="center">
                        </TableCell>
                        <TableCell style={{ width: 100 }} align="left">
                        {`$${order.lineItems.totalAmount}`}
                        </TableCell>
                      </TableRow>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

OrdersTable.propTypes = {
  orders: PropTypes.array.isRequired
};
