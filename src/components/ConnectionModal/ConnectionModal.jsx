import Button from "../Button/Button";

const ConnectionModal = () => {
  return (
    <div>
      <h2>S'inscrire</h2>
      <form className="connection-form">
        <fieldset>
          <input type="text" name="userName" />
          <input type="email" name="userEmail" />
          <input type="password" name="userPassword" />
        </fieldset>

        <fieldset>
          <input type="text" />
        </fieldset>

        <Button text={"S'inscrire"} classProps={"button-sale"} />
      </form>
      <p>Tu as déjà un compte ? Connecte-toi!</p>
    </div>
  );
};
export default ConnectionModal;
