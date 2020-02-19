import React from 'react';

import { GenreCollection } from '../../components/genre-collection/genre-collection.component';

export const HomePage = () => {
  return (
    <>
      <h3>All genres</h3>
      <GenreCollection />
      <h3>Search by</h3>
    </>
  );
};
