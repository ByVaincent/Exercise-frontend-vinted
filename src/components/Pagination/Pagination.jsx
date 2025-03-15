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
    <div className="pagination-count">
      <div className="pagination">
        <div className="arrows">
          {page > 1 && (
            <IoIosArrowBack
              className="pagination-arrow"
              onClick={() => handleClick("-")}
            />
          )}
        </div>
        <div>
          {page} / {Math.ceil(count / 15)}
        </div>
        <div className="arrows">
          {page < Math.ceil(count / 15) && (
            <IoIosArrowForward
              className="pagination-arrow"
              onClick={() => handleClick("+")}
            />
          )}
        </div>
      </div>
      <span>({count} offres)</span>
    </div>
  );
};
export default Pagination;
