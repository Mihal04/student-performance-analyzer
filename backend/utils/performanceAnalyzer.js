export const analyzePerformance = (marks, attendance) => {
  let performance = "";
  let recommendation = "";
  let riskLevel = "";

  if (marks >= 85 && attendance >= 85) {
    performance = "Excellent";
    recommendation =
      "Excellent performance! Continue practicing and revise consistently.";
    riskLevel = "Low";
  } else if (marks >= 70 && attendance >= 75) {
    performance = "Good";
    recommendation =
      "Good progress. Spend extra time on difficult topics to improve further.";
    riskLevel = "Low";
  } else if (marks >= 50 && attendance >= 60) {
    performance = "Average";
    recommendation =
      "Improve attendance and maintain a daily study schedule.";
    riskLevel = "Medium";
  } else {
    performance = "Poor";
    recommendation =
      "Focus on basics, increase attendance, and seek guidance from teachers.";
    riskLevel = "High";
  }

  return {
    performance,
    recommendation,
    riskLevel,
  };
};