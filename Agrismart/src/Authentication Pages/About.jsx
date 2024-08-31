import cropImg from "../assets/crop.jpeg";
import fertilizerImg from "../assets/fertilizer2.png";
import yieldImg from "../assets/yield.jpg";
import diseaseImg from "../assets/disease.jpg";
import seedImg from "../assets/Seed.jpg";

const About = () => {
  return (
    <div className="container pt-5">
      <div className="text-center mb-5">
        <h1 className="display-4">About AgriSmart</h1>
        <p className="lead">
          AgriSmart is a cutting-edge smart agriculture system designed to
          enhance farm productivity and sustainability. Our platform offers a
          range of features to support modern agricultural practices.
        </p>
      </div>

      <div className="row mb-4">
        <div className="col-md-4 mb-4">
          <div className="card">
            <img
              src={cropImg}
              className="card-img-top"
              alt="Crop Recommendation"
            />
            <div className="card-body text-center">
              <h5 className="card-title">Crop Recommendation</h5>
              <p className="card-text">
                Our system analyzes soil conditions and historical data to
                recommend the best crops to grow for maximum yield and
                sustainability.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card">
            <img
              src={fertilizerImg}
              className="card-img-top"
              alt="Fertilizer Recommendation"
            />
            <div className="card-body text-center">
              <h5 className="card-title">Fertilizer Recommendation</h5>
              <p className="card-text">
                We provide precise fertilizer recommendations based on soil
                nutrients and crop requirements to ensure optimal growth.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card">
            <img
              src={yieldImg}
              className="card-img-top"
              alt="Yield Prediction"
            />
            <div className="card-body text-center">
              <h5 className="card-title">Yield Prediction</h5>
              <p className="card-text">
                Predictive analytics help forecast crop yields, allowing farmers
                to plan and manage their resources more effectively.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-md-4 mb-4">
          <div className="card">
            <img
              src={diseaseImg}
              className="card-img-top"
              alt="Crop Disease Detection"
            />
            <div className="card-body text-center">
              <h5 className="card-title">Crop Disease Detection</h5>
              <p className="card-text">
                Our system detects early signs of crop diseases using image
                analysis and provides actionable insights for treatment.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card">
            <img
              src={seedImg}
              className="card-img-top"
              alt="Seed Quality Detection"
            />
            <div className="card-body text-center">
              <h5 className="card-title">Seed Quality Detection</h5>
              <p className="card-text">
                Evaluate seed quality to ensure only the best seeds are used for
                planting, improving overall crop health and yield.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mb-5">
        <a href="/" className="btn btn-primary">
          Go Back to Home
        </a>
      </div>
    </div>
  );
};

export default About;
