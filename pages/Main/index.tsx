import Head from 'next/head';
import Main from './parts/Main';
import Header from './parts/Header';

const Home = () => {
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Main />
    </div>
  );
};

export default Home;
