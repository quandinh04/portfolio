import React from 'react';
import dayjs from 'dayjs';
import { NextSeo } from 'next-seo';
import MainLayout from 'layouts/MainLayout';
import AlbumGrid from 'components/Album/album-photos/AlbumGrid'
import {stella, english, ozam, steam, excellaca} from '../../components/Album/album-photos/activitiesPhotos'

const AlbumLayout= () => {
  
  const title= 'Clubs & Others';
  const publishedAt= '09-10-2021';
  const summary= "Life outside the classroom";
  const readingTime= '2 min read';
 
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
              <span>{dayjs(new Date(publishedAt)).format('ddd, DD MMM YYYY')}</span>
              <span>{readingTime}</span>
            </div>
            <hr className="pb-8 " />
            <div className="w-full prose dark:prose-dark max-w-none">
              {''}
              <h3>Excellaca</h3>
              <AlbumGrid photoSource={excellaca}/>
              <h3>STEAM PTNK: Science Club</h3>
              <AlbumGrid photoSource={steam}/>
              <h3>Creativ: OZAM!</h3>
              <AlbumGrid photoSource={ozam}/>
              <h3>Núi Tượng Trip / KID VN Thrift Store</h3>
              <AlbumGrid photoSource={stella}/>
              <h3>English National Contest Team</h3>
              <AlbumGrid photoSource={english}/>  
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default AlbumLayout;
