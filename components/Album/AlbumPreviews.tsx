import React from 'react';
import SectionTitle from '../SectionTitle';
import AlbumPreview from './AlbumPreview';

const AlbumPreviews = () => {
  return (
    <section className="pt-20">
      <SectionTitle isSecondary>Life Album</SectionTitle>
      <div>
      <AlbumPreview
          publishedAt={new Date('2021-09-05')}
          slug="schoolActivities"
          summary="Life outside the classroom"
          title="Clubs & Others"
        />
        <AlbumPreview
          publishedAt={new Date('2021-06-02')}
          slug="saigon"
          summary="Looking back the years in my hometown"
          title="Life in Saigon 🛵☕👨‍👩‍👧‍👦"
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
