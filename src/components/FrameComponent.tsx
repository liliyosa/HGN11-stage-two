import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <div className={`contact-us-lane-c-fireman-a-parent ${className}`}>
      <div className="contact-us-container">
        <p className="contact-us">
          <b>Contact us</b>
        </p>
        <p className="lane-c-fireman">
          @ Lane C, fireman Avenue, Ladoke Estate, Onipanu Lagos, Nigeria
        </p>
        <p className="for-more-details">
          For more details, call +234(0)-816-9405-727
        </p>
      </div>
      <div className="frame-parent21">
        <div className="frame-wrapper10">
          <footer className="munchies-emporium-group">
            <div className="munchies-emporium3">Munchies Emporium</div>
            <div className="frame-wrapper11">
              <div className="home-group">
                <div className="home1">Home</div>
                <div className="product1">Product</div>
                <div className="contact-container">
                  <div className="contact1">Contact</div>
                </div>
              </div>
            </div>
            <div className="copyright-2024-wrapper">
              <div className="copyright-2024">Copyright 2024</div>
            </div>
          </footer>
        </div>
        <img
          className="rectangle-icon"
          loading="lazy"
          alt=""
          src="/rectangle-10.svg"
        />
      </div>
      <div className="footer-image-parent">
        <div className="footer-image" />
        <img
          className="icround-copyright-icon"
          loading="lazy"
          alt=""
          src="/icroundcopyright.svg"
        />
        <img
          className="frame-child23"
          loading="lazy"
          alt=""
          src="/group-36.svg"
        />
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
