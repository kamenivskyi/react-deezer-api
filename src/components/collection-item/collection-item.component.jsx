import React from 'react';
import { Link } from 'react-router-dom';

import './collection-item.styles.scss';

export const CollectionItem = ({ item, linkTo }) => {
  const { name, picture_big, type, id } = item;

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
        <Link to={linkTo + id} className='waves-effect indigo waves-light btn'>
          More info
        </Link>
      </div>
    </div>
  );
};
