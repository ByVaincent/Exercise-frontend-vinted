import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./header.css";
import * as React from "react";
import TwoThumbs from "../Range";
import { useNavigate } from "react-router-dom";

const Header = ({
  token,
  setToken,
  setConnectionModal,
  filters,
  setFilters,
}) => {
  const navigate = useNavigate();
  return (
    <header>
      <div className="container">
        <Link to={"/"}>
          <div className="logo">
            <img src="/logo.svg" alt="Logo de vinted" />
          </div>
        </Link>
        <div className="filters">
          <input
            type="text"
            placeholder="Rechercher un article..."
            value={filters.title}
            onChange={(event) => {
              setFilters((prevState) => {
                return { ...prevState, title: event.target.value };
              });
            }}
          />

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
          <div className="price-filter">
            <TwoThumbs filters={filters} setFilters={setFilters} />
          </div>
        </div>
        <div className="login-sale">
          {token ? (
            <div className="login">
              <Button
                classProps={"disconnect-button"}
                text={"Se déconnecter"}
                setState={setToken}
                type={"disconnection"}
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

          <Button
            classProps={"button-sale"}
            text={"Vendre un article"}
            handleClick={() => {
              token ? navigate("/publish") : setConnectionModal("unauthorized");
            }}
          />
        </div>
      </div>
    </header>
  );
};
export default Header;
