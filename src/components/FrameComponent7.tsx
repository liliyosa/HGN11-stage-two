import { useMemo } from "react";
import PropTypes from "prop-types";
import "./FrameComponent7.css";

const FrameComponent7 = ({
  className = "",
  deliciousDonuts,
  donuts,
  propGap,
}) => {
  const frameDiv3Style = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  return (
    <div className={`rectangle-parent17 ${className}`} style={frameDiv3Style}>
      <div className="frame-child24" />
      <img
        className="delicious-donuts-icon1"
        loading="lazy"
        alt=""
        src={deliciousDonuts}
      />
      <div className="donuts-container">
        <div className="donuts2">{donuts}</div>
      </div>
    </div>
  );
};

FrameComponent7.propTypes = {
  className: PropTypes.string,
  deliciousDonuts: PropTypes.string,
  donuts: PropTypes.string,

  /** Style props */
  propGap: PropTypes.any,
};

export default FrameComponent7;
