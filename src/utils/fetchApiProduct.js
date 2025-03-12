import axios from "axios";

const fetchApiProduct = async (productId) => {
  const datas = await axios.get(
    `${import.meta.env.VITE_API_URL_PRODUCT}/offer/${productId}`
  );

  return datas.data;
};

export default fetchApiProduct;
