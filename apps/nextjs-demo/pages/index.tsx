import styles from './index.module.css';
import Head from 'next/head';

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div id='james' className={styles.page}>
      <Head>
        <title>james</title>
      </Head>
      <div className="wrapper">
        <div className="container">
          <div id="welcome">
            <h1>
              <span> Hello there, </span>
              Welcome nextjs-demo !!!! 👋
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
