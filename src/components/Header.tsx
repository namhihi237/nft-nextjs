/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const DropdownComponent = dynamic(() => import('@/components/Dropdown'), {});
type Props = {};
const headers = ['Actions', 'Road Map', 'Discover', 'Community'];
const itemDropdown = ['Category', 'NodeJS', 'Browser', 'React'];

const Header = (props: Props) => {
	return (
		<div className="py-8 px-8 bg-[#F7F8FC]">
			<div className="flex justify-between">
				<a href="">
					<div className="flex h-[34px]">
						<Image src="/logo.png" alt="logo" width={34} height={34} />
						<h1 className="text-2xl font-semibold ml-2">NFT Market</h1>
					</div>
				</a>
				<div>
					<ul className="flex">
						{headers.map((item, index) => (
							<li className="text-neutral-77 px-4 hover:text-cyan-500 transition-all" key={index}>
								<a href="">{item}</a>
							</li>
						))}
					</ul>
				</div>
				<div>
					<button className="h-12 w-[117px] rounded-xl text-neutral-77 border-neutral-77 border-2 hover:bg-neutral-200">
						Contact
					</button>
					<button className="h-12 w-[117px] rounded-xl  bg-blue-47 text-white ml-3 hover:bg-blue-600">
						My account
					</button>
				</div>
			</div>
			<div className="flex flex-col h-full pt-32">
				<h4 className="text-center uppercase text-neutral-77">Non Fungible Tokens</h4>
				<div className="flex w-full justify-center">
					<h1 className="text-[60px] font-bold mr-2">A new NFT</h1>
					<img src="/c-top.png" alt="c-top" className="w-10 h-16" />
				</div>
				<div className="flex w-full justify-center">
					<img src="/c-down.png" alt="c-top" className="w-10 h-16" />
					<h1 className="text-[60px] text-center font-bold"> Experience</h1>
				</div>
				<h4 className="text-center text-neutral-77 mt-8">Discover, collect and sell</h4>
			</div>
			<div className="h-20 w-[643px] bg-white mx-auto mt-10 flex justify-between items-center px-6 rounded-2xl">
				<input
					type="text"
					placeholder="Items, collections and creators"
					className="text-neutral-77 w-1/2 py-2 pl-2 pr-10 outline-none border-r-[1px]"
				/>
				<DropdownComponent items={itemDropdown} />
				<button>
					<Image src="/search.svg" alt="search" width={24} height={24} />
				</button>
			</div>
			<div className="flex w-full mt-24 justify-center ">
				<div className="flex w-1/3 justify-between">
					<Image src="/ritter-sport.png" alt="search" width={85} height={45} />
					<Image src="/adidas.png" alt="search" width={85} height={45} />
					<Image src="/nike.png" alt="search" width={85} height={45} />
					<Image src="/new-holland.png" alt="search" width={85} height={45} />
				</div>
			</div>
		</div>
	);
};

export default Header;
