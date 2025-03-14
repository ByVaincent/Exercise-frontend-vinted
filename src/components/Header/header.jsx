import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./header.css";
import * as React from "react";
import { Range } from "react-range";
import { useState } from "react";

const Header = ({
  token,
  setToken,
  setConnectionModal,
  filters,
  setFilters,
  minPrice,
  setMinPrice,
}) => {
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
            <div className="price-filter">
              <Range
                label="Select your value"
                step={1}
                min={0}
                max={500}
                values={minPrice}
                onChange={(values) => {
                  setMinPrice(values);
                }}
                renderTrack={({ props, children }) => (
                  <div
                    {...props}
                    style={{
                      ...props.style,
                      height: "6px",
                      width: "100%",
                      backgroundColor: "#ccc",
                    }}
                  >
                    {children}
                  </div>
                )}
                renderThumb={({ props }) => (
                  <div
                    {...props}
                    key={props.key}
                    style={{
                      ...props.style,
                      height: "42px",
                      width: "42px",
                      backgroundColor: "#999",
                    }}
                  />
                )}
              />
            </div>
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
