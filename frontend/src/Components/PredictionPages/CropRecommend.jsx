import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../store/AuthContext";
import Header from "../Header";
import Breadcrumbs from "../BreadCrumbs";

function CropRecommend() {
  const { baseURL } = useAuth();
  const navigate = useNavigate();

  const phValue = Array.from({ length: 15 }, (_, i) => i);

  const [inputValue, setInputValues] = useState({
    nitrogen: "",
    phosphorous: "",
    potassium: "",
    temperature: "",
    humidity: "",
    ph: "",
    rainfall: "",
  });
  const [prediction, setPrediction] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValue, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`${baseURL}/api/croprecommend`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputValue),
      });
      if (response.ok) {
        const predictionData = await response.json();
        setPrediction(predictionData.crop);
      } else {
        toast.error("Something went wrong.");
      }
    } catch (error) {
      console.error("Error fetching prediction:", error);
      toast.error("Failed to connect to the server.");
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500 flex flex-col items-center justify-center pt-15">
        <Toaster position="top-center" reverseOrder={false} />

        <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-4xl">
          <Breadcrumbs />

          <h1 className="text-3xl font-semibold text-gray-800 text-center mb-6">
            Crop Recommendation System
          </h1>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {Object.keys(inputValue).map((key) => (
              <div key={key} className="flex flex-col">
                <label className="text-gray-700 font-medium capitalize">
                  {key}
                </label>
                {key === "ph" ? (
                  <select
                    name={key}
                    value={inputValue[key]}
                    onChange={handleInputChange}
                    className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Choose pH value</option>
                    {phValue.map((ph) => (
                      <option key={ph} value={ph}>
                        {ph}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type="number"
                    name={key}
                    value={inputValue[key]}
                    onChange={handleInputChange}
                    className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
                    required
                  />
                )}
              </div>
            ))}

            <div className="col-span-1 md:col-span-2 flex justify-center mt-4">
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700"
              >
                Get Recommendation
              </button>
            </div>
          </form>

          {prediction && (
            <div className="mt-6 text-center text-lg text-gray-800">
              Recommendation:{" "}
              <span className="font-semibold text-green-600">{prediction}</span>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default CropRecommend;
