import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Button from "../components/Button/Button";
import Spinner from "../components/Spinner";

const Product = () => {
  const { id } = useParams();

  const [productDatas, setProductdatas] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const fetchApiProduct = async () => {
        const datas = await axios.get(
          `${import.meta.env.VITE_API_URL_PRODUCT}/offer/${id}`
        );

        setProductdatas(datas.data);
        setIsLoading(false);
      };

      fetchApiProduct();
    } catch (error) {
      console.log(error.response);
    }
  }, [id]);

  return isLoading ? (
    <div className="product">
      <Spinner />
    </div>
  ) : (
    <div className="product">
      <div className="container">
        <div className="product-picture">
          <img
            src={productDatas.product_image?.secure_url || ""}
            alt="photo du vetement"
          />
        </div>
        <div className="product-infos">
          <div className="product-details">
            <p className="product-price">
              {productDatas.product_price || ""} €
            </p>
            <div className="product-details-display">
              <div className="details-name">
                <span>MARQUE</span>
                <span>TAILLE</span>
                <span>ÉTAT</span>
                <span>COULEUR</span>
                <span>EMPLACEMENT</span>
              </div>

              <div className="details-value">
                <span>{productDatas.product_details[0]?.MARQUE || ""}</span>
                <span>{productDatas.product_details[1]?.TAILLE || ""}</span>
                <span>{productDatas.product_details[2]?.ÉTAT || ""}</span>
                <span>{productDatas.product_details[3]?.COULEUR || ""}</span>
                <span>
                  {productDatas.product_details[4]?.EMPLACEMENT || ""}
                </span>
              </div>
            </div>
          </div>
          <div className="line"></div>
          <div className="product-comments">
            <p className="product-name">{productDatas.product_name || ""}</p>
            <p className="product-description">
              {productDatas.product_description}
            </p>
            <div className="product-owner">
              {productDatas.owner?.account?.avatar && (
                <div className="user-avatar-container">
                  <img
                    src={productDatas.owner.account.avatar.secure_url}
                    alt="user avatar"
                    className="user-avatar"
                  />
                </div>
              )}
              <p className="user-name">{productDatas.owner.account.username}</p>
            </div>
          </div>

          <Button text={"Acheter"} classProps={"button-sale"} />
        </div>
      </div>
    </div>
  );
};
export default Product;
