import React from 'react';

interface Props {
	duration: string;
	projectName: string;
	desc: string;
	stack: string[];
	links: string[];
}

const ProjectIntro = ({ duration, projectName, desc, stack, links }: Props) => {
	return (
		<div className=" flex flex-col items-start justify-start">
			<div className="flex flex-row items-start justify-start w-full mt-12 h-full ">
				<div className="w-44 h-full pt-1 ">
					<h2 className="text-gray-700 text-sm">{duration}</h2>
				</div>
				<div className="w-full h-full flex-flex-col items-start justify-start">
					<h2 className="text-gray-700  mb-4">{projectName}</h2>
					<p className="whitespace-pre-line text-sm text-gray-600">
						{desc}
					</p>
					<div className="mt-2 flex flex-row items-start justify-start gap-2">
						{stack.map((item, idx) => (
							<p className="text-gray-700" key={idx}>
								{item}
							</p>
						))}
					</div>
					<div className="mt-2 flex flex-row items-start justify-start gap-2">
						{links.map((item, idx) => (
							<a href={item} className="text-gray-700 text-sm" key={idx}>
								{item.slice('https://'.length)}
							</a>
						))}
					</div>
					<div className="w-full pt-1 mt-12 flex flex-row items-center justify-center">
						<h2 className="text-gray-700 text-sm whitespace-normal">
							{` . `.repeat(5)}
						</h2>
					</div>
				</div>
			</div>
			{/* create a line with three dots to seperate content */}
		</div>
	);
};

export default ProjectIntro;
