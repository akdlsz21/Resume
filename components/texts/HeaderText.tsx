import React from 'react';

interface HeaderTextProps {
	text: string;
}
// how to write a slash

const HeaderText = ({ text }: HeaderTextProps) => {
	return (
		<div className="flex flex-col items-start justify-center pb-4">
			<h2 className="text-gray-500 text-xl pb-2 flex flex-row items-center justify-center">
				{'# ' + text.toUpperCase()}
			</h2>
			<div className="flex flex-row items-center justify-center w-full">
				<div className="border-2 border-gray-300 w-full h-1"></div>
				<div className="border-2 border-gray-400 w-12 h-1"></div>
			</div>
		</div>
	);
};

export default HeaderText;
