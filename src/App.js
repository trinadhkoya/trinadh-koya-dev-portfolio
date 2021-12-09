import './App.css'
import './assets/css/fonts.css'
import { NavBar } from './ui-kit'
import LandingIntro from './screens/intro/LandingIntro'
function App() {
	return (
		<div className="App">
			<NavBar />
			<LandingIntro />
		</div>
	)
}

export default App
