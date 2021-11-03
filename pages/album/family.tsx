import React from 'react';
import dayjs from 'dayjs';
import { NextSeo } from 'next-seo';
import MainLayout from 'layouts/MainLayout';

const AlbumLayout= () => {
  
  const title= 'Family Album 👨‍👩‍👧‍👦 Snippets from my life in Saigon';
  const publishedAt= '2021-06-02';
  const summary= "Looking back the years in my hometown";
  const readingTime= '3 min read';

  return (
    <MainLayout footerClassName="max-w-2xl">
      <NextSeo
        title={`${title} - Quan Dinh`}
        description={summary}
        openGraph={{
          title: `${title} - Quan Dinh`,
          type: 'article',
          description: summary,
          images: [{ url: `https://portfolio-quandinh04.vercel.app/Logo.PNG}` }],
          article: {
            publishedTime: publishedAt,
            authors: ['https://portfolio-quandinh04.vercel.app/'],
          },
        }}
      />
      <div className="relative w-full max-w-2xl m-auto">
        <div className="relative">
          <div className="pt-10">
            <h1 className="text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
              {title}
            </h1>
            <div className="flex justify-between pt-4 pb-2 text-sm text-gray-500 dark:text-gray-400">
              <span>{dayjs(new Date(publishedAt)).format('MMMM D, YYYY')}</span>
              <span>{readingTime}</span>
            </div>
            <hr className="pb-8 " />
            <div className="w-full prose dark:prose-dark max-w-none">
              {''}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default AlbumLayout
;
