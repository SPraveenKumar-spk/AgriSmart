import Header from "./Components/Header";
import Footer from "./Components/Footer";
import HomeImage from "./assets/HomeImage.avif";
import {
  FaSeedling,
  FaTractor,
  FaLeaf,
  FaChartLine,
  FaCheckCircle,
  FaLightbulb,
  FaHandsHelping,
  FaRecycle,
  FaLeaf as FaLeafAlt,
  FaTools,
  FaMobileAlt,
  FaUsers,
  FaQuestionCircle,
  FaTemperatureLow,
} from "react-icons/fa";
import image1 from "./assets/testimonials/image1.png";
import image2 from "./assets/testimonials/image2.png";
import image3 from "./assets/testimonials/image3.png";
import image4 from "./assets/testimonials/image3.png";
import image5 from "./assets/testimonials/image3.png";
import image6 from "./assets/testimonials/image3.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { useState } from "react";

function Home() {
  const [openFAQ, setOpenFAQ] = useState(null);
  const testimonials = [
    {
      name: "Rajesh Kumar",
      message: "AgriSmart helped me increase my crop yield by 40%!",
      image: image1,
    },
    {
      name: "Anit Singh",
      message: "Early disease detection saved my entire season!",
      image: image4,
    },
    {
      name: "Vikram Patel",
      message: "Fertilizer recommendations reduced my costs by 30%.",
      image: image3,
    },
    {
      name: "Sunita Rao",
      message: "I now use the best seeds for a healthier harvest.",
      image: image2,
    },
    {
      name: "Amit Verma",
      message: "AI insights improved my farm's sustainability!",
      image: image6,
    },
    {
      name: "Priya Sharma",
      message: "Yield predictions helped me plan better for the market.",
      image: image5,
    },
  ];

  const faqs = [
    {
      question: "How does AgriSmart recommend crops?",
      answer:
        "AgriSmart uses AI to analyze soil and weather data to suggest the best crops for optimal yield.",
    },
    {
      question: "Can I use AgriSmart on my mobile phone?",
      answer:
        "Yes, AgriSmart is mobile-friendly and accessible via a web-based platform.",
    },
    {
      question: "How accurate is the disease detection feature?",
      answer:
        "AgriSmart employs advanced image processing and AI to detect diseases with high accuracy.",
    },
    {
      question: "Do I need technical knowledge to use AgriSmart?",
      answer:
        "No, AgriSmart is designed for farmers and requires no technical expertise to operate.",
    },
    {
      question: "How does AgriSmart help with sustainability?",
      answer:
        "The platform suggests eco-friendly farming practices and reduces excessive fertilizer and pesticide use.",
    },
  ];

  return (
    <>
      <Header />
      <main>
        <section>
          <div className=" pt-16">
            <img
              src={HomeImage}
              alt="Agricultural Landscape"
              className=" w-full h-full md:object-cover object-contain"
            />
          </div>

          <div className="absolute top-18 left-30 md:top-50 md:left-100  text-center  text-white  md:px-12">
            <h1 className=" md:text-6xl font-bold mb-4 leading-relaxed">
              Smart Farming for a Sustainable Future
            </h1>
            <p className="hidden md:block md:text-xl mb-6 max-w-2xl mx-auto opacity-80">
              Harness AI-driven insights to optimize crop growth, maximize
              yield, and ensure sustainable farming.
            </p>
            <a
              href="/main"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-3  md:py-3 md:px-6 rounded-full shadow-md transition duration-300"
            >
              Explore Features
            </a>
          </div>
        </section>
        <section id="features" className="py-8 bg-gray-100 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
            Key Features
          </h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
            <FeatureCard
              icon={<FaSeedling />}
              title="Crop Recommendation"
              description="Identify the best crops based on soil and weather conditions."
            />
            <FeatureCard
              icon={<FaTractor />}
              title="Fertilizer Recommendation"
              description="Get precise fertilizer suggestions for healthier crops."
            />
            <FeatureCard
              icon={<FaLeaf />}
              title="Crop Disease Detection"
              description="Detect diseases early using AI-driven image analysis."
            />
            <FeatureCard
              icon={<FaChartLine />}
              title="Yield Prediction"
              description="Forecast crop yields with advanced predictive analytics."
            />
            <FeatureCard
              icon={<FaUsers />}
              title="Government Schemes & Facilities"
              description="Stay updated on subsidies, loans, and other government initiatives for farmers."
            />
            <FeatureCard
              icon={<FaLightbulb />}
              title="Modern Farming Technologies"
              description="Learn about smart irrigation, precision agriculture, and the latest farming innovations."
            />
          </div>
        </section>

        <section id="how-it-works" className="py-16 bg-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
            How It Works
          </h2>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
            <StepCard
              icon={<FaLightbulb />}
              title="Analyze Soil & Weather"
              description="AgriSmart gathers soil and climate data to offer precise recommendations."
            />
            <StepCard
              icon={<FaLeaf />}
              title="Provide AI Recommendations"
              description="Using AI models, the system suggests crops, fertilizers, and preventive measures."
            />
            <StepCard
              icon={<FaChartLine />}
              title="Optimize & Grow"
              description="Farmers apply insights, leading to improved yield and sustainable farming."
            />
          </div>
        </section>

        <section id="benefits" className="py-16 bg-gray-100 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
            Benefits for Farmers
          </h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
            <BenefitCard
              icon={<FaHandsHelping />}
              title="Increased Productivity"
              description="Leverage AI-driven insights to maximize crop yield and efficiency."
            />
            <BenefitCard
              icon={<FaRecycle />}
              title="Sustainable Practices"
              description="Reduce chemical use and adopt eco-friendly farming techniques."
            />
            <BenefitCard
              icon={<FaLeafAlt />}
              title="Better Crop Health"
              description="Early disease detection and proper nutrition lead to healthier crops."
            />
          </div>
        </section>
        <section id="technology" className="py-16 bg-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
            Technology Behind AgriSmart
          </h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
            <TechCard
              icon={<FaLightbulb />}
              title="Artificial Intelligence & Machine Learning"
              description="AI and ML analyze vast datasets, providing farmers with accurate crop recommendations, disease detection, and yield predictions."
            />

            <TechCard
              icon={<FaLeaf />}
              title="Image Processing"
              description="Advanced image recognition detects crop diseases from leaf images, allowing for early intervention and better crop health."
            />

            <TechCard
              icon={<FaTools />}
              title="IoT & Smart Sensors"
              description="IoT devices monitor soil moisture, temperature, and nutrients in real-time, ensuring data-driven precision farming."
            />

            <TechCard
              icon={<FaChartLine />}
              title="Satellite & Weather Data"
              description="Integrating satellite imagery and weather forecasts helps farmers plan optimal planting and harvesting times."
            />

            <TechCard
              icon={<FaMobileAlt />}
              title="Mobile & Cloud Integration"
              description="AgriSmart is accessible via mobile apps and cloud-based dashboards, providing real-time insights on the go."
            />

            <TechCard
              icon={<FaUsers />}
              title="Farmer-Centric AI"
              description="A user-friendly AI assistant helps farmers make data-driven decisions without requiring technical expertise."
            />
          </div>
        </section>

        <section id="testimonials" className="py-10 bg-gray-100 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
            Testimonials & Success Stories
          </h2>
          <div className="max-w-5xl mx-auto">
            <Swiper
              loop={true}
              autoplay={{ delay: 3000, disableOnInteraction: true }}
              pagination={{ clickable: true }}
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              modules={[Pagination, Navigation, Autoplay]}
              className="px-6"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white p-6 rounded-lg shadow-xl border border-gray-200 flex flex-col items-center text-center transform hover:scale-105 transition duration-300">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-24 h-24 rounded-full border-4 border-green-500 shadow-md mb-4"
                    />
                    <h3 className="text-xl font-semibold text-gray-800">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-600 italic mt-2 px-4">
                      "{testimonial.message}"
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
        <section id="faq" className="pb-10 pt-5 bg-gray-100 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
            Frequently Asked Questions
          </h2>
          <div className="max-w-4xl mx-auto px-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="mb-4 border rounded-lg p-3 border-gray-300 pb-4"
              >
                <button
                  className="flex justify-between items-center w-full text-left text-lg font-medium text-gray-800 focus:outline-none py-2"
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                >
                  <span>{faq.question}</span>
                  <FaQuestionCircle
                    className={`text-green-600 transition-transform ${
                      openFAQ === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFAQ === index && (
                  <p className="text-gray-600 mt-2 text-left">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
      <div className="text-green-600 text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const StepCard = ({ icon, title, description }) => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
      <div className="text-green-600 text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const BenefitCard = ({ icon, title, description }) => {
  return (
    <div className="bg-green-100 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
      <div className="text-green-700 text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

const TechCard = ({ icon, title, description }) => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center text-center hover:shadow-xl transition duration-300">
      <div className="text-green-600 text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const FaqCard = ({ question, answer }) => {
  return (
    <div className="mb-6 border-b pb-4">
      <h3 className="text-xl font-semibold flex items-center">
        <FaQuestionCircle className="text-green-600 mr-2" /> {question}
      </h3>
      <p className="text-gray-600 mt-2">{answer}</p>
    </div>
  );
};

export default Home;
