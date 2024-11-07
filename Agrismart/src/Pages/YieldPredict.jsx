import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Image from "../assets/YieldPredict.png";
import { useAuth } from "../store/AuthContext";

function YieldPredict() {
  const navigate = useNavigate();
  const location = useLocation();
  const pathSegments = location.pathname.split("/");
  const currentPage = pathSegments[pathSegments.length - 1] || "/";
  const { baseURL } = useAuth();
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
        <div className="container py-5">
          <div className="row">
            <div className="col">
              <nav
                aria-label="breadcrumb"
                className="bg-body-tertiary rounded-3 p-3 "
                style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
              >
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <a href="#" onClick={handleNavigate} title="Go back">
                      Home
                    </a>
                  </li>
                  <li className="breadcrumb-item">{currentPage}</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-15">
            <div
              className="mt-2 border rounded-5 p-4"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}
            >
              <h1 className="text-center mb-4 text-success">
                Yield Prediction System
              </h1>
              <form onSubmit={handleSubmit} className="mt-5">
                <div className="row mb-3 fw-semibold fs-5">
                  <div className="col-md-6">
                    <label htmlFor="crop" className="form-label">
                      Crop
                    </label>
                    <select
                      className="form-control"
                      id="crop"
                      name="crop"
                      value={inputValue.crop}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select a crop</option>
                      <option value="Arecanut">Arecanut</option>
                      <option value="Arhar/Tur">Arhar/Tur</option>
                      <option value="Castor seed">Castor seed</option>
                      <option value="Coconut">Coconut</option>
                      <option value="Cotton(lint)">Cotton(lint)</option>
                      <option value="Dry chillies">Dry chillies</option>
                      <option value="Gram">Gram</option>
                      <option value="Jute">Jute</option>
                      <option value="Linseed">Linseed</option>
                      <option value="Maize">Maize</option>
                      <option value="Mesta">Mesta</option>
                      <option value="Niger seed">Niger seed</option>
                      <option value="Onion">Onion</option>
                      <option value="Other Rabi pulses">
                        Other Rabi pulses
                      </option>
                      <option value="Potato">Potato</option>
                      <option value="Rapeseed &Mustard">
                        Rapeseed &Mustard
                      </option>
                      <option value="Rice">Rice</option>
                      <option value="Sesamum">Sesamum</option>
                      <option value="Small millets">Small millets</option>
                      <option value="Sugarcane">Sugarcane</option>
                      <option value="Sweet potato">Sweet potato</option>
                      <option value="Tapioca">Tapioca</option>
                      <option value="Tobacco">Tobacco</option>
                      <option value="Turmeric">Turmeric</option>
                      <option value="Wheat">Wheat</option>
                      <option value="Bajra">Bajra</option>
                      <option value="Black pepper">Black pepper</option>
                      <option value="Cardamom">Cardamom</option>
                      <option value="Coriander">Coriander</option>
                      <option value="Garlic">Garlic</option>
                      <option value="Ginger">Ginger</option>
                      <option value="Groundnut">Groundnut</option>
                      <option value="Horse-gram">Horse-gram</option>
                      <option value="Jowar">Jowar</option>
                      <option value="Ragi">Ragi</option>
                      <option value="Cashewnut">Cashewnut</option>
                      <option value="Banana">Banana</option>
                      <option value="Soyabean">Soyabean</option>
                      <option value="Barley">Barley</option>
                      <option value="Khesari">Khesari</option>
                      <option value="Masoor">Masoor</option>
                      <option value="Moong(Green Gram)">
                        Moong(Green Gram)
                      </option>
                      <option value="Other Kharif pulses">
                        Other Kharif pulses
                      </option>
                      <option value="Safflower">Safflower</option>
                      <option value="Sannhamp">Sannhamp</option>
                      <option value="Sunflower">Sunflower</option>
                      <option value="Urad">Urad</option>
                      <option value="Peas & beans (Pulses)">
                        Peas & beans (Pulses)
                      </option>
                      <option value="other oilseeds">other oilseeds</option>
                      <option value="Other Cereals">Other Cereals</option>
                      <option value="Cowpea(Lobia)">Cowpea(Lobia)</option>
                      <option value="Oilseeds total">Oilseeds total</option>
                      <option value="Guar seed">Guar seed</option>
                      <option value="Other Summer Pulses">
                        Other Summer Pulses
                      </option>
                      <option value="Moth">Moth</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="season" className="form-label">
                      Season
                    </label>
                    <select
                      className="form-control"
                      id="season"
                      name="season"
                      value={inputValue.season}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select a season</option>
                      <option value="Whole Year ">Whole Year</option>
                      <option value="Kharif     ">Kharif</option>
                      <option value="Rabi       ">Rabi</option>
                      <option value="Autumn     ">Autumn</option>
                      <option value="Summer     ">Summer</option>
                      <option value="Winter     ">Winter</option>
                    </select>
                  </div>
                </div>
                <div className="row mb-3 fw-semibold fs-5">
                  <div className="col-md-6">
                    <label htmlFor="state" className="form-label">
                      State
                    </label>
                    <select
                      className="form-control"
                      id="state"
                      name="state"
                      value={inputValue.state}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select your state</option>
                      <option value="Assam">Assam</option>
                      <option value="Karnataka">Karnataka</option>
                      <option value="Kerala">Kerala</option>
                      <option value="Meghalaya">Meghalaya</option>
                      <option value="West Bengal">West Bengal</option>
                      <option value="Puducherry">Puducherry</option>
                      <option value="Goa">Goa</option>
                      <option value="Andhra Pradesh">Andhra Pradesh</option>
                      <option value="Tamil Nadu">Tamil Nadu</option>
                      <option value="Odisha">Odisha</option>
                      <option value="Bihar">Bihar</option>
                      <option value="Gujarat">Gujarat</option>
                      <option value="Madhya Pradesh">Madhya Pradesh</option>
                      <option value="Maharashtra">Maharashtra</option>
                      <option value="Mizoram">Mizoram</option>
                      <option value="Punjab">Punjab</option>
                      <option value="Uttar Pradesh">Uttar Pradesh</option>
                      <option value="Haryana">Haryana</option>
                      <option value="Himachal Pradesh">Himachal Pradesh</option>
                      <option value="Tripura">Tripura</option>
                      <option value="Nagaland">Nagaland</option>
                      <option value="Chhattisgarh">Chhattisgarh</option>
                      <option value="Uttarakhand">Uttarakhand</option>
                      <option value="Jharkhand">Jharkhand</option>
                      <option value="Delhi">Delhi</option>
                      <option value="Manipur">Manipur</option>
                      <option value="Jammu and Kashmir">
                        Jammu and Kashmir
                      </option>
                      <option value="Telangana">Telangana</option>
                      <option value="Arunachal Pradesh">
                        Arunachal Pradesh
                      </option>
                      <option value="Sikkim">Sikkim</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="area" className="form-label">
                      Area
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="area"
                      name="area"
                      placeholder="Enter field area"
                      value={inputValue.area}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div className="row mb-3 fw-semibold fs-5 ">
                  <div className="col-md-6">
                    <label htmlFor="production" className="form-label">
                      Production
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="production"
                      name="production"
                      placeholder="Enter production"
                      value={inputValue.production}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="rainfall" className="form-label">
                      Rainfall
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      className="form-control"
                      id="rainfall"
                      name="rainfall"
                      placeholder="Enter rainfall in mm"
                      value={inputValue.rainfall}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div className="row mb-3 fw-semibold fs-5">
                  <div className="col-md-6">
                    <label htmlFor="fertilizer" className="form-label">
                      Fertilizer
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="fertilizer"
                      name="fertilizer"
                      placeholder="Enter fertilizer"
                      value={inputValue.fertilizer}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="pesticides" className="form-label">
                      Pesticides
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      className="form-control"
                      id="pesticides"
                      name="pesticides"
                      placeholder="Enter pesticides in tonnes"
                      value={inputValue.pesticides}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div className="mt-5 text-center">
                  <button type="submit" className="btn btn-primary fs-4">
                    Predict Now
                  </button>
                </div>
              </form>

              {prediction && (
                <div className="mt-4 text-center">
                  <h2 className="text-danger">
                    Prediction: <span className="text-info">{prediction}</span>
                  </h2>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default YieldPredict;
