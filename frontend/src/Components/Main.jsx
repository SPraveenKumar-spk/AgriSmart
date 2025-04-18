import { NavLink } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Crop from "../assets/Crop-Recommend.jpg";
import Fertilizer from "../assets/Fertilizer.avif";
import Disease from "../assets/Disease.jpg";
import Yield from "../assets/Yield.jpg";
import {
  FaCheckCircle,
  FaQuestionCircle,
  FaFlask,
  FaSeedling,
} from "react-icons/fa";

function Main() {
  const features = [
    {
      img: Crop,
      title: "Crop Recommendation System",
      description:
        "Leverage AI and data analytics to get accurate crop suggestions based on soil quality, climate conditions, and historical trends. Helps farmers reduce risks, maximize yields, and make informed decisions.",
      link1: "/croprecommend",
      link2: "/knowcrop",
      btn1: "Predict Now",
      btn2: "Learn More",
      color: "bg-white",
      icon: <FaSeedling className="text-green-500 text-2xl" />,
      additionalInfo: [
        "Optimizes crop selection based on soil composition.",
        "Considers climate variability for resilient farming.",
        "Reduces water consumption by recommending suitable crops.",
      ],
    },
    {
      img: Fertilizer,
      title: "Fertilizer Recommendation",
      description:
        "Optimize fertilizer usage with AI-driven recommendations tailored to your soil and crop needs. Reduce wastage, improve soil fertility, and enhance sustainability with precision farming.",
      link1: "/fertilizerrecommend",
      link2: "/knowfertilizer",
      btn1: "Get Recommendations",
      btn2: "Learn More",
      color: "bg-white",
      icon: <FaFlask className="text-yellow-500 text-2xl" />,
      additionalInfo: [
        "Tailored fertilizer plans for different growth stages.",
        "Minimizes environmental impact through precision.",
        "Improves soil health and nutrient retention.",
      ],
    },
    {
      img: Disease,
      title: "Crop Disease Detection",
      description:
        "Early detection is key! Upload images of affected crops and get instant AI-based diagnosis along with actionable treatment suggestions. Prevent the spread of diseases and protect your harvest.",
      link1: "/cropdisease",
      link2: "/knowdisease",
      btn1: "Detect Now",
      btn2: "Learn More",
      color: "bg-white",
      icon: <FaQuestionCircle className="text-red-500 text-2xl" />,
      additionalInfo: [
        "Rapid AI-based disease diagnosis.",
        "Suggests eco-friendly treatment alternatives.",
        "Protects crops from widespread outbreaks.",
      ],
    },
    {
      img: Yield,
      title: "Yield Prediction",
      description:
        "Predict future crop yields with high accuracy using advanced machine learning models. Analyze historical data, weather patterns, and soil conditions to make strategic farming decisions.",
      link1: "/yieldpredict",
      link2: "/knowyield",
      btn1: "Predict Now",
      btn2: "Learn More",
      color: "bg-white",
      icon: <FaCheckCircle className="text-purple-500 text-2xl" />,
      additionalInfo: [
        "Accurate yield forecasts for better planning.",
        "Optimizes resource allocation based on predictions.",
        "Supports strategic decision-making in farming.",
      ],
    },
  ];

  return (
    <>
      <Header />
      <section className="pt-20  w-full ">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-8  p-12 rounded-lg shadow-md ${
              feature.color
            } transition-all duration-300 hover:shadow-lg ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="w-full md:w-1/2  sm:p-6">
              <img
                className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 w-full h-40 md:h-[64] lg:h-[64]  sm:h-90 object-cover"
                src={feature.img}
                alt={feature.title}
              />
            </div>
            <div className="text-center md:text-left md:w-1/2 sm:p-6">
              <div className="flex items-center justify-center md:justify-start mb-4">
                {feature.icon}
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 ml-2">
                  {feature.title}
                </h2>
              </div>

              <p className="mt-4 text-gray-700 leading-relaxed">
                {feature.description}
              </p>
              <ul className="mt-4 text-gray-600">
                {feature.additionalInfo.map((info, i) => (
                  <li key={i} className="flex items-center mb-2">
                    <svg
                      className="w-5 h-5 mr-2 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    {info}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row justify-center items-center md:justify-start gap-4 mt-6">
                <NavLink
                  to={feature.link1}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition w-full sm:w-auto"
                >
                  {feature.btn1}
                </NavLink>
                <NavLink
                  to={feature.link2}
                  className="px-6 py-3 border border-gray-400 text-gray-700 rounded-lg hover:bg-gray-100 transition w-full sm:w-auto"
                >
                  {feature.btn2}
                </NavLink>
              </div>
            </div>
          </div>
        ))}
      </section>
      <Footer />
    </>
  );
}

export default Main;
