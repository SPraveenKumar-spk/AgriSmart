import { useEffect, useState } from "react";
import {
  FaUserCircle,
  FaEdit,
  FaMapMarkerAlt,
  FaEnvelope,
  FaBriefcase,
  FaSpinner,
  FaExclamationTriangle,
  FaNewspaper,
  FaExternalLinkAlt,
  FaChartLine,
  FaLightbulb,
  FaLandmark,
  FaTools,
  FaLink,
  FaCloudSunRain,
  FaThermometerHalf,
  FaTint,
  FaWind,
  FaSeedling,
  FaSun,
  FaCloud,
  FaCloudShowersHeavy,
  FaSnowflake,
  FaBolt,
  FaSmog,
} from "react-icons/fa";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Image1 from "../assets/AgriNews/Image1.png";
import Image2 from "../assets/AgriNews/Image2.png";
import Image3 from "../assets/AgriNews/Image3.png";

const fakeUserData = {
  name: " Raman",
  email: "ram.r@myfarm.in",
  location: "Krishnan Kovil, Tamil Nadu",
  role: "Farmer",
  avatarUrl: null,
};

const fakeMarketPrices = {
  "Paddy (ADT 45)": "₹2300 / Quintal",
  "Coconut (Milling)": "₹2850 / Quintal",
  "Turmeric (Erode)": "₹15500 / Quintal",
  "Cotton (MCU-5)": "₹7100 / Quintal",
  "Groundnut (Kernel)": "₹8500 / Quintal",
  "Banana (Nendran)": "₹35 / Kg",
};

const fakeTips = [
  "Manage irrigation effectively, especially for paddy and sugarcane.",
  "Monitor for pests like stem borer in paddy and mealybug in cotton.",
  "Adopt intercropping techniques with coconut plantations.",
  "Utilize vermicompost to improve soil health.",
  "Follow TNAU (Tamil Nadu Agricultural University) advisories.",
];

const fakeSchemes = [
  {
    id: "scheme1",
    title: "PM Kisan Samman Nidhi",
    description: "Direct income support scheme for eligible farmer families.",
    url: "https://pmkisan.gov.in/",
  },
  {
    id: "scheme2",
    title: "PM Fasal Bima Yojana (PMFBY)",
    description:
      "Crop insurance scheme providing coverage against yield losses.",
    url: "https://pmfby.gov.in/",
  },
  {
    id: "scheme3",
    title: "Soil Health Card",
    description: "Scheme providing soil analysis and nutrient recommendations.",
    url: "https://soilhealth.dac.gov.in/",
  },
  {
    id: "scheme4",
    title: "National Agriculture Market (eNAM)",
    description: "Online trading platform connecting agricultural markets.",
    url: "https://www.enam.gov.in/web/",
  },
];

// Tools (Fake names, REAL Links where applicable)
const fakeTools = [
  {
    id: "tool1",
    name: "Check Mandi Prices (Agmarknet)",
    description: "View daily agricultural commodity prices.",
    url: "https://agmarknet.gov.in/",
  },
  {
    id: "tool2",
    name: "Weather Forecast (IMD)",
    description: "Access official weather forecasts and advisories.",
    url: "https://mausam.imd.gov.in/",
  },
  {
    id: "tool3",
    name: "TNAU AgriTech Portal", // Tamil Nadu specific resource
    description:
      "Resources and advisories from Tamil Nadu Agricultural University.",
    url: "https://agritech.tnau.ac.in/",
  },
  {
    id: "tool4",
    name: "Kisan Suvidha Portal",
    description: "Integrated platform for various farmer services.",
    url: "https://kisansuvidha.gov.in/",
  },
];

const fakeAgriNews = [
  {
    id: "news1",
    title: "TNAU advises on managing Fall Armyworm in Maize",
    snippet:
      "Integrated pest management strategies recommended for upcoming season.",
    source: "TNAU AgriTech",
    date: "2025-04-07", // Use current year for relevance
    url: "https://agritech.tnau.ac.in/", // Link to TNAU
    imageUrl: Image1,
  },
  {
    id: "news2",
    title: "Coconut prices stable in regional markets",
    snippet:
      "Prices remain steady due to consistent demand from copra processing units.",
    source: "Commodity Online",
    date: "2025-04-06",
    url: "#",
    imageUrl: Image2,
  },
  {
    id: "news3",
    title: "Micro-irrigation subsidy applications open",
    snippet:
      "State horticulture department invites applications for drip and sprinkler irrigation systems.",
    source: "TN Agri Dept",
    date: "2025-04-05",
    url: "#",
    imageUrl: Image3,
  },
];

const environmentLinks = {
  advisoryLink:
    "https://mausam.imd.gov.in/imd_latest/contents/agromet/advisory.php",
  sustainablePracticeLink:
    "https://mausam.imd.gov.in/imd_latest/contents/agromet/agromet-data/state/current/english-pdf/Tamil%20Nadu.pdf",
  tnDisasterPortal: "https://tnsdma.tn.gov.in/",
};

const CardLoading = ({ heightClass = "h-64" }) => (
  <div
    className={`flex justify-center items-center p-10 bg-gray-50 rounded-lg ${heightClass}`}
  >
    <FaSpinner className="animate-spin h-10 w-10 text-green-500" />
  </div>
);
const CardError = ({ message, heightClass = "h-64" }) => (
  <div
    className={`flex flex-col justify-center items-center p-6 bg-red-50 rounded-lg text-center ${heightClass}`}
  >
    <FaExclamationTriangle
      className="h-8 w-8 text-red-500 mb-3"
      aria-hidden="true"
    />
    <p className="text-red-700 font-medium">Error loading data</p>
    <p className="text-sm text-red-600">
      {message || "Could not fetch information."}
    </p>
  </div>
);

const formatDate = (dateString) => {
  try {
    return new Date(dateString).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  } catch (e) {
    return dateString;
  }
};

const getWeatherInfo = (code) => {
  const weatherCodes = {
    0: { description: "Clear sky", icon: FaSun },
    1: { description: "Mainly clear", icon: FaSun },
    2: { description: "Partly cloudy", icon: FaCloudSunRain },
    3: { description: "Overcast", icon: FaCloud },
    45: { description: "Fog", icon: FaSmog },
    48: { description: "Depositing rime fog", icon: FaSmog },
    51: { description: "Light drizzle", icon: FaCloudShowersHeavy },
    53: { description: "Moderate drizzle", icon: FaCloudShowersHeavy },
    55: { description: "Dense drizzle", icon: FaCloudShowersHeavy },
    56: { description: "Light freezing drizzle", icon: FaCloudShowersHeavy },
    57: { description: "Dense freezing drizzle", icon: FaCloudShowersHeavy },
    61: { description: "Slight rain", icon: FaCloudShowersHeavy },
    63: { description: "Moderate rain", icon: FaCloudShowersHeavy },
    65: { description: "Heavy rain", icon: FaCloudShowersHeavy },
    66: { description: "Light freezing rain", icon: FaCloudShowersHeavy },
    67: { description: "Heavy freezing rain", icon: FaCloudShowersHeavy },
    71: { description: "Slight snow fall", icon: FaSnowflake },
    73: { description: "Moderate snow fall", icon: FaSnowflake },
    75: { description: "Heavy snow fall", icon: FaSnowflake },
    77: { description: "Snow grains", icon: FaSnowflake },
    80: { description: "Slight rain showers", icon: FaCloudShowersHeavy },
    81: { description: "Moderate rain showers", icon: FaCloudShowersHeavy },
    82: { description: "Violent rain showers", icon: FaCloudShowersHeavy },
    85: { description: "Slight snow showers", icon: FaSnowflake },
    86: { description: "Heavy snow showers", icon: FaSnowflake },
    95: { description: "Thunderstorm", icon: FaBolt },
    96: { description: "Thunderstorm, slight hail", icon: FaBolt },
    99: { description: "Thunderstorm, heavy hail", icon: FaBolt },
  };
  return weatherCodes[code] || { description: "Unknown", icon: FaCloudSunRain };
};

const simulateApiCall = (data, delay = 800) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, delay);
  });
};

export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true);
  const [userError, setUserError] = useState(null);

  const [environmentData, setEnvironmentData] = useState(null);
  const [loadingEnvironment, setLoadingEnvironment] = useState(true);
  const [environmentError, setEnvironmentError] = useState(null);

  const [marketPrices, setMarketPrices] = useState(null);
  const [loadingMarketPrices, setLoadingMarketPrices] = useState(true);
  const [marketPricesError, setMarketPricesError] = useState(null);

  const [tips, setTips] = useState([]);
  const [loadingTips, setLoadingTips] = useState(true);
  const [tipsError, setTipsError] = useState(null);

  const [schemes, setSchemes] = useState([]);
  const [loadingSchemes, setLoadingSchemes] = useState(true);
  const [schemesError, setSchemesError] = useState(null);

  const [tools, setTools] = useState([]);
  const [loadingTools, setLoadingTools] = useState(true);
  const [toolsError, setToolsError] = useState(null);

  const [newsItems, setNewsItems] = useState([]);
  const [loadingNews, setLoadingNews] = useState(true);
  const [newsError, setNewsError] = useState(null);

  useEffect(() => {
    setLoadingUser(true);
    setUserError(null);
    simulateApiCall(fakeUserData, 300)
      .then(setUser)
      .catch((err) => setUserError(err.message || "Unknown error"))
      .finally(() => setLoadingUser(false));
  }, []);

  useEffect(() => {
    setLoadingEnvironment(true);
    setEnvironmentError(null);
    const latitude = 9.67;
    const longitude = 77.63;
    const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&timezone=auto`;

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) throw new Error(`Network error (${response.status})`);
        return response.json();
      })
      .then((data) => {
        if (data && data.current) {
          const current = data.current;
          const units = data.current_units || {};
          const weatherInfo = getWeatherInfo(current.weather_code);
          setEnvironmentData({
            currentTemp: `${current.temperature_2m}${
              units.temperature_2m || "°C"
            }`,
            humidity: `${current.relative_humidity_2m}${
              units.relative_humidity_2m || "%"
            }`,
            wind: `${current.wind_speed_10m}${units.wind_speed_10m || "km/h"}`,
            weatherCode: current.weather_code,
            weatherDescription: weatherInfo.description,
            WeatherIcon: weatherInfo.icon,
            advisoryLink: environmentLinks.advisoryLink,
            sustainablePracticeLink: environmentLinks.sustainablePracticeLink,
            tnDisasterPortalLink: environmentLinks.tnDisasterPortal,
          });
        } else {
          throw new Error("Weather data format invalid");
        }
      })
      .catch((err) => {
        console.error("Error fetching weather data:", err);
        setEnvironmentError(err.message || "Could not fetch weather.");
      })
      .finally(() => setLoadingEnvironment(false));
  }, []);
  useEffect(() => {
    setLoadingMarketPrices(true);
    setMarketPricesError(null);
    simulateApiCall(fakeMarketPrices, 700)
      .then(setMarketPrices)
      .catch((err) => setMarketPricesError(err.message))
      .finally(() => setLoadingMarketPrices(false));
  }, []);
  useEffect(() => {
    setLoadingTips(true);
    setTipsError(null);
    simulateApiCall(fakeTips, 500)
      .then(setTips)
      .catch((err) => setTipsError(err.message))
      .finally(() => setLoadingTips(false));
  }, []);
  useEffect(() => {
    setLoadingSchemes(true);
    setSchemesError(null);
    simulateApiCall(fakeSchemes, 900)
      .then(setSchemes)
      .catch((err) => setSchemesError(err.message))
      .finally(() => setLoadingSchemes(false));
  }, []);
  useEffect(() => {
    setLoadingTools(true);
    setToolsError(null);
    simulateApiCall(fakeTools, 600)
      .then(setTools)
      .catch((err) => setToolsError(err.message))
      .finally(() => setLoadingTools(false));
  }, []);
  useEffect(() => {
    setLoadingNews(true);
    setNewsError(null);
    simulateApiCall(fakeAgriNews, 1100)
      .then(setNewsItems)
      .catch((err) => setNewsError(err.message))
      .finally(() => setLoadingNews(false));
  }, []);

  const cardBaseStyle =
    "bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 h-full flex flex-col";
  const cardHeaderStyle =
    "p-4 border-b border-gray-100 flex items-center space-x-3";
  const cardTitleStyle = "text-lg font-semibold";
  const cardContentStyle = "p-4 flex-grow overflow-y-auto";

  return (
    <>
      <Header />
      <div className="bg-gradient-to-br py-10 from-lime-50 via-green-50 to-emerald-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 space-y-10">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 transition duration-300 hover:shadow-2xl">
            {loadingUser ? (
              <CardLoading heightClass="h-48" />
            ) : userError ? (
              <CardError message={userError} heightClass="h-48" />
            ) : user ? (
              <div className="p-6 md:p-8 flex flex-col sm:flex-row items-center sm:items-start space-y-5 sm:space-y-0 sm:space-x-8 bg-[url('/images/subtle-pattern.png')] bg-opacity-50 bg-repeat">
                <div className="flex-shrink-0">
                  {user.avatarUrl ? (
                    <img
                      src={user.avatarUrl}
                      alt={user.name}
                      className="h-24 w-24 md:h-28 md:w-28 rounded-full object-cover border-4 border-white shadow-md"
                    />
                  ) : (
                    <FaUserCircle className="h-24 w-24 md:h-28 md:w-28 text-gray-400" />
                  )}
                </div>
                <div className="flex-grow text-center sm:text-left">
                  <h1 className="text-3xl font-bold text-gray-800 mb-1">
                    {user.name}
                  </h1>
                  <div className="space-y-1.5 text-gray-600 mt-2">
                    <p className="flex items-center justify-center sm:justify-start space-x-2">
                      <FaEnvelope className="h-5 w-5 text-green-700 flex-shrink-0" />{" "}
                      <span className="truncate">{user.email}</span>{" "}
                    </p>
                    <p className="flex items-center justify-center sm:justify-start space-x-2">
                      <FaMapMarkerAlt className="h-5 w-5 text-green-700 flex-shrink-0" />{" "}
                      <span>{user.location || "N/A"}</span>{" "}
                    </p>
                    <p className="flex items-center justify-center sm:justify-start space-x-2 text-sm text-gray-500">
                      <FaBriefcase className="h-5 w-5 text-green-700 flex-shrink-0" />{" "}
                      <span>Role: {user.role || "User"}</span>{" "}
                    </p>
                  </div>
                </div>
                <div className="flex-shrink-0 mt-4 sm:mt-0">
                  <button className="inline-flex items-center px-4 py-2 border border-green-600 text-sm font-medium rounded-lg text-green-700 bg-white hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-150 ease-in-out shadow-sm hover:shadow-md">
                    {" "}
                    <FaEdit className="h-4 w-4 mr-2" /> Edit Profile{" "}
                  </button>
                </div>
              </div>
            ) : (
              <div className="p-6 text-center text-gray-500 h-48 flex items-center justify-center">
                Could not load profile.
              </div>
            )}
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-green-900 mb-6 pl-3 border-l-4 border-green-600">
              Farmer's Dashboard
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              <div className={cardBaseStyle}>
                <div className={`${cardHeaderStyle} bg-blue-50`}>
                  <FaCloudSunRain className="h-6 w-6 text-blue-600" />
                  <h3 className={`${cardTitleStyle} text-blue-900`}>
                    Environment & Climate
                  </h3>
                </div>
                <div className={cardContentStyle}>
                  {loadingEnvironment ? (
                    <CardLoading heightClass="h-64" />
                  ) : environmentError ? (
                    <CardError message={environmentError} heightClass="h-64" />
                  ) : environmentData ? (
                    <div className="space-y-4 text-sm">
                      <div className="text-center mb-4">
                        {" "}
                        {/* Weather Icon & Desc */}
                        {environmentData.WeatherIcon && (
                          <environmentData.WeatherIcon className="mx-auto h-12 w-12 text-blue-500 mb-2" />
                        )}
                        <p className="text-lg font-semibold text-gray-700">
                          {environmentData.weatherDescription}
                        </p>
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-center border-y py-3 mb-3 text-xs sm:text-sm">
                        <div>
                          {" "}
                          <FaThermometerHalf className="mx-auto h-5 w-5 text-red-500 mb-1" />{" "}
                          <span className="font-semibold text-gray-700">
                            {environmentData.currentTemp}
                          </span>{" "}
                        </div>
                        <div>
                          {" "}
                          <FaTint className="mx-auto h-5 w-5 text-sky-500 mb-1" />{" "}
                          <span className="font-semibold text-gray-700">
                            {environmentData.humidity}
                          </span>{" "}
                        </div>
                        <div>
                          {" "}
                          <FaWind className="mx-auto h-5 w-5 text-gray-500 mb-1" />{" "}
                          <span className="font-semibold text-gray-700">
                            {environmentData.wind}
                          </span>{" "}
                        </div>
                      </div>
                      <div>
                        {" "}
                        {/* Climate Note */}
                        <h4 className="font-semibold text-gray-800 mb-1">
                          Climate Note:
                        </h4>
                        <p className="text-gray-600 italic">
                          Monitor weather advisories closely. Water management
                          is crucial in this region.
                        </p>
                      </div>
                      <div className="space-y-2 pt-3 border-t mt-4">
                        {" "}
                        {/* Links */}
                        <a
                          href={environmentData.advisoryLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center space-x-2 font-medium text-blue-600 hover:text-blue-800 hover:underline"
                        >
                          {" "}
                          <FaExclamationTriangle className="h-4 w-4 text-blue-500" />{" "}
                          <span>IMD Agromet Advisories</span>{" "}
                          <FaExternalLinkAlt className="h-3 w-3 opacity-0 group-hover:opacity-100" />{" "}
                        </a>
                        <br />
                        <a
                          href={environmentData.tnDisasterPortalLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center space-x-2 font-medium text-orange-600 hover:text-orange-800 hover:underline"
                        >
                          {" "}
                          <FaExclamationTriangle className="h-4 w-4 text-orange-500" />{" "}
                          <span>TN Disaster Management</span>{" "}
                          <FaExternalLinkAlt className="h-3 w-3 opacity-0 group-hover:opacity-100" />{" "}
                        </a>
                        <br />
                        <a
                          href={environmentData.sustainablePracticeLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center space-x-2 font-medium text-green-600 hover:text-green-800 hover:underline"
                        >
                          {" "}
                          <FaSeedling className="h-4 w-4 text-green-500" />{" "}
                          <span>Sustainable Practices (PDF)</span>{" "}
                          <FaExternalLinkAlt className="h-3 w-3 opacity-0 group-hover:opacity-100" />{" "}
                        </a>
                      </div>
                    </div>
                  ) : (
                    <p className="text-gray-500 text-center pt-10">
                      Environment data unavailable.
                    </p>
                  )}
                </div>
              </div>
              <div className={cardBaseStyle}>
                <div className={`${cardHeaderStyle} bg-green-50`}>
                  {" "}
                  <FaChartLine className="h-6 w-6 text-green-700" />{" "}
                  <h3 className={`${cardTitleStyle} text-green-900`}>
                    Market Prices
                  </h3>{" "}
                </div>
                <div className={cardContentStyle}>
                  {loadingMarketPrices ? (
                    <CardLoading heightClass="h-48" />
                  ) : marketPricesError ? (
                    <CardError message={marketPricesError} heightClass="h-48" />
                  ) : marketPrices && Object.keys(marketPrices).length > 0 ? (
                    <div className="grid grid-cols-1 gap-x-6 gap-y-3">
                      {Object.entries(marketPrices).map(([crop, price]) => (
                        <div
                          key={crop}
                          className="flex justify-between items-center border-b border-gray-100 pb-1.5 text-sm"
                        >
                          {" "}
                          <span className="text-gray-700 capitalize">
                            {crop}
                          </span>{" "}
                          <span className="font-semibold text-green-800 text-right">
                            {price}
                          </span>{" "}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500 text-center pt-10">
                      No market price data.
                    </p>
                  )}
                </div>
              </div>

              {/* --- Tips Card (Simulated) --- */}
              <div className={cardBaseStyle}>
                <div className={`${cardHeaderStyle} bg-yellow-50`}>
                  {" "}
                  <FaLightbulb className="h-6 w-6 text-yellow-600" />{" "}
                  <h3 className={`${cardTitleStyle} text-yellow-900`}>
                    Farming Tips
                  </h3>{" "}
                </div>
                <div className={cardContentStyle}>
                  {loadingTips ? (
                    <CardLoading heightClass="h-48" />
                  ) : tipsError ? (
                    <CardError message={tipsError} heightClass="h-48" />
                  ) : tips && tips.length > 0 ? (
                    <ul className="space-y-3 list-none">
                      {tips.map((tip, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          {" "}
                          <span className="text-yellow-500 mr-2 mt-0.5">
                            ◆
                          </span>{" "}
                          <span className="text-gray-700">{tip}</span>{" "}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-500 text-center pt-10">
                      No tips available.
                    </p>
                  )}
                </div>
              </div>

              {/* --- Schemes Card (Simulated, Real Links) --- */}
              <div className={cardBaseStyle}>
                <div className={`${cardHeaderStyle} bg-teal-50`}>
                  {" "}
                  <FaLandmark className="h-6 w-6 text-teal-700" />{" "}
                  <h3 className={`${cardTitleStyle} text-teal-900`}>
                    Government Schemes
                  </h3>{" "}
                </div>
                <div className={cardContentStyle}>
                  {loadingSchemes ? (
                    <CardLoading heightClass="h-48" />
                  ) : schemesError ? (
                    <CardError message={schemesError} heightClass="h-48" />
                  ) : schemes && schemes.length > 0 ? (
                    <ul className="space-y-4">
                      {schemes.map((scheme) => (
                        <li
                          key={scheme.id}
                          className="border-l-4 border-teal-400 pl-3 py-1 bg-gray-50 rounded-r-md text-sm"
                        >
                          {" "}
                          <a
                            href={scheme.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block font-semibold text-teal-800 hover:text-teal-600 hover:underline mb-0.5"
                          >
                            {" "}
                            {scheme.title}{" "}
                            <FaExternalLinkAlt className="inline-block h-3 w-3 ml-1 opacity-70" />{" "}
                          </a>{" "}
                          <p className="text-gray-600">{scheme.description}</p>{" "}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-500 text-center pt-10">
                      No schemes found.
                    </p>
                  )}
                </div>
              </div>

              <div className={cardBaseStyle}>
                <div className={`${cardHeaderStyle} bg-lime-50`}>
                  {" "}
                  <FaNewspaper className="h-6 w-6 text-lime-700" />{" "}
                  <h3 className={`${cardTitleStyle} text-lime-900`}>
                    Agriculture News
                  </h3>{" "}
                </div>
                <div className={cardContentStyle}>
                  {loadingNews ? (
                    <CardLoading heightClass="h-48" />
                  ) : newsError ? (
                    <CardError message={newsError} heightClass="h-48" />
                  ) : newsItems && newsItems.length > 0 ? (
                    <ul className="divide-y divide-gray-100 -mt-2">
                      {newsItems.map((item) => (
                        <li key={item.id} className="py-4 flex space-x-4 group">
                          {item.imageUrl && (
                            <img
                              src={item.imageUrl}
                              alt=""
                              className="h-16 w-20 object-cover rounded flex-shrink-0 border border-gray-200"
                            />
                          )}
                          <div className="flex-grow">
                            <a
                              href={item.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block text-base font-semibold text-gray-800 group-hover:text-lime-700 mb-1"
                            >
                              {" "}
                              {item.title}{" "}
                              {item.url !== "#" && (
                                <FaExternalLinkAlt className="inline-block h-3 w-3 ml-1.5 opacity-0 group-hover:opacity-100" />
                              )}{" "}
                            </a>
                            <p className="text-sm text-gray-600 mb-1.5 line-clamp-2">
                              {item.snippet}
                            </p>
                            <div className="text-xs text-gray-500 flex items-center space-x-3">
                              {" "}
                              <span>{item.source}</span>{" "}
                              <span className="text-gray-300">|</span>{" "}
                              <span>{formatDate(item.date)}</span>{" "}
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-500 text-center pt-10">
                      No recent news.
                    </p>
                  )}
                </div>
                {!loadingNews && !newsError && newsItems.length > 0 && (
                  <div className="p-3 bg-gray-50 border-t border-gray-100 text-right">
                    {" "}
                    <a
                      href="#"
                      className="text-sm text-lime-600 hover:text-lime-800 font-medium hover:underline"
                    >
                      View All →
                    </a>{" "}
                  </div>
                )}
              </div>

              <div className={cardBaseStyle}>
                <div className={`${cardHeaderStyle} bg-indigo-50`}>
                  {" "}
                  <FaTools className="h-6 w-6 text-indigo-700" />{" "}
                  <h3 className={`${cardTitleStyle} text-indigo-900`}>
                    Useful Tools & Links
                  </h3>{" "}
                </div>
                <div className={cardContentStyle}>
                  {loadingTools ? (
                    <CardLoading heightClass="h-48" />
                  ) : toolsError ? (
                    <CardError message={toolsError} heightClass="h-48" />
                  ) : tools && tools.length > 0 ? (
                    <ul className="space-y-4">
                      {tools.map((tool) => (
                        <li key={tool.id} className="text-sm">
                          <a
                            href={tool.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center space-x-2 font-semibold text-indigo-700 hover:text-indigo-900 hover:underline"
                          >
                            {" "}
                            <FaLink className="h-4 w-4 text-indigo-400" />{" "}
                            <span>{tool.name}</span>{" "}
                            <FaExternalLinkAlt className="h-3 w-3 opacity-0 group-hover:opacity-100" />{" "}
                          </a>
                          <p className="text-gray-600 text-xs mt-0.5 pl-6">
                            {tool.description}
                          </p>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-500 text-center pt-10">
                      No tools available.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
