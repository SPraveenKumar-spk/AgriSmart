import Navbar from "./Navbar";
import Image from "../assets/hero.png";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <>
      <Navbar />
      <section className=" p-5">
        <div className="d-flex justify-content-around flex-wrap">
          <div>
            <img className="img-fluid" src={Image} alt="image " />
          </div>
          <div className="mt-5">
            <h1 className="text-center " style={{ color: "purple" }}>
              Growing together,
              <br />
              one smart solution at a time.
            </h1>
            <div className="text-center">
              <NavLink to="/main">
                <button className="mt-4 btn btn-outline-primary p-3 fs-3  rounded rounded-5 ">
                  Get Started
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;
