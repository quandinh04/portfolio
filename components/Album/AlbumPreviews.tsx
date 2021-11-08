import React from 'react';
import SectionTitle from '../SectionTitle';
import AlbumPreview from './AlbumPreview';

const AlbumPreviews = () => {
  return (
    <section className="pt-20">
      <SectionTitle isSecondary>Life Album</SectionTitle>
      <div>
      <AlbumPreview
          publishedAt={new Date('09/10/2021')}
          slug="activities"
          summary="Life outside the classroom"
          title="Clubs & Others"
        />
        <AlbumPreview
          publishedAt={new Date('06/22/2021')}
          slug="saigon"
          summary="Looking back the years in my hometown"
          title="Life in Saigon 🛵☕👨‍👩‍👧‍👦"
        />
        <AlbumPreview
          publishedAt={new Date('05/19/2021')}
          slug="travel"
          summary="Eye-opening experiences (before Covid of course :>)"
          title="Travel Album 🏍️✈️🚗"
        />
      </div>
    </section>
  );
};

export default AlbumPreviews;
