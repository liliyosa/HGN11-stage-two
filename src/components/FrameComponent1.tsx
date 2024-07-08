import FrameComponent2 from "./FrameComponent2";
import FrameComponent6 from "./FrameComponent6";
import PropTypes from "prop-types";
import "./FrameComponent1.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <div className={`frame-parent18 ${className}`}>
      <FrameComponent2 vector="/vector.svg" />
      <FrameComponent6
        prop="$35"
        sliceCake="Cookies"
        propHeight="unset"
        propFlex="1"
        propPadding="0px 4px 0px 0px"
        propMinWidth="180px"
        propWidth="unset"
      />
      <FrameComponent6
        prop="$15"
        sliceCake="Biscuit"
        propHeight="unset"
        propFlex="1"
        propPadding="unset"
        propMinWidth="217px"
        propWidth="unset"
      />
      <div className="frame-parent19">
        <div className="rectangle-parent15">
          <div className="frame-child21" />
          <img
            className="hot-dogs-wooden-board-marble-t-icon"
            loading="lazy"
            alt=""
            src="/hotdogswoodenboardmarbletablewithonionsbackground@2x.png"
          />
          <div className="frame-wrapper8">
            <div className="container">
              <b className="b7">$25</b>
              <div className="cake-name-image-wrapper">
                <img
                  className="cake-name-image"
                  loading="lazy"
                  alt=""
                  src="/vector.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="frame-wrapper9">
          <div className="frame-parent20">
            <div className="hot-dog-wrapper">
              <div className="hot-dog">Hot-dog</div>
            </div>
            <button className="rectangle-parent16">
              <div className="frame-child22" />
              <div className="add-to-cart8">Add to Cart</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
