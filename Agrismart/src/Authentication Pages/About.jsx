import { useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

const About = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-light min-vh-100 py-5">
      <div className="container">
        <button
          className="btn btn-primary mb-4 fs-5"
          onClick={() => navigate(-1)}
        >
          <IoMdArrowRoundBack size={25} className="me-2" /> Back
        </button>
        <h1 className="text-center  mb-4" style={{ color: "purple" }}>
          About AgriSmart
        </h1>
        <p className="lead text-center mb-5">
          Welcome to AgriSmart, a comprehensive AI-driven solution designed to
          revolutionize the agriculture industry. Leveraging the power of
          machine learning, AgriSmart helps farmers make informed decisions,
          optimize crop yields, and enhance agricultural efficiency through
          accurate recommendations and predictions.
        </p>

        <h2 className="text-success text-center mb-4">
          Explore Our Features 🚀
        </h2>

        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title text-primary">
                  🌾 Crop Recommendation System
                </h5>
                <p className="card-text">
                  Helps farmers identify the best crops to plant based on soil
                  parameters, weather conditions, and other critical factors. It
                  ensures optimal crop selection to maximize yield and
                  sustainability.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title text-primary">
                  🌱 Fertilizer Recommendation
                </h5>
                <p className="card-text">
                  Suggests the appropriate type and quantity of fertilizers
                  required for a specific crop based on soil fertility and
                  nutrient levels, improving crop quality while reducing
                  excessive chemical use.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title text-primary">
                  🌿 Crop Disease Detection
                </h5>
                <p className="card-text">
                  Utilizes advanced image processing techniques to detect
                  diseases in crops by analyzing leaf images. Early detection
                  minimizes crop loss and improves plant health.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title text-primary">🌾 Yield Prediction</h5>
                <p className="card-text">
                  Uses predictive analytics to forecast crop yields by analyzing
                  various environmental and agricultural factors. This assists
                  farmers in future planning by providing accurate yield
                  predictions.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title text-primary">
                  🌱 Seed Quality Detection
                </h5>
                <p className="card-text">
                  Evaluates the quality of seeds, ensuring that only the best
                  seeds are used for planting, enhancing germination rates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
