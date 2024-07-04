import AlbumPreviews from '@/components/Album/AlbumPreviews';
import Landing from '@/components/Landing';
import Projects from '@/components/Projects';
import SocialsLine from '@/components/SocialsLine/SocialsLine';
import React from 'react';
import Contact from '@/components/Contact';
import MainLayout from 'layouts/MainLayout';
import About from '@/components/About';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function Home() {
  return (
    <MainLayout>
      <Landing />
      <About/>
      <Projects />
      <AlbumPreviews />
      <Contact />
      <SocialsLine />
      <Analytics/>
      <SpeedInsights/>
    </MainLayout>
  );
}