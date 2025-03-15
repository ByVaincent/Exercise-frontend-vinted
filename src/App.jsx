import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import "./App.css";
import Header from "./components/Header/Header";
import ConnectionModal from "./components/ConnectionModal/ConnectionModal";
import { useEffect, useState } from "react";
import cookies from "js-cookie";

function App() {
  //useState for displaying the connection modal and manage the user connection
  const [connectionModal, setConnectionModal] = useState(null);
  const [token, setToken] = useState(cookies.get("token") || false);

  //states for filters ===> minPrice and max price are arrays because of react range
  const [minPrice, setMinPrice] = useState([0]);
  const [filters, setFilters] = useState({
    title: "",
    sort: "price-asc",
    minPrice: 0,
    maxPrice: 500,
  });

  // method to extract de number of the range price filter, the range price filter send an array with the number inside
  useEffect(() => {
    setFilters((prevState) => {
      return { ...prevState, minPrice: minPrice[0] };
    });
  }, [minPrice]);

  return (
    <>
      <Router>
        <Header
          setConnectionModal={setConnectionModal}
          token={token}
          setToken={setToken}
          filters={filters}
          setFilters={setFilters}
          minPrice={minPrice}
          setMinPrice={setMinPrice}
        />
        <Routes>
          <Route path={"/"} element={<Home filters={filters} />}></Route>
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
