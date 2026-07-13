import { useState } from "react";

function AddStudentForm() {
  const [formData, setFormData] = useState({
    name: "",
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

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Student Added Successfully!");

    setFormData({
      name: "",
      enrollmentNo: "",
      department: "",
      semester: "",
      attendance: "",
      marks: "",
    });
  };

  return (
    <div className="bg-slate-900 rounded-2xl shadow-xl p-8 border border-violet-700">
      <h2 className="text-3xl font-bold text-violet-400 mb-6">
        Add Student
      </h2>

      <form
        onSubmit={handleSubmit}
        className="grid md:grid-cols-2 gap-6"
      >
        <div>
          <label className="block text-gray-300 mb-2">
            Student Name
          </label>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter student name"
            className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 text-white"
          />
        </div>

        <div>
          <label className="block text-gray-300 mb-2">
            Enrollment Number
          </label>

          <input
            type="text"
            name="enrollmentNo"
            value={formData.enrollmentNo}
            onChange={handleChange}
            placeholder="23CS001"
            className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 text-white"
          />
        </div>

        <div>
          <label className="block text-gray-300 mb-2">
            Department
          </label>

          <input
            type="text"
            name="department"
            value={formData.department}
            onChange={handleChange}
            placeholder="Computer Engineering"
            className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 text-white"
          />
        </div>

        <div>
          <label className="block text-gray-300 mb-2">
            Semester
          </label>

          <input
            type="number"
            name="semester"
            value={formData.semester}
            onChange={handleChange}
            placeholder="5"
            className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 text-white"
          />
        </div>

        <div>
          <label className="block text-gray-300 mb-2">
            Attendance (%)
          </label>

          <input
            type="number"
            name="attendance"
            value={formData.attendance}
            onChange={handleChange}
            placeholder="92"
            className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 text-white"
          />
        </div>

        <div>
          <label className="block text-gray-300 mb-2">
            Marks (%)
          </label>

          <input
            type="number"
            name="marks"
            value={formData.marks}
            onChange={handleChange}
            placeholder="88"
            className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 text-white"
          />
        </div>

        <div className="md:col-span-2">
          <button
            type="submit"
            className="w-full bg-violet-600 hover:bg-violet-700 py-3 rounded-lg text-white font-semibold"
          >
            Add Student
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddStudentForm;