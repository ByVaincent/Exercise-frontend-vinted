import axios from "axios";
import Button from "../Button/Button";
import "./connectionModal.css";
import { useState } from "react";
import cookies from "js-cookie";

const ConnectionModal = ({ setConnectionModal, modalType, setToken }) => {
  //utils exit modal
  const exitModal = () => {
    setConnectionModal(null);
  };

  //state for managing and displaying the authentication error
  const [error, setError] = useState(null);

  //sign up request
  const signUp = async (event) => {
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
      setToken(token);
      setConnectionModal(null);
    } catch (error) {
      console.log(error.response);
      setError("Un problème est survenue lors de votre inscription");
    }
  };

  //login request
  const login = async (event) => {
    event.preventDefault();
    try {
      const sendLoginDatas = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/login",
        {
          email: event.target.userEmail.value,
          password: event.target.userPassword.value,
        }
      );

      const token = sendLoginDatas.data.token;

      cookies.set("token", token, { expires: 1 });
      setToken(token);
      setConnectionModal(null);
    } catch (error) {
      console.log(error.response);
      setError("Email ou mot de passe incorrect");
    }
  };

  return (
    <>
      {modalType === "signUp" && (
        <div className="modal-container" onClick={exitModal}>
          <div className="modal" onClick={(event) => event.stopPropagation()}>
            <h2>S'inscrire</h2>
            <form className="connection-form" onSubmit={signUp}>
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

              <fieldset className="checkbox-signup">
                <div>
                  <input
                    type="checkbox"
                    name="acceptNewsletter"
                    id="check-newsletter"
                  />{" "}
                  <label htmlFor="check-newsletter">
                    S'inscrir à notre newsletter
                  </label>
                </div>

                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed,
                  exercitationem? Ipsam harum quibusdam accusantium sed fugit ad
                  quasi recusandae laudantium, amet pariatur, doloribus ullam
                  voluptates sint nemo ipsum omnis illo!
                </p>
              </fieldset>

              <button className={"button-sale"}>S'inscrire</button>
              <p className="auth-error">{error}</p>
            </form>
            <p onClick={() => setConnectionModal("login")}>
              Tu as déjà un compte ? Connecte-toi!
            </p>
          </div>
        </div>
      )}
      {modalType === "login" && (
        <div className="modal-container" onClick={exitModal}>
          <div className="modal" onClick={(event) => event.stopPropagation()}>
            <h2>Login</h2>
            <form className="connection-form" onSubmit={login}>
              <fieldset>
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

              <button className={"button-sale"}>Se connecter</button>
              <p className="auth-error">{error}</p>
            </form>
            <p onClick={() => setConnectionModal("signUp")}>
              Pas encore de compte ? Inscris-toi!
            </p>
          </div>
        </div>
      )}
    </>
  );
};
export default ConnectionModal;
