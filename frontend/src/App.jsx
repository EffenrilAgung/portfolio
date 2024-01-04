import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Component/templates/nav/Navbar';
import Homepage from './Component/pages/Homepage';
import Footer from './Component/templates/footer/Footer';
import About from './Component/pages/About';
import Credential from './Component/pages/Credential';
import Contact from './Component/pages/Contact';
import Projects from './Component/pages/Projects';
function App() {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route index path="/" element={<Homepage />} />
					<Route index path="/about" element={<About />} />
					<Route index path="/credential" element={<Credential />} />
					<Route index path="/contact" element={<Contact />} />
					<Route index path="/projects" element={<Projects />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</>
	);
}

export default App;
