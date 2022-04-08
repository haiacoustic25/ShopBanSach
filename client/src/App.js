import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import "./Assets/SCSS/app.scss"

import HomePage from "./Features/Web/Home/HomePage"
import AdminPage from "./Features/Admin/AdminPage"

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
              {/* <Route path="Customers" element={<Customers />} /> */}
            </Route>
            <Route index element={<HomePage />} />
            {/* <Route path="/:id" element={<ProductDetail />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
      {scrollPosition >= 100 && (
        <img
          src="https://firebasestorage.googleapis.com/v0/b/shopmaytinh-f4fce.appspot.com/o/icon%2Fup-arrow.png?alt=media&token=426973e4-96d4-46b3-a041-86bef0ff7e6c"
          className="rollTheTop"
          onClick={handleRollTheTop}
        ></img>
      )}
    </div>
  );
}

export default App;
