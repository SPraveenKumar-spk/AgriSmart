import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom";
import Breadcrumbs from "../../BreadCrumbs";
import Header from "../../Header";

const KnowDisease = () => {
  return (
    <>
      <Header />
      <div className="bg-green-50 min-h-screen py-12 pt-30">
        <div className="container mx-auto px-4">
          <Breadcrumbs />
          <h1 className="text-3xl font-semibold text-center text-green-700 mb-8">
            Techniques for Disease Identification and Management
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Key Techniques in Disease Management
              </h2>

              <h3 className="mt-4 text-green-600 font-semibold">
                Traditional Techniques
              </h3>
              <ul className="list-disc pl-5 text-gray-700">
                <li>
                  <strong>Visual Inspection:</strong> Farmers traditionally rely
                  on visual inspection to detect disease symptoms.
                </li>
                <li>
                  <strong>Manual Removal:</strong> Infected plants or parts are
                  manually removed.
                </li>
                <li>
                  <strong>Crop Rotation:</strong> Rotating crops helps break
                  disease cycles.
                </li>
                <li>
                  <strong>Soil Treatment:</strong> Organic compost or ash helps
                  reduce soil-borne pathogens.
                </li>
              </ul>

              <h3 className="mt-4 text-green-600 font-semibold">
                Modern Techniques
              </h3>
              <ul className="list-disc pl-5 text-gray-700">
                <li>
                  <strong>Diagnostic Tools:</strong> Sensors, lab testing, and
                  image recognition identify diseases quickly.
                </li>
                <li>
                  <strong>Remote Sensing:</strong> Drones and satellite imaging
                  allow for early detection of disease outbreaks.
                </li>
                <li>
                  <strong>Gene Editing:</strong> Developing disease-resistant
                  crop varieties using CRISPR technology.
                </li>
                <li>
                  <strong>AI and Machine Learning:</strong> Algorithms analyze
                  patterns to predict disease outbreaks.
                </li>
              </ul>

              <h3 className="mt-4 text-green-600 font-semibold">
                Disease Management Methods
              </h3>
              <ul className="list-disc pl-5 text-gray-700">
                <li>
                  <strong>Chemical Treatments:</strong> Chemical fungicides,
                  bactericides, and insecticides are commonly used.
                </li>
                <li>
                  <strong>Biological Control:</strong> Introducing natural
                  predators or beneficial microorganisms.
                </li>
                <li>
                  <strong>Integrated Disease Management (IDM):</strong> Combines
                  traditional and modern methods.
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-blue-600 text-center mb-4">
                Video Guide on Disease Management
              </h2>
              <div className="mb-4">
                <ReactPlayer
                  url="https://youtu.be/T3fbvN7vIm8?si=UgRU9U7oaNlMcw57"
                  controls={true}
                  width="100%"
                  height="250px"
                />
              </div>
              <hr className="my-4" />
              <div>
                <ReactPlayer
                  url="https://youtu.be/NDnrLd3C-cM?si=pdUwpxbrnoQg0ZEt"
                  controls={true}
                  width="100%"
                  height="250px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default KnowDisease;
