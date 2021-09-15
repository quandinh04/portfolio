import '@/styles/globals.css';
import PlausibleProvider from 'next-plausible';
import { DefaultSeo } from 'next-seo';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/dist/client/router';
import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Hydrate } from 'react-query/hydration';

const meta = {
  description: 'A student aiming to do great things',
  title: 'Quan Dinh',
  image: '/Logo.PNG',
};

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  const router = useRouter();

  return (
    <ThemeProvider attribute="class">
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <DefaultSeo
            title={meta.title}
            description={meta.description}
            openGraph={{
              type: 'website',
              description: meta.description,
              title: meta.title,
              site_name: 'Quan Dinh',
              images: [{ url: `https://portfolio-quandinh04.vercel.app/${meta.image}` }],
            }}
            canonical={`https://portfolio-quandinh04.vercel.app/${router.asPath}`}
            twitter={{
              handle: '@thequan2004',
              site: '@thequan2004',
              cardType: 'summary_large_image',
            }}
          />
          <PlausibleProvider
            domain="https://portfolio-quandinh04.vercel.app/"
            selfHosted
          >
            <Component {...pageProps} />
          </PlausibleProvider>
        </Hydrate>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ThemeProvider>
  );
}
export default MyApp;
