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
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-4 py-8 font-sans text-center">
      <h1 className="text-3xl font-bold mb-2">✨ Life Wrapped ✨</h1>
      <p className="mb-8 text-gray-300 max-w-md">
        Your personal highlight reel — custom, visual, and beautifully you.
      </p>

      {!started && (
        <button
          onClick={() => setStarted(true)}
          className="bg-white text-gray-900 font-medium px-6 py-3 rounded-xl hover:bg-gray-200 transition"
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
              className="mt-4 bg-gray-700 text-white font-medium px-6 py-2 rounded-lg hover:bg-gray-600 transition"
            >
              Next →
            </button>
          ) : (
            <p className="mt-4 italic text-gray-400">That's a wrap! 🎉</p>
          )}
        </>
      )}

<footer className="mt-10 text-sm text-gray-500">
  Built with ☕️ and love by elizabethvilloria
</footer>

    </div>
  );
}

export default App;
