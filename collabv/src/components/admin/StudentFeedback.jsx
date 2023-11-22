import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../Firebase";

import "./AdminDashBoard.css";


export default function StudentFeedback() {

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
            const { firstName, lastName, email, phoneNo, timestamp } = doc.data();
            const formattedTimestamp = timestamp
              ? new Date(timestamp.seconds * 1000).toLocaleString()
              : "";
            newData.push({
              firstName,
              lastName,
              email,
              phoneNo,
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
  
  return (
    <div>
       <h2>Student Feedback Section</h2>
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
              <th>Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {studentData.map((student, index) => (
              <tr key={index}>
                <td>{student.firstName}</td>
                <td>{student.lastName}</td>
                <td>{student.email}</td>
                <td>{student.phoneNo}</td>
                <td>{student.formattedTimestamp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}
