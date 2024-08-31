import Navbar from "./Navbar";
import Crop from "../assets/crop.jpeg";
import Seed from "../assets/seedQuality.jpg";
import Fertilizer from "../assets/fertilizer2.png";
import Disease from "../assets/cropdisease.png";
import Yield from "../assets/yield.jpg";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";

function Main() {
  return (
    <>
      <Navbar />
      <section className="mt-5">
        <div className="container">
          <div className="row align-items-center mb-5">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <img
                className="img-fluid w-100 rounded-4"
                src={Crop}
                alt="Crop image"
              />
            </div>
            <div className="col-lg-6">
              <h2 className="text-center text-lg-center">
                Crop Recommendation System
              </h2>
              <p className="px-lg-5 pt-3 fs-5 text-center text-lg-start">
                A crop recommendation system for websites utilizes data
                analytics and machine learning algorithms to suggest optimal
                crop choices based on factors such as soil quality, climate
                conditions, and historical yield data, enabling farmers to make
                informed decisions for maximizing agricultural productivity and
                sustainability.
              </p>
              <div className="d-flex justify-content-center mt-5">
                <NavLink to="/croprecommend">
                  <button className="btn btn-outline-primary me-3">
                    Predict Now
                  </button>
                </NavLink>
                <button className="btn btn-outline-secondary">Know More</button>
              </div>
            </div>
          </div>

          <div className="row align-items-center mb-5">
            <div className="col-lg-6 mb-4 mb-lg-0 order-lg-2">
              <img
                className="img-fluid w-100 rounded-4"
                src={Seed}
                alt="Seed image"
              />
            </div>
            <div className="col-lg-6">
              <h2 className="text-center">Seed Quality Detection</h2>
              <p className="px-lg-5 pt-3 fs-5 text-center text-lg-start">
                Seed quality detection systems leverage advanced technologies
                like image processing. These systems assess factors such as
                size, weight, internal structure to guarantee optimal
                germination and growth. By detecting impurities and measuring
                moisture content, they ensure the highest standards of seed
                purity and viability, leading to more successful and sustainable
                agricultural outcomes.
              </p>
              <div className="d-flex justify-content-center  mt-5">
                <button className="btn btn-outline-primary me-3">
                  Analyze Now
                </button>
                <button className="btn btn-outline-secondary">Know More</button>
              </div>
            </div>
          </div>

          <div className="row align-items-center mb-5">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <img
                className="img-fluid w-100 rounded-4"
                src={Fertilizer}
                alt="Fertilizer image"
              />
            </div>
            <div className="col-lg-6">
              <h2 className="text-center ">Fertilizer Recommendation</h2>
              <p className="px-lg-5 pt-3 fs-5 text-center text-lg-start">
                Fertilizer recommendation systems use data analytics and machine
                learning to suggest the most effective fertilization strategies
                for crops. By analyzing soil composition, crop type, and
                environmental conditions, these systems provide tailored
                recommendations that optimize nutrient use, enhance crop growth,
                and minimize environmental impact.
              </p>
              <div className="d-flex justify-content-center  mt-5">
                <NavLink to="/fertilizerrecommend">
                  <button className="btn btn-outline-primary me-3">
                    Get Recommendations
                  </button>
                </NavLink>
                <button className="btn btn-outline-secondary">Know More</button>
              </div>
            </div>
          </div>

          <div className="row align-items-center mb-5">
            <div className="col-lg-6 mb-4 mb-lg-0 order-lg-2">
              <img
                className="img-fluid w-100 rounded-4"
                src={Disease}
                alt="Disease image"
              />
            </div>
            <div className="col-lg-6">
              <h2 className="text-center ">Crop Disease Detection</h2>
              <p className="px-lg-5 pt-3 fs-5 text-center text-lg-start">
                Crop disease detection systems employ modern technologies such
                as image recognition, and AI to identify signs of disease in
                crops at an early stage. By analyzing patterns in leaf color,
                shape, and texture, these systems can detect diseases before
                they spread, allowing for timely intervention. Early detection
                and treatment lead to healthier crops, reduced losses, and more
                efficient use of resources in agriculture.
              </p>
              <div className="d-flex justify-content-center  mt-5">
                <NavLink to="/cropdisease">
                  <button className="btn btn-outline-primary me-3">
                    Detect Now
                  </button>
                </NavLink>
                <button className="btn btn-outline-secondary">Know More</button>
              </div>
            </div>
          </div>

          <div className="row align-items-center mb-5">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <img
                className="img-fluid w-100 rounded-4"
                src={Yield}
                alt="Yield image"
              />
            </div>
            <div className="col-lg-6">
              <h2 className="text-center ">Yield Prediction</h2>
              <p className="px-lg-5 pt-3 fs-5 text-center text-lg-start">
                Yield prediction systems use historical data, weather patterns,
                and machine learning algorithms to forecast crop yields
                accurately. By considering factors like soil health, planting
                schedules, and climatic conditions, these systems help farmers
                anticipate harvest quantities. This enables better planning,
                resource allocation, and market readiness, ultimately leading to
                improved agricultural efficiency and profitability.
              </p>
              <div className="d-flex justify-content-center  mt-5">
                <NavLink to="/yieldpredict">
                  <button className="btn btn-outline-primary me-3">
                    Predict Now
                  </button>
                </NavLink>
                <button className="btn btn-outline-secondary">Know More</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Main;
