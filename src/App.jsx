import { useState } from "react";
import RecapCard from "./components/RecapCard";

function App() {
  const [started, setStarted] = useState(false);

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif", textAlign: "center" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>✨ Life Wrapped ✨</h1>
      <p style={{ marginBottom: "2rem" }}>
        Your personal highlight reel — custom, visual, and beautifully you.
      </p>

      {!started && (
        <button
          onClick={() => setStarted(true)}
          style={{
            background: "#111",
            color: "#fff",
            padding: "1rem 2rem",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "1rem"
          }}
        >
          Start Your Wrapped
        </button>
      )}

      {started && (
        <RecapCard
          title="Matcha Lattes Consumed"
          stat="327 cups"
          emoji="🍵"
        />
      )}
    </div>
  );
}

export default App;
