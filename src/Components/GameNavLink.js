import React from 'react';
import PropTypes from 'prop-types';

function GameNavLink({ shortName = '' }) {
  return (
    <a href={`#${shortName}`}>
      <div>{shortName}</div>
    </a>
  );
}

GameNavLink.propTypes = {
  shortName: PropTypes.string.isRequired,
};

export default GameNavLink;
