import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Authentication Pages/About";
import Error from "./Authentication Pages/Error";
import Main from "./Components/Main";
import CropRecommend from "./Pages/CropRecommend";
import FertilizerRecommend from "./Pages/FertilizerRecommend";
import YieldPredict from "./Pages/YieldPredict";
import CropDiseaseDetection from "./Pages/CropDiseaseDetection";
import KnowCrop from "./Pages/KnowMore/KnowCrop";
import KnowYield from "./Pages/KnowMore/KnowYield";
import KnowFertilizer from "./Pages/KnowMore/KnowFertilizer";
import KnowDisease from "./Pages/KnowMore/KnowDisease";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {" "}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/main" element={<Main />} />
          <Route path="/croprecommend" element={<CropRecommend />} />
          <Route
            path="/fertilizerrecommend"
            element={<FertilizerRecommend />}
          />
          <Route path="/yieldpredict" element={<YieldPredict />} />
          <Route path="/cropdisease" element={<CropDiseaseDetection />} />
          <Route path="/knowcrop" element={<KnowCrop />} />
          <Route path="/knowfertilizer" element={<KnowFertilizer />} />
          <Route path="/knowyield" element={<KnowYield />} />
          <Route path="/knowdisease" element={<KnowDisease />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
