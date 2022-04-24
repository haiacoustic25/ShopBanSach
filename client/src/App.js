import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Assets/SCSS/app.scss";
import ScrollTop from "./Assets/Img/ScrollTop.png";
import HomePage from "./Features/Web/Home/HomePage";
import ProductDetail from "./Features/Web/ProductDetail/ProductDetail";
import CartPage from "./Features/Web/Cart/CartPage";
import Login from "./Features/Web/User/Login";
import Register from "./Features/Web/User/Register";

import Users from "./Features/Admin/Pages/Users/Users";
import Single from "./Features/Admin/Pages/Single/Single";
import New from "./Features/Admin/Pages/new/New";
import Product from "./Features/Admin/Pages/Products/Product";
import { productInputs, userInputs } from "./Database/formSource";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { theme } from "./Features/Admin/theme";
import { Layout } from "./Features/Admin/Pages/Layout";
import { Dashboard } from "./Features/Admin/Pages/Dashboard/Dashboard";
import { Orders } from "./Features/Admin/Pages/Orders/Orders";
import { Products } from "./Features/Admin/Pages/Products/Products";
// import { Users } from "./Features/Admin/Pages/Users/Users";

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
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="/admin">
              <Route index element={<AdminPage />} />
              <Route path="users">
                <Route index element={<Users />} />
                <Route path=":userId" element={<Single />} />
                <Route
                  path="new"
                  element={<New inputs={userInputs} title="Add New User" />}
                />
              </Route>
              <Route path="products">
                <Route index element={<Product />} />
                <Route path=":productId" element={<Single />} />
                <Route
                  path="new"
                  element={
                    <New inputs={productInputs} title="Add New Product" />
                  }
                />
              </Route>
            </Route>
            <Route index element={<HomePage />} />

            <Route path="/:id" element={<ProductDetail />} />
            <Route path="/gio-hang" element={<CartPage />} />
            <Route path="/dang-nhap" element={<Login />} />
            <Route path="/dang-ky" element={<Register />} />

            {/* <Route path="/:id" element={<ProductDetail />} /> */}
          </Route>
        </Routes>

        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/">
              <Route index element={<HomePage />} />
              <Route path="/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<CartPage />} />
              {/* <Route path="/admin"
                    element={<Layout />} 
                    children={[
                      {
                        path: '/',
                        element: <Dashboard />
                      },
                      {
                        path: 'users',
                        element: <Users />
                      },
                      {
                        path: 'products',
                        element: <Products />
                      },
                      {
                        path: 'orders',
                        element: <Orders />
                      },
                    ]}
                  >
              </Route> */}
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
      {/* scroll to top */}
      {scrollPosition >= 100 && (
        <img
          src={ScrollTop}
          className="rollTheTop"
          onClick={handleRollTheTop}
        ></img>
      )}
    </div>
  );
}

export default App;
