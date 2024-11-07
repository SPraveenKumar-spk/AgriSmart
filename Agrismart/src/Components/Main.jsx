import { FaArrowCircleUp } from "react-icons/fa";
import Navbar from "./Navbar";
import Crop from "../assets/crop.jpeg";
import Fertilizer from "../assets/fertilizer2.png";
import Disease from "../assets/cropdisease.png";
import Yield from "../assets/yield.jpg";
import { NavLink } from "react-router-dom";

function Main() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Navbar />
      <section className="mt-5 pt-5 ">
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
                  <button className="btn btn-outline-primary fs-3 me-3 ">
                    Predict Now
                  </button>
                </NavLink>
                <NavLink to="/knowcrop">
                  <button className="btn btn-outline-secondary fs-3 ">
                    Know More
                  </button>
                </NavLink>
              </div>
            </div>
          </div>

          <div className="row align-items-center mb-5">
            <div className="col-lg-6 mb-4 mb-lg-0 order-lg-2">
              <img
                className="img-fluid w-100 rounded-4"
                src={Fertilizer}
                alt="Fertilizer image"
              />
            </div>
            <div className="col-lg-6">
              <h2 className="text-center">Fertilizer Recommendation</h2>
              <p className="px-lg-5 pt-3 fs-5 text-center text-lg-start">
                Fertilizer recommendation systems use data analytics and machine
                learning to suggest the most effective fertilization strategies
                for crops. By analyzing soil composition, crop type, and
                environmental conditions, these systems provide tailored
                recommendations that optimize nutrient use, enhance crop growth,
                and minimize environmental impact.
              </p>
              <div className="d-flex justify-content-center mt-5">
                <NavLink to="/fertilizerrecommend">
                  <button className="btn btn-outline-primary me-3 fs-3">
                    Get Recommendations
                  </button>
                </NavLink>
                <NavLink to="/knowfertilizer">
                  <button className="btn btn-outline-secondary fs-3">
                    Know More
                  </button>
                </NavLink>
              </div>
            </div>
          </div>

          <div className="row align-items-center mb-5">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <img
                className="img-fluid w-100 rounded-4"
                src={Disease}
                alt="Disease image"
              />
            </div>
            <div className="col-lg-6">
              <h2 className="text-center">Crop Disease Detection</h2>
              <p className="px-lg-5 pt-3 fs-5 text-center text-lg-start">
                Crop disease detection systems employ modern technologies such
                as image recognition and AI to identify signs of disease in
                crops at an early stage. By analyzing patterns in leaf color,
                shape, and texture, these systems can detect diseases before
                they spread, allowing for timely intervention. Early detection
                and treatment lead to healthier crops, reduced losses, and more
                efficient use of resources in agriculture.
              </p>
              <div className="d-flex justify-content-center mt-5">
                <NavLink to="/cropdisease">
                  <button className="btn btn-outline-primary me-3 fs-3">
                    Detect Now
                  </button>
                </NavLink>
                <NavLink to="/knowdisease">
                  <button className="btn btn-outline-secondary fs-3">
                    Know More
                  </button>
                </NavLink>
              </div>
            </div>
          </div>

          <div className="row align-items-center mb-5">
            <div className="col-lg-6 mb-4 mb-lg-0 order-lg-2">
              <img
                className="img-fluid w-100 rounded-4"
                src={Yield}
                alt="Yield image"
              />
            </div>
            <div className="col-lg-6">
              <h2 className="text-center">Yield Prediction</h2>
              <p className="px-lg-5 pt-3 fs-5 text-center text-lg-start">
                Yield prediction systems use historical data, weather patterns,
                and machine learning algorithms to forecast crop yields
                accurately. By considering factors like soil health, planting
                schedules, and climatic conditions, these systems help farmers
                anticipate harvest quantities. This enables better planning,
                resource allocation, and market readiness, ultimately leading to
                improved agricultural efficiency and profitability.
              </p>
              <div className="d-flex justify-content-center mt-5">
                <NavLink to="/yieldpredict">
                  <button className="btn btn-outline-primary me-3 fs-3">
                    Predict Now
                  </button>
                </NavLink>
                <NavLink to="/knowyield">
                  <button className="btn btn-outline-secondary fs-3">
                    Know More
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="mt-5 bg-dark text-white p-5" id="footer">
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-md-4">
              <h5>About Us</h5>
              <p>
                AgriSmart is dedicated to providing innovative solutions for
                modern agriculture, leveraging technology to empower farmers and
                enhance productivity.
              </p>
            </div>
            <div className="col-md-4">
              <h5>Contact Us</h5>
              <p>Email: info@agrismart.com</p>
              <p>Phone: +123 456 7890</p>
            </div>
            <div className="d-flex justify-content-between align-items-center mt-4">
              <div className="flex-grow-1"></div>{" "}
              <div className="scrollTop" onClick={() => scrollTop()}>
                <FaArrowCircleUp size={50} title="back to top" />
              </div>
            </div>
          </div>

          <div className="text-center mt-4">
            <p>&copy; 2024 AgriSmart. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Main;
