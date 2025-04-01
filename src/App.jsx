import RecapCard from "./components/RecapCard";

function App() {
  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif", textAlign: "center" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>✨ Life Wrapped ✨</h1>
      <p style={{ marginBottom: "2rem" }}>
        Your personal highlight reel — custom, visual, and beautifully you.
      </p>

      <RecapCard
        title="Matcha Lattes Consumed"
        stat="327 cups"
        emoji="🍵"
      />
    </div>
  );
}

export default App;
