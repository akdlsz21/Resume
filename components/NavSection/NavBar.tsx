import React from 'react';
import '../../app/globals.css';
import { FaPhoneAlt } from 'react-icons/fa';
import {
	AiOutlineMail,
	AiFillGithub,
	AiFillMediumCircle,
} from 'react-icons/ai';
import Link from 'next/link';
const NavBar = () => {
	return (
		// set a div with max width with a border 1px solid red div
		<div className="px-20 h-52 flex flex-row align-middle justify-between">
			<div className="flex flex-row align-top justify-start h-full w-full">
				<div className="w-11 h-3/4 bg-gray-700 flex flex-col justify-center items-center">
					<div className="relative w-12 flex flex-row items-center justify-center">
						<FaPhoneAlt color="white" className="" />
						<p className="ml-5 left-8 absolute top-[-1] w-52 font-semibold text-gray-500 ">
							010 5545 3287
						</p>
					</div>
					<div className="relative w-12 flex flex-row items-center justify-center">
						<AiOutlineMail color="white" size={22} className="mt-3" />

						<p className="ml-5 left-8 absolute top-3 w-52 font-semibold text-gray-500 ">
							akdlsz21@gmail.com
						</p>
					</div>
					<div className="relative w-12 flex flex-row items-center justify-center">
						<AiFillGithub color="white" size={22} className="mt-3" />

						<Link
							href={'https://github.com/akdlsz21'}
							className="ml-5 left-8 absolute top-3 w-52 font-semibold text-gray-500 "
						>
							github.com/akdlsz21
						</Link>
					</div>
					<div className="relative w-12 flex flex-row items-center justify-center">
						<AiFillMediumCircle
							color="white"
							size={22}
							className="mt-3"
						/>

						<Link
							href={'https://medium.com/@akdlsz21'}
							className="ml-5 left-8 absolute top-3 w-52 font-semibold text-gray-500 "
						>
							medium.com/@akdlsz21
						</Link>
					</div>
				</div>
			</div>
			<div className="h-full w-64 flex flex-row items-center justify-center">
				<div className="flex flex-col items-start justify-around h-full pt-12">
					<div className="flex flex-col items-start justify-center ">
						<span className="font-semibold text-4xl text-gray-700  tracking-widest ">
							JI-HOON
						</span>
						<span className=" text-4xl text-gray-500">CHOI</span>
					</div>
					<span className="font-semibold text-gray-700">
						Frontend Developer
					</span>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
