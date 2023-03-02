import React from 'react';

type Props = { items: string[] };

function DropdownComponent({ items }: Props) {
	return (
		<div className="relative w-1/3 flex">
			<div className={`p-2.5 text-gray-500 bg-white outline-none appearance-none w-full`}>
				<select className="w-full outline-none">
					{items.map((item, index) => (
						<option key={index}>{item}</option>
					))}
				</select>
			</div>
		</div>
	);
}

export default DropdownComponent;
