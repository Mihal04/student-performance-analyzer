import Student from "../models/Student.js";

export const getDashboardStats = async (req, res) => {
  try {
    const students = await Student.find();

    const totalStudents = students.length;

    const averageMarks =
      totalStudents > 0
        ? (
            students.reduce((sum, student) => sum + student.marks, 0) /
            totalStudents
          ).toFixed(2)
        : 0;

    const averageAttendance =
      totalStudents > 0
        ? (
            students.reduce((sum, student) => sum + student.attendance, 0) /
            totalStudents
          ).toFixed(2)
        : 0;

    const excellentStudents = students.filter(
      (student) => student.performance === "Excellent"
    ).length;

    const goodStudents = students.filter(
      (student) => student.performance === "Good"
    ).length;

    const averageStudents = students.filter(
      (student) => student.performance === "Average"
    ).length;

    const poorStudents = students.filter(
      (student) => student.performance === "Poor"
    ).length;

    res.status(200).json({
      success: true,
      totalStudents,
      averageMarks,
      averageAttendance,
      excellentStudents,
      goodStudents,
      averageStudents,
      poorStudents,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};