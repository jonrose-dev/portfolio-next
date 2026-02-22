import { Html, Head, Main, NextScript } from 'next/document';

const MyDocument = () => (
  <Html lang="en">
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inconsolata&display=swap"
        rel="stylesheet"
      />
      <meta name="description" content="Jon Rose - Senior Director of Engineering passionate about writing performant and elegant code for web applications and microservices." />
      <link rel="icon" type="image/png" href="images/JR.png" />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default MyDocument;
