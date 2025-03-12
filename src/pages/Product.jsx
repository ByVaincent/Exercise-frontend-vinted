import { useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();

  return <h1>This is product page: id {}</h1>;
};
export default Product;
