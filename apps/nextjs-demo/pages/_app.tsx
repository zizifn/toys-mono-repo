import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to nextjs-demo!</title>
      </Head>
      {/* <pre>
        {JSON.stringify(pageProps)}
      </pre> */}
      <main className="app">
        <Component {...pageProps} />
      </main>
      <p>Powered by Next.js</p>
    </>
  );
}

export default CustomApp;
