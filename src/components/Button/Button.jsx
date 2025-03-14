import "./button.css";
import cookies from "js-cookie";

const Button = ({ text, classProps, setState, type, disconnect }) => {
  return (
    <button
      className={classProps}
      onClick={() => {
        setState(type);
        disconnect && cookies.remove("token");
      }}
    >
      {text}
    </button>
  );
};
export default Button;
