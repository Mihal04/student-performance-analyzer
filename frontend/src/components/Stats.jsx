import { useEffect, useState } from "react";
import API from "../api/api";

function Stats() {
  const [stats, setStats] = useState({
    totalStudents: 0,
    averageMarks: 0,
    averageAttendance: 0,
    excellentStudents: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await API.get("/dashboard");

        setStats({
          totalStudents: res.data.totalStudents,
          averageMarks: res.data.averageMarks,
          averageAttendance: res.data.averageAttendance,
          excellentStudents: res.data.excellentStudents,
        });
      } catch (error) {
        console.error("Error fetching dashboard stats:", error);
      }
    };

    fetchStats();
  }, []);

  return (
    <section className="py-20 bg-gradient-to-r from-violet-700 via-purple-700 to-fuchsia-700 text-white">

      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

        <div>
          <h1 className="text-5xl font-bold">{stats.totalStudents}</h1>
          <p>Total Students</p>
        </div>

        <div>
          <h1 className="text-5xl font-bold">{stats.averageMarks}%</h1>
          <p>Average Marks</p>
        </div>

        <div>
          <h1 className="text-5xl font-bold">{stats.averageAttendance}%</h1>
          <p>Attendance</p>
        </div>

        <div>
          <h1 className="text-5xl font-bold">{stats.excellentStudents}</h1>
          <p>Excellent Students</p>
        </div>

      </div>

    </section>
  );
}

export default Stats;