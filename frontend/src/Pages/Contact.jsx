import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <>
      <Header />
      <main className="pt-20 py-10 bg-gray-100 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
          Contact Us
        </h2>
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <p className="text-gray-600 mb-6">
            Have questions or need assistance? Reach out to us!
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <FaPhone className="text-green-600 text-3xl mb-2" />
              <h3 className="text-xl font-semibold">Phone</h3>
              <p className="text-gray-600">+91 98765 43210</p>
            </div>
            <div className="flex flex-col items-center">
              <FaEnvelope className="text-green-600 text-3xl mb-2" />
              <h3 className="text-xl font-semibold">Email</h3>
              <p className="text-gray-600">support@agrismart.com</p>
            </div>
            <div className="flex flex-col items-center">
              <FaMapMarkerAlt className="text-green-600 text-3xl mb-2" />
              <h3 className="text-xl font-semibold">Location</h3>
              <p className="text-gray-600">123 Agri Lane, Farm City, India</p>
            </div>
          </div>
          <form className="mt-8 text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full mt-4 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>
            <button
              type="submit"
              className="mt-4 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-md shadow-md transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Contact;
