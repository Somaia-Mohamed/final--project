import NavBar from "./NavBar";
import { BrowserRouter, Routes, Route,HashRouter } from "react-router-dom";
import Pages from "./Pages";
import Blog from "./Blog";
import Home from "./Home";
import ProductCategory from "./ProductCategory";
import Shop from "./Shop";
import Contact from "./Contact";
import About from "./About";
import ProductDetails from "./ProductDetails";
import CartPage from "./CartPage";
import Login from "./Login";
import SignUp from "./SignUp";
function App() {
  return (
    <div>
      <HashRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/page" element={<Pages />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop/:id" element={<ProductDetails />} />
          <Route path="/cart-page" element={<CartPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
