import { IoMdArrowRoundBack } from "react-icons/io";
import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom";

const KnowDisease = () => {
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

        <h1 className="text-center mb-5" style={{ color: "purple" }}>
          Techniques for Disease Identification and Management
        </h1>

        <div className="row">
          <div className="col-md-7">
            <div className="bg-white p-4 rounded shadow-sm mb-5">
              <h2 className="text-secondary">
                Key Techniques in Disease Management
              </h2>

              <h3 className="mt-4 text-success">Traditional Techniques</h3>
              <ul>
                <li>
                  <strong>Visual Inspection:</strong> Farmers traditionally rely
                  on visual inspection to detect disease symptoms like
                  discoloration, spots, or wilting in leaves and stems.
                </li>
                <li>
                  <strong>Manual Removal:</strong> Infected plants or parts are
                  manually removed to prevent disease spread.
                </li>
                <li>
                  <strong>Crop Rotation:</strong> By rotating crops, farmers can
                  break the disease cycle and reduce the likelihood of recurring
                  infestations.
                </li>
                <li>
                  <strong>Soil Treatment:</strong> Traditional soil treatments,
                  such as using organic compost or ash, help reduce soil-borne
                  pathogens.
                </li>
              </ul>

              <h3 className="mt-4 text-success">Modern Techniques</h3>
              <ul>
                <li>
                  <strong>Diagnostic Tools:</strong> Modern technologies use
                  diagnostic tools like sensors, lab testing, and image
                  recognition to quickly identify diseases in crops.
                </li>
                <li>
                  <strong>Remote Sensing:</strong> Drones and satellite imaging
                  allow for early detection of disease outbreaks over large
                  agricultural areas.
                </li>
                <li>
                  <strong>Gene Editing:</strong> Using CRISPR technology,
                  scientists are developing disease-resistant crop varieties
                  that can withstand specific pathogens.
                </li>
                <li>
                  <strong>AI and Machine Learning:</strong> Machine learning
                  algorithms analyze patterns in crop health data and predict
                  disease outbreaks, enabling early intervention.
                </li>
              </ul>

              <h3 className="mt-4 text-success">Disease Management Methods</h3>
              <ul>
                <li>
                  <strong>Chemical Treatments:</strong> Chemical fungicides,
                  bactericides, and insecticides are commonly used to manage
                  disease outbreaks, though their use must be balanced with
                  environmental impact.
                </li>
                <li>
                  <strong>Biological Control:</strong> Introducing natural
                  predators or beneficial microorganisms to control pests and
                  pathogens without harming the environment.
                </li>
                <li>
                  <strong>Integrated Disease Management (IDM):</strong> A
                  holistic approach that combines traditional and modern
                  methods, including cultural practices, biological control, and
                  judicious use of chemical treatments.
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-5">
            <div className="bg-white p-4 rounded shadow-sm">
              <h2 className="text-info mb-4 text-center">
                Video Guide on Disease Management
              </h2>
              <div className="mb-4">
                <ReactPlayer
                  url="https://youtu.be/T3fbvN7vIm8?si=UgRU9U7oaNlMcw57"
                  controls={true}
                  width="100%"
                  height="300px"
                />
              </div>
              <hr className="my-4" />
              <div>
                <ReactPlayer
                  url="https://youtu.be/NDnrLd3C-cM?si=pdUwpxbrnoQg0ZEt"
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

export default KnowDisease;
