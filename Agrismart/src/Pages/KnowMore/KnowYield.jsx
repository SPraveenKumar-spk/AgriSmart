import { IoMdArrowRoundBack } from "react-icons/io";
import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom";

const KnowYield = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-light min-vh-100 py-5">
      <div className="container">
        <button className="btn btn-primary" onClick={() => navigate(-1)}>
          {" "}
          <IoMdArrowRoundBack size={25} /> Back
        </button>
        <div className="text-center mb-5">
          <h1 style={{ color: "purple" }}>
            Techniques for Maximizing Crop Yield
          </h1>
          <p className="lead text-secondary">
            Discover traditional and modern methods to increase crop yield for
            sustainable and efficient farming.
          </p>
        </div>

        <div className="row">
          <div className="col-md-7">
            <div className="bg-white p-4 rounded shadow-sm mb-5">
              <h2 className="text-secondary">Overview</h2>
              <p>
                Increasing crop yield is essential for food security and
                economic growth. Here are some proven traditional and modern
                techniques to maximize yield.
              </p>

              <h3 className="mt-4 text-success">Traditional Techniques</h3>

              <h4 className="text-primary">
                Soil Fertility and Organic Matter
              </h4>
              <p>
                <strong>Importance:</strong> Organic matter improves soil
                structure, water retention, and nutrient availability.
              </p>
              <p>
                <strong>Optimization:</strong> Add compost, manure, and crop
                residues to enhance soil health and promote sustainable yield.
              </p>

              <h4 className="text-primary">Crop Rotation</h4>
              <p>
                <strong>Importance:</strong> Rotating crops helps maintain soil
                fertility and controls pests and diseases.
              </p>
              <p>
                <strong>Optimization:</strong> Rotate legumes with cereals to
                enrich soil nitrogen and prevent nutrient depletion.
              </p>

              <h4 className="text-primary">
                Mixed Cropping and Companion Planting
              </h4>
              <p>
                <strong>Importance:</strong> Planting compatible crops together
                can naturally deter pests and improve growth.
              </p>

              <h3 className="mt-4 text-success">Modern Techniques</h3>

              <h4 className="text-primary">Precision Agriculture</h4>
              <p>
                <strong>Importance:</strong> Utilizes data analytics and sensors
                to monitor crop health and soil conditions.
              </p>
              <p>
                <strong>Optimization:</strong> Use satellite data and soil
                sensors to apply resources precisely, minimizing waste and
                maximizing yield.
              </p>

              <h4 className="text-primary">Genetically Modified (GM) Crops</h4>
              <p>
                <strong>Importance:</strong> GM crops are engineered for
                resistance to pests and environmental stress.
              </p>
              <p>
                <strong>Optimization:</strong> Choose GM crop varieties suited
                to the region's climate to increase yield and reduce crop
                losses.
              </p>

              <h4 className="text-primary">Efficient Irrigation Techniques</h4>
              <p>
                <strong>Importance:</strong> Water-efficient irrigation reduces
                water use and improves crop growth.
              </p>
              <p>
                <strong>Optimization:</strong> Use drip or sprinkler irrigation
                to conserve water and maintain consistent moisture levels in the
                soil.
              </p>
            </div>
          </div>

          <div className="col-md-5">
            <div className="bg-white p-4 rounded shadow-sm">
              <h2 className="text-info mb-4 text-center">Video Guide</h2>
              <div className="mb-4">
                <ReactPlayer
                  url="https://youtu.be/j1HIClkuLnw?feature=shared"
                  controls={true}
                  width="100%"
                  height="300px"
                />
              </div>
              <div>
                <ReactPlayer
                  url="https://youtu.be/nmnKWc6GqHk?si=R-y-wYEEFX1jZXjj"
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
export default KnowYield;
