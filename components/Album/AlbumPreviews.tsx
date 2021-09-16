import React from 'react';
import SectionTitle from '../SectionTitle';
import AlbumPreview from './AlbumPreview';

const AlbumPreviews = () => {
  return (
    <section className="pt-20">
      <SectionTitle isSecondary>Life Album</SectionTitle>
      <div>
      <AlbumPreview
          publishedAt={new Date('2021-07-05')}
          slug="schoolActivities"
          summary="Ways to kill time outside of school"
          title="Clubs & Others"
        />
        <AlbumPreview
          publishedAt={new Date('2021-06-02')}
          slug="family"
          summary="Looking back the years in my hometown"
          title="Family Album 👨‍👩‍👧‍👦 Snippets from my life in Saigon"
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
