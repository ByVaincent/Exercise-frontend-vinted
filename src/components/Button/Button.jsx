import "./button.css";

const Button = ({ text, classProps, setState, type }) => {
  return (
    <button
      className={classProps}
      onClick={() => {
        setState(type);
      }}
    >
      {text}
    </button>
  );
};
export default Button;
