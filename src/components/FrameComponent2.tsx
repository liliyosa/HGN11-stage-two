import { useMemo } from "react";
import PropTypes from "prop-types";
import "./FrameComponent2.css";

const FrameComponent2 = ({
  className = "",
  vector,
  propFlex,
  propFlexDirection,
  propMinWidth,
  propAlignSelf,
}) => {
  const frameDiv2Style = useMemo(() => {
    return {
      flex: propFlex,
      flexDirection: propFlexDirection,
      minWidth: propMinWidth,
      alignSelf: propAlignSelf,
    };
  }, [propFlex, propFlexDirection, propMinWidth, propAlignSelf]);

  return (
    <div className={`frame-wrapper7 ${className}`} style={frameDiv2Style}>
      <div className="frame-parent16">
        <div className="rectangle-parent13">
          <div className="frame-child19" />
          <b className="b6">$49</b>
          <div className="vector-wrapper1">
            <img className="vector-icon5" loading="lazy" alt="" src={vector} />
          </div>
        </div>
        <div className="frame-parent17">
          <div className="full-chicken-wrapper">
            <div className="full-chicken">Full Chicken</div>
          </div>
          <button className="rectangle-parent14">
            <div className="frame-child20" />
            <div className="add-to-cart7">Add to Cart</div>
          </button>
        </div>
      </div>
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
  vector: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propFlexDirection: PropTypes.any,
  propMinWidth: PropTypes.any,
  propAlignSelf: PropTypes.any,
};

export default FrameComponent2;
