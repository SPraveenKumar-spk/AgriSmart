import { IoMdArrowRoundBack } from "react-icons/io";
import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom";

const KnowCrop = () => {
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

        <h1 className="text-center  mb-5" style={{ color: "purple" }}>
          Techniques for Effective Crop Cultivation
        </h1>

        <div className="row">
          <div className="col-md-7">
            <div className="bg-white p-4 rounded shadow-sm mb-5">
              <h2 className="text-secondary">
                Key Techniques in Crop Cultivation
              </h2>

              <h3 className="mt-4 text-success">Soil Management</h3>
              <ul>
                <li>
                  <strong>Soil Testing:</strong> Regular testing helps identify
                  nutrient levels, pH, and soil composition, allowing for
                  precise nutrient management.
                </li>
                <li>
                  <strong>Fertilization:</strong> Use organic or chemical
                  fertilizers based on soil needs to boost fertility and enhance
                  crop growth.
                </li>
                <li>
                  <strong>Crop Rotation:</strong> Plant different crops in a
                  sequence to maintain soil fertility and reduce pest and
                  disease build-up.
                </li>
              </ul>

              <h3 className="mt-4 text-success">
                Water and Irrigation Management
              </h3>
              <ul>
                <li>
                  <strong>Drip Irrigation:</strong> A water-efficient method
                  that delivers water directly to the roots, reducing water
                  waste and enhancing absorption.
                </li>
                <li>
                  <strong>Rainwater Harvesting:</strong> Collect and store
                  rainwater to use during dry periods, ensuring consistent water
                  supply.
                </li>
                <li>
                  <strong>Mulching:</strong> Cover the soil with organic
                  material to retain moisture, prevent weeds, and regulate soil
                  temperature.
                </li>
              </ul>

              <h3 className="mt-4 text-success">Pest and Disease Management</h3>
              <ul>
                <li>
                  <strong>Integrated Pest Management (IPM):</strong> Combines
                  biological, physical, and chemical methods to control pests in
                  an environmentally friendly way.
                </li>
                <li>
                  <strong>Biological Control:</strong> Use natural predators or
                  beneficial organisms to control pest populations.
                </li>
                <li>
                  <strong>Resistant Varieties:</strong> Cultivate crop varieties
                  that are genetically resistant to common pests and diseases.
                </li>
              </ul>

              <h3 className="mt-4 text-success">Planting Techniques</h3>
              <ul>
                <li>
                  <strong>Seed Selection and Treatment:</strong> Choose
                  high-quality seeds and treat them with fungicides or
                  insecticides to prevent early-stage diseases.
                </li>
                <li>
                  <strong>Row Spacing and Density:</strong> Optimize spacing
                  between plants to ensure they receive adequate sunlight and
                  nutrients.
                </li>
                <li>
                  <strong>Companion Planting:</strong> Grow compatible plants
                  together to deter pests and improve nutrient availability.
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-5">
            <div className="bg-white p-4 rounded shadow-sm">
              <h2 className="text-info mb-4 text-center">
                Video Guide on Cultivation Techniques
              </h2>
              <div className="mb-4">
                <ReactPlayer
                  url="https://youtu.be/SJgDswVRuXA?feature=shared"
                  controls={true}
                  width="100%"
                  height="300px"
                />
              </div>
              <hr className="my-4" />
              <div>
                <ReactPlayer
                  url="https://youtu.be/fKhWW0RTD-4?feature=shared"
                  controls={true}
                  width="100%"
                  height="300px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowCrop;
