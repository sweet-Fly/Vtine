import { useState } from "react";
import "./App.css";

const phrases = [
  "NO",
  "Are you sure?",
  "Really sure?",
  "Babie please",
  "Don't do this to me",
  "I'm gonna cry..",
  "Sirapa? :(",
  "You're breaking my heart",
];
function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }
  return (
    <div className="valentine-container">
      {yesPressed ? (
        <>
          <img alt="bears kissing" src="\puuung-kiss-puuung.gif" />
          <div className="text">
            Do you have a 100 words for me? 'Cause i have only five.
          </div>
        </>
      ) : (
        <>
          <img alt="bouquet" src="public\ventine.gif" className="bouquet" />

          <div className="text1"> Will you be my valentine, potato?</div>
          <div>
            <button
              className="yesButton"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              YES
            </button>
            <button onClick={handleNoClick} className="noButton">
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
