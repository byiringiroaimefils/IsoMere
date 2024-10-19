import NavBar from "../NavBar";
import Footer from '../Pages/Footer';

export default function Terms() {
  return (
    <>
      <NavBar />
      <div className="container mt-20 mx-auto px-4 max-w-4xl font-serif">
        <h1 className="text-4xl font-bold text-center mb-8 text-sky-600">Terms and Conditions</h1>
        <p className="text-lg mb-8 text-gray-700">Welcome to IsoMere, your personalized book recommendation and reading platform. By using our website and services, you agree to comply with and be bound by the following terms and conditions.</p>
        
        <h2 className="text-3xl font-semibold mb-4 text-sky-600 border-b-2 border-indigo-200 pb-2">Acceptance of Terms</h2>
        <p className="mb-6 text-gray-700">By accessing or using IsoMere, you agree to be bound by these Terms and Conditions and all applicable laws and regulations. If you do not agree with any part of these terms, you may not use our services.</p>

        <h2 className="text-3xl font-semibold mb-4 text-sky-600 border-b-2 border-indigo-200 pb-2">User Accounts</h2>
        <p className="mb-4 text-gray-700">To use certain features of IsoMere, you may be required to create an account. You are responsible for:</p>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li className="mb-2">Maintaining the confidentiality of your account information</li>
          <li className="mb-2">All activities that occur under your account</li>
          <li className="mb-2">Notifying us immediately of any unauthorized use of your account</li>
        </ul>

        <h2 className="text-3xl font-semibold mb-4 text-sky-600 border-b-2 border-indigo-200 pb-2">Content and Conduct</h2>
        <p className="mb-4 text-gray-700">When using IsoMere, you agree not to:</p>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li className="mb-2">Post or share any unlawful, harmful, or offensive content</li>
          <li className="mb-2">Infringe on the intellectual property rights of others</li>
          <li className="mb-2">Use the platform for any illegal or unauthorized purpose</li>
          <li className="mb-2">Interfere with or disrupt the service or servers connected to IsoMere</li>
        </ul>

        <h2 className="text-3xl font-semibold mb-4 text-sky-600 border-b-2 border-indigo-200 pb-2">Intellectual Property</h2>
        <p className="mb-6 text-gray-700">The content, features, and functionality of IsoMere are owned by us and are protected by international copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our express consent.</p>

        <h2 className="text-3xl font-semibold mb-4 text-sky-600 border-b-2 border-indigo-200 pb-2">Limitation of Liability</h2>
        <p className="mb-6 text-gray-700">IsoMere and its affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service.</p>

        <h2 className="text-3xl font-semibold mb-4 text-sky-600 border-b-2 border-indigo-200 pb-2">Termination</h2>
        <p className="mb-6 text-gray-700">We reserve the right to terminate or suspend your account and access to IsoMere at our sole discretion, without notice, for conduct that we believe violates these Terms and Conditions or is harmful to other users, us, or third parties, or for any other reason.</p>

        <h2 className="text-3xl font-semibold mb-4 text-sky-600 border-b-2 border-indigo-200 pb-2">Changes to Terms</h2>
        <p className="mb-6 text-gray-700">We may revise these Terms and Conditions at any time without notice. By using IsoMere, you agree to be bound by the current version of these Terms and Conditions.</p>

        <h2 className="text-3xl font-semibold mb-4 text-sky-600 border-b-2 border-indigo-200 pb-2">Contact Us</h2>
        <p className="mb-6 text-gray-700">If you have any questions about these Terms and Conditions, please contact us at <a href="mailto:support@IsoMere.com" className="text-sky-600 hover:underline">support@IsoMere.com</a>.</p>

        <p className="text-lg font-semibold text-center text-sky-600">Last updated: August 16, 2024</p>
      </div>
      <Footer />
    </>
  );
}
