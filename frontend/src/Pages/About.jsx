import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { FaSeedling, FaLightbulb, FaUsers, FaChartLine } from "react-icons/fa";

function About() {
  return (
    <>
      <Header />
      <main className="pt-30 py-16 bg-gray-100 text-center">
        <section className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            About AgriSmart
          </h1>
          <p className="text-lg text-gray-600 mb-10">
            AgriSmart is an AI-driven platform designed to help farmers maximize
            their crop yield, adopt sustainable farming practices, and stay
            updated with modern agricultural technologies.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <InfoCard
              icon={<FaSeedling />}
              title="Our Mission"
              description="Empowering farmers with AI insights to enhance productivity 
              and sustainability in agriculture."
            />
            <InfoCard
              icon={<FaLightbulb />}
              title="Smart Farming Solutions"
              description="We provide AI-powered crop recommendations, disease detection, 
              and yield prediction for efficient farming."
            />
            <InfoCard
              icon={<FaChartLine />}
              title="Government & Tech Integration"
              description="Stay informed about government agricultural schemes, 
              subsidies, and the latest in farming technology."
            />
            <InfoCard
              icon={<FaUsers />}
              title="Community & Support"
              description="Join a network of farmers, share experiences, and get 
              expert advice on best farming practices."
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

const InfoCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
      <div className="text-green-600 text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default About;
