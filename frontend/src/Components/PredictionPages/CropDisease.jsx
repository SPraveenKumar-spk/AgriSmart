import { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../store/AuthContext";
import { toast, Toaster } from "react-hot-toast";
import Breadcrumbs from "../BreadCrumbs";
import Header from "../Header";

function CropDisease() {
  const [imageSrc, setImageSrc] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { baseURL } = useAuth();
  const [prediction, setPrediction] = useState("");

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file); // Save file for form submission
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDetectClick = async () => {
    if (!selectedFile) {
      toast.error("Please upload an image first.");
      return;
    }

    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("image", selectedFile);

      const response = await fetch(`${baseURL}/api/cropdisease`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Failed to detect disease");

      const result = await response.json();
      setPrediction(result.disease);
    } catch (error) {
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-green-200 to-blue-300 px-6 py-24">
        <Toaster position="top-center" reverseOrder={false} />
        <div className="bg-white relative left-1/2 transform -translate-x-1/2 p-8 shadow-lg rounded-xl w-full max-w-2xl flex flex-col justify-start transition-all duration-300">
          <Breadcrumbs />
          <h2 className="text-2xl font-semibold text-center text-gray-900 mb-4">
            Upload Plant Image
          </h2>
          <div className="space-y-4">
            <input
              type="file"
              accept="image/*"
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-400"
              onChange={handleImageChange}
            />
            <button
              className="w-full py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition flex items-center justify-center"
              onClick={handleDetectClick}
              disabled={loading}
            >
              {loading ? (
                <FaSpinner className="animate-spin mr-2" />
              ) : (
                "Detect Now"
              )}
            </button>
          </div>

          <div className="mt-4 flex flex-col items-center overflow-hidden transition-height duration-300">
            {imageSrc && (
              <img
                src={imageSrc}
                alt="Uploaded"
                className="rounded-lg shadow max-w-full object-contain border"
                style={{ maxHeight: "400px" }}
              />
            )}
            {prediction && (
              <div className="mt-6 text-center text-lg font-semibold text-gray-800">
                Prediction: <span className="text-green-500">{prediction}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default CropDisease;
