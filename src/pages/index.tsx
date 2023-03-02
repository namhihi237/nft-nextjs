import Head from 'next/head';
import Header from '@/components/Header';

export default function Home() {
	return (
		<>
			<Head>
				<title>NFT</title>
				<meta name="description" content="NFT landing page" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div>
				<Header />
			</div>
		</>
	);
}
