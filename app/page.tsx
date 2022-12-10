import MainSection from '../components/main-section/MainSection';
import MidIntro from '../components/MidSection/MidIntro';
import NavBar from '../components/NavSection/NavBar';

export default function Home() {
	return (
		<>
			<NavBar />
			<MidIntro />
			<MainSection />
		</>
	);
}
