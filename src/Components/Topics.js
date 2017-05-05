import React from 'react';
import { Route } from 'react-router-dom';

import Links from './Links';
import Topic from './Topic';

const IDs = ['123', '234', '345'];

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      { IDs.map(gid => <Links match={match} gid={gid} />) }
    </ul>
  </div>
);

export default Topics;
