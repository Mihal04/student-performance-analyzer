import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import API from "../api/api";
import DashboardCharts from "../components/DashboardCharts";

function Dashboard() {
  const [stats, setStats] = useState({
    totalStudents: 0,
    averageMarks: 0,
    averageAttendance: 0,
    excellentStudents: 0,
    goodStudents: 0,
    averageStudents: 0,
    poorStudents: 0,
  });

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const res = await API.get("/dashboard");
        setStats(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDashboard();
  }, []);

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-950 text-white py-10 px-6">
        <div className="max-w-7xl mx-auto">

          <h1 className="text-5xl font-bold text-violet-400 mb-10">
            Dashboard
          </h1>

          {/* Statistics Cards */}

          <div className="grid md:grid-cols-4 gap-6 mb-10">

            <div className="bg-slate-900 rounded-2xl p-6 border border-violet-700">
              <h2 className="text-gray-400">Students</h2>
              <p className="text-5xl font-bold text-violet-400 mt-4">
                {stats.totalStudents}
              </p>
            </div>

            <div className="bg-slate-900 rounded-2xl p-6 border border-green-700">
              <h2 className="text-gray-400">Average Marks</h2>
              <p className="text-5xl font-bold text-green-400 mt-4">
                {stats.averageMarks}%
              </p>
            </div>

            <div className="bg-slate-900 rounded-2xl p-6 border border-blue-700">
              <h2 className="text-gray-400">Attendance</h2>
              <p className="text-5xl font-bold text-blue-400 mt-4">
                {stats.averageAttendance}%
              </p>
            </div>

            <div className="bg-slate-900 rounded-2xl p-6 border border-yellow-600">
              <h2 className="text-gray-400">Excellent</h2>
              <p className="text-5xl font-bold text-yellow-400 mt-4">
                {stats.excellentStudents}
              </p>
            </div>

          </div>

          {/* AI Insights */}

          <div className="bg-slate-900 rounded-2xl p-8 border border-violet-700">

            <h2 className="text-3xl font-bold text-violet-400 mb-8">
              AI Performance Insights
            </h2>

            <div className="grid md:grid-cols-4 gap-6">

              <div className="bg-green-600 rounded-xl p-6">
                <h3 className="text-xl font-bold">Excellent</h3>
                <p className="text-4xl mt-3">{stats.excellentStudents}</p>
              </div>

              <div className="bg-blue-600 rounded-xl p-6">
                <h3 className="text-xl font-bold">Good</h3>
                <p className="text-4xl mt-3">{stats.goodStudents}</p>
              </div>

              <div className="bg-yellow-500 rounded-xl p-6">
                <h3 className="text-xl font-bold">Average</h3>
                <p className="text-4xl mt-3">{stats.averageStudents}</p>
              </div>

              <div className="bg-red-600 rounded-xl p-6">
                <h3 className="text-xl font-bold">Poor</h3>
                <p className="text-4xl mt-3">{stats.poorStudents}</p>
              </div>

            </div>

          </div>

        </div>
      </div>

      <DashboardCharts stats={stats} />

      <Footer />
    </>
  );
}

export default Dashboard;