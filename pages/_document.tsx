import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="google-site-verification" content="cyKrx6Pn6xYH8mG2dqWRxWnO1DGvGr5uUWaImj0tJAU" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
          {/* FAVICONS */}
          <link rel="icon" href="/catIcon.png" />
          <meta name="theme-color" content="#ffffff"></meta>
        </Head>
        <body className="transition-colors duration-200 bg-white dark:bg-light-black">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
