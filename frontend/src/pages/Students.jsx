import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AddStudentForm from "../components/AddStudentForm";
import StudentTable from "../components/StudentTable";

function Students() {
  const [students] = useState([]);

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-950 py-10 px-6">
        <div className="max-w-7xl mx-auto">

          <h1 className="text-4xl font-bold text-violet-400 mb-8">
            Student Management
          </h1>

          <AddStudentForm />

          <StudentTable students={students} />

        </div>
      </div>

      <Footer />
    </>
  );
}

export default Students;