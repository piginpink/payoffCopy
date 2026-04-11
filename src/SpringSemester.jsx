import { Link } from "react-router-dom";

function SpringSemester() {
  return (
    <div style={{ height: "100vh", padding: "50px" }}>
      <h1>Spring Semester</h1>

      <p>Your spring semester content goes here.</p>

      <Link to="/">← Back Home</Link>
    </div>
  );
}

export default SpringSemester;
