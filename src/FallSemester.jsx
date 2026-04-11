import { Link } from "react-router-dom";

function FallSemester() {
  return (
    <div style={{ height: "100vh", padding: "50px" }}>
      <h1>Fall Semester</h1>

      <p>Your fall semester content goes here.</p>

      <Link to="/">← Back Home</Link>
    </div>
  );
}

export default FallSemester;
