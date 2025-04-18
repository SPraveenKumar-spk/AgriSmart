import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">AgriSmart</h3>
            <p className="text-sm">
              Empowering farmers with AI-driven insights for better crop yield
              and sustainability.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-3 text-center">
              Quick Links
            </h3>
            <ul className="space-y-2 text-center">
              <li>
                <a href="#features" className="hover:text-green-400">
                  Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-green-400">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-green-400">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-green-400">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-3">Follow Us</h3>
            <div className="flex justify-center space-x-4 ">
              <a
                href="#"
                className="text-gray-400 hover:text-green-400 text-2xl "
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-green-400 text-2xl"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-green-400 text-2xl"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-green-400 text-2xl"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-8 text-sm border-t border-gray-700 pt-4">
          &copy; {new Date().getFullYear()} AgriSmart. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
