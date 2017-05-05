import React from 'react';

const Topic = ({ match }) => (
  <div>
    <h3> {match.params.gameId} </h3>
  </div>
);

export default Topic;
