import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Image from "../assets/FertilizerRecommend.png";
function FertilizerRecommend() {
  const navigate = useNavigate();
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValue, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`${baseURL}/api/fertilizer`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
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

  const handleNavigate = () => {
    navigate(-1);
  };

  return (
    <div
      className="container-fluid d-flex align-items-center justify-content-center"
      style={{
        backgroundImage: `url(${Image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <div className="d-flex flex-column">
        <div class="container py-5">
          <div class="row">
            <div class="col">
              <nav
                aria-label="breadcrumb"
                class="bg-body-tertiary rounded-3 p-3 mb-4"
              >
                <ol class="breadcrumb mb-0">
                  <li class="breadcrumb-item">
                    <a href="#" onClick={handleNavigate} title="Go back">
                      Home
                    </a>
                  </li>
                  <li class="breadcrumb-item">
                    <a href="">User</a>
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
        <div className="mt-2 border  rounded-5 p-4">
          <h1 className="text-center mb-4 " style={{ color: "purple" }}>
            Fertilizer Recommendation System
          </h1>
          <form onSubmit={handleSubmit} className="mt-5">
            <div className="row fw-semibold fs-5">
              <div className="col-md-4 mb-3">
                <label htmlFor="temperature">Temperature</label>
                <input
                  type="number"
                  id="temperature"
                  name="temperature"
                  placeholder="Enter Temperature in °C"
                  className="form-control"
                  value={inputValue.temperature}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="humidity">Humidity</label>
                <input
                  type="number"
                  id="humidity"
                  name="humidity"
                  placeholder="Enter Humidity in %"
                  className="form-control"
                  value={inputValue.humidity}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="moisture">Moisture</label>
                <input
                  type="number"
                  id="moisture"
                  name="moisture"
                  placeholder="Enter Moisture"
                  className="form-control"
                  value={inputValue.moisture}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="row fw-semibold fs-5">
              <div className="col-md-4 mb-3">
                <label htmlFor="soil">Soil Type</label>
                <select
                  className="form-control"
                  id="soil"
                  name="soil"
                  onChange={handleInputChange}
                  value={inputValue.soil}
                  required
                >
                  <option value="">Select Soil Type</option>
                  <option value="Sandy">Sandy</option>
                  <option value="Loamy">Loamy</option>
                  <option value="Black">Black</option>
                  <option value="Red">Red</option>
                  <option value="Clayey">Clayey</option>
                </select>
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="crop">Crop Type</label>
                <select
                  className="form-control"
                  id="crop"
                  name="crop"
                  onChange={handleInputChange}
                  value={inputValue.crop}
                  required
                >
                  <option value="">Select a crop</option>
                  <option value="Maize">Maize</option>
                  <option value="Sugarcane">Sugarcane</option>
                  <option value="Cotton">Cotton</option>
                  <option value="Tobacco">Tobacco</option>
                  <option value="Barley">Barley</option>
                  <option value="Wheat">Wheat</option>
                  <option value="Millets">Millets</option>
                  <option value="Oil seeds">Oil seeds</option>
                  <option value="Pulses">Pulses</option>
                  <option value="Ground Nuts">Ground Nuts</option>
                </select>
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="nitrogen">Nitrogen</label>
                <input
                  type="number"
                  id="nitrogen"
                  name="nitrogen"
                  placeholder="Enter Nitrogen"
                  className="form-control"
                  value={inputValue.nitrogen}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="row fw-semibold fs-5">
              <div className="col-md-4 mb-3">
                <label htmlFor="potassium">Potassium</label>
                <input
                  type="number"
                  id="potassium"
                  name="potassium"
                  placeholder="Enter Potassium"
                  className="form-control"
                  value={inputValue.potassium}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="phosphorous">Phosphorus</label>
                <input
                  type="number"
                  id="phosphorous"
                  name="phosphorous"
                  placeholder="Enter Phosphorus"
                  className="form-control"
                  value={inputValue.phosphorous}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="row mt-4">
              <div className="col-md-12 d-flex justify-content-center">
                <button type="submit" className="btn btn-primary btn-lg">
                  Predict Now
                </button>
              </div>
            </div>
          </form>

          <div className="mt-4 text-center">
            {prediction && (
              <h2 className="text-danger">
                Prediction: <span className="text-success">{prediction}</span>
              </h2>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FertilizerRecommend;
