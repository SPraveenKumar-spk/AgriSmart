import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../store/AuthContext";
import { toast, Toaster } from "react-hot-toast";
import Header from "../Header";
import Breadcrumbs from "../BreadCrumbs";

function YieldPredict() {
  const navigate = useNavigate();
  const location = useLocation();
  const { baseURL } = useAuth();
  const pathSegments = location.pathname.split("/");
  const currentPage = pathSegments[pathSegments.length - 1] || "/";

  const [inputValue, setInputValues] = useState({
    state: "",
    crop: "",
    rainfall: "",
    pesticides: "",
    season: "",
    area: "",
    production: "",
    fertilizer: "",
  });

  const [prediction, setPrediction] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValue, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`${baseURL}/api/yield`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputValue),
      });

      if (response.ok) {
        const predictionData = await response.json();
        setPrediction(predictionData.yield);
      } else {
        toast.error("Something went wrong. Please check your inputs.");
      }
    } catch (error) {
      console.error("Error fetching prediction:", error);
      toast.error("Failed to connect to the server.");
    }
  };

  const cropOptions = [
    "Arecanut",
    "Arhar/Tur",
    "Castor seed",
    "Coconut",
    "Cotton(lint)",
    "Dry chillies",
    "Gram",
    "Jute",
    "Linseed",
    "Maize",
    "Mesta",
    "Niger seed",
    "Onion",
    "Other Rabi pulses",
    "Potato",
    "Rapeseed &Mustard",
    "Rice",
    "Sesamum",
    "Small millets",
    "Sugarcane",
    "Sweet potato",
    "Tapioca",
    "Tobacco",
    "Turmeric",
    "Wheat",
    "Bajra",
    "Black pepper",
    "Cardamom",
    "Coriander",
    "Garlic",
    "Ginger",
    "Groundnut",
    "Horse-gram",
    "Jowar",
    "Ragi",
    "Cashewnut",
    "Banana",
    "Soyabean",
    "Barley",
    "Khesari",
    "Masoor",
    "Moong(Green Gram)",
    "Other Kharif pulses",
    "Safflower",
    "Sannhamp",
    "Sunflower",
    "Urad",
    "Peas & beans (Pulses)",
    "other oilseeds",
    "Other Cereals",
    "Cowpea(Lobia)",
    "Oilseeds total",
    "Guar seed",
    "Other Summer Pulses",
    "Moth",
  ];

  const seasonOptions = [
    "Whole Year     ",
    "Kharif     ",
    "Rabi     ",
    "Autumn     ",
    "Summer     ",
    "Winter     ",
  ];

  const stateOptions = [
    "Assam",
    "Karnataka",
    "Kerala",
    "Meghalaya",
    "West Bengal",
    "Puducherry",
    "Goa",
    "Andhra Pradesh",
    "Tamil Nadu",
    "Odisha",
    "Bihar",
    "Gujarat",
    "Madhya Pradesh",
    "Maharashtra",
    "Mizoram",
    "Punjab",
    "Uttar Pradesh",
    "Haryana",
    "Himachal Pradesh",
    "Tripura",
    "Nagaland",
    "Chhattisgarh",
    "Uttarakhand",
    "Jharkhand",
    "Delhi",
    "Manipur",
    "Jammu and Kashmir",
    "Telangana",
    "Arunachal Pradesh",
    "Sikkim",
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-green-100 via-blue-100 to-purple-100 py-12 pt-20">
        <Toaster position="top-center" reverseOrder={false} />
        <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-xl overflow-hidden">
          <div className="px-4 py-5 sm:p-6">
            <Breadcrumbs />
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
              Yield Prediction System
            </h1>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Dropdown
                  label="State"
                  name="state"
                  options={stateOptions}
                  value={inputValue.state}
                  onChange={handleInputChange}
                />
                <Dropdown
                  label="Crop"
                  name="crop"
                  options={cropOptions}
                  value={inputValue.crop}
                  onChange={handleInputChange}
                />
              </div>

              <Dropdown
                label="Season"
                name="season"
                options={seasonOptions}
                value={inputValue.season}
                onChange={handleInputChange}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <TextInput
                  label="Area"
                  name="area"
                  value={inputValue.area}
                  onChange={handleInputChange}
                />
                <TextInput
                  label="Production"
                  name="production"
                  value={inputValue.production}
                  onChange={handleInputChange}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <TextInput
                  label="Rainfall (mm)"
                  name="rainfall"
                  type="number"
                  value={inputValue.rainfall}
                  onChange={handleInputChange}
                />
                <TextInput
                  label="Fertilizer"
                  name="fertilizer"
                  value={inputValue.fertilizer}
                  onChange={handleInputChange}
                />
              </div>

              <TextInput
                label="Pesticides (Tonnes)"
                name="pesticides"
                type="number"
                value={inputValue.pesticides}
                onChange={handleInputChange}
              />

              <div className="text-center">
                <button
                  type="submit"
                  className="inline-flex items-center px-6 py-2 rounded-lg shadow-md text-white bg-blue-600 hover:bg-blue-700 text-base font-medium transition duration-300 ease-in-out"
                >
                  Predict Now
                </button>
              </div>
            </form>

            {prediction && (
              <div className="mt-8 text-center">
                <h2 className="text-xl font-semibold text-gray-800">
                  Prediction:{" "}
                  <span className="text-green-600 font-bold">{prediction}</span>
                </h2>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

function TextInput({ label, name, value, onChange, type = "text" }) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required
        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm"
      />
    </div>
  );
}

function Dropdown({ label, name, options, value, onChange }) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required
        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm"
      >
        <option value="">Select {label}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}

export default YieldPredict;
