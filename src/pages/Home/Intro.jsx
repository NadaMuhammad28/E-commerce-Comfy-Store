import { Link } from "react-router-dom";

import introbg from "../../assets/intoBG.png";
const Intro = () => {
  return (
    <section className="sec-1">
      <div className="container">
        <div className="intro-wrapper sec-wrapper">
          <div className="intro-title-wrapper">
            <h1>
              Good Living
              <span>
                Better <span>Live</span>
              </span>
            </h1>
            <p>Find your way to the good living with our furniture</p>
            <Link className="btn shop-btn" to="/products">
              shop now
            </Link>
          </div>
          <div className="intro-sec-img-wrapper">
            <div className="bg-circle"></div>
            <img src={introbg} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;