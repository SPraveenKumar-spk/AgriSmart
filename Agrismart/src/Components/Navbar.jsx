import { NavLink } from "react-router-dom";

function Navbar() {
  const scrollFooter = () => {
    const footer = document.getElementById("footer");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light position-fixed top-0 w-100">
        <div className="container-fluid ms-2">
          <a className="navbar-brand fs-2 fw-bold text-info ms-5" href="/">
            AgriSmart
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto me-5 mb-2 fs-4  fw-semibold  mb-lg-0 text-center">
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={scrollFooter}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
