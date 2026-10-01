import { useState } from "react";
import Header from "./components/Header";
import StudentCard from "./components/StudentCard";
import AddStudentForm from "./components/AddStudentForm";
import Footer from "./components/Footer";

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Ana", major: "IT", score: 82 },
    { id: 2, name: "Boon", major: "CS", score: 58 },
    { id: 3, name: "Chai", major: "IT", score: 74 },
    { id: 4, name: "Dara", major: "CS", score: 91 },
    { id: 5, name: "Eve", major: "IT", score: 55 },
  ]);
  const [showPassedOnly, setShowPassedOnly] = useState(false);

  const visibleStudents = showPassedOnly
    ? students.filter((student) => student.score >= 60)
    : students;

  function handleDeleteStudent(id) {
    setStudents((currentStudents) =>
      currentStudents.filter((student) => student.id !== id),
    );
  }

  function handleAddStudent(newStudent) {
    setStudents((currentStudents) => [...currentStudents, newStudent]);
  }

  return (
    <>
      <Header />
      <AddStudentForm onAdd={handleAddStudent} />
      <p className="page student-count">
        Current number of students: {students.length}
      </p>
      <button
        className="page filter-toggle"
        onClick={() => setShowPassedOnly(!showPassedOnly)}>
        {showPassedOnly ? "Show All" : "Show Passed Only"}
      </button>

      <main className="page student-grid">
        {visibleStudents.map((student) => (
          <StudentCard
            key={student.id}
            id={student.id}
            name={student.name}
            major={student.major}
            score={student.score}
            onDelete={handleDeleteStudent}
          />
        ))}
      </main>
      <Footer count={students.length} />
    </>
  );
}

export default App;
