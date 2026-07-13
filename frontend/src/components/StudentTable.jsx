function StudentTable({ students = [] }) {
  return (
    <div className="mt-10 bg-slate-900 rounded-2xl shadow-xl border border-violet-700 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-white">
          <thead className="bg-violet-700">
            <tr>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Enrollment</th>
              <th className="p-4 text-left">Department</th>
              <th className="p-4 text-left">Semester</th>
              <th className="p-4 text-left">Attendance</th>
              <th className="p-4 text-left">Marks</th>
              <th className="p-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {students.length === 0 ? (
              <tr>
                <td
                  colSpan="7"
                  className="text-center py-10 text-gray-400"
                >
                  No Students Found
                </td>
              </tr>
            ) : (
              students.map((student) => (
                <tr
                  key={student._id}
                  className="border-t border-slate-700 hover:bg-slate-800"
                >
                  <td className="p-4">{student.name}</td>
                  <td className="p-4">{student.enrollmentNo}</td>
                  <td className="p-4">{student.department}</td>
                  <td className="p-4">{student.semester}</td>
                  <td className="p-4">{student.attendance}%</td>
                  <td className="p-4">{student.marks}%</td>

                  <td className="p-4 text-center space-x-2">
                    <button className="bg-yellow-500 hover:bg-yellow-600 px-3 py-1 rounded">
                      Edit
                    </button>

                    <button className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded">
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StudentTable;