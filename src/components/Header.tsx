import React from 'react';
import Image from 'next/image';

type Props = {};
const headers = ['Actions', 'Road Map', 'Discover', 'Community'];

const Header = (props: Props) => {
	return (
		<div className="py-8 px-8 bg-[#F7F8FC]">
			<div className="flex justify-between">
				<div className="flex h-[34px]">
					<Image src="/logo.png" alt="logo" width={34} height={34} />
					<h1 className="text-2xl font-semibold ml-2">NFT Market</h1>
				</div>
				<div>
					<ul className="flex">
						{headers.map((item, index) => (
							<li className="text-neutral-77 px-4" key={index}>
								{item}
							</li>
						))}
					</ul>
				</div>
				<div>
					<button className="h-12 w-[117px] rounded-xl text-neutral-77 border-neutral-77 border-2">
						Contact
					</button>
					<button className="h-12 w-[117px] rounded-xl  bg-blue-47 text-white ml-3">
						My account
					</button>
				</div>
			</div>
			<div className="flex flex-col h-full pt-32">
				<h4 className="text-center uppercase text-neutral-77">Non Fungible Tokens</h4>
				<h1 className="text-[80px] text-center font-bold mr-20">A new NFT</h1>
				<h1 className="text-[80px] text-center font-bold ml-20"> Experience</h1>
				<h4 className="text-center text-neutral-77 mt-8">Discover, collect and sell</h4>
			</div>
			<div className="h-20 w-[643px] bg-white mx-auto mt-10 flex justify-between items-center px-6 rounded-2xl">
				<input
					type="text"
					placeholder="Items, collections and creators"
					className="text-neutral-77 w-64"
				/>
				<div>
					<button
						id="dropdownHoverButton"
						data-dropdown-toggle="dropdownHover"
						data-dropdown-trigger="hover"
						className="text-white font-medium text-sm px-4 py-2.5 text-center inline-flex items-center border-l-2"
						type="button"
					>
						Category
						<svg
							className="w-4 h-4 ml-2"
							aria-hidden="true"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M19 9l-7 7-7-7"
							></path>
						</svg>
					</button>
					<div
						id="dropdownHover"
						className="z-10 hidden divide-y divide-gray-100 rounded-lg shadow w-44 bg-gray-700"
					>
						<ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownHoverButton">
							<li>
								<a
									href="#"
									className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
								>
									Dashboard
								</a>
							</li>
							<li>
								<a
									href="#"
									className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
								>
									Settings
								</a>
							</li>
						</ul>
					</div>
				</div>
				<Image src="/search.svg" alt="search" width={24} height={24} />
			</div>
		</div>
	);
};

export default Header;
