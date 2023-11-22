import   StudentRegistration from "./StudentRegistration";
import   StudentFeedback from "./StudentFeedback";

export default function AdminDashBoard() {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <StudentRegistration/>
      <StudentFeedback/>
    </div>
  )
}
