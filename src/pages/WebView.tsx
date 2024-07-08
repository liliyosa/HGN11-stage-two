import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import "./WebView.css";

const WebView = () => {
  return (
    <div className="web-view">
      <header className="web-view-inner">
        <div className="munchies-emporium-parent">
          <div className="munchies-emporium">Munchies Emporium</div>
          <div className="frame-wrapper">
            <div className="home-parent">
              <a className="home">Home</a>
              <div className="footer-info">
                <a className="product">Product</a>
                <div className="footer-info-inner">
                  <img
                    className="frame-child"
                    loading="lazy"
                    alt=""
                    src="/line-1.svg"
                  />
                </div>
              </div>
              <div className="contact-wrapper">
                <a className="contact">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="delight-your-taste-buds-with-m-wrapper">
        <h1 className="delight-your-taste-container">
          <p className="delight-your-taste">Delight Your Taste Buds with</p>
          <p className="munchies-emporium1">Munchies Emporium</p>
        </h1>
      </div>
      <div className="web-view-child">
        <button className="rectangle-parent">
          <div className="frame-item" />
          <div className="search">Search</div>
        </button>
      </div>
      <div className="frame-div">
        <div className="frame-parent">
          <FrameComponent5 />
          <FrameComponent3 />
          <FrameComponent1 />
        </div>
      </div>
      <FrameComponent />
      <main className="hero-image-one-parent">
        <div className="hero-image-one" />
        <div className="frame-inner" />
        <div className="ellipse-div" />
        <div className="frame-child1" />
        <img
          className="delicious-burger-with-fresh-in-icon"
          alt=""
          src="/deliciousburgerwithfreshingredients-2@2x.png"
        />
        <img className="group-icon" loading="lazy" alt="" src="/group-30.svg" />
        <img
          className="vector-icon"
          loading="lazy"
          alt=""
          src="/vector-12.svg"
        />
        <div className="rectangle-div" />
        <img
          className="rustic-meat-pie-baked-with-sav-icon"
          loading="lazy"
          alt=""
          src="/rusticmeatpiebakedwithsavoryonionsgeneratedbyai@2x.png"
        />
        <img
          className="close-up-fried-chicken-drumsti-icon"
          loading="lazy"
          alt=""
          src="/closeupfriedchickendrumsticks@2x.png"
        />
        <img
          className="delicious-roasted-turkey-tray-icon"
          loading="lazy"
          alt=""
          src="/deliciousroastedturkeytray@2x.png"
        />
        <img
          className="assortment-delicious-fresh-coo-icon"
          alt=""
          src="/assortmentdeliciousfreshcookies@2x.png"
        />
        <img
          className="blueberry-biscuit-pies-icon"
          alt=""
          src="/blueberrybiscuitpies@2x.png"
        />
        <img
          className="fries-blue-background-with-cop-icon"
          loading="lazy"
          alt=""
          src="/friesbluebackgroundwithcopyspace@2x.png"
        />
        <img
          className="delicious-slices-cake-icon"
          alt=""
          src="/deliciousslicescake@2x.png"
        />
        <div className="navigation">
          <img
            className="delicious-burger-with-fresh-in-icon1"
            alt=""
            src="/deliciousburgerwithfreshingredients-1@2x.png"
          />
          <div className="navigation-child" />
        </div>
      </main>
    </div>
  );
};

export default WebView;
