import NavBar from "../NavBar";
import Footer from '../Pages/Footer';

export default function Service() {
  return (
    <>
      <NavBar />
      <div className="container mt-20 mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-center mb-8 text-sky-600">Our Services</h1>
        <p className="text-lg mb-8 text-gray-700">At StoryVerse, we offer a wide range of services to enhance your reading and writing experience. Explore our offerings and dive into the world of stories!</p>


        <h2 className="text-3xl font-semibold mb-4 text-sky-600 border-b-2 border-indigo-200 pb-2">For Readers</h2>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li className="mb-3">

            <strong className="text-sky-600">Vast Story Library:</strong> Access thousands of stories across various genres, from fantasy and sci-fi to romance and mystery.
          </li>
          <li className="mb-3">

            <strong className="text-sky-600">Personalized Recommendations:</strong> Receive tailored story suggestions based on your reading history and preferences.
          </li>
          <li className="mb-3">

            <strong className="text-sky-600">Reading Lists:</strong> Curated collections of stories for different moods, themes, and occasions.
          </li>
          <li className="mb-3">

            <strong className="text-sky-600">Offline Reading:</strong> Download stories to read without an internet connection.
          </li>
        </ul>


        <h2 className="text-3xl font-semibold mb-4 text-sky-600 border-b-2 border-indigo-200 pb-2">For Writers</h2>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li className="mb-3">

            <strong className="text-sky-600">Story Publishing Platform:</strong> Share your work with a global audience of eager readers.
          </li>
          <li className="mb-3">

            <strong className="text-sky-600">Writing Workshops:</strong> Join online workshops to hone your craft and connect with fellow writers.
          </li>
          <li className="mb-3">

            <strong className="text-sky-600">Feedback System:</strong> Receive constructive feedback from readers and other writers.
          </li>
          <li className="mb-3">

            <strong className="text-sky-600">Monetization Options:</strong> Earn from your stories through our premium content program.
          </li>
        </ul>


        <h2 className="text-3xl font-semibold mb-4 text-sky-600 border-b-2 border-indigo-200 pb-2">Community Features</h2>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li className="mb-3">

            <strong className="text-sky-600">Discussion Forums:</strong> Engage in lively discussions about your favorite stories and characters.
          </li>
          <li className="mb-3">

            <strong className="text-sky-600">Book Clubs:</strong> Join virtual book clubs to read and discuss stories with others.
          </li>
          <li className="mb-3">

            <strong className="text-sky-600">Writing Challenges:</strong> Participate in regular writing prompts and contests.
          </li>
          <li className="mb-3">

            <strong className="text-sky-600">Author Q&As:</strong> Interact with your favorite authors through live Q&A sessions.
          </li>
        </ul>


        <h2 className="text-3xl font-semibold mb-4 text-sky-600 border-b-2 border-indigo-200 pb-2">Premium Features</h2>
        <p className="mb-4 text-gray-700">Upgrade to StoryVerse Premium to unlock:</p>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li className="mb-3">Ad-free reading experience</li>
          <li className="mb-3">Early access to new stories and features</li>
          <li className="mb-3">Exclusive content from top authors</li>
          <li className="mb-3">Advanced writing tools for authors</li>
          <li className="mb-3">Priority customer support</li>
        </ul>


        <h2 className="text-3xl font-semibold mb-4 text-sky-600 border-b-2 border-indigo-200 pb-2">Educational Resources</h2>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li className="mb-3">

            <strong className="text-sky-600">Writing Guides:</strong> Access comprehensive guides on various aspects of storytelling.
          </li>
          <li className="mb-3">

            <strong className="text-sky-600">Video Tutorials:</strong> Learn from experienced authors through our video series.
          </li>
          <li className="mb-3">

            <strong className="text-sky-600">Webinars:</strong> Attend live webinars on writing techniques, publishing, and more.
          </li>
        </ul>


        <h2 className="text-3xl font-semibold mb-4 text-sky-600 border-b-2 border-indigo-200 pb-2">Customer Support</h2>
        <p className="mb-6 text-gray-700">Our dedicated support team is here to assist you with any questions or issues. Reach out to us through:</p>
        <ul className="list-disc pl-6 mb-6 text-gray-700">

          <li className="mb-2">Email: <a href="mailto:support@storyverse.com" className="text-sky-600 hover:underline">support@storyverse.com</a></li>
          <li className="mb-2">Live chat on our website</li>
          <li className="mb-2">Help center with FAQs and troubleshooting guides</li>
        </ul>

        <p className="text-lg font-semibold text-center text-sky-600 mt-8">Discover the power of stories with StoryVerse. Your next adventure awaits!</p>
      </div><br /><br />
      <Footer />
    </>
  );
}