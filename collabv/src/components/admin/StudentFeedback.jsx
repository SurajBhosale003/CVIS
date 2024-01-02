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
          const studentsRef = collection(db, "feedback");
          const studentsSnapshot = await getDocs(studentsRef);
          const newData = [];
  
          studentsSnapshot.forEach((doc) => {
            const { firstName, lastName, CompanyName, rating, timestamp } = doc.data();
            const formattedTimestamp = timestamp
              ? new Date(timestamp.seconds * 1000).toLocaleString()
              : "";
            newData.push({
              firstName,
              lastName,
              CompanyName,
              rating,
              formattedTimestamp,
            });
          });
  
          setStudentData(newData);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching student data:", error);
          setLoading(false);
        }
      };
  
      fetchData();
    }, []);
  
  return (
    <div>
       <h2>Customer Feedback Section</h2>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {studentData.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>CompanyName</th>
              <th>Rating</th>
              <th>Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {studentData.map((student, index) => (
              <tr key={index}>
                <td>{student.firstName}</td>
                <td>{student.lastName}</td>
                <td>{student.CompanyName}</td>
                <td>{student.rating}</td>
                <td>{student.formattedTimestamp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}
