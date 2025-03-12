import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import "./App.css";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path={"/"} element={<Home />}></Route>
          <Route path={"/product/:id"} element={<Product />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
