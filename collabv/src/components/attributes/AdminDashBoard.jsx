import  { Component } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../Firebase';

class AdminDashboard extends Component {
  state = {
    studentData: [],
  };

  async componentDidMount() {
    const studentsRef = collection(db, 'studentsInfo');
    const studentsSnapshot = await getDocs(studentsRef);
    const studentData = [];
    studentsSnapshot.forEach((doc) => {
      studentData.push(doc.data());
    });
    this.setState({ studentData });
  }

  render() {
    return (
      <div>
        <h2>Admin Dashboard</h2>
        {/* Display student data here using this.state.studentData */}
      </div>
    );
  }
}

export default AdminDashboard;
