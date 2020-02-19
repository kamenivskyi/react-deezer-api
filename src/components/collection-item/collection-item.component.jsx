import React from 'react';

import './collection-item.styles.scss';

export const CollectionItem = ({ name, picture_medium, type }) => {
  return (
    <div
      className='collection-item card'
      style={{ background: `url(${picture_medium})` }}
    >
      <div className='card-content white-text'>
        <span className='card-title'>{name}</span>
        <span>{type}</span>
      </div>
      <div className='card-action'>
        <a href='#'>This is a link</a>
        <a href='#'>This is a link</a>
      </div>
    </div>
  );
};
