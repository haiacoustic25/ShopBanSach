import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Assets/SCSS/app.scss";
import ScrollTop from "./Assets/Img/ScrollTop.png";
import HomePage from "./Features/Web/Home/HomePage";
import ProductDetail from "./Features/Web/ProductDetail/ProductDetail";
import CartPage from "./Features/Web/Cart/CartPage";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { theme } from "./Features/Admin/theme";
import { Layout } from "./Features/Admin/Pages/Layout";
import { Dashboard } from "./Features/Admin/Pages/Dashboard/Dashboard";
import { Orders } from "./Features/Admin/Pages/Orders/Orders";
import { Products } from "./Features/Admin/Pages/Products/Products";
import { Users } from "./Features/Admin/Pages/Users/Users";

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
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/">
              <Route index element={<HomePage />} />
              <Route path="/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/admin" element={<Layout />}>
                <Route index element={<Dashboard />} />
                <Route path="Users" element={<Users />} />
                <Route path="Products" element={<Products />} />
                <Route path="Orders" element={<Orders />} />
              </Route>
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
