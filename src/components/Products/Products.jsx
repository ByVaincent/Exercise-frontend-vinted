import { Link } from "react-router-dom";
import "./products.css";

const Products = ({ offer }) => {
  const { _id, owner, product_details, product_image, product_price } = offer;

  return (
    <Link to={`/product/${_id}`} className={"product-preview-link"}>
      <div className="product-preview">
        <div className="product-owner">
          {owner.account?.avatar && (
            <div className="user-avatar-container">
              <img
                src={
                  owner.account?.avatar?.secure_url &&
                  owner.account.avatar.secure_url
                }
                alt="user avatar"
                className="user-avatar"
              />
            </div>
          )}
          <p className="user-name">{owner.account?.username || ""}</p>
        </div>

        <img
          className="product-preview-picture"
          src={product_image[0]?.secure_url || ""}
          alt="photo du produit"
        />

        <div className="product-preview-details">
          <p className="product-preview-price">{product_price || ""} €</p>
          <p className="product-preview-size">
            {product_details[1].TAILLE || ""}
          </p>
          <p className="product-preview-brand">
            {product_details[0].MARQUE || ""}
          </p>
        </div>
      </div>
    </Link>
  );
};
export default Products;
