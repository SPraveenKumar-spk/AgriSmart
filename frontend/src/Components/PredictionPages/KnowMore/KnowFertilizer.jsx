import ReactPlayer from "react-player";
import Breadcrumbs from "../../BreadCrumbs";
import Header from "../../Header";

const KnowFertilizer = () => {
  return (
    <>
      <Header />
      <div className="bg-yellow-50 min-h-screen py-12 pt-30">
        <div className="container mx-auto px-4">
          <Breadcrumbs />

          <h1 className="text-3xl font-semibold text-orange-700 text-center mb-8">
            Fertilizer Application: Techniques and Timing
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Effective Fertilizer Use: Key Techniques
              </h2>

              <h3 className="mt-4 text-green-600 font-semibold">
                When to Use Fertilizers
              </h3>
              <ul className="list-disc pl-5 text-gray-700">
                <li>
                  <strong>Pre-Planting:</strong> Apply fertilizers during soil
                  preparation.
                </li>
                <li>
                  <strong>Early Growth Stages:</strong> Use nitrogen-rich
                  fertilizers to promote leafy growth.
                </li>
                <li>
                  <strong>Mid-Growth Stages:</strong> Apply balanced fertilizers
                  during flowering and fruiting.
                </li>
                <li>
                  <strong>Late Growth Stages:</strong> Reduce nitrogen, favor
                  potassium for crop quality.
                </li>
              </ul>

              <h3 className="mt-4 text-green-600 font-semibold">
                Techniques for Fertilizer Application
              </h3>

              <h4 className="text-blue-600 font-semibold mt-2">
                Traditional Techniques
              </h4>
              <ul className="list-disc pl-5 text-gray-700">
                <li>
                  <strong>Broadcasting:</strong> Spread fertilizers evenly
                  across the field.
                </li>
                <li>
                  <strong>Side-Dressing:</strong> Apply fertilizer alongside
                  plant rows.
                </li>
                <li>
                  <strong>Top-Dressing:</strong> Distribute fertilizer over
                  growing crops.
                </li>
              </ul>

              <h4 className="text-blue-600 font-semibold mt-2">
                Modern Techniques
              </h4>
              <ul className="list-disc pl-5 text-gray-700">
                <li>
                  <strong>Fertigation:</strong> Apply water-soluble fertilizers
                  through irrigation systems.
                </li>
                <li>
                  <strong>Foliar Feeding:</strong> Apply liquid fertilizers
                  directly to plant leaves.
                </li>
                <li>
                  <strong>Precision Application:</strong> Use GPS and sensors to
                  apply fertilizers where needed.
                </li>
              </ul>

              <h3 className="mt-4 text-green-600 font-semibold">
                Types of Fertilizers and Their Uses
              </h3>
              <ul className="list-disc pl-5 text-gray-700">
                <li>
                  <strong>Nitrogen (N):</strong> Promotes leafy growth; apply
                  during early stages.
                </li>
                <li>
                  <strong>Phosphorus (P):</strong> Essential for root and flower
                  development; apply pre-planting.
                </li>
                <li>
                  <strong>Potassium (K):</strong> Enhances resilience and water
                  retention; apply in mid to late stages.
                </li>
                <li>
                  <strong>Micronutrients:</strong> Required in trace amounts;
                  apply as needed.
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-blue-600 text-center mb-4">
                Video Guide
              </h2>
              <div className="mb-4">
                <ReactPlayer
                  url="https://youtu.be/cqOJJMgWe7Q?feature=shared"
                  controls={true}
                  width="100%"
                  height="250px"
                />
              </div>
              <hr className="my-4" />
              <div>
                <ReactPlayer
                  url="https://youtu.be/n7nG-gHcv4I?feature=shared"
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

export default KnowFertilizer;
