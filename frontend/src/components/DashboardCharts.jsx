import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

function DashboardCharts({ stats }) {
  const performanceData = [
    { name: "Excellent", value: stats.excellentStudents },
    { name: "Good", value: stats.goodStudents },
    { name: "Average", value: stats.averageStudents },
    { name: "Poor", value: stats.poorStudents },
  ];

  const COLORS = ["#22c55e", "#3b82f6", "#facc15", "#ef4444"];

  return (
    <div className="grid md:grid-cols-2 gap-8 mt-10">
      <div className="bg-slate-900 rounded-2xl p-6 border border-violet-700">
        <h2 className="text-2xl font-bold text-violet-400 mb-6">
          Performance Distribution
        </h2>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={performanceData}>
            <XAxis dataKey="name" stroke="#ffffff" />
            <YAxis stroke="#ffffff" />
            <Tooltip />
            <Bar dataKey="value" fill="#8b5cf6" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-slate-900 rounded-2xl p-6 border border-violet-700">
        <h2 className="text-2xl font-bold text-violet-400 mb-6">
          Student Performance
        </h2>

        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={performanceData}
              dataKey="value"
              outerRadius={100}
              label
            >
              {performanceData.map((entry, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default DashboardCharts;