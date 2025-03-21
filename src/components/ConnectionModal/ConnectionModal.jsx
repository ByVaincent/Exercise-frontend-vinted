import axios from "axios";
import Button from "../Button/Button";
import "./connectionModal.css";
import { useState } from "react";
import cookies from "js-cookie";
import { RxCross2 } from "react-icons/rx";

const ConnectionModal = ({ setConnectionModal, modalType, setToken }) => {
  //utils exit modal
  const exitModal = () => {
    setConnectionModal(null);
  };

  //state for managing and displaying the authentication error
  const [error, setError] = useState(null);

  //controlled inputs
  const [inputsCtrl, setInputsCtrl] = useState({
    username: "",
    email: "",
    password: "",
    newsletter: false,
  });
  

  //sign up request function
  const signUp = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();

      for (const property in inputsCtrl) {
        formData.append(property, inputsCtrl[property]);
      }

      const sendDatas = await axios.post(
        `${import.meta.env.VITE_API_URL}/user/signup`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const token = sendDatas.data.token;
      console.log(sendDatas);

      cookies.set("token", token, { expires: 1 });
      setToken(token);
      setConnectionModal(null);
    } catch (error) {
      console.log(error);

      setError(error.response.data);
      // error.data || "Un problème est survenue lors de votre inscription"
    }
  };

  //login request function
  const login = async (event) => {
    event.preventDefault();
    try {
      const sendLoginDatas = await axios.post(
        `${import.meta.env.VITE_API_URL}/user/login`,
        inputsCtrl
      );

      const token = sendLoginDatas.data.token;

      cookies.set("token", token, { expires: 1 });
      setToken(token);
      setConnectionModal(null);
    } catch (error) {
      setError(error.response.data || "Email ou mot de passe incorrect");
    }
  };

  return (
    <>
      {modalType === "signUp" && (
        <div className="modal-container" onClick={exitModal}>
          <div className="wrapper-modal">
          <div className="modal" onClick={(event) => event.stopPropagation()}>
          <div className="exit-modal-cross" >
            <RxCross2 onClick={exitModal}/>
            </div>
            <h2>S'inscrire</h2>
            <form className="connection-form" onSubmit={signUp}>
              <fieldset>
                <input
                  type="text"
                  name="username"
                  placeholder="Nom d'utilisateur"
                  onChange={(event) =>
                    setInputsCtrl((prevState) => {
                      return { ...prevState, username: event.target.value };
                    })
                  }
                  value={inputsCtrl.username}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={inputsCtrl.email}
                  onChange={(event) => {
                    setInputsCtrl((prevState) => {
                      return { ...prevState, email: event.target.value };
                    });
                  }}
                  required
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Mot de passe"
                  value={inputsCtrl.password}
                  onChange={(event) => {
                    setInputsCtrl((prevState) => {
                      return { ...prevState, password: event.target.value };
                    });
                  }}
                  required
                />
                <label className="button-sale" htmlFor="avatar">Ajouter une photo de profil</label>
                <input
                  type="file"
                  name="avatar"
                  id="avatar"
                  onChange={(event) => {
                    setInputsCtrl((prevState) => {
                      return { ...prevState, picture: event.target.files[0] };
                    });
                  }}
                />
                <div className="uploaded-picture-connection">{inputsCtrl.picture?.name && inputsCtrl.picture.name}</div>
              </fieldset>

              <fieldset className="checkbox-signup">
                <div>
                  <input
                    type="checkbox"
                    name="newsletter"
                    id="check-newsletter"
                    value={inputsCtrl.newsletter}
                    onChange={(event) => {
                      setInputsCtrl((prevState) => {
                        return {
                          ...prevState,
                          newsletter: event.target.checked,
                        };
                      });
                    }}
                  />
                  <label htmlFor="check-newsletter">
                    S'inscrire à notre newsletter
                  </label>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Sed, exercitationem? Ipsam harum quibusdam accusantium sed
                    fugit ad quasi recusandae laudantium, amet pariatur,
                    doloribus ullam voluptates sint nemo ipsum omnis illo!
                  </p>
                </div>
              </fieldset>

              <button className={"button-sale"}>S'inscrire</button>
              <p className="auth-error">{error}</p>
            </form>
            <p onClick={() => setConnectionModal("login")}>
              Tu as déjà un compte ? Connecte-toi!
            </p>
          </div>
        </div>
        </div>
      )}
      {modalType === "login" && (
         
        <div className="modal-container" onClick={exitModal}>
          <div className="wrapper-modal">
          <div className="modal" onClick={(event) => event.stopPropagation()}>
          <div className="exit-modal-cross" >
            <RxCross2 onClick={exitModal}/>
            </div>
            <h2>Login</h2>
            <form className="connection-form" onSubmit={login}>
              <fieldset>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={inputsCtrl.email}
                  onChange={(event) => {
                    setInputsCtrl((prevState) => {
                      return { ...prevState, email: event.target.value };
                    });
                  }}
                  required
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Mot de passe"
                  value={inputsCtrl.password}
                  onChange={(event) => {
                    setInputsCtrl((prevState) => {
                      return { ...prevState, password: event.target.value };
                    });
                  }}
                  required
                />
              </fieldset>

              <button className={"button-sale"}>Se connecter</button>
              <p className="auth-error error-message">{error}</p>
            </form>
            <p onClick={() => setConnectionModal("signUp")}>
              Pas encore de compte ? Inscris-toi!
            </p>
          </div>
        </div>
        </div>
      )}

      {modalType === "unauthorized" && (
   
        <div className="modal-container" onClick={exitModal}>     
        <div className="wrapper-modal">
          <div className="modal" onClick={(event) => event.stopPropagation()}>
            <div className="error-message">
              Vous devez être connecté pour pouvoir poster ou acheter un vêtement
            </div>
            <h2>Login</h2>
            <form className="connection-form" onSubmit={login}>
              <fieldset>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={inputsCtrl.email}
                  onChange={(event) => {
                    setInputsCtrl((prevState) => {
                      return { ...prevState, email: event.target.value };
                    });
                  }}
                  required
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Mot de passe"
                  value={inputsCtrl.password}
                  onChange={(event) => {
                    setInputsCtrl((prevState) => {
                      return { ...prevState, password: event.target.value };
                    });
                  }}
                  required
                />
              </fieldset>

              <button className={"button-sale"}>Se connecter</button>
              <p className="auth-error error-message">{error}</p>
            </form>
            <p onClick={() => setConnectionModal("signUp")}>
              Pas encore de compte ? Inscris-toi!
            </p>
          </div>
        </div>
        </div>
      )}
    </>
  );
};
export default ConnectionModal;
