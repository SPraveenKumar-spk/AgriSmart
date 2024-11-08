import { useState } from "react";
import Image from "../assets/disease.jpg";
import { FaSpinner } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../store/AuthContext";

function CropDiseaseDetection() {
  const [imageSrc, setImageSrc] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const pathSegments = location.pathname.split("/");
  const currentPage = pathSegments[pathSegments.length - 1] || "/";

  const { baseURL } = useAuth();
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDetectClick = async () => {
    if (!imageSrc) return;
    setLoading(true);

    const byteString = atob(imageSrc.split(",")[1]);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const intArray = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      intArray[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([intArray], { type: "image/jpeg" });

    const formData = new FormData();
    formData.append("image", blob, imageSrc);
    // formData.append("image", imageSrc);

    try {
      const response = await fetch(`${baseURL}/api/cropdisease`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to send image to backend");
      }

      const result = await response.json();
      console.log("Detection result:", result);
      // Handle result as needed
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
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
                class="bg-body-tertiary rounded-3 p-3 mb-4"
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
        <div className="container-fluid d-flex align-items-center justify-content-center">
          <div className="position-relative p-5 border border-3 rounded-5 bg-transparent shadow-sm">
            <div className="col text-center">
              <h2 className="mb-4">Upload Plant Image</h2>

              <div className="d-flex flex-wrap justify-content-between gap-5 align-items-center mb-4">
                <div>
                  <input
                    type="file"
                    accept="image/*"
                    className="form-control w-100"
                    onChange={handleImageChange}
                  />
                </div>
                <div>
                  <button
                    className="btn btn-primary fs-5"
                    onClick={handleDetectClick}
                    disabled={loading}
                  >
                    Detect Now
                  </button>
                </div>
              </div>

              <div className="position-relative">
                {loading && (
                  <div
                    className="text-light position-absolute top-50 start-50 translate-middle d-flex flex-column align-items-center"
                    style={{ zIndex: 10 }}
                  >
                    <FaSpinner className="loader" size="50" />
                    <p className="text-light mt-2 fs-5">Detecting...</p>
                  </div>
                )}
                {imageSrc && (
                  <img
                    src={imageSrc}
                    alt="Uploaded"
                    className="img-fluid rounded"
                    style={{
                      maxHeight: "400px",
                      width: "auto",
                      filter: loading ? "brightness(0.7) blur(3px)" : "none",
                    }}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CropDiseaseDetection;
