import ReactPlayer from "react-player";
import Header from "../../Header";
import Breadcrumbs from "../../BreadCrumbs";

const KnowYield = () => {
  return (
    <>
      <Header />
      <div className="bg-indigo-50 min-h-screen py-12 pt-30">
        <div className="container mx-auto px-4">
          <Breadcrumbs />

          <div className="text-center mb-8">
            <h1 className="text-3xl font-semibold text-indigo-700">
              Techniques for Maximizing Crop Yield
            </h1>
            <p className="lead text-gray-600 mt-2">
              Discover traditional and modern methods to increase crop yield for
              sustainable and efficient farming.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Overview
              </h2>
              <p className="text-gray-700">
                Increasing crop yield is essential for food security and
                economic growth. Here are some proven traditional and modern
                techniques to maximize yield.
              </p>

              <h3 className="mt-4 text-green-600 font-semibold">
                Traditional Techniques
              </h3>

              <h4 className="text-blue-600 font-semibold mt-2">
                Soil Fertility and Organic Matter
              </h4>
              <p className="text-gray-700">
                <strong>Importance:</strong> Organic matter improves soil
                structure, water retention, and nutrient availability.
              </p>
              <p className="text-gray-700">
                <strong>Optimization:</strong> Add compost, manure, and crop
                residues to enhance soil health and promote sustainable yield.
              </p>

              <h4 className="text-blue-600 font-semibold mt-2">
                Crop Rotation
              </h4>
              <p className="text-gray-700">
                <strong>Importance:</strong> Rotating crops helps maintain soil
                fertility and controls pests and diseases.
              </p>
              <p className="text-gray-700">
                <strong>Optimization:</strong> Rotate legumes with cereals to
                enrich soil nitrogen and prevent nutrient depletion.
              </p>

              <h4 className="text-blue-600 font-semibold mt-2">
                Mixed Cropping and Companion Planting
              </h4>
              <p className="text-gray-700">
                <strong>Importance:</strong> Planting compatible crops together
                can naturally deter pests and improve growth.
              </p>

              <h3 className="mt-4 text-green-600 font-semibold">
                Modern Techniques
              </h3>

              <h4 className="text-blue-600 font-semibold mt-2">
                Precision Agriculture
              </h4>
              <p className="text-gray-700">
                <strong>Importance:</strong> Utilizes data analytics and sensors
                to monitor crop health and soil conditions.
              </p>
              <p className="text-gray-700">
                <strong>Optimization:</strong> Use satellite data and soil
                sensors to apply resources precisely, minimizing waste and
                maximizing yield.
              </p>

              <h4 className="text-blue-600 font-semibold mt-2">
                Genetically Modified (GM) Crops
              </h4>
              <p className="text-gray-700">
                <strong>Importance:</strong> GM crops are engineered for
                resistance to pests and environmental stress.
              </p>
              <p className="text-gray-700">
                <strong>Optimization:</strong> Choose GM crop varieties suited
                to the region's climate to increase yield and reduce crop
                losses.
              </p>

              <h4 className="text-blue-600 font-semibold mt-2">
                Efficient Irrigation Techniques
              </h4>
              <p className="text-gray-700">
                <strong>Importance:</strong> Water-efficient irrigation reduces
                water use and improves crop growth.
              </p>
              <p className="text-gray-700">
                <strong>Optimization:</strong> Use drip or sprinkler irrigation
                to conserve water and maintain consistent moisture levels in the
                soil.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-blue-600 text-center mb-4">
                Video Guide
              </h2>
              <div className="mb-4">
                <ReactPlayer
                  url="https://youtu.be/j1HIClkuLnw?feature=shared"
                  controls={true}
                  width="100%"
                  height="250px"
                />
              </div>
              <div>
                <ReactPlayer
                  url="https://youtu.be/nmnKWc6GqHk?si=R-y-wYEEFX1jZXjj"
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

export default KnowYield;
