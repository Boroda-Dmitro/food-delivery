import { lazy } from "react";
import { Layout } from "./Layout";
import { Navigate, Route, Routes } from "react-router";

const Home = lazy(() => import("../Pages/Home/Home.jsx"));
const Pizza = lazy(() => import("../Pages/Pizza/Pizza.jsx"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/Home" element={<Home />} />
        <Route path="/Pizza" element={<Pizza />} />
        <Route path="*" element={<Navigate to="/Home" />} />
      </Route>
    </Routes>
  );
}

export default App;
