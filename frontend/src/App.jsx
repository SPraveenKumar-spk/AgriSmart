import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./Pages/About";
import SignIn from "./Pages/Authentication/SignIn";
import Signup from "./Pages/Authentication/Signup";
import Error from "./Pages/Error";
import CropRecommend from "./Components/PredictionPages/CropRecommend";
import FertilizerRecommend from "./Components/PredictionPages/FertilizerRecommend";
import YieldPredict from "./Components/PredictionPages/YieldPredict";
import CropDisease from "./Components/PredictionPages/CropDisease";
import KnowCrop from "./Components/PredictionPages/KnowMore/KnowCrop";
import KnowYield from "./Components/PredictionPages/KnowMore/KnowYield";
import KnowFertilizer from "./Components/PredictionPages/KnowMore/KnowFertilizer";
import KnowDisease from "./Components/PredictionPages/KnowMore/KnowDisease";
import Contact from "./Pages/Contact";
import Main from "./Components/Main";
import Logout from "./Pages/Logout";
import ForgotPassword from "./Pages/Authentication/ForgotPassword";
import PasswordReset from "./Pages/Authentication/PasswordReset";
import ProtectedRoutes from "./Components/ProtectedRoutes";
import Profile from "./Pages/UserProfile";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedRoutes />}>
            {" "}
            <Route path="/logout" element={<Logout />} />
            <Route path="/main" element={<Main />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/croprecommend" element={<CropRecommend />} />
            <Route
              path="/fertilizerrecommend"
              element={<FertilizerRecommend />}
            />
            <Route path="/yieldpredict" element={<YieldPredict />} />
            <Route path="/cropdisease" element={<CropDisease />} />
            <Route path="/knowcrop" element={<KnowCrop />} />
            <Route path="/knowfertilizer" element={<KnowFertilizer />} />
            <Route path="/knowyield" element={<KnowYield />} />
            <Route path="/knowdisease" element={<KnowDisease />} />
          </Route>{" "}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/resetpassword" element={<PasswordReset />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
