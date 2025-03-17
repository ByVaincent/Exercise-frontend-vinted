import { Navigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Dropzone from "../components/DropZone";

const Publish = ({ token }) => {
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

    console.log(formData.get("picture"));

    // const formData = new FormData();

    // for (const property in publishForm) {
    //   formData.append(property, publishForm[property]);
    // }

    // formData.append("picture", pictures);

    // console.log(formData.get("files"));

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
      console.log(post);
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
        <h1>Vends ton article</h1>
        {/* <Dropzone onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
          {({ getRootProps, getInputProps }) => (
            <section>
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <p>Drag 'n' drop some files here, or click to select files</p>
              </div>
            </section>
          )}
        </Dropzone> */}

        <Dropzone name={"picture"} />

        <input
          type="file"
          name="pictures"
          id="pictures"
          multiple={true}
          onChange={(event) => {
            setPictures(event.target.files[0]);
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
          <input
            type="text"
            name="description"
            id="description"
            onChange={(event) => {
              updateState(event, "description", publishForm, setPublishForm);
            }}
          />
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
