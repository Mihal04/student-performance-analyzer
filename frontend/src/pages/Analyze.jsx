import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Analyze() {
  return (
    <>
      <Navbar />

      <div className="max-w-5xl mx-auto py-20 px-8">
        <h1 className="text-4xl font-bold mb-8">
          Analyze Student Performance
        </h1>

        <form className="bg-white shadow-lg rounded-xl p-8 space-y-6">

          <input
            type="text"
            placeholder="Student Name"
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="number"
            placeholder="Marks (%)"
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="number"
            placeholder="Attendance (%)"
            className="w-full border p-3 rounded-lg"
          />

          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            Analyze
          </button>

        </form>
      </div>

      <Footer />
    </>
  );
}

export default Analyze;