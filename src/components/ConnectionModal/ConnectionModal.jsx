import Button from "../Button/Button";
import "./connectionModal.css";

const ConnectionModal = () => {
  return (
    <div className="connection-modal">
      <h2>S'inscrire</h2>
      <form className="connection-form">
        <fieldset>
          <input type="text" name="userName" placeholder="Nom d'utilisateur" />
          <input type="email" name="userEmail" placeholder="email" />
          <input
            type="password"
            name="userPassword"
            placeholder="Mot de passe"
          />
        </fieldset>

        <fieldset>
          <input
            type="checkbox"
            name="acceptNewsletter"
            id="check-newsletter"
          />
          <label htmlFor="check-newsletter">S'inscrir à notre newsletter</label>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed,
            exercitationem? Ipsam harum quibusdam accusantium sed fugit ad quasi
            recusandae laudantium, amet pariatur, doloribus ullam voluptates
            sint nemo ipsum omnis illo!
          </p>
        </fieldset>

        <Button text={"S'inscrire"} classProps={"button-sale"} />
      </form>
      <p>Tu as déjà un compte ? Connecte-toi!</p>
    </div>
  );
};
export default ConnectionModal;
