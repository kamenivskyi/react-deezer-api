import React from 'react';
import { Link } from 'react-router-dom';

import './collection-item.styles.scss';

export const CollectionItem = ({ name, picture_big, type, id }) => {
  console.log(picture_big);
  return (
    <div
      className='collection-item card'
      style={{ background: `url(${picture_big})` }}
    >
      <div className='card-content dark-text'>
        <span className='card-title'>{name}</span>
        <span>{type}</span>
      </div>
      <div className='card-action'>
        <Link to={`/genre${id}`}>Search by genre</Link>
      </div>
    </div>
  );
};
