import { IoMdArrowRoundBack } from "react-icons/io";
import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom";
const KnowFertilizer = () => {
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

        <h1 className="text-center  mb-5" style={{ color: "orange" }}>
          Fertilizer Application: Techniques and Timing
        </h1>

        <div className="row">
          <div className="col-md-7">
            <div className="bg-white p-4 rounded shadow-sm mb-5">
              <h2 className="text-secondary">
                Effective Fertilizer Use: Key Techniques
              </h2>

              <h3 className="mt-4 text-success">When to Use Fertilizers</h3>
              <ul>
                <li>
                  <strong>Pre-Planting:</strong> Apply fertilizers during soil
                  preparation to enrich nutrient levels before planting.
                </li>
                <li>
                  <strong>Early Growth Stages:</strong> Use nitrogen-rich
                  fertilizers to promote leafy growth and photosynthesis.
                </li>
                <li>
                  <strong>Mid-Growth Stages:</strong> Apply balanced fertilizers
                  during flowering and fruiting for healthy development.
                </li>
                <li>
                  <strong>Late Growth Stages:</strong> Reduce nitrogen
                  application in favor of potassium to strengthen plants and
                  enhance crop quality.
                </li>
              </ul>

              <h3 className="mt-4 text-success">
                Techniques for Fertilizer Application
              </h3>

              <h4 className="text-primary">Traditional Techniques</h4>
              <ul>
                <li>
                  <strong>Broadcasting:</strong> Spread fertilizers evenly
                  across the field before or after planting, ideal for crops
                  with high nutrient needs.
                </li>
                <li>
                  <strong>Side-Dressing:</strong> Apply fertilizer alongside the
                  plant rows, which provides nutrients closer to the roots and
                  minimizes waste.
                </li>
                <li>
                  <strong>Top-Dressing:</strong> Distribute fertilizer over
                  growing crops to boost growth during key stages, especially
                  nitrogen-based fertilizers for leafy growth.
                </li>
              </ul>

              <h4 className="text-primary">Modern Techniques</h4>
              <ul>
                <li>
                  <strong>Fertigation:</strong> Combine irrigation and
                  fertilization by applying water-soluble fertilizers through
                  drip or sprinkler systems, ensuring efficient nutrient
                  delivery.
                </li>
                <li>
                  <strong>Foliar Feeding:</strong> Apply liquid fertilizers
                  directly to plant leaves for quick nutrient absorption,
                  especially micronutrients like zinc or iron.
                </li>
                <li>
                  <strong>Precision Application:</strong> Use GPS and sensors to
                  apply fertilizers only where needed, reducing waste and
                  increasing efficiency.
                </li>
              </ul>

              <h3 className="mt-4 text-success">
                Types of Fertilizers and Their Uses
              </h3>
              <ul>
                <li>
                  <strong>Nitrogen (N):</strong> Promotes leafy growth; sources
                  include urea and ammonium sulfate. Apply during early stages
                  to boost leaf development.
                </li>
                <li>
                  <strong>Phosphorus (P):</strong> Essential for root and flower
                  development; sources include superphosphate. Apply during
                  pre-planting and early growth stages.
                </li>
                <li>
                  <strong>Potassium (K):</strong> Enhances resilience and water
                  retention; sources include potassium chloride. Apply in mid to
                  late growth stages for crop quality.
                </li>
                <li>
                  <strong>Micronutrients:</strong> Required in trace amounts for
                  plant health; apply through foliar feeding or soil enrichment
                  as needed.
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-5">
            <div className="bg-white p-4 rounded shadow-sm">
              <h2 className="text-info mb-4 text-center">Video Guide</h2>

              <div className="mb-4">
                <ReactPlayer
                  url="https://youtu.be/cqOJJMgWe7Q?feature=shared"
                  controls={true}
                  width="100%"
                  height="300px"
                />
              </div>

              <hr className="my-4" />

              <div>
                <ReactPlayer
                  url="https://youtu.be/n7nG-gHcv4I?feature=shared"
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

export default KnowFertilizer;
