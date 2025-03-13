import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import "./App.css";
import Header from "./components/Header/Header";
import ConnectionModal from "./components/ConnectionModal/ConnectionModal";
import { useState } from "react";

function App() {
  const [connectionModal, setConnectionModal] = useState(null);
  const [isLogged, setIsLogged] = useState(false);

  return (
    <>
      <Router>
        <Header
          setConnectionModal={setConnectionModal}
          isLogged={isLogged}
          setIsLogged={setIsLogged}
        />
        <Routes>
          <Route path={"/"} element={<Home />}></Route>
          <Route path={"/product/:id"} element={<Product />}></Route>
        </Routes>
        {connectionModal && <ConnectionModal />}
      </Router>
    </>
  );
}

export default App;
