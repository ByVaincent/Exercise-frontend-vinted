import axios from "axios";

const fetchAllProducts = async (page) => {
  const productsDatas = await axios.get(
    `${import.meta.env.VITE_API_URL}/offers?page=${page}&limit=15`
  );

  return productsDatas.data;
};

export default fetchAllProducts;
