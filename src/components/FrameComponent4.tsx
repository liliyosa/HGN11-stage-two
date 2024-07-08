import { useMemo } from "react";
import PropTypes from "prop-types";
import "./FrameComponent4.css";

const FrameComponent4 = ({
  className = "",
  deliciousDonuts,
  vector,
  propWidth,
  propFlexDirection,
  propAlignSelf,
}) => {
  const frameDiv1Style = useMemo(() => {
    return {
      width: propWidth,
      flexDirection: propFlexDirection,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propFlexDirection, propAlignSelf]);

  return (
    <div className={`frame-wrapper4 ${className}`} style={frameDiv1Style}>
      <div className="frame-parent11">
        <div className="rectangle-parent9">
          <div className="frame-child15" />
          <div className="delicious-donuts-wrapper">
            <img
              className="delicious-donuts-icon"
              loading="lazy"
              alt=""
              src={deliciousDonuts}
            />
          </div>
          <div className="donuts-name-image-parent">
            <b className="donuts-name-image">$35</b>
            <div className="vector-container">
              <img
                className="vector-icon3"
                loading="lazy"
                alt=""
                src={vector}
              />
            </div>
          </div>
        </div>
        <div className="frame-parent12">
          <div className="donuts-wrapper">
            <div className="donuts1">Donuts</div>
          </div>
          <button className="rectangle-parent10">
            <div className="frame-child16" />
            <div className="add-to-cart5">Add to Cart</div>
          </button>
        </div>
      </div>
    </div>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
  deliciousDonuts: PropTypes.string,
  vector: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propFlexDirection: PropTypes.any,
  propAlignSelf: PropTypes.any,
};

export default FrameComponent4;
