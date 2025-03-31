import { BrowserRouter, Routes, Route } from "react-router-dom"; //react-router//
// import { FaShoppingCart } from "react-icons/fa"; //react-icon//
import "bootstrap/dist/css/bootstrap.min.css"; //bootstrap css//
import "bootstrap/dist/js/bootstrap.bundle.min.js"; //bootstrap js//
import "@fortawesome/fontawesome-free/css/all.min.css"; //Font Awesome//
import "./App.css";
import Home from "./pages/Home/Home";
import Categories from "./pages/categories/categories";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />}/>
            <Route path="/categories" element={<Categories />} />
          {/* <Route path="/cart" element={<Cart />} />
          <Route path="/product" element={<Product />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
