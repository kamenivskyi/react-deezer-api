import React, { useEffect, useState } from 'react';

import { fetchData } from '../../utils/fetchData';
import { CollectionItem } from '../../components/collection-item/collection-item.component';

export const GenrePage = ({
  match: {
    params: { id }
  }
}) => {
  const [artists, setArtists] = useState(null);

  useEffect(() => {
    fetchData(`https://api.deezer.com/genre/${id}/artists`).then(res =>
      setArtists(res.data)
    );
  }, []);

  console.log(artists);

  if (!artists) return null;

  return (
    <>
      <h2>Artists:</h2>
      <div className='row'>
        {artists.map(artist => (
          <div className='col s12 m6 l3' key={`genre${artist.id}`}>
            <CollectionItem item={artist} linkTo={'/artist/'} />
          </div>
        ))}
      </div>
    </>
  );
};
