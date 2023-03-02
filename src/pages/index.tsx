import Head from 'next/head';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<>
			<Head>
				<title>NFT</title>
				<meta name="description" content="NFT landing page" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<div>
					<h1 className="text-3xl font-bold underline">Hello world!</h1>
				</div>
			</main>
		</>
	);
}
