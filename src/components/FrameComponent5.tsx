import FrameComponent6 from "./FrameComponent6";
import PropTypes from "prop-types";
import "./FrameComponent5.css";

const FrameComponent5 = ({ className = "" }) => {
  return (
    <div className={`frame-parent4 ${className}`}>
      <div className="frame-wrapper1">
        <div className="frame-parent5">
          <div className="rectangle-parent3">
            <div className="frame-child9" />
            <b className="b2">$35</b>
            <img
              className="vector-icon2"
              loading="lazy"
              alt=""
              src="/vector.svg"
            />
            <img
              className="tasty-burger-isolated-white-ba-icon2"
              loading="lazy"
              alt=""
              src="/tastyburgerisolatedwhitebackgroundfreshhamburgerfastfoodwithbeefcheese@2x.png"
            />
          </div>
          <div className="frame-parent6">
            <div className="burger-wrapper">
              <div className="burger2">Burger</div>
            </div>
            <button className="rectangle-parent4">
              <div className="frame-child10" />
              <div className="add-to-cart2">Add to Cart</div>
            </button>
          </div>
        </div>
      </div>
      <div className="frame-parent7">
        <div className="frame-wrapper2">
          <div className="rectangle-parent5">
            <div className="frame-child11" />
            <b className="b3">$35</b>
            <div className="chicken-name-image-wrapper">
              <img
                className="chicken-name-image"
                loading="lazy"
                alt=""
                src="/vector.svg"
              />
            </div>
          </div>
        </div>
        <div className="frame-parent8">
          <div className="meat-pie-wrapper">
            <div className="meat-pie">Meat Pie</div>
          </div>
          <button className="rectangle-parent6">
            <div className="frame-child12" />
            <div className="add-to-cart3">Add to Cart</div>
          </button>
        </div>
      </div>
      <div className="frame-parent9">
        <div className="rectangle-parent7">
          <div className="frame-child13" />
          <img
            className="side-view-shawarma-with-fried-icon1"
            alt=""
            src="/sideviewshawarmawithfriedpotatoesboardcookware@2x.png"
          />
          <div className="frame-wrapper3">
            <div className="parent">
              <b className="b4">$30</b>
              <div className="shawarma-name-image-wrapper">
                <img className="shawarma-name-image" alt="" src="/vector.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className="frame-parent10">
          <div className="shawarma-wrapper">
            <div className="shawarma2">Shawarma</div>
          </div>
          <button className="rectangle-parent8">
            <div className="frame-child14" />
            <div className="add-to-cart4">Add to Cart</div>
          </button>
        </div>
      </div>
      <FrameComponent6 prop="$20" sliceCake="Slice Cake" />
    </div>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent5;
