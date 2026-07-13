import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AddStudentForm from "../components/AddStudentForm";
import StudentTable from "../components/StudentTable";
import API from "../api/api";

function Students() {
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    try {
      const res = await API.get("/students");
      setStudents(res.data.students);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-950 py-10 px-6">
        <div className="max-w-7xl mx-auto">

          <h1 className="text-4xl font-bold text-violet-400 mb-8">
            Student Management
          </h1>

          <AddStudentForm fetchStudents={fetchStudents} />

          <StudentTable
  students={students}
  fetchStudents={fetchStudents}
/>

        </div>
      </div>

      <Footer />
    </>
  );
}

export default Students;