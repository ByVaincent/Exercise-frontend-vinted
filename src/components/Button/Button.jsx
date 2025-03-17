import "./button.css";
import cookies from "js-cookie";

const Button = ({
  text,
  classProps,
  setState,
  type,
  disconnect,
  handleClick,
}) => {
  return (
    <button
      className={classProps}
      onClick={() => {
        type
          ? type === "disconnection"
            ? setState(false)
            : setState(type)
          : null;
        handleClick && handleClick();
        disconnect && cookies.remove("token");
      }}
    >
      {text}
    </button>
  );
};
export default Button;
