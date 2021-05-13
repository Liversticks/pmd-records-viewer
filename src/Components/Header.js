import React from 'react';

function Header() {
  return (
    <header>
      <div className="main" />
      <nav>
        { ['BRT', 'RRT'].map((shortName) => (
          <div>
            {shortName}
          </div>
        ))}
      </nav>
    </header>
  );
}

export default Header;
