import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../store/AuthContext";
import Breadcrumbs from "../BreadCrumbs";
import Header from "../Header";

function FertilizerRecommend() {
  const { baseURL } = useAuth();
  const [inputValue, setInputValues] = useState({
    temperature: "",
    humidity: "",
    moisture: "",
    soil: "",
    crop: "",
    nitrogen: "",
    potassium: "",
    phosphorous: "",
  });
  const [prediction, setPrediction] = useState("");

  const soilTypes = ["Sandy", "Loamy", "Black", "Red", "Clayey"];
  const cropTypes = [
    "Maize",
    "Sugarcane",
    "Cotton",
    "Tobacco",
    "Paddy",
    "Barley",
    "Wheat",
    "Millets",
    "Oil seeds",
    "Pulses",
    "Ground Nuts",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValue, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`${baseURL}/api/fertilizer`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inputValue),
      });
      if (response.ok) {
        const predictionData = await response.json();
        setPrediction(predictionData.fertilizer);
      }
    } catch (error) {
      console.error("Error fetching prediction:", error);
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500 flex flex-col items-center justify-center pt-15">
        <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-4xl">
          <Breadcrumbs />

          <h1 className="text-3xl font-semibold text-gray-800 text-center mb-6">
            Fertilizer Recommendation
          </h1>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {Object.keys(inputValue).map((key) => {
              if (key === "soil") {
                return (
                  <div key={key} className="flex flex-col">
                    <label className="text-gray-700 font-medium capitalize">
                      Soil Type
                    </label>
                    <select
                      name={key}
                      value={inputValue[key]}
                      onChange={handleInputChange}
                      className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
                      required
                    >
                      <option value="">Select Soil Type</option>
                      {soilTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                );
              }

              if (key === "crop") {
                return (
                  <div key={key} className="flex flex-col">
                    <label className="text-gray-700 font-medium capitalize">
                      Crop Type
                    </label>
                    <select
                      name={key}
                      value={inputValue[key]}
                      onChange={handleInputChange}
                      className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
                      required
                    >
                      <option value="">Select Crop</option>
                      {cropTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                );
              }

              return (
                <div key={key} className="flex flex-col">
                  <label className="text-gray-700 font-medium capitalize">
                    {key}
                  </label>
                  <input
                    type={
                      key === "temperature" ||
                      key === "humidity" ||
                      key === "moisture"
                        ? "number"
                        : "text"
                    }
                    name={key}
                    value={inputValue[key]}
                    onChange={handleInputChange}
                    className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              );
            })}

            <div className="col-span-1 md:col-span-2 flex justify-center mt-4">
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700"
              >
                Predict Now
              </button>
            </div>
          </form>

          {prediction && (
            <div className="mt-6 text-center text-lg text-gray-800">
              Prediction:{" "}
              <span className="font-semibold text-green-600">{prediction}</span>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default FertilizerRecommend;
