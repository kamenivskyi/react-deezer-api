import React, { useEffect, useState } from 'react';

import { fetchData } from '../../utils/fetchData';
import { CollectionItem } from '../collection-item/collection-item.component';

import './genre-collection.styles.scss';

export const GenreCollection = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const response = fetchData('https://api.deezer.com/genre').then(response =>
      setData(response.data)
    );

    console.log(response);
  }, []);

  console.log(data);

  if (!data) return null;

  return (
    <div className='row'>
      {data.map(item => (
        <div className='col s12 m6 l3' key={`genre${item.id}`}>
          <CollectionItem {...item} />
        </div>
      ))}
    </div>
  );
};
