import FrameComponent4 from "./FrameComponent4";
import FrameComponent6 from "./FrameComponent6";
import PropTypes from "prop-types";
import "./FrameComponent3.css";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <div className={`frame-parent13 ${className}`}>
      <FrameComponent4
        deliciousDonuts="/deliciousdonuts@2x.png"
        vector="/vector.svg"
      />
      <FrameComponent6
        prop="$45"
        sliceCake="Fried Chicken"
        propHeight="unset"
        propFlex="1"
        propPadding="0px 8px 0px 0px"
        propMinWidth="166px"
        propWidth="unset"
      />
      <div className="frame-parent14">
        <div className="rectangle-parent11">
          <div className="frame-child17" />
          <img
            className="kegs-pancakes-with-red-fish-icon"
            alt=""
            src="/kegspancakeswithredfish@2x.png"
          />
          <div className="frame-wrapper5">
            <div className="group">
              <b className="b5">$40</b>
              <div className="vector-frame">
                <img className="vector-icon4" alt="" src="/vector.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className="frame-wrapper6">
          <div className="frame-parent15">
            <div className="pancakes-wrapper">
              <div className="pancakes">Pancakes</div>
            </div>
            <button className="rectangle-parent12">
              <div className="frame-child18" />
              <div className="add-to-cart6">Add to Cart</div>
            </button>
          </div>
        </div>
      </div>
      <FrameComponent6
        prop="$25"
        sliceCake="Fries"
        propHeight="289px"
        propFlex="unset"
        propPadding="unset"
        propMinWidth="unset"
        propWidth="236px"
      />
    </div>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
