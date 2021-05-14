function splitID(id) {
  // As of now, game entries ID start with 'gameinfo'
  const identifier = 'gameinfo';
  return id ? id.substring(identifier.length + 1) : '';
}

export default splitID;
