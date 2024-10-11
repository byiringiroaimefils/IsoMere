import NavBar from "../NavBar";
import Footer from '../Pages/Footer';

export default function Privacy() {
  return (
    <>
      <NavBar />
      <div className="container mt-20 mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-center mb-8 text-sky-600">Privacy Policy</h1>
        <p className="text-lg mb-8 text-gray-700">At IsoMere, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our book recommendation and reading platform.</p>

        <h2 className="text-3xl font-semibold mb-4 text-sky-600 border-b-2 border-indigo-200 pb-2">Information We Collect</h2>
        <p className="mb-4 text-gray-700">We collect the following types of information:</p>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li className="mb-2">Personal information (e.g., name, email address) when you create an account</li>
          <li className="mb-2">Reading preferences and history to provide personalized recommendations</li>
          <li className="mb-2">Usage data and analytics to improve our services</li>
          <li className="mb-2">Payment information for premium features (processed securely by our payment partners)</li>
        </ul>

        <h2 className="text-3xl font-semibold mb-4 text-sky-600 border-b-2 border-indigo-200 pb-2">How We Use Your Information</h2>
        <p className="mb-4 text-gray-700">We use your information to:</p>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li className="mb-2">Provide and improve our book recommendation services</li>
          <li className="mb-2">Personalize your reading experience</li>
          <li className="mb-2">Process transactions and send related information</li>
          <li className="mb-2">Send important notifications about your account or our service</li>
          <li className="mb-2">Respond to your inquiries and support requests</li>
        </ul>

        <h2 className="text-3xl font-semibold mb-4 text-sky-600 border-b-2 border-indigo-200 pb-2">Data Security</h2>
        <p className="mb-6 text-gray-700">We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>

        <h2 className="text-3xl font-semibold mb-4 text-sky-600 border-b-2 border-indigo-200 pb-2">Data Sharing</h2>
        <p className="mb-6 text-gray-700">We do not sell your personal information to third parties. We may share your information with:</p>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li className="mb-2">Service providers who assist us in operating our platform</li>
          <li className="mb-2">Law enforcement or other government entities when required by law</li>
          <li className="mb-2">Other users, only if you choose to make certain information public on our platform</li>
        </ul>

        <h2 className="text-3xl font-semibold mb-4 text-sky-600 border-b-2 border-indigo-200 pb-2">Your Choices</h2>
        <p className="mb-6 text-gray-700">You can:</p>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li className="mb-2">Access, update, or delete your personal information through your account settings</li>
          <li className="mb-2">Opt-out of marketing communications</li>
          <li className="mb-2">Disable cookies through your browser settings</li>
        </ul>

        <h2 className="text-3xl font-semibold mb-4 text-sky-600 border-b-2 border-indigo-200 pb-2">Children's Privacy</h2>
        <p className="mb-6 text-gray-700">IsoMere is not intended for children under 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe we may have collected information about a child, please contact us.</p>

        <h2 className="text-3xl font-semibold mb-4 text-sky-600 border-b-2 border-indigo-200 pb-2">Changes to This Policy</h2>
        <p className="mb-6 text-gray-700">We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.</p>

        <h2 className="text-3xl font-semibold mb-4 text-sky-600 border-b-2 border-indigo-200 pb-2">Contact Us</h2>
        <p className="mb-6 text-gray-700">If you have any questions about this Privacy Policy, please contact us at <a href="mailto:privacy@isomere.com" className="text-sky-600 hover:underline">privacy@isomere.com</a>.</p>

        <p className="text-lg font-semibold text-center text-sky-600 mt-8">Last updated: August 16, 2024</p>
      </div>
      <Footer />
    </>
  );
}
