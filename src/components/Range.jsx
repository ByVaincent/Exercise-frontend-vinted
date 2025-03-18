import * as React from "react";
import { Range, getTrackBackground } from "react-range";

const STEP = 1;
const MIN = 0;
const MAX = 200;

const TwoThumbs = ({ rtl, filters, setFilters }) => {
  //displaying min price and max price
  const values = [filters.minPrice, filters.maxPrice];

  return (
    <div
      className="range-div"
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      <Range
        values={[filters.minPrice, filters.maxPrice]}
        step={STEP}
        min={MIN}
        max={MAX}
        rtl={rtl}
        onChange={(values) => {
          const newPriceMin = values[0];
          const newPriceMax = values[1];

          setFilters((prevState) => {
            return {
              ...prevState,
              minPrice: newPriceMin,
              maxPrice: newPriceMax,
            };
          });
        }}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
              height: "36px",
              display: "flex",
              width: "100%",
            }}
          >
            <div
              ref={props.ref}
              style={{
                height: "5px",
                width: "100%",
                borderRadius: "4px",
                background: getTrackBackground({
                  values,
                  colors: ["#ccc", "#2cb1ba", "#ccc"],
                  min: MIN,
                  max: MAX,
                  rtl,
                }),
                alignSelf: "center",
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ index, props, isDragged }) => (
          <div
            {...props}
            key={props.key}
            style={{
              ...props.style,
              height: "20px",
              width: "20px",
              borderRadius: "50%",
              backgroundColor: "#FFF",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0px 2px 6px #AAA",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "-28px",
                color: "#fff",
                fontWeight: "bold",
                fontSize: "12px",
                fontFamily: "Arial,Helvetica Neue,Helvetica,sans-serif",
                padding: "4px",
                width: "40px",
                display:"flex",
                justifyContent:"center",
                borderRadius: "4px",
                backgroundColor: "#548BF4",
              }}
            >
              {values[index].toFixed(0) + " €"}
            </div>
            <div
              style={{
                height: "16px",
                width: "5px",
                backgroundColor: isDragged ? "#548BF4" : "#CCC",
              }}
            />
          </div>
        )}
      />
    </div>
    //     renderThumb={({ props, isDragged }) => (
    //       <div
    //         {...props}
    //         key={props.key}
    //         style={{
    //           ...props.style,
    //           height: "20px",
    //           width: "20px",
    //           borderRadius: "50%",
    //           backgroundColor: "#FFF",
    //           display: "flex",
    //           justifyContent: "center",
    //           alignItems: "center",
    //           boxShadow: "0px 2px 6px #AAA",
    //         }}
    //       >
    //         <div
    //           style={{
    //             height: "12px",
    //             width: "2px",
    //             backgroundColor: isDragged ? "#548BF4" : "#CCC",
    //           }}
    //         />
    //       </div>
    //     )}
    //   />
    //   <output style={{ marginTop: "30px" }} id="output">
    //     {values[0].toFixed(1)} - {values[1].toFixed(1)}
    //   </output>
    // </div>
  );
};

export default TwoThumbs;
