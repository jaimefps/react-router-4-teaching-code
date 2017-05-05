import React from 'react';
import { Link } from 'react-router-dom';

const Links = ({ match, gid }) => (
  <li><Link to={`${match.url}/${gid}`}>{gid}</Link></li>
);

export default Links;
