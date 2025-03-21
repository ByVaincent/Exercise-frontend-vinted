import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Publish from "./pages/Publish";
import "./App.css";
import Header from "./components/Header/Header";
import ConnectionModal from "./components/ConnectionModal/ConnectionModal";
import { useState } from "react";
import cookies from "js-cookie";
import PaymentModal from "./components/paymentModal/PaymentModal";
import PaymentSucceed from "./pages/PaymentSucced";

function App() {
  //useState for displaying the connection modal and manage the user connection
  const [connectionModal, setConnectionModal] = useState(null);
  const [token, setToken] = useState(cookies.get("token") || false);

  //displaying payment modal
  const [paymentModal, setPaymentModal] = useState(false);
  
  //produtcs datas
  const [productDatas, setProductdatas] = useState(null);

  //states for filters ===> minPrice and max price are arrays because of react range
  const [minPrice, setMinPrice] = useState([0]);
  const [filters, setFilters] = useState({
    title: "",
    sort: "price-asc",
    minPrice: 0,
    maxPrice: 200,
  });

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
          <Route path={"/product/:id"} element={<Product  setPaymentModal={setPaymentModal} productDatas={productDatas} setProductdatas={setProductdatas}/>}></Route>
          <Route
            path={"/publish"}
            element={
              <Publish token={token} setConnectionModal={setConnectionModal} />
            }
          ></Route>
          <Route path="/succeed" element={<PaymentSucceed setPaymentModal={setPaymentModal}/>}></Route>
        </Routes>
        {connectionModal && (
          <ConnectionModal
            setConnectionModal={setConnectionModal}
            modalType={connectionModal}
            setToken={setToken}
          />
        )}

        {paymentModal && <PaymentModal token={token} paymentModal={paymentModal} setPaymentModal={setPaymentModal} setConnectionModal={setConnectionModal} productDatas={productDatas}/>}
      </Router>
    </>
  );
}

export default App;
