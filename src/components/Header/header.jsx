import "./header.css";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <img src="/logo.svg" alt="Logo de vinted" />
        </div>
      </div>
      <div className="search-bar">
        <input type="text" />
      </div>
      <div className="login-sale"></div>
    </header>
  );
};
export default Header;
