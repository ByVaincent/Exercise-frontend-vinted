import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./header.css";

const Header = ({ setConnectionModal, isLogged, setIsLogged }) => {
  return (
    <header>
      <div className="container">
        <Link to={"/"}>
          <div className="logo">
            <img src="/logo.svg" alt="Logo de vinted" />
          </div>
        </Link>
        <div className="search-bar">
          <input type="text" />
        </div>
        <div className="login-sale">
          {isLogged ? (
            <div className="login">
              <Button
                text={"Se déconnecter"}
                setState={setIsLogged}
                type={false}
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
