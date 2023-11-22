import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
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
            const { firstName, lastName, email, phoneNo,selectedOption, timestamp } = doc.data();
            const formattedTimestamp = timestamp
              ? new Date(timestamp.seconds * 1000).toLocaleString()
              : "";
            newData.push({
              firstName,
              lastName,
              email,
              phoneNo,selectedOption,
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
       <h2>Registerd Student Data</h2>
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
              <th>course</th>
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
                <td>{student.selectedOption}</td>
                <td>{student.formattedTimestamp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}
