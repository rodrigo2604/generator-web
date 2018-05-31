import Head from 'next/head';

const Meta = ({ title = 'Generator' }) => (
  <Head>
    <title>{title}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />
    <link
      href="https://fonts.googleapis.com/css?family=Gloria+Hallelujah"
      rel="stylesheet"
    />
  </Head>
);

export default Meta;
