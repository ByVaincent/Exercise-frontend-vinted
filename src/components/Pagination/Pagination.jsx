import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import "./pagination.css";

const Pagination = ({ page, setPage, count }) => {
  const handleClick = (operation) => {
    if (page > 1 && operation === "-") {
      setPage((page) => page - 1);
    } else if (page < Math.ceil(count / 15) && operation === "+") {
      setPage((page) => page + 1);
    }
  };

  return (
    <div className="pagination">
      <IoIosArrowBack
        className="pagination-arrow"
        onClick={() => handleClick("-")}
      />
      <p>
        {page} / {Math.ceil(count / 15)}
      </p>
      <IoIosArrowForward
        className="pagination-arrow"
        onClick={() => handleClick("+")}
      />
    </div>
  );
};
export default Pagination;
