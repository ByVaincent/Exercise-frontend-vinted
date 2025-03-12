import Button from "../Button/Button";
import "./header.css";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <img src="/logo.svg" alt="Logo de vinted" />
        </div>
        <div className="search-bar">
          <input type="text" />
        </div>
        <div className="login-sale">
          <div className="login">
            <Button classProps={"button-login"} text={"S'inscrire"} />
            <Button classProps={"button-login"} text={"Se connecter"} />
          </div>

          <Button classProps={"button-sale"} text={"Vendre un article"} />
        </div>
      </div>
    </header>
  );
};
export default Header;
