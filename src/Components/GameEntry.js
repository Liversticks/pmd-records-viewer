import React from 'react';

function GameEntry() {
  const schema = {
    id: 'gameinfo-BRT',
    Title: 'Pokemon Mystery Dungeon: Blue Rescue Team',
    Categories: [],
  };

  return (
    <div>
      <h2>{schema.Title}</h2>
      { schema.Categories.map((x) => (
        <h3>{x.Name}</h3>
      ))}
    </div>
  );
}

export default GameEntry;
