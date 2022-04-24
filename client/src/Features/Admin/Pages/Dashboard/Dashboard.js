import { Helmet } from 'react-helmet';
import { Box, Card, CardHeader, Container, Divider, Grid, Typography } from '@material-ui/core';
import { SummaryItem } from '../../Components/Dashboard/summary-item';
import { PerformanceIndicators } from '../../Components/Dashboard/performance-indicators';
import { OrdersTable } from '../../Components/Table/orders-table';
import { Cube as CubeIcon } from '../../icons/cube';
import { ShoppingCart as ShoppingCartIcon } from '../../icons/shopping-cart';
import { User as UserIcon } from '../../icons/user';
import { latestOrders } from '../../../../Database/dashboard';
import { Link } from "react-router-dom";

const stats = [
  {
    content: '3456',
    icon: UserIcon,
    label: 'Users'
  },
  {
    content: '3456',
    icon: ShoppingCartIcon,
    label: 'Products'
  },
  {
    content: '3450',
    icon: CubeIcon,
    label: 'Orders'
  }
];

export const Dashboard = () => (
  <>
    <Helmet>
      <title>Dashboard | Ca Chep Admin</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        pb: 3,
        pt: 8
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            xs={12}
          >
            <Typography
              color="textPrimary"
              variant="h4"
            >
              Dashboard
            </Typography>
          </Grid>
          {stats.map((item) => (
            <Grid
              item
              key={item.label}
              md={4}
              xs={12}
            >
              <SummaryItem
                content={item.content}
                icon={item.icon}
                label={item.label}
              />
            </Grid>
          ))}
          <Grid
            item
            xs={12}
          >
            <PerformanceIndicators />
          </Grid>
          <Grid
            item
            xs={12}
          >
            <Card variant="outlined">
              <div style={{display: "flex", justifyContent: "space-between"}}>
                <CardHeader title="Latest Orders" />
                <Link to='/admin/orders' style={{textDecoration: 'none', color: 'blue'}}>
                  <CardHeader title="Go to orders"/>
                </Link>
              </div>
              <Divider />
              <OrdersTable orders={latestOrders} />
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);