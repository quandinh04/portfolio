import AlbumPreview from '@/components/Album/AlbumPreview';
import MainLayout from 'layouts/MainLayout';
import React from 'react';

const AlbumPage = () => {
  return (
    <MainLayout footerClassName="max-w-4xl">
      <div className="w-full max-w-4xl m-auto">
        <h1 className="pt-5 pb-5 text-4xl font-bold border-b border-gray-200 dark:border-gray-700 dark:text-white">
          Album
        </h1>
        <section>
          <AlbumPreview
            publishedAt={new Date('10/09/2021')}
            slug="activities"
            summary="Life outside of classroom"
            title="Clubs & Others"
          />
          <AlbumPreview
            publishedAt={new Date('06/22/2021')}
            slug="saigon"
            summary="Snippets from my life in Saigon"
            title="Family Album 👨‍👩‍👧‍👦 Snippets from my life"
          />
          <AlbumPreview
            publishedAt={new Date('05/19/2021')}
            slug="travel"
            summary="Eye-opening experiences (before Covid of course :>)"
            title="Travel Album 🏍️✈️🚗"
          />
        </section>
      </div>
    </MainLayout>
  );
};

export default AlbumPage;
