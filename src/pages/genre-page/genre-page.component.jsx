import React, { useEffect, useState } from 'react';

import { fetchData } from '../../utils/fetchData';
import { CollectionItem } from '../../components/collection-item/collection-item.component';
import Slider from 'react-slick';
import { settings } from '../../utils/slick.settings';

export const GenrePage = ({
  match: {
    params: { id }
  }
}) => {
  const [artists, setArtists] = useState(null);

  useEffect(() => {
    let isCurrent = true;

    fetchData(`https://api.deezer.com/genre/${id}/artists`).then(res => {
      if (isCurrent) {
        setArtists(res.data);
      }
    });

    return () => (isCurrent = false);
  }, []);

  console.log(artists);

  if (!artists) return null;

  return (
    <>
      <h2>Artists:</h2>
      <div className='row'>
        <Slider {...settings}>
          {artists.map(artist => (
            <div className='col s12 m6 l3' key={`genre${artist.id}`}>
              <CollectionItem item={artist} linkTo={'/artist/'} />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};
