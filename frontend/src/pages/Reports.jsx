import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Reports() {
  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto py-20 px-8">
        <h1 className="text-4xl font-bold mb-6">
          Reports
        </h1>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <p>
            Performance reports and AI-generated insights will appear here.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Reports;