import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import { format } from 'date-fns';
import { Divider } from '@material-ui/core';
import {
  Box,
  Chip,
  Link,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography
} from '@material-ui/core';
import { Scrollbar } from '../scrollbar';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const statusVariants = [
  {
    label: 'Placed',
    value: 'placed'
  },
  {
    label: 'Processed',
    value: 'processed'
  },
  {
    label: 'Delivered',
    value: 'delivered'
  },
  {
    label: 'Complete',
    value: 'complete'
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
              <TableRow key={order.id} >
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                  >
                    <TableCell component="th" scope="row">
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
                      />
                    </TableCell>
                  </AccordionSummary>
                  <Typography>
                    <TableRow style={{borderBottom: "0.5px solid", backgroundColor: "#ccc", marginTop: -40}}>
                      <TableCell style={{ width: 320 }} align="left">
                        NAME
                      </TableCell>
                      <TableCell style={{ width: 100 }} align="center">
                        COST
                      </TableCell>
                      <TableCell style={{ width: 100 }} align="center">
                        QTY
                      </TableCell>
                      <TableCell style={{ width: 100 }} align="center">
                        TOTAL
                      </TableCell>
                    </TableRow>
                  </Typography>
                </Accordion>
              </TableRow>
              </>
            );
          })}
        </TableBody>
      </Table>
      {/* <Scrollbar>
        <Table sx={{ minWidth: 1000 }}>
          <TableHead>
            <TableRow>
              <TableCell>
                Order
              </TableCell>
              <TableCell>
                Date
              </TableCell>
              <TableCell>
                Customer
              </TableCell>
              <TableCell>
                Status
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => {
              const statusVariant = statusVariants.find(
                (variant) => variant.value === order.status
              );

              return (
                <TableRow key={order.id}>
                  <TableCell>
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
                  <TableCell>
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
                  <TableCell>
                    {`${order.customer.firstName} ${order.customer.lastName}`}
                  </TableCell>
                  <TableCell>
                    <Chip
                      label={statusVariant.label}
                      variant="outlined"
                    />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Scrollbar> */}
    </div>
  );
};

OrdersTable.propTypes = {
  orders: PropTypes.array.isRequired
};
