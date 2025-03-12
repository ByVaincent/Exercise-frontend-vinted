import Button from "../components/Button/Button";

import { useEffect, useState } from "react";
import fetchAllProducts from "../utils/fetchAllProducts";
import Products from "../components/Products/Products";
import Product from "./Product";
import Pagination from "../components/Pagination/Pagination";

const Home = () => {
  const [productsDatas, setProductsDatas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    (async () => setProductsDatas(await fetchAllProducts(page)))();
    setIsLoading(false);
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
        <section className="products">
          <div className="container">
            {!isLoading && (
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
                // if productsDatas.length ===0 there is a problem with .map before the rerender
                productsDatas.length !== 0 &&
                productsDatas.offers.map((offer) => (
                  <Products key={offer._id} offer={offer} />
                ))
              )}
            </div>
          </div>
        </section>
      </section>
    </main>
  );
};
export default Home;
