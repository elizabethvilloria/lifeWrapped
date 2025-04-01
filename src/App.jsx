import { useState } from "react";
import RecapCard from "./components/RecapCard";

const recapData = [
  { title: "Matcha Lattes Consumed", stat: "327 cups", emoji: "🍵" },
  { title: "Books You Read", stat: "18 total", emoji: "📚" },
  { title: "Photos Taken", stat: "1,642 snaps", emoji: "📸" },
  { title: "Hours Slept", stat: "2,130 hours", emoji: "😴" },
];

function App() {
  const [started, setStarted] = useState(false);
  const [currentCard, setCurrentCard] = useState(0);

  const handleNext = () => {
    if (currentCard < recapData.length - 1) {
      setCurrentCard(currentCard + 1);
    }
  };

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
        <>
          <RecapCard
            title={recapData[currentCard].title}
            stat={recapData[currentCard].stat}
            emoji={recapData[currentCard].emoji}
          />

          {currentCard < recapData.length - 1 ? (
            <button
              onClick={handleNext}
              style={{
                marginTop: "1rem",
                background: "#444",
                color: "#fff",
                padding: "0.75rem 2rem",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontSize: "1rem"
              }}
            >
              Next →
            </button>
          ) : (
            <p style={{ marginTop: "1rem", fontStyle: "italic" }}>That's a wrap! 🎉</p>
          )}
        </>
      )}
    </div>
  );
}

export default App;
