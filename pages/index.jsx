import Head from 'next/head';
import Header from '../components/Header';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>TopRank</title>
        <meta name="description" content="TopRank - Discover the best rankings" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="p-4">
        <h1 className="text-3xl font-bold text-center">Welcome to TopRank</h1>
        <p className="mt-4 text-center">Explore the top rankings across various categories.</p>
      </main>
    </div>
  );
}
