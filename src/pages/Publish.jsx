import { Navigate } from "react-router-dom";
import { useState } from "react";

const Publish = ({ token, setConnectionModal }) => {
  const [publishForm, setPublishForm] = useState({
    pictures: "",
    title: "",
    brand: "",
    size: "",
    color: "",
    condition: "",
    city: "",
    price: "",
  });

  console.log(publishForm);

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log(event.target.value);
  };

  const updateState = (event, key, state, setState) => {
    const newState = { ...state };
    newState[key] = event.target.value;

    setState(newState);
  };

  return !token ? (
    <Navigate to="/" />
  ) : (
    <main className="publish-main">
      <form className="container" onSubmit={handleSubmit}>
        <h1>Vends ton article</h1>
        <input
          type="file"
          name="pictures"
          id="pictures"
          multiple={true}
          onChange={(event) => {
            setPublishForm((prevState) => {
              return { ...prevState, pictures: event.target.files };
            });
          }}
        />
        <fieldset>
          <label htmlFor="title">Titre</label>
          <input
            type="text"
            name="title"
            id="title"
            value={publishForm.title}
            onChange={(event) => {
              updateState(event, "title", publishForm, setPublishForm);
            }}
          />
          <label htmlFor="description">Décris ton article</label>
          <input type="text" name="description" id="description" />
        </fieldset>

        <fieldset>
          <label htmlFor="brand">Marque</label>
          <input
            type="text"
            name="brand"
            id="brand"
            value={publishForm.brand}
            onChange={(event) => {
              updateState(event, "brand", publishForm, setPublishForm);
            }}
          />
          <label htmlFor="size">Taille</label>
          <input
            type="text"
            name="size"
            id="size"
            value={publishForm.size}
            onChange={(event) => {
              updateState(event, "size", publishForm, setPublishForm);
            }}
          />
          <label htmlFor="color">Couleur</label>
          <input
            type="text"
            name="color"
            id="color"
            value={publishForm.color}
            onChange={(event) => {
              updateState(event, "color", publishForm, setPublishForm);
            }}
          />
          <label htmlFor="condition">État</label>
          <input
            type="text"
            name="condition"
            id="condition"
            value={publishForm.condition}
            onChange={(event) => {
              updateState(event, "condition", publishForm, setPublishForm);
            }}
          />
          <label htmlFor="city">Lieu</label>
          <input
            type="text"
            name="city"
            id="city"
            value={publishForm.city}
            onChange={(event) => {
              updateState(event, "city", publishForm, setPublishForm);
            }}
          />
        </fieldset>

        <fieldset>
          <label htmlFor="price">Prix</label>
          <input
            type="text"
            name="price"
            id="price"
            value={publishForm.price}
            onChange={(event) => {
              updateState(event, "price", publishForm, setPublishForm);
            }}
          />
        </fieldset>

        <input type="submit" value={"Ajouter"} />
      </form>
    </main>
  );
};
export default Publish;
