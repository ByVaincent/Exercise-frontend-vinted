import Button from "../components/Button/Button";
import axios from "axios";

import { useEffect, useState } from "react";

import Products from "../components/Products/Products";
import Product from "./Product";
import Pagination from "../components/Pagination/Pagination";
import Spinner from "../components/Spinner";

const Home = () => {
  const [productsDatas, setProductsDatas] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchAllProducts = async () => {
      const productsDatas = await axios.get(
        `${import.meta.env.VITE_API_URL}/offers?page=${page}&limit=15`
      );

      setProductsDatas(productsDatas.data);
      setIsLoading(false);
    };

    fetchAllProducts();
  }, [page]);

  return (
    <main>
      <section className="hero">
        <div className="container">
          <div className="cta">
            <p>Prêt à faire du tri dans vos placards?</p>
            <Button text={"Commencer à vendre"} classProps={"button-sale"} />
          </div>
        </div>
        {isLoading ? (
          <Spinner />
        ) : (
          <section className="products">
            <div className="container">
              {isLoading || (
                <Pagination
                  page={page}
                  setPage={setPage}
                  count={productsDatas.count}
                />
              )}
              <div className="products-preview-display">
                {isLoading ? (
                  <p>Loading...</p>
                ) : (
                  productsDatas.offers.map((offer) => (
                    <Products key={offer._id} offer={offer} />
                  ))
                )}
              </div>
            </div>
          </section>
        )}
      </section>
    </main>
  );
};
export default Home;
