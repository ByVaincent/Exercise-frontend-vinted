import axios from "axios";
import Button from "../Button/Button";
import "./connectionModal.css";
import { useState } from "react";
import cookies from "js-cookie";

const ConnectionModal = ({ setConnectionModal, modalType }) => {
  //state for managing and displaying the authentication error
  const [error, setError] = useState(null);

  //sign up
  const signup = async (event) => {
    event.preventDefault();
    try {
      const sendDatas = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup",
        {
          username: event.target.userName.value,
          email: event.target.userEmail.value,
          password: event.target.userPassword.value,
          newsletter: event.target.acceptNewsletter.checked,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const token = sendDatas.data.token;

      cookies.set("token", token, { expires: 1 });

      setConnectionModal(null);
    } catch (error) {
      console.log(error.message);
      setError("Un problème est survenue lors de votre inscription");
    }
  };

  //login
  const login = async (event) => {};

  return (
    <>
      {modalType === "signUp" && (
        <div className="connection-modal">
          <h2>S'inscrire</h2>
          <form className="connection-form" onSubmit={signup}>
            <fieldset>
              <input
                type="text"
                name="userName"
                placeholder="Nom d'utilisateur"
                required
              />
              <input
                type="email"
                name="userEmail"
                placeholder="email"
                required
              />
              <input
                type="password"
                name="userPassword"
                placeholder="Mot de passe"
                required
              />
            </fieldset>

            <fieldset>
              <input
                type="checkbox"
                name="acceptNewsletter"
                id="check-newsletter"
              />
              <label htmlFor="check-newsletter">
                S'inscrir à notre newsletter
              </label>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed,
                exercitationem? Ipsam harum quibusdam accusantium sed fugit ad
                quasi recusandae laudantium, amet pariatur, doloribus ullam
                voluptates sint nemo ipsum omnis illo!
              </p>
            </fieldset>

            <Button text={"S'inscrire"} classProps={"button-sale"} />
            <p className="auth-error">{error}</p>
          </form>
          <p onClick={() => setConnectionModal("login")}>
            Tu as déjà un compte ? Connecte-toi!
          </p>
        </div>
      )}
      {modalType === "login" && (
        <div className="connection-modal">
          <h2>Login</h2>
          <form className="connection-form" onSubmit={signup}>
            <fieldset>
              <input
                type="text"
                name="userName"
                placeholder="Nom d'utilisateur"
                required
              />
              <input
                type="email"
                name="userEmail"
                placeholder="email"
                required
              />
              <input
                type="password"
                name="userPassword"
                placeholder="Mot de passe"
                required
              />
            </fieldset>

            <fieldset>
              <input
                type="checkbox"
                name="acceptNewsletter"
                id="check-newsletter"
              />
              <label htmlFor="check-newsletter">
                S'inscrir à notre newsletter
              </label>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed,
                exercitationem? Ipsam harum quibusdam accusantium sed fugit ad
                quasi recusandae laudantium, amet pariatur, doloribus ullam
                voluptates sint nemo ipsum omnis illo!
              </p>
            </fieldset>

            <Button text={"S'inscrire"} classProps={"button-sale"} />
            <p className="auth-error">{error}</p>
          </form>
          <p onClick={() => setConnectionModal("signUp")}>
            Tu as déjà un compte ? Connecte-toi!
          </p>
        </div>
      )}
      }
    </>
  );
};
export default ConnectionModal;
