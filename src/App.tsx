import React, { useState } from "react";
import {
  MessageSquare,
  Phone,
  Globe,
  BarChart2,
  Code,
  Clock,
  Shield,
  CheckCircle,
  X,
  ChevronRight,
  MessageCircle,
} from "lucide-react";

function App() {
  const [showCookieBanner, setShowCookieBanner] = useState(true);
  const [showChat, setShowChat] = useState(false);
  const [email, setEmail] = useState("");
  const [activeLanguage, setActiveLanguage] = useState("JavaScript");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for subscribing to our newsletter!");
    setEmail("");
  };

  const codeExamples = {
    JavaScript: `// Install the SDK
npm install esoko-push


// Initialize the client
const esoko-push = require('push-api-sdk');
const client = new esoko-push('YOUR_API_KEY');

// Send an SMS
async function sendMessage() {
  try {
    const message = await client.messages.create({
      to: '+1234567890',
      from: '+0987654321',
      body: 'Hello from esoko-push!'
    });
    
    console.log(\`Message sent! SID: \${message.sid}\`);
  } catch (error) {
    console.error(\`Error: \${error.message}\`);
  }
}`,
    Python: `# Install the SDK
pip install esoko-push

# Initialize the client
from esoko-push import Client
client = Client('YOUR_API_KEY')

# Send an SMS
try:
    message = client.messages.create(
        to='+1234567890',
        from_='+0987654321',
        body='Hello from esoko-push!'
    )
    print(f'Message sent! SID: {message.sid}')
except Exception as error:
    print(f'Error: {str(error)}')`,
    PHP: `// Install the SDK
composer require esoko-push/sdk

// Initialize the client
require_once 'vendor/autoload.php';
$client = new esoko-push('YOUR_API_KEY');

// Send an SMS
try {
    $message = $client->messages->create([
        'to' => '+1234567890',
        'from' => '+0987654321',
        'body' => 'Hello from esoko-push!'
    ]);
    echo 'Message sent! SID: ' . $message->sid;
} catch (Exception $error) {
    echo 'Error: ' . $error->getMessage();
}`,
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <img
                src="../public/assets/esoko_logo.png"
                alt=""
                className="w-30 h-20"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="text-gray-600 hover:text-[#0052CC]"
              >
                Features
              </a>
              <a
                href="#technical"
                className="text-gray-600 hover:text-[#0052CC]"
              >
                Technical
              </a>
              <a href="#pricing" className="text-gray-600 hover:text-[#0052CC]">
                Pricing
              </a>
              <a
                href="#integrations"
                className="text-gray-600 hover:text-[#0052CC]"
              >
                Integrations
              </a>
              <button className="bg-[#0052CC] text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                <a href="https://push.esoko.com/en/signup">Get Started</a>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#0052CC]"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isMobileMenuOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <a
              href="#features"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#0052CC] hover:bg-gray-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#technical"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#0052CC] hover:bg-gray-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Technical
            </a>
            <a
              href="#pricing"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#0052CC] hover:bg-gray-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </a>
            <a
              href="#integrations"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#0052CC] hover:bg-gray-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Integrations
            </a>
            <button className="w-full mt-2 bg-[#0052CC] text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
              <a
                href="https://push.esoko.com/en/signup"
                className="block text-center"
              >
                Get Started
              </a>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0052CC] to-[#0066FF] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Powerful SMS & Voice APIs for Modern Applications
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Connect with your users globally through reliable, scalable
                communication APIs that integrate seamlessly with your
                applications.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="bg-white text-[#0052CC] px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition">
                  <a href="https://push.esoko.com/en/signup">Get Started</a>
                  {/* Get Started */}
                </button>
                <button className="border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:bg-opacity-10 transition">
                  <a href="https://www.insyt.esoko.com/developers/">
                    View Documentation
                  </a>
                </button>
              </div>
            </div>
            <div className="hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Communication API Illustration"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Powerful Communication APIs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform provides everything you need to build robust
              communication features into your applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* SMS API */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <MessageSquare className="h-8 w-8 text-[#0052CC]" />
              </div>
              <h3 className="text-xl font-bold mb-3">SMS API</h3>
              <p className="text-gray-600">
                Send and receive text messages globally with high deliverability
                and rich analytics.
              </p>
            </div>

            {/* Voice API */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Phone className="h-8 w-8 text-[#0052CC]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Voice API</h3>
              <p className="text-gray-600">
                Build voice-enabled applications with features like IVR, call
                recording, and transcription.
              </p>
            </div>

            {/* Global Coverage */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Globe className="h-8 w-8 text-[#0052CC]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Global Coverage</h3>
              <p className="text-gray-600">
                Reach users in over 190 countries with local numbers and
                competitive rates.
              </p>
            </div>

            {/* Analytics */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <BarChart2 className="h-8 w-8 text-[#0052CC]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Real-time Analytics</h3>
              <p className="text-gray-600">
                Monitor delivery rates, engagement metrics, and costs in
                real-time through our dashboard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Benefits */}
      <section id="technical" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Built for Developers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our APIs are designed to be easy to integrate, with comprehensive
              documentation and support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <Code className="h-6 w-6 text-[#0052CC] mr-3" />
                  <h3 className="text-xl font-bold">Simple Integration</h3>
                </div>
                <p className="text-gray-600 ml-9">
                  Integrate our APIs in minutes with clear documentation and
                  SDKs for all major programming languages.
                </p>
              </div>

              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <Clock className="h-6 w-6 text-[#0052CC] mr-3" />
                  <h3 className="text-xl font-bold">Fast Response Times</h3>
                </div>
                <p className="text-gray-600 ml-9">
                  Our APIs have an average response time of &lt;100ms, ensuring
                  your communications are delivered instantly.
                </p>
              </div>

              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <Shield className="h-6 w-6 text-[#0052CC] mr-3" />
                  <h3 className="text-xl font-bold">Reliability & Uptime</h3>
                </div>
                <p className="text-gray-600 ml-9">
                  99.99% uptime SLA with redundant infrastructure across
                  multiple regions for maximum reliability.
                </p>
              </div>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
              <div className="flex mb-4">
                <button
                  className={`px-4 py-2 ${
                    activeLanguage === "JavaScript"
                      ? "bg-gray-800 text-blue-400"
                      : "text-gray-400 hover:text-white"
                  } rounded-t-md mr-2`}
                  onClick={() => setActiveLanguage("JavaScript")}
                >
                  JavaScript
                </button>
                <button
                  className={`px-4 py-2 ${
                    activeLanguage === "Python"
                      ? "bg-gray-800 text-blue-400"
                      : "text-gray-400 hover:text-white"
                  } mr-2`}
                  onClick={() => setActiveLanguage("Python")}
                >
                  Python
                </button>
                <button
                  className={`px-4 py-2 ${
                    activeLanguage === "PHP"
                      ? "bg-gray-800 text-blue-400"
                      : "text-gray-400 hover:text-white"
                  }`}
                  onClick={() => setActiveLanguage("PHP")}
                >
                  PHP
                </button>
              </div>
              <pre className="text-blue-400 overflow-x-auto p-4 bg-gray-800 rounded-b-md">
                {codeExamples[activeLanguage]}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that works best for your business needs, with no
              hidden fees.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-2">Starter</h3>
              <p className="text-gray-600 mb-6">
                Perfect for small projects and startups
              </p>
              <div className="mb-6">
                <span className="text-4xl font-bold">Ghc0</span>
                <span className="text-gray-600"> / month</span>
              </div>
              <ul className="mb-8 space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>100 SMS messages / month</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>50 Voice minutes / month</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Basic analytics</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Email support</span>
                </li>
              </ul>
              <button className="w-full bg-gray-100 text-[#0052CC] py-3 rounded-md font-medium hover:bg-gray-200 transition">
                Get Started
              </button>
            </div>

            {/* Pro Plan */}
            <div className="bg-[#0052CC] text-white p-8 rounded-xl shadow-md hover:shadow-lg transition relative">
              <div className="absolute top-0 right-0 bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                POPULAR
              </div>
              <h3 className="text-xl font-bold mb-2">Professional</h3>
              <p className="text-blue-100 mb-6">
                For growing businesses with higher volume
              </p>
              <div className="mb-6">
                <span className="text-4xl font-bold">Ghc49</span>
                <span className="text-blue-100"> / month</span>
              </div>
              <ul className="mb-8 space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-300 mr-2" />
                  <span>10,000 SMS messages / month</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-300 mr-2" />
                  <span>1,000 Voice minutes / month</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-300 mr-2" />
                  <span>Advanced analytics</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-300 mr-2" />
                  <span>Priority support</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-300 mr-2" />
                  <span>Dedicated phone numbers</span>
                </li>
              </ul>
              <button className="w-full bg-white text-[#0052CC] py-3 rounded-md font-medium hover:bg-gray-100 transition">
                Get Started
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-2">Enterprise</h3>
              <p className="text-gray-600 mb-6">
                Custom solutions for large organizations
              </p>
              <div className="mb-6">
                <span className="text-4xl font-bold">Custom</span>
                <span className="text-gray-600"> pricing</span>
              </div>
              <ul className="mb-8 space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Unlimited SMS messages</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Unlimited Voice minutes</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Custom analytics & reporting</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>24/7 dedicated support</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>SLA guarantees</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Custom integrations</span>
                </li>
              </ul>
              <button className="w-full bg-gray-100 text-[#0052CC] py-3 rounded-md font-medium hover:bg-gray-200 transition">
                Contact Sales
              </button>
            </div>
          </div>

          <div className="mt-12 bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-6">Pay-as-you-go Option</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Service
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Ghana
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Liberia
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Sierra Leone
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Nigeria
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      SMS (per message)
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Ghc0.0075
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      $0.0095
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Le 0.0125
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      ₦0.0150
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Voice (per minute)
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      GHc0.015
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      $0.020
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Le 0.025
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      ₦0.030
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Phone Numbers (per month)
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      GHc1.00
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      $1.50
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Le 2.00
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      ₦2.50
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Trusted by Innovative Companies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of businesses that rely on our platform for their
              critical communications.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition">
              <img
                src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
                alt="Company Logo"
                className="h-12"
              />
            </div>
            <div className="flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition">
              <img
                src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
                alt="Company Logo"
                className="h-12"
              />
            </div>
            <div className="flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition">
              <img
                src="https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
                alt="Company Logo"
                className="h-12"
              />
            </div>
            <div className="flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition">
              <img
                src="https://images.unsplash.com/photo-1611162618479-ee4a1f8d5be9?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
                alt="Company Logo"
                className="h-12"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Esoko Push has transformed how we communicate with our
                customers. The reliability and ease of integration have been
                game-changers for our business."
              </p>
              <div className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                  alt="Customer"
                  className="h-10 w-10 rounded-full mr-3"
                />
                <div>
                  <p className="font-medium">Sarah Johnson</p>
                  <p className="text-gray-500 text-sm">CTO, TechStart Inc.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "We've reduced our communication costs by 40% while improving
                delivery rates. The analytics dashboard gives us insights we
                never had before."
              </p>
              <div className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                  alt="Customer"
                  className="h-10 w-10 rounded-full mr-3"
                />
                <div>
                  <p className="font-medium">Michael Chen</p>
                  <p className="text-gray-500 text-sm">
                    Product Manager, GlobalApp
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "The global coverage is impressive. We've expanded to new
                markets without having to worry about communication
                infrastructure. Support team is top-notch."
              </p>
              <div className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                  alt="Customer"
                  className="h-10 w-10 rounded-full mr-3"
                />
                <div>
                  <p className="font-medium">Emily Rodriguez</p>
                  <p className="text-gray-500 text-sm">
                    VP of Engineering, ScaleUp
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-8 rounded-xl">
            <div className="grid md:grid-cols-4 gap-8 items-center">
              <div className="md:col-span-1">
                <div className="flex flex-col items-center md:items-start">
                  <p className="text-4xl font-bold text-[#0052CC] mb-2">
                    99.99%
                  </p>
                  <p className="text-gray-600">Uptime</p>
                </div>
              </div>
              <div className="md:col-span-1">
                <div className="flex flex-col items-center md:items-start">
                  <p className="text-4xl font-bold text-[#0052CC] mb-2">4+</p>
                  <p className="text-gray-600">Countries</p>
                </div>
              </div>
              <div className="md:col-span-1">
                <div className="flex flex-col items-center md:items-start">
                  <p className="text-4xl font-bold text-[#0052CC] mb-2">50+</p>
                  <p className="text-gray-600">Messages Sent</p>
                </div>
              </div>
              <div className="md:col-span-1">
                <div className="flex flex-col items-center md:items-start">
                  <p className="text-4xl font-bold text-[#0052CC] mb-2">10+</p>
                  <p className="text-gray-600">Businesses</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section id="integrations" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with your favorite tools and frameworks with our
              comprehensive SDKs and libraries.
            </p>
          </div>

          <div className="grid md:grid-cols-1 gap-12 items-center">
            <div>
              <div className="grid grid-cols-3 gap-8 mb-8">
                <div className="flex items-center justify-center bg-white p-6 rounded-lg shadow-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="44"
                    height="44"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="icon icon-tabler icons-tabler-outline icon-tabler-brand-nodejs"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 9v8.044a2 2 0 0 1 -2.996 1.734l-1.568 -.9a3 3 0 0 1 -1.436 -2.561v-6.635a3 3 0 0 1 1.436 -2.56l6 -3.667a3 3 0 0 1 3.128 0l6 3.667a3 3 0 0 1 1.436 2.561v6.634a3 3 0 0 1 -1.436 2.56l-6 3.667a3 3 0 0 1 -3.128 0" />
                    <path d="M17 9h-3.5a1.5 1.5 0 0 0 0 3h2a1.5 1.5 0 0 1 0 3h-3.5" />
                  </svg>
                </div>
                <div className="flex items-center justify-center bg-white p-6 rounded-lg shadow-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="44"
                    height="44"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="icon icon-tabler icons-tabler-outline icon-tabler-brand-python"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 9h-7a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h3" />
                    <path d="M12 15h7a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-3" />
                    <path d="M8 9v-4a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v5a2 2 0 0 1 -2 2h-4a2 2 0 0 0 -2 2v5a2 2 0 0 0 2 2h4a2 2 0 0 0 2 -2v-4" />
                    <path d="M11 6l0 .01" />
                    <path d="M13 18l0 .01" />
                  </svg>
                </div>
                <div className="flex items-center justify-center bg-white p-6 rounded-lg shadow-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="44"
                    height="44"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="icon icon-tabler icons-tabler-outline icon-tabler-brand-golang"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M15.695 14.305c1.061 1.06 2.953 .888 4.226 -.384c1.272 -1.273 1.444 -3.165 .384 -4.226c-1.061 -1.06 -2.953 -.888 -4.226 .384c-1.272 1.273 -1.444 3.165 -.384 4.226z" />
                    <path d="M12.68 9.233c-1.084 -.497 -2.545 -.191 -3.591 .846c-1.284 1.273 -1.457 3.165 -.388 4.226c1.07 1.06 2.978 .888 4.261 -.384a3.669 3.669 0 0 0 1.038 -1.921h-2.427" />
                    <path d="M5.5 15h-1.5" />
                    <path d="M6 9h-2" />
                    <path d="M5 12h-3" />
                  </svg>
                </div>
                <div className="flex items-center justify-center bg-white p-6 rounded-lg shadow-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="44"
                    height="44"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="icon icon-tabler icons-tabler-outline icon-tabler-brand-php"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 12m-10 0a10 9 0 1 0 20 0a10 9 0 1 0 -20 0" />
                    <path d="M5.5 15l.395 -1.974l.605 -3.026h1.32a1 1 0 0 1 .986 1.164l-.167 1a1 1 0 0 1 -.986 .836h-1.653" />
                    <path d="M15.5 15l.395 -1.974l.605 -3.026h1.32a1 1 0 0 1 .986 1.164l-.167 1a1 1 0 0 1 -.986 .836h-1.653" />
                    <path d="M12 7.5l-1 5.5" />
                    <path d="M11.6 10h2.4l-.5 3" />
                  </svg>
                </div>
                <div className="flex items-center justify-center bg-white p-6 rounded-lg shadow-sm">
                  <svg
                    className="h-12 w-12"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" fill="#F7DF1E" />
                    <path
                      d="M16 13.5C16 15.5 14.5 16.5 12.5 16.5C10.5 16.5 9 15.5 9 13.5"
                      stroke="black"
                      strokeWidth="2"
                    />
                    <path d="M9 10.5H16" stroke="black" strokeWidth="2" />
                  </svg>
                </div>
                <div className="flex items-center justify-center bg-white p-6 rounded-lg shadow-sm">
                  <svg
                    className="h-12 w-12"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z"
                      fill="#3776AB"
                    />
                    <path
                      d="M12.5 7C9.5 7 9 8.5 9 10V11.5H13V12.5H7V15C7 17 8 17.5 9.5 17.5H14.5C16 17.5 17 17 17 15V10C17 8 16 7 14 7H12.5Z"
                      fill="white"
                    />
                    <path
                      d="M12 14.5C12.8284 14.5 13.5 13.8284 13.5 13C13.5 12.1716 12.8284 11.5 12 11.5C11.1716 11.5 10.5 12.1716 10.5 13C10.5 13.8284 11.1716 14.5 12 14.5Z"
                      fill="#3776AB"
                    />
                  </svg>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Quick Start Guide</h3>
                <p className="text-gray-600 mb-4">
                  Get up and running with our APIs in minutes with our
                  comprehensive SDKs.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="https://www.insyt.esoko.com/developers/"
                    className="text-[#0052CC] font-medium flex items-center"
                  >
                    View Documentation <ChevronRight className="h-4 w-4 ml-1" />
                  </a>
                  {/* <a
                    href="#"
                    className="text-[#0052CC] font-medium flex items-center"
                  >
                    Download SDKs <ChevronRight className="h-4 w-4 ml-1" />
                  </a> */}
                </div>
              </div>
            </div>

            {/* <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
              <div className="flex mb-4">
                <button
                  className={`px-4 py-2 ${
                    activeLanguage === "JavaScript"
                      ? "bg-gray-800 text-blue-400"
                      : "text-gray-400 hover:text-white"
                  } rounded-t-md mr-2`}
                  onClick={() => setActiveLanguage("JavaScript")}
                >
                  Node.js
                </button>
                <button
                  className={`px-4 py-2 ${
                    activeLanguage === "Python"
                      ? "bg-gray-800 text-blue-400"
                      : "text-gray-400 hover:text-white"
                  } mr-2`}
                  onClick={() => setActiveLanguage("Python")}
                >
                  Python
                </button>
                <button
                  className={`px-4 py-2 ${
                    activeLanguage === "PHP"
                      ? "bg-gray-800 text-blue-400"
                      : "text-gray-400 hover:text-white"
                  }`}
                  onClick={() => setActiveLanguage("PHP")}
                >
                  PHP
                </button>
              </div>
              <pre className="text-blue-400 overflow-x-auto p-4 bg-gray-800 rounded-b-md">
                {codeExamples[activeLanguage]}
              </pre>
            </div> */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-6">
                {/* <MessageSquare className="h-8 w-8 text-white" /> */}
                <span className="ml-2 text-xl font-bold">
                  <img
                    src="../public/assets/esoko_logo.png"
                    alt="logo"
                    className="w-40 h-20"
                  />
                </span>
              </div>
              <p className="text-gray-400 mb-6">
                Powerful, reliable communication APIs for modern applications.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/esoko_news/"
                  className="text-gray-400 hover:text-white"
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </a>
                <a
                  href="https://x.com/Esoko"
                  className="text-gray-400 hover:text-white"
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/esoko/"
                  className="text-gray-400 hover:text-white"
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Documentation</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://push.esoko.com"
                    className="text-gray-400 hover:text-white"
                  >
                    Getting Started
                  </a>
                </li>
                <li>
                  <a
                    href="https://push.esoko.com/en/sms"
                    className="text-gray-400 hover:text-white"
                  >
                    SMS API
                  </a>
                </li>
                <li>
                  <a
                    href="https://push.esoko.com/en/voice"
                    className="text-gray-400 hover:text-white"
                  >
                    Voice API
                  </a>
                </li>
                {/* <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    SDKs & Libraries
                  </a>
                </li> */}
                <li>
                  <a
                    href="https://www.insyt.esoko.com/developers/"
                    className="text-gray-400 hover:text-white"
                  >
                    API Reference
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Status Page
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Community Forum
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Contact Support
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://www.esoko.com/about"
                    className="text-gray-400 hover:text-white"
                  >
                    About Us
                  </a>
                </li>
                {/* <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Careers
                  </a>
                </li> */}
                {/* <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Blog
                  </a>
                </li> */}
                {/* <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Press
                  </a>
                </li> */}
                <li>
                  <a
                    href="https://www.esoko.com/contact-us"
                    className="text-gray-400 hover:text-white"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <p className="text-gray-400">
                  &copy; {new Date().getFullYear()} esoko. All rights reserved.
                </p>
              </div>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-white">
                  Terms
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  Privacy
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  Cookies
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  Security
                </a>
              </div>
            </div>
          </div>
          {/* Newsletter Signup */}
          <div className="fixed bottom-0 left-0 right-0 bg-[#0052CC] text-white py-4 z-30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-4 md:mb-0 md:mr-8">
                  <h3 className="text-lg font-bold">
                    Subscribe to our newsletter
                  </h3>
                  <p className="text-blue-100">
                    Get the latest updates and news about our API services.
                  </p>
                </div>
                <form
                  onSubmit={handleNewsletterSubmit}
                  className="flex w-full md:w-auto"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 rounded-l-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-white text-[#0052CC] px-4 py-2 rounded-r-md font-medium hover:bg-gray-100 transition"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Cookie Consent Banner */}
      {showCookieBanner && (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-4 md:mb-0 md:mr-8">
                <p>
                  We use cookies to enhance your experience. By continuing to
                  visit this site you agree to our use of cookies.
                </p>
              </div>
              <div className="flex space-x-4">
                <button
                  onClick={() => setShowCookieBanner(false)}
                  className="bg-white text-gray-900 px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition"
                >
                  Accept
                </button>
                <button
                  onClick={() => setShowCookieBanner(false)}
                  className="border border-white text-white px-4 py-2 rounded-md font-medium hover:bg-white hover:bg-opacity-10 transition"
                >
                  Decline
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Live Chat Widget */}
      <div className="fixed bottom-20 right-6 z-40">
        {showChat ? (
          <div className="bg-white rounded-lg shadow-xl w-80">
            <div className="bg-[#0052CC] text-white p-4 rounded-t-lg flex justify-between items-center">
              <div className="flex items-center">
                <MessageCircle className="h-5 w-5 mr-2" />
                <span className="font-medium">Live Chat</span>
              </div>
              <button onClick={() => setShowChat(false)}>
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-4 h-80 overflow-y-auto border-b">
              <div className="mb-4">
                <div className="bg-gray-100 p-3 rounded-lg inline-block max-w-xs">
                  <p className="text-sm">
                    👋 Hi there! How can we help you today?
                  </p>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Support Agent • Just now
                </p>
              </div>
            </div>
            <div className="p-4">
              <div className="flex">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="flex-1 border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0052CC] focus:border-transparent"
                />
                <button className="bg-[#0052CC] text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition">
                  Send
                </button>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => setShowChat(true)}
            className="bg-[#0052CC] text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition"
          >
            <MessageCircle className="h-6 w-6" />
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
