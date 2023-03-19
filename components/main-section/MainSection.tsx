import React from 'react';
import HeaderText from '../texts/HeaderText';
import ProjectIntro from '../texts/ProjectIntro';

const MainSection = () => {
	return (
		<div className="px-20 w-full h-56 flex flex-row items-start justify-between mt-12 border-3 pb-80">
			<div className="">
				<HeaderText text="Project experience" />
				<ProjectIntro
					duration="2023.02 ~ (진행중)"
					projectName="Zeroact "
					desc={`React와 같은 프론트엔드 라이브러리를 모방하여 개발한 라이브러리입니다. 
					모든 기능이 들어가 있지는 않지만, 근본적이고 핵심적인 기술을들 작성하려고 하였습니다. 
					JSX를 이용하여 DOM element를 만들고, 렌더링을 시키는 라이브러리입니다.
					
					Hooks와, fiber tree, reconciliation 등을 집중적으로 학습하려고 노력하였습니다. 
					
					`}
					stack={['typescript']}
					links={['https://github.com/akdlsz21/zeroact']}
				/>
				<ProjectIntro
					duration="2023.01 ~ "
					projectName="미로와 최단경로 시각화 프로그램 "
					desc={`길찾기 알고리즘을 시각적으로 표현한 웹프로그램입니다. 
					bfs, dfs와 함께, A*, Dijkstra algorithm을 이용하여 만들었습니다. 
					길찾기 시에, 재귀적 미로 생성기능을 도입하였습니다. 
					각 알고리즘의 차이점을 명확하게 표현을 하고, 그 근본적인 작동원리를 표현하려고 노력을 하였습니다. 
					
					비교적 복잡한 UI로직을 매끄럽게 렌더링하기 쉽지 않았습니다. State를 변경시키며 일어나는 re-render를 최소화 시켜,
					결과는 같지만 코드의 로직은 더욱 쉽게 만들려고 하였습니다. 
					`}
					stack={['react', 'typescript']}
					links={['https://github.com/akdlsz21/path_finding_visualizer']}
				/>
				<ProjectIntro
					duration="2022.11 ~ 2022.12"
					projectName="CLASS4989"
					desc={`Class101의 기능을 모방하여 개발한 웹프로그램입니다. Nextjs 를 통해 만들어져, SSR, SSG등과 같은 기술을 이용하여 만들었습니다. 
					프로그램의 전체적인 기획을 맡았습니다. 매일 일과시간 시작전에, 어떠한 컴포넌트를 개발을 할지, 어떻게 접근하면 좋을지에 대해서 의견을 공유하였습니다. 프론트엔드 코드에 나타나는 대부분의 버그에 대한 디버깅을 진행을 하였습니다.
					기본적인 fetch api를 바탕으로, discord webhook과 mongoDB등을 연결하여 api의 오류에 대한 정보를 저장하고, 개발자에게 알림이 가도록 만들어져 있습니다. 

					프론트팀의 팀장으로 역할을 맡아, 의사소통의 중요성에 대해서 많이 고민하게 되었습니다. 
					각 팀원간의 적절한 작업량 배포와, 역량에 따라서 받을 수 있는 스트레스를 관리하기 위해 생각을 많이 하게 되었습니다. 

					처음부터 기획을 맡아 개발을 진행하다보니, 주먹구구식으로의 개발은 중소규모이상의 프로그램에서는 유효하지 않았다는것을 깨달았습니다.
					직접적인 코딩의 시간을 줄여서라도, 제대로 된 아키텍쳐와 기획을 하고, 그것을 바탕으로 개발을 진행해야한다는 것을 인지시켜준 프로젝트였습니다.
					`}
					stack={['react', 'typescript', 'nextjs']}
					links={[
						'https://github.com/codestates-seb/seb40_main_008/tree/dev-fe',
					]}
				/>
				<ProjectIntro
					duration="2022.06 ~ "
					projectName="KEEWE"
					desc={`기사 및 칼럼을 읽고, 자신의 의견을 작성하여 남들과 공유할 수 있는 React-native 기반의 플랫폼입니다. 
					매주 기획자와 백엔드, 프론트엔드간의 회의가 진행이 되고, 저는 여기서 각 팀원들이 어떠한 기능을 구현해줬으면 하는지와, 어떻게 구현이 되었으면 하는지에 대해서 의견을 공유하고 있습니다. 
					그리고 프론트에 있어서 버그가 났을때, 우선적으로 디버깅을 진행하고 있습니다. 
					메인 브랜치에 머지하기 전에, 화상회의를 통해 코드 리뷰를 진행하고 있고, 지나치게 불필요하거나 비효율적인 코드에 대한 의견을 제시하고 있습니다. 

					실제 서비스화를 목표로 두고 있기 때문에, UX에 대해서 많은 고민을 하고 있습니다. 남들이 모르는 버그여도, 혹은 소수의 사용자들만이 겪게될 버그여도, 팀원들에게 보고를 하고 조치를 취하는것을 중요시하고 있습니다.


					(4월 중순에 실제 서비스화 예정)`}
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
					desc={`정렬 알고리즘을 시각적으로 보여주는 프로그램입니다. 
					일반적인 Bubble sort, Merge sort등과 같이 배열을 정렬 할 때 실시간으로 어떠한 영역이 어떻게 돌아가고 있는지를 자세히 보여주려고 노력을 하였고, 각 정렬을 위해 어떠한 요소가 다른 요소와 어떻게 비교가 되고 있는지를 나타내었습니다. 

					비효율적인 알고리즘의 결과로 나온 메모리누수로 인해 떨어진 퍼포먼스를 개선시켰습니다.
					알고리즘은 더욱 효율적이고, 클라이언트단에서 필요한 메모리는 적어졌습니다. 
					`}
					stack={['react', 'typescript']}
					links={['https://github.com/akdlsz21/sorting_visualizer_v2']}
				/>
				<ProjectIntro
					duration="2021.08 ~ 2022.03"
					projectName="TOO-GOOD-TO-GO"
					desc={`마트에서 영업시간 종료임박에 따라 땡처리하는것과 같이, 일반적인 음식점들도 저렴하게 음식을 판매할 수 있도록 하는 SPA 웹 프로그램입니다. 
					의사결정에 참여를 거의 하지 않았습니다. 
					UI 컴포넌트 위주로 개발을 하였고, 기능적인 부분에서 크게 참여하지 않았습니다. 

					첫 협동 프로젝트에서 의사소통과, 협업에 대해서 많은것을 배우게 되었습니다. 
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
					<p className="text-gray-800 mb-2 ">2023 중앙대 경영학부 졸업</p>
					<p className="text-gray-800 mb-2 ">영어 능통</p>
				</div>
			</div>
		</div>
	);
};

export default MainSection;
