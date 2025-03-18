import { Navigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Dropzone from "../components/DropZone";
import Button from "../components/Button/Button";
import { useNavigate } from "react-router-dom";

const Publish = ({ token }) => {
const navigate = useNavigate();


  //   const [pictures, setPictures] = useState(null);
  const [publishForm, setPublishForm] = useState({
    title: "",
    brand: "",
    size: "",
    color: "",
    condition: "",
    city: "",
    price: "",
    description: "",
  });


  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    try {
      const post = await axios.post(
        `${import.meta.env.VITE_API_URL}/offer/publish`,
        formData,
        {
          headers: {
            authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      navigate(`/product/${post.data._id}`)
    } catch (error) {
      console.log(error);
    }
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
        <h2>Vends ton article</h2>

        <Dropzone name={"picture"} classProps={"button-sale button-file"}/>

        <fieldset>

          <div> <label htmlFor="title">Titre</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="ex: Chemise Sézanne verte"
            value={publishForm.title}
            onChange={(event) => {
              updateState(event, "title", publishForm, setPublishForm);
            }}
          /></div>
         <div>
           <label htmlFor="description">Décris ton article</label>
          <input
            type="text"
            name="description"
            id="description"
            placeholder="ex: Très peu porté"
            onChange={(event) => {
              updateState(event, "description", publishForm, setPublishForm);
            }}
          />
         </div>
         
        </fieldset>

        <fieldset>
          <div>
                    <label htmlFor="brand">Marque</label>
          <input
            type="text"
            name="brand"
            id="brand"
            placeholder="ex: Zara"
            value={publishForm.brand}
            onChange={(event) => {
              updateState(event, "brand", publishForm, setPublishForm);
            }}
          />
          </div>
            <div>
              <label htmlFor="size">Taille</label>
          <input
            type="text"
            name="size"
            id="size"
            placeholder="ex: L / 42 / 12"
            value={publishForm.size}
            onChange={(event) => {
              updateState(event, "size", publishForm, setPublishForm);
            }}
          />
            </div>
          <div>
            <label htmlFor="color">Couleur</label>
          <input
            type="text"
            name="color"
            id="color"
            placeholder="ex: Fushia"
            value={publishForm.color}
            onChange={(event) => {
              updateState(event, "color", publishForm, setPublishForm);
            }}
          />
          </div>
          <div><label htmlFor="condition">État</label>
          <input
            type="text"
            name="condition"
            id="condition"
            placeholder="Neuf avec étiquette"
            value={publishForm.condition}
            onChange={(event) => {
              updateState(event, "condition", publishForm, setPublishForm);
            }}
          /></div>
          <div><label htmlFor="city">Lieu</label>
          <input
            type="text"
            name="city"
            id="city"
            placeholder="ex: Paris"
            value={publishForm.city}
            onChange={(event) => {
              updateState(event, "city", publishForm, setPublishForm);
            }}
          /></div>
          
        </fieldset>

        <fieldset>
          <div>
                    <label htmlFor="price">Prix</label>
          <input
            type="number"
            name="price"
            id="price"
            placeholder="0.00 €"
            value={publishForm.price}
            onChange={(event) => {
              updateState(event, "price", publishForm, setPublishForm);
            }}
          />
          </div>
  
        </fieldset>

            <Button text={"Ajouter"} classProps={"button-sale"}/>
        {/* <input type="submit" value={"Ajouter"} /> */}
      </form>
    </main>
  );
};
export default Publish;
