import AlbumPreviews from '@/components/Album/AlbumPreviews';
import Landing from '@/components/Landing';
import Projects from '@/components/Projects';
import SocialsLine from '@/components/SocialsLine/SocialsLine';
import React from 'react';
import Contact from '@/components/Contact';
import MainLayout from 'layouts/MainLayout';

export default function Home() {
  return (
    <MainLayout>
      <Landing />
      <Projects />
      <AlbumPreviews />
      <Contact />
      <SocialsLine />
    </MainLayout>
  );
}