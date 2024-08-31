import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { BsFillShieldLockFill, BsFillTelephoneFill } from "react-icons/bs";
import { ImSpinner9 } from "react-icons/im";
import OtpInput from "otp-input-react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Image from "../assets/OTPVerification.png";
import { firebaseAuth } from "../firebase/firebase.config";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { toast, Toaster } from "react-hot-toast";
import { useAuth } from "../store/AuthContext";

function Login() {
  const { storeToken } = useAuth();
  const [otp, setOtp] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [user, setuser] = useState("");
  const navigate = useNavigate();

  const onSignup = async () => {
    try {
      const recaptcha = new RecaptchaVerifier(firebaseAuth, "recaptcha", {});
      const formattedPhoneNumber = `+${phoneNumber}`;
      const confirmation = await signInWithPhoneNumber(
        firebaseAuth,
        formattedPhoneNumber,
        recaptcha
      );

      setuser(confirmation);
      setShowOTP(true);
    } catch (err) {
      console.log(err);
    }
  };

  const verifyOtp = async () => {
    try {
      setLoading(true);
      const data = await user.confirm(otp);
      toast.success("OTP verified successfully!");

      const response = await fetch(
        "https://agrismart-new.onrender.com/generate-token",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ phone_number: phoneNumber }),
        }
      );

      if (response.ok) {
        const result = await response.json();
        storeToken(result.token);
        navigate("/main");
      } else {
        toast.error("Internal server error");
        navigate("/login");
      }
    } catch (err) {
      console.log(err);
      toast.error("Invalid OTP");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <Toaster toastOptions={{ duration: 4000 }} />

          <NavLink
            className="fs-1 ms-3 p-2 text-light text-decoration-none"
            to="/"
          >
            AgriSmart.
          </NavLink>
        </div>
      </div>
      <section className="d-flex align-items-center justify-content-center vh-100">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-10 col-lg-8">
              <div className="card p-4 shadow-lg">
                <div className="row">
                  <div className="col-md-6 d-flex align-items-center">
                    <img
                      src={Image}
                      className="img-fluid"
                      alt="OTP Verification"
                    />
                  </div>

                  <div className="col-md-6">
                    <h1 className="text-center mb-4">Welcome to AgriSmart</h1>

                    {!showOTP ? (
                      <>
                        <div className="text-center text-primary mb-4">
                          <BsFillTelephoneFill
                            size={50}
                            className="bg-light p-2 rounded-circle"
                          />
                        </div>
                        <div className="text-center mb-4">
                          <label htmlFor="phone" className="form-label fs-5">
                            Enter your Phone Number
                          </label>
                        </div>
                        <div className="mb-4">
                          <PhoneInput
                            country={"in"}
                            value={phoneNumber}
                            onChange={setPhoneNumber}
                            inputClass="form-control w-100"
                          />
                        </div>
                        <div className="mb-2 d-flex justify-content-center">
                          {" "}
                          <div id="recaptcha"></div>
                        </div>

                        <div className="mb-4">
                          <button
                            className="btn btn-primary w-100"
                            onClick={onSignup}
                            disabled={loading}
                          >
                            {loading && (
                              <ImSpinner9 size={20} className="me-2 loader" />
                            )}
                            Send Code via SMS
                          </button>
                        </div>
                        <div id="recaptcha-container"></div>
                      </>
                    ) : (
                      <>
                        <div className="text-center text-primary mb-4">
                          <BsFillShieldLockFill
                            size={50}
                            className="bg-light p-2 rounded-circle"
                          />
                        </div>
                        <div className="text-center mb-4">
                          <label htmlFor="otp" className="fs-2">
                            Enter your OTP
                          </label>
                        </div>
                        <div className="mb-4 ">
                          <OtpInput
                            value={otp}
                            onChange={setOtp}
                            OTPLength={6}
                            otpType="number"
                            disabled={false}
                            autoFocus
                            inputClass="form-control text-center fw-bold"
                            className="otp-container d-flex justify-content-center gap-2"
                          />
                        </div>
                        <div className="mb-4">
                          <button
                            className="btn btn-primary w-100"
                            disabled={loading}
                            onClick={verifyOtp}
                          >
                            {loading && (
                              <ImSpinner9 size={20} className="me-2 loader" />
                            )}
                            Verify OTP
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
