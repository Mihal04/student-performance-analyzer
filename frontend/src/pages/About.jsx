import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Navbar />

      <div className="max-w-5xl mx-auto py-20 px-8">
        <h1 className="text-4xl font-bold mb-6">
          About StudentAI
        </h1>

        <p className="text-lg text-gray-600 leading-8">
          StudentAI is an AI-powered Student Performance Analyzer designed
          to help students, teachers, and educational institutions analyze
          academic performance, identify strengths and weaknesses, and
          receive personalized recommendations for improvement.
        </p>
      </div>

      <Footer />
    </>
  );
}

export default About;