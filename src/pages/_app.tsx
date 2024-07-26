import React from 'react';
import { AppProps } from 'next/app';
import '../app/globals.css';
import Layout from '@app/components/Layout/Layout';


const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;