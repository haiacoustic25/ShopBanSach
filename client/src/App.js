import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./Features/Web/HomePage";
// import AdminPage from "./AdminPage";

import AdminPage from "./Features/Admin/AdminPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
