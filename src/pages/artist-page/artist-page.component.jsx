import React, { useEffect, useState } from 'react';
import { fetchData } from '../../utils/fetchData';

export const ArtistPage = ({ match }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData(`https://api.deezer.com/artist/${match.params.id}`).then(res =>
      setData(res)
    );

    if (data) {
      fetchData(
        `https://api.deezer.com/artist/${data.id}/top?limit=50`
      ).then(res => console.log(res));
    }
  }, []);

  console.log(data);

  if (!data) return null;

  return (
    <div className='col s12 m7'>
      <h2 className='header'>Horizontal Card</h2>
      <div className='card horizontal'>
        <div className='card-image'>
          <img src={data.picture_big} />
        </div>
        <div className='card-stacked'>
          <div className='card-content'>
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
  );
};
