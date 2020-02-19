import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';

import { fetchData } from '../../utils/fetchData';
import { settings } from '../../utils/slick.settings';
import { CollectionItem } from '../collection-item/collection-item.component';

import './genre-collection.styles.scss';

export const GenreCollection = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    let isCurrent = true;

    const response = fetchData('https://api.deezer.com/genre').then(
      response => {
        if (isCurrent) {
          setData(response.data);
        }
      }
    );

    return () => (isCurrent = false);
  }, []);

  console.log(data);

  if (!data) return null;

  return (
    <div className='genre-collection'>
      <div className='row'>
        <Slider {...settings}>
          {data.map(item => (
            <div className='col s12 m6 l3' key={`genre${item.id}`}>
              <CollectionItem linkTo={'/genre/'} item={item} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
