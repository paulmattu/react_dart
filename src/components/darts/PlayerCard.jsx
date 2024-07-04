import React from 'react';

function PlayerCard({ index, player }) {
  return (
    <div>
      <h3>Player {index+1}: {player.name}</h3>
    </div>
  );
}

export default PlayerCard;