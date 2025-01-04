import Footer from "./Pages/Footer";
import { SignInButton } from "@clerk/clerk-react";
import { Link } from 'react-router-dom';
import { FaBookReader, FaQuoteRight, FaBible, FaArrowRight, FaChevronDown } from 'react-icons/fa';


const features = [
  {
    icon: <FaBookReader className="h-6 w-6 text-blue-500" />,
    title: "Engaging Stories",
    description: "Discover captivating stories that educate and inspire young minds."
  },
  {
    icon: <FaQuoteRight className="h-6 w-6 text-blue-500" />,
    title: "Wisdom Through Proverbs",
    description: "Learn life lessons through timeless proverbs and their meanings."
  },
  {
    icon: <FaBible className="h-6 w-6 text-blue-500" />,
    title: "Biblical Stories",
    description: "Explore the teachings of Jesus through interactive biblical stories."
  }
];

export default function Homepage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <header className="fixed w-full top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <img
                src='BabyStoryLogo.png'
                alt="IsoMere Logo"
                className="h-8 w-auto sm:h-10"
              />
              <span className="text-xl font-bold text-gray-900 hidden sm:inline">
                IsoMere
              </span>
            </div>
            <nav className="flex items-center space-x-2 sm:space-x-10 translate-x-16">
              <SignInButton mode='modal' redirectUrl='/Home'>
                <button className="px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base text-blue-600 font-medium hover:text-blue-700 transition-colors">
                  Sign In
                </button>
              </SignInButton>
              <SignInButton mode='modal' redirectUrl='/Home'>
                <button className="px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                  Create Account
                </button>
              </SignInButton>
            </nav>
          </div>
        </div>
      </header>


      <main className="pt-24 sm:pt-32 pb-16 translate-y-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Train your children with{' '}
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                IsoMere
              </span>
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-gray-600 mb-6 sm:mb-8">
              Enhancing reading through Stories and Proverbs
            </h2>
            <p className="max-w-1.5xl mx-auto text-base sm:text-lg text-gray-600 mb-8 sm:mb-12 px-4">
              Help your children excel in reading, understanding proverbs, and growing in faith through engaging stories.
              Guide them to become disciples of Jesus by exploring significant events from the past.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 px-4">
              <Link to="/Home" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 group">
                  <span>Get Started</span>
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              {/* <Link to="/subscribe" className="w-full sm:w-auto"> */}
              <button className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors">
                <a href="#subscription">
                  Subscribe Now
                </a>
              </button>
              {/* </Link> */}
            </div>


            <div className="hidden sm:flex flex-col items-center mt-16 animate-bounce">
              <span className="text-sm text-gray-500 mb-2">Discover More</span>
              <a href="#scrolle">
                <FaChevronDown className="text-gray-400" />
              </a>
            </div>
          </div>

          <div id="scrolle" className="mt-16  sm:mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Trust Section */}
          <div className="mt-16 sm:mt-24 text-center px-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
              Trusted by Parents Worldwide
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
              Join thousands of parents who trust IsoMere to provide quality educational content for their children's spiritual and moral development.
            </p>
          </div>
        </div>
      </main>

      <div id="subscription" className="translate-y-32 mb-48">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-4xl">
              Choose Your Plan
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
              Select the perfect subscription plan for your needs
            </p>
          </div>

          <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-6 lg:max-w-4xl lg:mx-auto font-semibold">
            <div className="border border-gray-200 rounded-lg shadow-sm p-6 bg-white hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-900">Basic</h3>
              <p className="mt-4 text-gray-600">View-only access to stories</p>
              <p className="mt-8">
                <span className="text-4xl font-bold text-gray-900">$0</span>
                <span className="text-gray-600">/forever</span>
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start">
                  <span className="text-green-500">✓</span>
                  <span className="ml-3 text-gray-600">View all stories</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500">✗</span>
                  <span className="ml-3 text-gray-600">No editing capabilities</span>
                </li>
              </ul>
              <Link to="/Home">

                <button className="mt-8 w-full bg-gray-800 text-white rounded-lg py-2.5 hover:bg-gray-700 transition-colors font-medium">
                  Get Started
                </button>
              </ Link>
            </div>

            <div className="border border-gray-200 rounded-lg shadow-sm p-6 bg-white hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-900">Standard</h3>
              <p className="mt-4 text-gray-600">Perfect for casual writers</p>
              <p className="mt-8">
                <span className="text-4xl font-bold text-gray-900">$0.50</span>
                <span className="text-gray-600">/3 months</span>
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start">
                  <span className="text-green-500">✓</span>
                  <span className="ml-3 text-gray-600">View all stories</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500">✓</span>
                  <span className="ml-3 text-gray-600">Add, update & delete</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500">✓</span>
                  <span className="ml-3 text-gray-600">2 articles per month</span>
                </li>
              </ul>
              <button className="mt-8 w-full bg-blue-600 text-white rounded-lg py-2.5 hover:bg-blue-700 transition-colors font-medium">
                Subscribe Now
              </button>
            </div>

            <div className="border border-gray-200 rounded-lg shadow-sm p-6 bg-white hover:shadow-lg transition-shadow duration-300 relative">
              <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 rounded-tr-lg rounded-bl-lg text-sm font-medium">
                Best Value
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Premium</h3>
              <p className="mt-4 text-gray-600">For dedicated storytellers</p>
              <p className="mt-8">
                <span className="text-4xl font-bold text-gray-900">$1.50</span>
                <span className="text-gray-600">/year</span>
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start">
                  <span className="text-green-500">✓</span>
                  <span className="ml-3 text-gray-600">View all stories</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500">✓</span>
                  <span className="ml-3 text-gray-600">Add, update & delete</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500">✓</span>
                  <span className="ml-3 text-gray-600">Unlimited articles</span>
                </li>
              </ul>
              <button className="mt-8 w-full bg-blue-600 text-white rounded-lg py-2.5 hover:bg-blue-700 transition-colors font-medium">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <br />
      <Footer />
    </div>
  );
}
