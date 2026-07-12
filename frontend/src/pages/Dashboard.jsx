import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import API from "../api/api";

function Dashboard() {
  const [stats, setStats] = useState({
    totalStudents: 0,
    averageMarks: 0,
    averageAttendance: 0,
    excellentStudents: 0,
  });

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const res = await API.get("/dashboard");

        setStats({
          totalStudents: res.data.totalStudents,
          averageMarks: res.data.averageMarks,
          averageAttendance: res.data.averageAttendance,
          excellentStudents: res.data.excellentStudents,
        });
      } catch (error) {
        console.error("Error fetching dashboard:", error);
      }
    };

    fetchDashboard();
  }, []);

  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto py-20 px-8">
        <h1 className="text-4xl font-bold mb-8 text-violet-700">
          Dashboard
        </h1>

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-white shadow-lg rounded-xl p-6">
            <h2 className="text-xl font-bold">Students</h2>
            <p className="text-4xl mt-3 text-violet-600">
              {stats.totalStudents}
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6">
            <h2 className="text-xl font-bold">Average Marks</h2>
            <p className="text-4xl mt-3 text-green-600">
              {stats.averageMarks}%
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6">
            <h2 className="text-xl font-bold">Attendance</h2>
            <p className="text-4xl mt-3 text-blue-600">
              {stats.averageAttendance}%
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6">
            <h2 className="text-xl font-bold">Excellent Students</h2>
            <p className="text-4xl mt-3 text-purple-600">
              {stats.excellentStudents}
            </p>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}

export default Dashboard;