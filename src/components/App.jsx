import { lazy } from "react";
import { Layout } from "./Layout";
import { Navigate, Route, Routes } from "react-router";
import Register from "./Forms/Register.jsx";
import Login from "./Forms/Login.jsx";
import Basket from "../Pages/Basket/Basket.jsx";

const Home = lazy(() => import("../Pages/Home/Home.jsx"));
const Pizza = lazy(() => import("../Pages/Pizza/Pizza.jsx"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/Home" element={<Home />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Pizza" element={<Pizza />} />
        <Route path="/Basket" element={<Basket />} />
        <Route path="*" element={<Navigate to="/Home" />} />
      </Route>
    </Routes>
  );
}

export default App;
