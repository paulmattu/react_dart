import React, { useState } from "react";
import DartPlay from "./darts/DartPlay";
import PlayerCard from "./darts/PlayerCard";

function DartDashboard() {
  const [play, setPlay] = useState(false);
  // State to manage the list of players
  const [players, setPlayers] = useState([]);
  const [playerName, setPlayerName] = useState("");

  console.log("Players State:", players);

  // Event handler to add a player to the list
  const addPlayer = () => {
    console.log("Add Player Called");
    if (playerName.trim()) {
      const newPlayer = { name: playerName, score: 0, throws: [] };
      console.log("New Player:", newPlayer);
      setPlayers([...players, newPlayer]);
      setPlayerName(""); // Clear the name input after adding the player
    } else {
      console.log("Invalid Input for Player");
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
          <button onClick={removeLastPlayer} disabled={players.length === 0}>
            Remove Last Player
          </button>

          <ul>
            {players.map((player, index) => (
              <li key={index}>
                <PlayerCard index={index} player={player} />
              </li>
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
