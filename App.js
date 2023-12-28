import React, { useState } from "react";
import "./styles.css";

var emojiSymbols = {
  "🎄": "Christmas Tree",
  "❤️": "Red Heart",
  "😊": "Smiling Face with Smiling Eyes",
  "🤔": "Thinking Face",
  "👇": "Backhand Index Point Down",
  "👍": "Thumbs Up",
  "😑": "Expresssionless Face",
  "🤣": "Rolling On The Floor Laughing",
  "😭": "Loudly Crying Face",
  "😡": "Enraged Face",
  "❤️": "Love",
  "🏰": "Castle",
};

var emojiWeHave = Object.keys(emojiSymbols);

export default function App() {
  var [meaning, setMeaning] = useState(" ");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiSymbols[userInput];
    if (meaning === undefined) {
      meaning = "we don't have this in our database";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiSymbols[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Home of Emoji Meanings</h1>

      <input onChange={emojiInputHandler} />
      <h2>{meaning}</h2>
      <h3> emoji's we have</h3>
      {emojiWeHave.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "3rem", padding: "1rem", cursor: "pointer" }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
