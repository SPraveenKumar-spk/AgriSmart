import { useAuth } from "../store/AuthContext";
function Navbar() {
  const { isLoggedIn } = useAuth();
  // const isLoggedIn = true;
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <div className="container-fluid ms-2">
          <a className="navbar-brand fs-2 fw-bold text-info" href="/">
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
            <ul className="navbar-nav ms-auto me-5 mb-2 fs-5 fw mb-lg-0 ">
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
              {isLoggedIn ? (
                <li className="nav-item pe-3">
                  <a className="nav-link active" href="/logout">
                    Logout
                  </a>
                </li>
              ) : (
                <>
                  <li className="nav-item pe-3">
                    <a className="nav-link active" href="/login">
                      Sign In
                    </a>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
