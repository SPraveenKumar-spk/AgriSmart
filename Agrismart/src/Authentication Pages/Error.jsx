import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="text-center">
        <h1 className="display-1">404</h1>
        <p className="fs-3">Oops! The page you’re looking for doesn’t exist.</p>
        <Link to="/" className="btn btn-primary">
          Go back to Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
