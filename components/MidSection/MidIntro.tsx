import React from 'react';
import HeaderText from '../texts/HeaderText';

const MidIntro = () => {
	return (
		<div className=" flex flex-row items-center justify-center w-full mt-12 ">
			<div className=" px-20 w-4/5  bg-gray-100 h-56 flex flex-row align-middle justify-between">
				<div className=" h-full w-full mt-4">
					<HeaderText text="Introduction" />
					<p className="text-gray-500 text-base whitespace-pre-line">
						{`21년 4월을 시작으로 개발을 독학하였습니다.
						사용자 경험을 중심으로 생각을 하며 개발을 진행하고 있습니다.
						주로 협력을 통한 프로젝트를 개발하였습니다.
						최근에는 프론트 팀의 리더로서 프로젝트를 진행하였습니다.
						`}
					</p>
				</div>
			</div>
			<div className="h-full w-1/5"></div>
		</div>
	);
};

export default MidIntro;
