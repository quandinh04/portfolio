import AlbumPreview from '@/components/Album/AlbumPreview';
import { FrontMatter } from '@/types/interfaces';
import MainLayout from 'layouts/MainLayout';
import React from 'react';

interface Props {
  posts: FrontMatter[];
}

const AlbumPage = ({ posts }: Props) => {
  const sortedPosts = posts.sort(
    (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
  );
  return (
    <MainLayout footerClassName="max-w-4xl">
      <div className="w-full max-w-4xl m-auto">
        <h1 className="pt-5 pb-5 text-4xl font-bold border-b border-gray-200 dark:border-gray-700 dark:text-white">
          Blog
        </h1>
        <section>
          <AlbumPreview
            publishedAt={new Date('2021-07-5')}
            slug="schoolActivities"
            summary="Ways to kill time outside of school"
            title="Clubs & Others"
          />
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
        </section>
      </div>
    </MainLayout>
  );
};

export default AlbumPage;
