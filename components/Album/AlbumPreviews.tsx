import React from 'react';
import SectionTitle from '../SectionTitle';
import AlbumPreview from './AlbumPreview';

const AlbumPreviews = () => {
  return (
    <section className="pt-20">
      <SectionTitle isSecondary>Life Album</SectionTitle>
      <div>
        <AlbumPreview
          publishedAt={new Date('2021-06-2')}
          slug="family"
          summary="Snippets from my life in Saigon"
          title="Family Album 👨‍👩‍👧‍👦 Snippets from my life"
        />
        <AlbumPreview
          publishedAt={new Date('2021-05-19')}
          slug="travel"
          summary="Eye-opening experiences (before Covid of course :>)"
          title="Travel Album 🏍️✈️🚗"
        />
      </div>
    </section>
  );
};

export default AlbumPreviews;
