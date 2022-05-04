import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Breakfast from "./Component/Home/FoodItems/Breakfast/Breakfast";
import Dinner from "./Component/Home/FoodItems/Dinner/Dinner";
import Lunch from "./Component/Home/FoodItems/Lunch/Lunch";
import ProductDetail from "./Component/Home/FoodItems/ProductDetail/ProductDetail";
import Home from "./Component/Home/Home/Home";
import Profile from "./Component/Profile/Profile";
import Footer from "./Component/Shear/Footer/Footer";
import Header from "./Component/Shear/Header/Header";
import Login from "./Component/SignIn/Login/Login";
import SignUp from "./Component/SignIn/SignUp/SignUp";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/" element={<Breakfast />}></Route>
          <Route path="/lunch" element={<Lunch />}></Route>
          <Route path="/dinner" element={<Dinner />}></Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/product-detail/:id" element={<ProductDetail />}></Route>
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
