import React from 'react';
import HeaderText from '../texts/HeaderText';

const MidIntro = () => {
	return (
		<div className=" flex flex-row items-center justify-center w-full mt-12 ">
			<div className=" px-20 w-4/5  bg-gray-100 pb-4 flex flex-row align-middle justify-between">
				<div className=" h-full w-full mt-4">
					<HeaderText text="Introduction" />
					<p className="text-gray-500 text-base whitespace-pre-line mt-4">
						{`여러 프로젝트를 해왔던 저는, 팀 내에서 실력이 제일 안 좋았던 개발자였던적도 있었습니다. 그리고 마지막 프로젝트에서는 경험이 제일 풍부한 경험자로 프로젝트를 완성하였습니다. 기획 단계에서부터 디버깅까지, 전 프로세스를 다 책임지면서 각 팀원에게 작업량을 배분해주기도 하였습니다.

그리고 그동안 여러 팀프로젝트와 솔로 프로젝트를 해오면서 깨닫게 된것은, 무엇을 해야 할지는 엔드유저의 경험을 위주로 생각하는것. 그리고 어떻게 할지는 팀원간의 철저한 토의와 논리적 사고로 철저하게 대비해야 한다는것을 깨달았습니다.

앞으로 같이 일하게 될 팀을 위해서 빠르게 성장할 수 있는 개발자가 되겠습니다. 그리고 문제해결을 위해 깊게 고민하고 철저하게 솔루션을 탐색할 수 있는 개발자가 되겠습니다.
						`}
					</p>
				</div>
			</div>
			<div className="h-full w-1/5"></div>
		</div>
	);
};

export default MidIntro;
