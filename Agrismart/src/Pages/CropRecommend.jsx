import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
function CropRecommend() {
  const navigate = useNavigate();
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
      const response = await fetch(`https://agrismart-new.onrender.com/api/croprecommend`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputValue),
      });
      if (response.ok) {
        const predictionData = await response.json();
        setPrediction(predictionData.crop);
      }
    } catch (error) {
      console.error("Error fetching prediction:", error);
    }
  };

  const handleNavigate = () => {
    navigate(-1);
  };
  return (
    <>
      <div
        className="container-fluid d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: `url('https://i.pinimg.com/originals/65/0e/c5/650ec5e9d038ebf858befbcc2501bbb1.jpg')`,
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
                    {/* <li class="breadcrumb-item active" aria-current="page">
                      User Profile
                    </li> */}
                  </ol>
                </nav>
              </div>
            </div>
          </div>

          <div
            className="mt-1 border rounded-5 p-4"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.4)" }}
          >
            <h1 className="text-center mb-4 text-primary">
              Crop Recommendation System
            </h1>
            <form onSubmit={handleSubmit} style={{ color: "purple " }}>
              <div className="row  fs-5 ">
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
              </div>

              <div className="row mt-4 fw-semibold fs-5">
                <div className="col-md-4 mb-3">
                  <label htmlFor="temperature">Temperature</label>
                  <input
                    type="number"
                    step="0.01"
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
                    step="0.01"
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
                  <label htmlFor="ph">pH</label>
                  <input
                    type="number"
                    step="0.01"
                    id="ph"
                    name="ph"
                    placeholder="Enter pH value"
                    className="form-control"
                    value={inputValue.ph}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="row mt-4 fw-semibold fs-5">
                <div className="col-md-4 mb-3">
                  <label htmlFor="rainfall">Rainfall</label>
                  <input
                    type="number"
                    step="0.01"
                    id="rainfall"
                    name="rainfall"
                    placeholder="Enter Rainfall in mm"
                    className="form-control"
                    value={inputValue.rainfall}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="row mt-4">
                <div className="col-md-12 d-flex justify-content-center">
                  <button type="submit" className="btn btn-primary btn-lg">
                    Get Recommendation
                  </button>
                </div>
              </div>
            </form>

            {prediction && (
              <div className="mt-4 text-center">
                <h2>
                  Prediction: <span className="text-light">{prediction}</span>
                </h2>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default CropRecommend;
