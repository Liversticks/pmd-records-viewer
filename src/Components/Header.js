import React from 'react';
import PropTypes from 'prop-types';
import GameNavLink from './GameNavLink';

function Header({ gameList = [] }) {
  return (
    <header>
      <span id="siteTitle">PMD Records Viewer</span>
      <nav>
        { gameList.map((sn) => (
          <GameNavLink shortName={sn} />
        ))}
      </nav>
    </header>
  );
}

Header.propTypes = {
  gameList: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Header;
