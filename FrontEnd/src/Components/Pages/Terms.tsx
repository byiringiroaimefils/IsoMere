import NavBar from "../NavBar";
import Footer from '../Footer';

export default function Terms() {
  return (
    <>
      <NavBar />
      <div className="container mt-20 mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-center mb-8 text-sky-600">Privacy Policy</h1>
        <p className="text-lg mb-8 text-gray-700">At IsoMere, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our website and services.</p>
        
        <h2 className="text-3xl font-semibold mb-4 text-skyle border-b-2 border-indigo-200 pb-2">Information We Collect</h2>
        <p className="mb-4 text-gray-700">We collect the following types of information:</p>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li className="mb-2">Personal information (e.g., name, email address) when you create an account</li>
          <li className="mb-2">Reading preferences and history to provide personalized recommendations</li>
          <li className="mb-2">User-generated content, such as comments and forum posts</li>
          <li className="mb-2">Technical information about your device and how you interact with our website</li>
        </ul>

        <h2 className="text-3xl font-semibold mb-4 text-skyle border-b-2 border-indigo-200 pb-2">How We Use Your Information</h2>
        <p className="mb-4 text-gray-700">We use your information to:</p>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li className="mb-2">Provide and improve our services</li>
          <li className="mb-2">Personalize your reading experience</li>
          <li className="mb-2">Communicate with you about your account and our services</li>
          <li className="mb-2">Analyze and improve our website performance</li>
          <li className="mb-2">Protect against fraud and unauthorized access</li>
        </ul>

        <h2 className="text-3xl font-semibold mb-4 text-skyle border-b-2 border-indigo-200 pb-2">Data Security</h2>
        <p className="mb-6 text-gray-700">We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>

        <h2 className="text-3xl font-semibold mb-4 text-skyle border-b-2 border-indigo-200 pb-2">Sharing Your Information</h2>
        <p className="mb-6 text-gray-700">We do not sell your personal information to third parties. We may share your information with service providers who help us operate our website and deliver our services. These providers are contractually obligated to use your information only for the purposes of providing services to us.</p>

        <h2 className="text-3xl font-semibold mb-4 text-sky-600 border-b-2 border-indigo-200 pb-2">Your Rights</h2>
        <p className="mb-4 text-gray-700">You have the right to:</p>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li className="mb-2">Access and update your personal information</li>
          <li className="mb-2">Request deletion of your account and associated data</li>
          <li className="mb-2">Opt-out of marketing communications</li>
          <li className="mb-2">Object to the processing of your personal information</li>
        </ul>

        <h2 className="text-3xl font-semibold mb-4 text-sky-600 border-b-2 border-indigo-200 pb-2">Changes to This Policy</h2>
        <p className="mb-6 text-gray-700">We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting a notice on our website or sending you an email.</p>

        <h2 className="text-3xl font-semibold mb-4 text-skyle border-b-2 border-indigo-200 pb-2">Contact Us</h2>
        <p className="mb-6 text-gray-700">If you have any questions or concerns about our Privacy Policy, please contact us at <a href="mailto:privacy@IsoMere.com" className="text-skyle hover:underline">privacy@IsoMere.com</a>.</p>

        <p className="text-lg font-semibold text-center text-sky-600">Last updated: August 16, 2024</p>
      </div> <br /><br />
      <Footer />
    </>
  );
}