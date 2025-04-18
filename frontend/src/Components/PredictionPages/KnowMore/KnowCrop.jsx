import ReactPlayer from "react-player";
import Breadcrumbs from "../../BreadCrumbs";
import Header from "../../Header";
const KnowCrop = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-green-100 to-blue-100 px-6 py-10 pt-30">
        <div className="max-w-6xl mx-auto">
          <Breadcrumbs />
          <h1 className="text-3xl font-bold text-center text-purple-700 mt-6 mb-10">
            Techniques for Effective Crop Cultivation
          </h1>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h2 className="text-xl font-semibold text-gray-700">
                Key Techniques in Crop Cultivation
              </h2>

              <div className="mt-6 space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-green-600">
                    Soil Management
                  </h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>
                      <strong>Soil Testing:</strong> Identifies nutrient levels
                      and soil composition for better management.
                    </li>
                    <li>
                      <strong>Fertilization:</strong> Organic or chemical
                      fertilizers boost fertility.
                    </li>
                    <li>
                      <strong>Crop Rotation:</strong> Maintains soil fertility
                      and reduces disease build-up.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-green-600">
                    Water and Irrigation
                  </h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>
                      <strong>Drip Irrigation:</strong> Water-efficient method
                      for root absorption.
                    </li>
                    <li>
                      <strong>Rainwater Harvesting:</strong> Collects water for
                      dry periods.
                    </li>
                    <li>
                      <strong>Mulching:</strong> Helps retain moisture and
                      prevent weeds.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-green-600">
                    Pest and Disease Management
                  </h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>
                      <strong>Integrated Pest Management:</strong> Combines
                      biological and chemical methods.
                    </li>
                    <li>
                      <strong>Biological Control:</strong> Uses natural
                      predators for pest management.
                    </li>
                    <li>
                      <strong>Resistant Varieties:</strong> Grows crops that
                      resist pests.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Section - Videos */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h2 className="text-xl font-semibold text-center text-blue-600 mb-6">
                Video Guide on Cultivation Techniques
              </h2>

              <div className="space-y-6">
                <div className="overflow-hidden rounded-lg shadow-md">
                  <ReactPlayer
                    url="https://youtu.be/SJgDswVRuXA?feature=shared"
                    controls={true}
                    width="100%"
                    height="250px"
                  />
                </div>

                <div className="overflow-hidden rounded-lg shadow-md">
                  <ReactPlayer
                    url="https://youtu.be/fKhWW0RTD-4?feature=shared"
                    controls={true}
                    width="100%"
                    height="250px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default KnowCrop;
