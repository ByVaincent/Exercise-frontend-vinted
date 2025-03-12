import "./button.css";

const Button = ({ text, classProps }) => {
  return <button className={classProps}>{text}</button>;
};
export default Button;
