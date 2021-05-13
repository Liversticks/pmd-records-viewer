import React from 'react';

function GameEntry() {
  const schema = {
    Title: 'Pokemon Mystery Dungeon: Blue Rescue Team',
    Categories: [],
  };

  return (
    <div>
      <h2>{schema.Title}</h2>
      { schema.Categories.map()}
    </div>
  );
}

export default GameEntry;
