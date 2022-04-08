import { BrowserRouter, Routes, Route } from "react-router-dom"

import "./Assets/SCSS/app.scss"
import "./Assets/css/grid.css"
import "./Assets/css/index.css"

import HomePage from "./Features/Web/Home/HomePage"
import AdminPage from "./Features/Admin/AdminPage"

function App() {
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
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;