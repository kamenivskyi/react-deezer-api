import React, { useEffect, useState } from 'react';

import { fetchData } from '../../utils/fetchData';

export const ArtistPage = ({ match }) => {
  const [data, setData] = useState(null);
  const [tracks, setTracks] = useState(null);

  useEffect(() => {
    let isCurrent = true;

    const { id } = match.params;

    fetchData(`https://api.deezer.com/artist/${id}`).then(res => {
      if (isCurrent) {
        setData(res);
      }
    });

    fetchData(`https://api.deezer.com/artist/${id}/top?limit=50`).then(res => {
      if (isCurrent) {
        setTracks(res.data);
      }
    });

    return () => (isCurrent = false);
  }, []);

  console.log(data);

  if (!data) return null;

  console.log(tracks);

  return (
    <div>
      <div className='col s12 m7'>
        <h2 className='header'>Horizontal Card</h2>
        <div className='card horizontal'>
          <div className='card-image'>
            <img src={data.picture_big} />
          </div>
          <div className='card-stacked'>
            <div className='card-content'>
              <p>Albums: {data.nb_album}</p>
              <p>Fans: {data.nb_fan}</p>
              <p>
                I am a very simple card. I am good at containing small bits of
                information.
              </p>
            </div>
            <div className='card-action'>
              <a href='#'>This is a link</a>
            </div>
          </div>
        </div>
      </div>
      <ul className='collection with-header'>
        <li className='collection-header'>
          <h4>Top tracks</h4>
        </li>

        {tracks &&
          tracks.map(item => (
            <li className='collection-item' key={`track${item.id}`}>
              <h5>{item.title}</h5>

              <audio src={item.preview} controls></audio>
            </li>
          ))}
      </ul>
    </div>
  );
};
