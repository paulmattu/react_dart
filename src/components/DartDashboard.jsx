import React, { useRef, useState } from "react";
import DartPlay from "./darts/DartPlay";

function DartDashboard() {
  const [play, setPlay] = useState(false);
  // State to manage the list of players
  const [players, setPlayers] = useState([]);
  const [playerName, setPlayerName] = useState("");
  console.log(players)

  // Event handler to add a player to the list
  const addPlayer = () => {
    if (playerName.trim()) {
      setPlayers([...players, playerName]);
      setPlayerName(""); // Clear the input after adding the player
    }
  };
  const removeLastPlayer = () => {
    setPlayers(players.slice(0, -1));

  };

  return (
    <div>
      {!play ? (
        <div>
          <p>DartDashboard</p>
          <h1>Player List</h1>
          <input
            type="text"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
            placeholder="Enter player name"
          />
          <button onClick={addPlayer}>Add Player</button>
          <button onClick={removeLastPlayer}>Remove Last Player</button>
          <ul>
            {players.map((player, index) => (
              <li key={index}>{player}</li>
            ))}
          </ul>
        </div>
      ) : (
        <DartPlay />
      )}
    </div>
  );
}

export default DartDashboard;
