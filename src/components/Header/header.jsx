import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./header.css";

const Header = ({
  token,
  setToken,
  setConnectionModal,
  filters,
  setFilters,
}) => {
  return (
    <header>
      <div className="container">
        <Link to={"/"}>
          <div className="logo">
            <img src="/logo.svg" alt="Logo de vinted" />
          </div>
        </Link>
        <div className="search-bar">
          <input
            type="text"
            value={filters.title}
            onChange={(event) => {
              setFilters((prevState) => {
                return { ...prevState, title: event.target.value };
              });
            }}
          />
          <div className="order-filter">
            <button
              onClick={() => {
                setFilters((prevState) => {
                  return {
                    ...prevState,
                    sort:
                      filters.sort === "price-asc" ? "price-desc" : "price-asc",
                  };
                });
              }}
            >
              Crois / décrois
            </button>
          </div>
        </div>
        <div className="login-sale">
          {token ? (
            <div className="login">
              <Button
                text={"Se déconnecter"}
                setState={setToken}
                type={false}
                disconnect={true}
              />
            </div>
          ) : (
            <div className="login">
              <Button
                classProps={"button-login"}
                text={"S'inscrire"}
                setState={setConnectionModal}
                type={"signUp"}
              />
              <Button
                classProps={"button-login"}
                text={"Se connecter"}
                setState={setConnectionModal}
                type={"login"}
              />
            </div>
          )}

          <Button classProps={"button-sale"} text={"Vendre un article"} />
        </div>
      </div>
    </header>
  );
};
export default Header;
