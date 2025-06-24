import { useState } from "react";

function Home(props) {
  const [count, setCount] = useState(0);
    
  return (
    <div style={{ textAlign: "center", marginBottom: "20px" }}>
      <h1 style={{ fontSize: "32px", marginBottom: "10px" }}>
        {props.name} Home - <span style={{ color: "#888" }}>Manu Sriram</span>
      </h1>
      <button
        onClick={() => setCount(count + 1)}
        style={{
          padding: "12px 24px",
          fontSize: "16px",
          backgroundColor: "#61dafb",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontWeight: "bold",
          marginBottom: "10px",
        }}
      >
        Click
      </button>
      <p style={{ fontSize: "18px" }}>Clicked: {count} times</p>
    </div>
  );
}

export default Home;
