import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Components/Main";
import CropRecommend from "./Pages/CropRecommend";
import FertilizerRecommend from "./Pages/FertilizerRecommend";
import YieldPredict from "./Pages/YieldPredict";
import CropDiseaseDetection from "./Pages/CropDiseaseDetection";
import Login from "./Authentication Pages/Login";
import Home from "./Components/Home";
import ProtectedRoutes from "./Components/ProtectedRoutes";
import About from "./Authentication Pages/About";
import Error from "./Authentication Pages/Error";
import Logout from "./Authentication Pages/Logout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedRoutes />}>
            {" "}
            <Route path="/main" element={<Main />} />
            <Route path="/croprecommend" element={<CropRecommend />} />
            <Route
              path="/fertilizerrecommend"
              element={<FertilizerRecommend />}
            />
            <Route path="/yieldpredict" element={<YieldPredict />} />
            <Route path="/cropdisease" element={<CropDiseaseDetection />} />
          </Route>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
