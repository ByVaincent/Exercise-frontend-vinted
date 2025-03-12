import Button from "../components/Button/Button";

const Home = () => {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <div className="cta">
            <p>Prêt à faire du tri dans vos placards?</p>
            <Button text={"Commencer à vendre"} classProps={"button-sale"} />
          </div>
        </div>
        <section className="products">
          <div className="container">Products</div>
        </section>
      </section>
    </main>
  );
};
export default Home;
