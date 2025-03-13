import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import "./App.css";
import Header from "./components/Header/Header";
import ConnectionModal from "./components/ConnectionModal/ConnectionModal";
import { useState } from "react";
import cookies from "js-cookie";

function App() {
  //useState for displaying the connection modal and manage the user connection
  const [connectionModal, setConnectionModal] = useState(null);
  const [token, setToken] = useState(cookies.get("token") || false);

  return (
    <>
      <Router>
        <Header
          setConnectionModal={setConnectionModal}
          token={token}
          setToken={setToken}
        />
        <Routes>
          <Route path={"/"} element={<Home />}></Route>
          <Route path={"/product/:id"} element={<Product />}></Route>
        </Routes>
        {connectionModal && (
          <ConnectionModal
            setConnectionModal={setConnectionModal}
            modalType={connectionModal}
            setToken={setToken}
          />
        )}
      </Router>
    </>
  );
}

export default App;
