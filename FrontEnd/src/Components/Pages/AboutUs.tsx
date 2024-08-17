import NavBar from "../NavBar";
import Footer from '../Footer';

export default function About() {
  return (
    <>
      <NavBar />
      <div className="container mt-20 mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-center mb-8 text-sky-600">About StoryVerse</h1>
        <p className="text-lg mb-8 text-gray-700">Welcome to StoryVerse, your portal to infinite worlds of imagination! We are passionate about bringing the magic of storytelling to life through the power of words and technology.</p>
        
        <h2 className="text-3xl font-semibold mb-4 text-sky-600 border-b-2 border-indigo-200 pb-2">Our Story</h2>
        <p className="mb-6 text-gray-700">Founded in 2020 by a group of avid readers and tech enthusiasts, StoryVerse was born from a simple idea: to create a digital haven for story lovers of all ages. We believed that in our fast-paced world, the art of storytelling needed a modern platform to thrive and reach new audiences.</p>
        
        <h2 className="text-3xl font-semibold mb-4 text-sky-600 border-b-2 border-indigo-200 pb-2">Our Mission</h2>
        <p className="mb-4 text-gray-700">At StoryVerse, our mission is threefold:</p>
        <ol className="list-decimal pl-6 mb-6 text-gray-700">
          <li className="mb-2">To connect readers with captivating tales from diverse genres and talented authors around the globe.</li>
          <li className="mb-2">To provide a nurturing platform for emerging writers to showcase their work and grow their craft.</li>
          <li className="mb-2">To foster a vibrant community of storytellers and story enthusiasts, promoting the exchange of ideas and the celebration of narrative art.</li>
        </ol>

        <h2 className="text-3xl font-semibold mb-4 text-sky-600 border-b-2 border-indigo-200 pb-2">What We Offer</h2>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li className="mb-2">A vast collection of short stories, novels, and serialized fiction spanning every genre imaginable</li>
          <li className="mb-2">Weekly featured stories handpicked by our experienced editorial team</li>
          <li className="mb-2">Themed reading lists curated for various moods, occasions, and interests</li>
          <li className="mb-2">An interactive community forum where readers can discuss their favorite stories, characters, and authors</li>
          <li className="mb-2">Writing prompts and challenges to spark creativity and engage our community</li>
          <li className="mb-2">Author spotlights and interviews, giving you a glimpse into the minds behind the stories</li>
          <li className="mb-2">Personalized reading recommendations based on your preferences and reading history</li>
        </ul>

        {/* ... (continue with the same styling pattern for other sections) ... */}

        <h2 className="text-3xl font-semibold mb-4 text-sky-600 border-b-2 border-indigo-200 pb-2">Contact Us</h2>
        <p className="mb-6 text-gray-700">Have questions, suggestions, or just want to say hello? We'd love to hear from you! Reach out to us at <a href="mailto:contact@storyverse.com" className="text-indigo-600 hover:underline">contact@storyverse.com</a> or through our social media channels.</p>

        <p className="text-lg font-semibold text-center text-sky-600">Happy reading, and welcome to the StoryVerse family!</p>
      </div> <br /><br />
      <Footer />
    </>
  );
}