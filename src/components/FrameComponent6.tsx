import { useMemo } from "react";
import PropTypes from "prop-types";
import "./FrameComponent6.css";

const FrameComponent6 = ({
  className = "",
  prop,
  sliceCake,
  propHeight,
  propFlex,
  propPadding,
  propMinWidth,
  propWidth,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      height: propHeight,
      flex: propFlex,
      padding: propPadding,
      minWidth: propMinWidth,
      width: propWidth,
    };
  }, [propHeight, propFlex, propPadding, propMinWidth, propWidth]);

  return (
    <div className={`frame-parent2 ${className}`} style={frameDivStyle}>
      <div className="rectangle-parent2">
        <div className="frame-child7" />
        <b className="b1">{prop}</b>
        <div className="vector-wrapper">
          <img
            className="vector-icon1"
            loading="lazy"
            alt=""
            src="/vector.svg"
          />
        </div>
      </div>
      <div className="frame-parent3">
        <div className="slice-cake-wrapper">
          <div className="slice-cake1">{sliceCake}</div>
        </div>
        <button className="frame-button">
          <div className="frame-child8" />
          <div className="add-to-cart1">Add to Cart</div>
        </button>
      </div>
    </div>
  );
};

FrameComponent6.propTypes = {
  className: PropTypes.string,
  prop: PropTypes.string,
  sliceCake: PropTypes.string,

  /** Style props */
  propHeight: PropTypes.any,
  propFlex: PropTypes.any,
  propPadding: PropTypes.any,
  propMinWidth: PropTypes.any,
  propWidth: PropTypes.any,
};

export default FrameComponent6;
