
import { useEffect, useState } from "react";
import { getDocs, deleteDoc, collection, doc } from "firebase/firestore";
import { db } from "../../Firebase";

import "./AdminDashBoard.css";

export default function StudentRegistration() {
  const [studentData, setStudentData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const studentsRef = collection(db, "Student register");
        const studentsSnapshot = await getDocs(studentsRef);
        const newData = [];

        studentsSnapshot.forEach((doc) => {
          const { firstName, lastName, email, phoneNo, selectedOption, selectedLevel,timestamp } = doc.data();
          const formattedTimestamp = timestamp
            ? new Date(timestamp.seconds * 1000).toLocaleString()
            : "";
          newData.push({
            id: doc.id, // Add the document ID for reference
            firstName,
            lastName,
            email,
            phoneNo,
            selectedOption,
            selectedLevel,
            formattedTimestamp,
          });
        });

        setStudentData(newData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching student data:", error);
        setError("Error fetching student data");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this student's data?");
    if (confirmDelete) {
      try {
        const studentRef = doc(db, "Student register", id);
        await deleteDoc(studentRef);

        setStudentData((prevData) => prevData.filter((student) => student.id !== id));
      } catch (error) {
        console.error("Error deleting student data:", error);
        setError("Error deleting student data");
      }
    }
  };

  return (
    <div>
      <h2>Registered Student Data</h2>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {studentData.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Course</th>
              <th>Level</th>
              <th>Timestamp</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {studentData.map((student) => (
              <tr key={student.id}>
                <td>{student.firstName}</td>
                <td>{student.lastName}</td>
                <td>{student.email}</td>
                <td>{student.phoneNo}</td>
                <td>{student.selectedOption}</td>
                <td>{student.selectedLevel}</td>
                <td>{student.formattedTimestamp}</td>
                <td>
                  <button onClick={() => handleDelete(student.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
