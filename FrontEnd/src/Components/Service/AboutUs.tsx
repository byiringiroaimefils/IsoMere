import NavBar from "../NavBar";
import Footer from '../Pages/Footer';

export default function About() {
  return (
    <>
      <NavBar />
      <div className="container mt-20 mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-center mb-8 text-sky-600">About IsoMere</h1>
        <p className="text-lg mb-8 text-gray-700">Welcome to IsoMere, your gateway to infinite worlds of AI-generated stories! We are at the forefront of combining cutting-edge AI technology with the timeless art of storytelling.</p>
        
        <h2 className="text-3xl font-semibold mb-4 text-sky-600 border-b-2 border-indigo-200 pb-2">Our Story</h2>
        <p className="mb-6 text-gray-700">Founded in 2023 by a team of AI enthusiasts and storytelling aficionados, IsoMere was born from a revolutionary idea: to harness the power of artificial intelligence to create unique, personalized stories for every reader. We believed that in our tech-driven world, storytelling could evolve to offer tailored experiences that resonate with individual readers.</p>
        
        <h2 className="text-3xl font-semibold mb-4 text-sky-600 border-b-2 border-indigo-200 pb-2">Our Mission</h2>
        <p className="mb-4 text-gray-700">At IsoMere, our mission is threefold:</p>
        <ol className="list-decimal pl-6 mb-6 text-gray-700">
          <li className="mb-2">To push the boundaries of AI-generated storytelling, creating immersive and personalized narratives.</li>
          <li className="mb-2">To provide a platform where readers can explore endless story possibilities tailored to their preferences.</li>
          <li className="mb-2">To foster a community that embraces the fusion of technology and creativity in storytelling.</li>
        </ol>

        <h2 className="text-3xl font-semibold mb-4 text-sky-600 border-b-2 border-indigo-200 pb-2">What We Offer</h2>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li className="mb-2">AI-generated stories across various genres, each uniquely crafted for individual readers</li>
          <li className="mb-2">Customizable story parameters, allowing readers to influence plot, characters, and settings</li>
          <li className="mb-2">A vast library of AI-created worlds and characters to explore</li>
          <li className="mb-2">Interactive storytelling experiences where readers can make choices that shape the narrative</li>
          <li className="mb-2">Regular updates to our AI models, constantly improving the quality and diversity of our stories</li>
          <li className="mb-2">A community forum for discussing AI-generated stories and sharing experiences</li>
          <li className="mb-2">Insights into the AI technology behind our storytelling process</li>
        </ul>

        <h2 className="text-3xl font-semibold mb-4 text-sky-600 border-b-2 border-indigo-200 pb-2">Our Technology</h2>
        <p className="mb-6 text-gray-700">IsoMere utilizes state-of-the-art natural language processing and machine learning algorithms to generate stories. Our AI models are trained on a diverse range of literary works, ensuring rich and varied outputs. We continuously refine our technology to enhance creativity, coherence, and personalization in every story.</p>

        <h2 className="text-3xl font-semibold mb-4 text-sky-600 border-b-2 border-indigo-200 pb-2">Contact Us</h2>
        <p className="mb-6 text-gray-700">Have questions about our AI storytelling technology, suggestions for improvements, or just want to share your experience? We'd love to hear from you! Reach out to us at <a href="mailto:contact@IsoMere.com" className="text-indigo-600 hover:underline">contact@IsoMere.com</a> or through our social media channels.</p>

        <p className="text-lg font-semibold text-center text-sky-600">Embark on your personalized storytelling journey with IsoMere!</p>
      </div>
      <br /><br />
      <Footer />
    </>
  );
}