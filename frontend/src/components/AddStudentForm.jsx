import { useState } from "react";
import API from "../api/api";

function AddStudentForm({ fetchStudents }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    enrollmentNo: "",
    department: "",
    semester: "",
    attendance: "",
    marks: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await API.post("/students", formData);

      alert(response.data.message);
      fetchStudents();

      setFormData({
        name: "",
        email: "",
        enrollmentNo: "",
        department: "",
        semester: "",
        attendance: "",
        marks: "",
      });
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="bg-slate-900 border border-violet-700 rounded-3xl shadow-2xl p-10">

      <h2 className="text-3xl font-bold text-violet-400 mb-2">
        Add Student
      </h2>

      <p className="text-gray-400 mb-8">
        Fill in the student details below.
      </p>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >

        {/* Name */}

        <div>
          <label className="text-gray-300 block mb-2">
            Student Name
          </label>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            className="w-full p-3 bg-slate-800 rounded-xl border border-slate-700 focus:border-violet-500 focus:outline-none text-white"
          />
        </div>

        {/* Email */}

        <div>
          <label className="text-gray-300 block mb-2">
            Email
          </label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@gmail.com"
            className="w-full p-3 bg-slate-800 rounded-xl border border-slate-700 focus:border-violet-500 focus:outline-none text-white"
          />
        </div>

        {/* Enrollment - Full Width */}

        <div className="md:col-span-2">
          <label className="text-gray-300 block mb-2">
            Enrollment Number
          </label>

          <input
            type="text"
            name="enrollmentNo"
            value={formData.enrollmentNo}
            onChange={handleChange}
            placeholder="23CS001"
            className="w-full p-3 bg-slate-800 rounded-xl border border-slate-700 focus:border-violet-500 focus:outline-none text-white"
          />
        </div>

        {/* Department */}

        <div>
          <label className="text-gray-300 block mb-2">
            Department
          </label>

          <input
            type="text"
            name="department"
            value={formData.department}
            onChange={handleChange}
            placeholder="Computer Engineering"
            className="w-full p-3 bg-slate-800 rounded-xl border border-slate-700 focus:border-violet-500 focus:outline-none text-white"
          />
        </div>

        {/* Semester */}

        <div>
          <label className="text-gray-300 block mb-2">
            Semester
          </label>

          <input
            type="number"
            name="semester"
            value={formData.semester}
            onChange={handleChange}
            placeholder="5"
            className="w-full p-3 bg-slate-800 rounded-xl border border-slate-700 focus:border-violet-500 focus:outline-none text-white"
          />
        </div>

        {/* Attendance */}

        <div>
          <label className="text-gray-300 block mb-2">
            Attendance (%)
          </label>

          <input
            type="number"
            name="attendance"
            value={formData.attendance}
            onChange={handleChange}
            placeholder="90"
            className="w-full p-3 bg-slate-800 rounded-xl border border-slate-700 focus:border-violet-500 focus:outline-none text-white"
          />
        </div>

        {/* Marks */}

        <div>
          <label className="text-gray-300 block mb-2">
            Marks (%)
          </label>

          <input
            type="number"
            name="marks"
            value={formData.marks}
            onChange={handleChange}
            placeholder="85"
            className="w-full p-3 bg-slate-800 rounded-xl border border-slate-700 focus:border-violet-500 focus:outline-none text-white"
          />
        </div>

        {/* Button */}

        <div className="md:col-span-2 mt-2">
          <button
            type="submit"
            className="w-full py-4 rounded-xl bg-gradient-to-r from-violet-600 to-purple-700 hover:from-violet-700 hover:to-purple-800 transition-all duration-300 font-bold text-lg text-white shadow-lg"
          >
            ➕ Add Student
          </button>
        </div>

      </form>
    </div>
  );
}

export default AddStudentForm;