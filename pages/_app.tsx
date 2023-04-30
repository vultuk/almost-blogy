import './styles.css';

import { AppProps } from 'next/app';
import Head from 'next/head';
import { TemplateFeature } from '@almost-bloggy/template/feature';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to almost-bloggy!</title>
      </Head>
      <TemplateFeature>
        <Component {...pageProps} />
      </TemplateFeature>
    </>
  );
}

export default CustomApp;
