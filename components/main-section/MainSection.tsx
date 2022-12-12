import React from 'react';
import HeaderText from '../texts/HeaderText';
import ProjectIntro from '../texts/ProjectIntro';

const MainSection = () => {
	return (
		<div className="px-20 w-full h-56 flex flex-row items-start justify-between mt-12 border-3 pb-80">
			<div className="">
				<HeaderText text="Project experience" />
				<ProjectIntro
					duration="2022.11 ~ 2022.12"
					projectName="CLASS4989"
					desc={`프로그램 프론트엔드의 전체적인 기획을 맡음. 
매일 일과시간 전, 어떠한 컴포넌트를 개발을 할지, 개발을 어떻게 하면 좋을지에 대해서 회의를 함. 
프론트 코드에 일어나는 대부분의 버그에 대한 디버깅을 진행을 함.`}
					stack={['react', 'typescript', 'nextjs']}
					links={[
						'https://github.com/codestates-seb/seb40_main_008/tree/dev-fe',
					]}
				/>
				<ProjectIntro
					duration="2022.06 ~ "
					projectName="KEEWE"
					desc={`기사 및 칼럼을 읽고 자신의 의견을 작성하여 남들과 공유할 수 있는 플랫폼
					한 주의 마지막에 백엔드와 기획자들끼리의 회의를 통해, 각 팀원들에게 어떠한 일을 배분해줄지에 대한 의견을 제시함.
					코드에 대한 리뷰를 진행함.
					코드를 작성하기 전에, 팀원들과 함께 어떠한 식으로 개발을 할지에 대해서 이야기를 진행함.
					메인 브랜치에 머지하기 전, 화상회의를 통해 코드를 리뷰를 함. 지나치게 불필요하거나 불효율적인 코드에 대한 의견을 제시함.`}
					stack={[
						'react',
						'typescript',
						'nextjs',
						'react-native',
						'react-query',
					]}
					links={['https://github.com/CCC-org/keewe-app']}
				/>
				<ProjectIntro
					duration="2022.04 ~ "
					projectName="VISUAL SORTING ALGORITHM"
					desc={`정렬 알고리즘을 시각적으로 보여주는 웹 프로그램
					프로그램의 기획부터 작성.
					브라우저가 비동기적인 코드를 처리하는 방법에 대한 이해도가 증가함
					프론트엔드 코드를 더 세심하게 분석할 수가 있게 됨.
					코드를 작성을 할때, 아웃풋을 위한 댓가로 무엇을 치뤄야 하는지에 대해서 이해하게 됨.`}
					stack={['react', 'typescript']}
					links={['https://github.com/akdlsz21/sorting_visualizer_v2']}
				/>
				<ProjectIntro
					duration="2021.08 ~ 2022.03"
					projectName="TOO-GOOD-TO-GO"
					desc={`식품판매점에서 영업시간 마감전에, 가격을 할인하여 소비자들에게 판매하고 홍보할 수 있는 웹 프로그램
					프론트엔드 독학후 첫 프로젝트.
					프로그램 개발 의사결정에 참여 안함.
					UI 컴포넌트 위주로 개발.
					`}
					stack={['react', 'typescript']}
					links={['https://github.com/KangHayeonn/Too-Good-To-Go']}
				/>
			</div>
			<div className="h-full w-80 flex flex-col ml-8 justify-start ">
				<HeaderText text="Languages" />
				<div className="flex flex-col items-start justify-start pt-5">
					<p className="text-gray-800 mb-2 ">JAVASCRIPT</p>
					<p className="text-gray-800 mb-2 ">TYPESCRIPT</p>
					<div className="w-full pt-1 mt-2 mb-6 flex flex-row items-center justify-center">
						<h2 className="text-gray-700 text-sm whitespace-normal">
							{` . `.repeat(5)}
						</h2>
					</div>
				</div>
				<HeaderText text="framework" />
				<div className="flex flex-col items-start justify-start pt-5">
					<p className="text-gray-800 mb-2 ">REACT</p>
					<p className="text-gray-800 mb-2 ">REACT-NATIVE</p>
					<p className="text-gray-800 mb-2 ">NEXT</p>
					<div className="w-full pt-1 mt-2 mb-6 flex flex-row items-center justify-center">
						<h2 className="text-gray-700 text-sm whitespace-normal">
							{` . `.repeat(5)}
						</h2>
					</div>
				</div>
				<HeaderText text="environment" />
				<div className="flex flex-col items-start justify-start pt-5">
					<p className="text-gray-800 mb-2 ">LINUX</p>
					<p className="text-gray-800 mb-2 ">C</p>
					<p className="text-gray-800 mb-2 ">PYTHON</p>
					<div className="w-full pt-1 mt-2 mb-6 flex flex-row items-center justify-center">
						<h2 className="text-gray-700 text-sm whitespace-normal">
							{` . `.repeat(5)}
						</h2>
					</div>
				</div>
				<HeaderText text="education & etc" />
				<div className="flex flex-col items-start justify-start pt-5">
					<p className="text-gray-800 mb-2 ">
						2023 중앙대 경영학부 졸업예정
					</p>
					<p className="text-gray-800 mb-2 ">영어 능통</p>
				</div>
			</div>
		</div>
	);
};

export default MainSection;
