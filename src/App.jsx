import { useState } from "react";
// import ListUser from "./ListUser";
import Home  from "./home";

function App() {
  const [user, setUser] = useState({ name: "", email: "" });
  const [userList, setUserList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.name && user.email) {
      setUserList([...userList, user]);
      setUser({ name: "", email: "" });
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f8f9fa",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          padding: "40px",
          borderRadius: "10px",
          boxShadow: "0 0 15px rgba(0, 0, 0, 0.1)",
          width: "90%",
          maxWidth: "600px",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>🧑‍💻 Manu's User Form</h2>

        <form onSubmit={handleSubmit} style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
          <input
            type="text"
            placeholder="Name"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            style={{ flex: 1, padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
          />
          <input
            type="email"
            placeholder="Email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            style={{ flex: 1, padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
          />
          <button
            type="submit"
            style={{
              padding: "10px 20px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Submit
          </button>
        </form>

        {/* Submitted Users */}
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={{ borderBottom: "1px solid #ccc", padding: "10px" }}>Name</th>
              <th style={{ borderBottom: "1px solid #ccc", padding: "10px" }}>Email</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((u, i) => (
              <tr key={i}>
                <td style={{ borderBottom: "1px solid #eee", padding: "10px" }}>{u.name}</td>
                <td style={{ borderBottom: "1px solid #eee", padding: "10px" }}>{u.email}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* External Users from API */}
        <div style={{ marginTop: "30px" }}>
          <h3 style={{ marginBottom: "10px" }}>Fetched Users</h3>
          {/* <ListUser /> */}
            <Home name={"hello"} />
        </div>
      </div>
    
    </div>
  );
}

export default App;
