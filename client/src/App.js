import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./Assets/SCSS/app.scss";
import HomePage from "./Features/Web/Home/HomePage";
import ProductDetail from "./Features/Web/ProductDetail/ProductDetail";
import CartPage from "./Features/Web/Cart/CartPage";
import Register from "./Features/Web/User/Register";
import Login from "./Features/Web/User/Login";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { theme } from "./Features/Admin/theme";
import { Layout } from "./Features/Admin/Pages/Layout";
import { Dashboard } from "./Features/Admin/Pages/Dashboard/Dashboard";
import { Orders } from "./Features/Admin/Pages/Orders/Orders";
import { Products } from "./Features/Admin/Pages/Products/Products";
import { Users } from "./Features/Admin/Pages/Users/Users";
import Account from "./Features/Web/User/Account";
import PayPage from "./Features/Web/PayPage/PayPage";
import { Authors } from "./Features/Admin/Pages/Authors/Authors";
import { Categorys } from "./Features/Admin/Pages/Category/Categorys";

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  const handleRollTheTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isAuth = useSelector((state) => state?.user.isAuth);

  const isAdmin = useSelector((state) => {
    return state?.user?.user?.user?.isAdmin;
  });

  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/">
              <Route index element={<HomePage />} />
              <Route path="/:id" element={<ProductDetail />} />
              <Route
                path="/gio-hang"
                element={isAuth ? <CartPage /> : <Navigate to="/" />}
              />
              <Route path="/dang-ky" element={<Register />} />
              <Route path="/dang-nhap" element={<Login />} />
              <Route
                path="/thanh-toan"
                element={isAuth ? <PayPage /> : <Navigate to="/dang-nhap" />}
              />
              <Route
                path="/account/:id"
                element={isAuth ? <Account /> : <Navigate to="/" />}
              />

              {/*  ( */}
              <>
                <Route
                  path="/admin"
                  element={isAdmin ? <Layout /> : <Navigate to="/" />}
                  // element={<Layout />}
                >
                  <Route index element={<Dashboard />} />
                  <Route path="Users">
                    <Route index element={<Users />} />
                  </Route>
                  <Route path="Products">
                    <Route index element={<Products />} />
                  </Route>
                  <Route path="Orders" element={<Orders />} />
                  <Route path="Authors" element={<Authors />} />
                  <Route path="Categorys" element={<Categorys />} />
                </Route>
              </>
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
      {/* scroll to top */}
      {scrollPosition >= 100 && (
        <img
          src={require("./Assets/Img/ScrollTop.png").default}
          alt=""
          className="rollTheTop"
          onClick={handleRollTheTop}
        ></img>
      )}
    </div>
  );
}

export default App;
