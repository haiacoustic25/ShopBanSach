import { useEffect } from "react";
import { Helmet } from "react-helmet";
import {
  Box,
  Card,
  CardHeader,
  Container,
  Divider,
  Grid,
  Typography,
} from "@material-ui/core";
import { SummaryItem } from "../../Components/Dashboard/summary-item";
// import { PerformanceIndicators } from "../../Components/Dashboard/performance-indicators";
import { OrdersTable } from "../../Components/orders/orders-table";
import { Cube as CubeIcon } from "../../icons/cube";
import { ShoppingCart as ShoppingCartIcon } from "../../icons/shopping-cart";
import { User as UserIcon } from "../../icons/user";
import { Author as AuthorIcon } from "../../icons/author";
import { Category as CategoryIcon } from "../../icons/category";
import { latestOrders } from "../../../../Database/dashboard";
import { Link } from "react-router-dom";
import Chart from "react-apexcharts";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllCategorys,
  fetchAllAuthors,
  fetchAllProducts,
  fetchAllUsers,
  fetchAllBills,
} from "../../../../Redux/Action/action";

export const Dashboard = () => {
  const dispatch = useDispatch();
  const listUsers = useSelector((state) => state.user.listUsers?.users);
  useEffect(() => {
    dispatch(fetchAllUsers());
  }, []);

  const listCategorys = useSelector(
    (state) => state?.category?.listCategorys?.categories
  );
  useEffect(() => {
    dispatch(fetchAllCategorys());
  }, []);

  const listAuthors = useSelector((state) => state.author.listAuthors?.authors);
  useEffect(() => {
    dispatch(fetchAllAuthors());
  }, []);

  const listProducts = useSelector((state) => state.product.listProducts.books);
  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);

  const listBills = useSelector((state) => state.bill.listBills.bill_view);
  useEffect(() => {
    dispatch(fetchAllBills());
  }, []);
  const stats = [
    {
      content: listUsers?.length.toString(),
      icon: UserIcon,
      label: "Users",
    },
    {
      content: listProducts?.length.toString(),
      icon: ShoppingCartIcon,
      label: "Products",
    },
    {
      content: listBills?.length.toString(),
      icon: CubeIcon,
      label: "Orders",
    },
    {
      content: listAuthors?.length.toString(),
      icon: AuthorIcon,
      label: "Authors",
    },
    {
      content: listCategorys?.length.toString(),
      icon: CategoryIcon,
      label: "Categorys",
    },
  ];

  const options = {
    series: [10, 10, 10, 70],
    labels: ["Pending", "Complete", "Cancelled", "Procesed"],
  };

  return (
    <>
      <Helmet>
        <title>Dashboard | Ca Chep Admin</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: "background.default",
          pb: 3,
          pt: 8,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography color="textPrimary" variant="h4">
                Dashboard
              </Typography>
            </Grid>
            {stats.map((item) => (
              <Grid item key={item.label} md={2.4} xs={12}>
                <SummaryItem
                  content={item.content}
                  icon={item.icon}
                  label={item.label}
                />
              </Grid>
            ))}
            {/* <Grid
              item
              xs={12}
            >
              <PerformanceIndicators />
            </Grid> */}
            <Grid item md={6} xs={12}>
              <Card variant="outlined">
                <div>
                  <CardHeader title="Orders Overview" />
                  <Divider />
                </div>
                <div
                  style={{
                    margin: 20,
                  }}
                >
                  <Chart
                    options={options}
                    series={options.series}
                    type="donut"
                    width="100%"
                    height={300}
                  />
                </div>
              </Card>
            </Grid>
            <Grid item md={6} xs={12}>
              <Card variant="outlined">
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <CardHeader title="Latest Orders" />
                  <Link
                    to="/admin/orders"
                    style={{ textDecoration: "none", color: "rgb(0, 170, 0)" }}
                  >
                    <CardHeader title="Go to orders" />
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
};
